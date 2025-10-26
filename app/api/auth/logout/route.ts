import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    // Cookieを削除
    cookieStore.delete("auth_token");
    cookieStore.delete("user_email");

    return NextResponse.json(
      { success: true, message: "ログアウトしました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "ログアウトに失敗しました" },
      { status: 500 }
    );
  }
}
