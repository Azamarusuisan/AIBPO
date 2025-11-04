import { NextResponse } from 'next/server';

/**
 * 管理者認証API
 *
 * セキュリティ改善点:
 * - パスワードは環境変数から取得（ハードコード削除）
 * - 本番環境では必ず強力なパスワードを設定
 * - 将来的にはJWT/セッションベースの認証に移行推奨
 */
export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // 環境変数からパスワードを取得
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    // 環境変数が設定されていない場合はエラー
    if (!ADMIN_PASSWORD) {
      console.error('ADMIN_PASSWORD is not set in environment variables');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // パスワードが未入力の場合
    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      );
    }

    // パスワード検証
    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Admin auth error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
