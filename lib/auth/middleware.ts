import { NextResponse } from 'next/server';

/**
 * 認証ミドルウェア
 *
 * 管理画面APIのリクエストに対して認証をチェックします。
 *
 * 使い方:
 * ```typescript
 * export async function DELETE(request: Request) {
 *   const authError = await requireAuth(request);
 *   if (authError) return authError;
 *   // 認証済みの処理...
 * }
 * ```
 *
 * セキュリティ改善点:
 * - 現在は簡易的なパスワード認証
 * - 将来的にはJWT/セッションベースに移行推奨
 * - HTTPSを使用すること（本番環境必須）
 */

/**
 * Authorizationヘッダーから認証情報を検証
 *
 * 期待するヘッダー形式:
 * Authorization: Bearer <password>
 */
export async function requireAuth(
  request: Request
): Promise<NextResponse | null> {
  const authHeader = request.headers.get('authorization');

  // Authorizationヘッダーがない場合
  if (!authHeader) {
    return NextResponse.json(
      { error: '認証が必要です。Authorizationヘッダーを設定してください。' },
      { status: 401 }
    );
  }

  // Bearer トークンの形式チェック
  const [type, token] = authHeader.split(' ');
  if (type !== 'Bearer' || !token) {
    return NextResponse.json(
      { error: '不正な認証形式です。"Bearer <password>" の形式で指定してください。' },
      { status: 401 }
    );
  }

  // 環境変数からパスワードを取得
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  if (!ADMIN_PASSWORD) {
    console.error('ADMIN_PASSWORD is not set in environment variables');
    return NextResponse.json(
      { error: 'サーバー設定エラー' },
      { status: 500 }
    );
  }

  // パスワード検証
  if (token !== ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: '認証に失敗しました' },
      { status: 403 }
    );
  }

  // 認証成功
  return null;
}

/**
 * 開発環境用の認証バイパス
 *
 * ⚠️ 本番環境では絶対に使用しないこと
 */
export function bypassAuthInDev(): boolean {
  return process.env.NODE_ENV === 'development' && process.env.BYPASS_AUTH === 'true';
}
