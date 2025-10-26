import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// テスト用の認証設定
const TEST_PASSWORD = "0000";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // バリデーション
    if (!email || !password) {
      return NextResponse.json(
        { error: "メールアドレスとパスワードを入力してください" },
        { status: 400 }
      );
    }

    // テスト環境: 0000で全て認証OK
    if (password === TEST_PASSWORD) {
      // Cookieにトークンを保存（簡易実装）
      const cookieStore = await cookies();

      cookieStore.set("auth_token", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7日間
      });

      cookieStore.set("user_email", email, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
      });

      return NextResponse.json(
        {
          success: true,
          message: "ログインに成功しました",
          user: { email },
        },
        { status: 200 }
      );
    }

    // 認証失敗
    return NextResponse.json(
      { error: "パスワードが正しくありません（テスト環境: 0000）" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
