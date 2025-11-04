import { NextResponse } from 'next/server';

/**
 * シンプルなメモリベースRate Limiter
 *
 * 本番環境の推奨事項:
 * - Redis等の永続化ストレージを使用
 * - 複数サーバー間で共有可能な仕組み
 * - より高度なアルゴリズム（Token Bucket等）
 *
 * 現在の制限:
 * - サーバー再起動でリセット
 * - 単一サーバーインスタンスのみ対応
 */

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

/**
 * Rate Limitをチェック
 *
 * @param identifier クライアント識別子（IPアドレス等）
 * @param limit 制限回数
 * @param windowMs 時間ウィンドウ（ミリ秒）
 * @returns 制限超過の場合はエラーレスポンス、許可の場合はnull
 */
export function rateLimit(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60000 // デフォルト: 1分間に10回
): NextResponse | null {
  const now = Date.now();
  const record = store[identifier];

  // 初回アクセスまたはウィンドウ期限切れ
  if (!record || now > record.resetTime) {
    store[identifier] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return null;
  }

  // 制限超過
  if (record.count >= limit) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return NextResponse.json(
      {
        error: 'リクエスト数が制限を超えました。しばらく待ってから再試行してください。',
        retryAfter,
      },
      {
        status: 429,
        headers: {
          'Retry-After': retryAfter.toString(),
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': new Date(record.resetTime).toISOString(),
        },
      }
    );
  }

  // カウント増加
  record.count += 1;
  return null;
}

/**
 * リクエストからクライアント識別子を取得
 *
 * 優先順位:
 * 1. X-Forwarded-For ヘッダー（プロキシ経由）
 * 2. X-Real-IP ヘッダー
 * 3. フォールバック識別子
 */
export function getClientIdentifier(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // フォールバック: User-Agentのハッシュ等
  return 'unknown';
}

/**
 * クリーンアップ: 期限切れのレコードを削除
 *
 * 定期的に実行することでメモリリークを防ぐ
 */
export function cleanupExpiredRecords() {
  const now = Date.now();
  for (const key in store) {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  }
}

// 5分ごとにクリーンアップ
setInterval(cleanupExpiredRecords, 5 * 60 * 1000);
