"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../(marketing)/_components/Header";
import Footer from "../(marketing)/_components/Footer";

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cookieから認証状態を確認
    const checkAuth = () => {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("auth_token="));
      const email = document.cookie
        .split("; ")
        .find((row) => row.startsWith("user_email="));

      if (!authToken) {
        router.push("/login");
        return;
      }

      if (email) {
        setUserEmail(decodeURIComponent(email.split("=")[1]));
      }
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  ダッシュボード
                </h1>
                <p className="text-gray-600">
                  ようこそ、{userEmail} さん
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                ログアウト
              </button>
            </div>
          </div>

          {/* KPIカード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">
                  今月の完成した変更
                </h3>
                <span className="text-2xl">📦</span>
              </div>
              <p className="text-3xl font-bold text-primary">0 件</p>
              <p className="text-xs text-gray-500 mt-2">上限: 5件（Basic）</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">
                  進行中のタスク
                </h3>
                <span className="text-2xl">⚙️</span>
              </div>
              <p className="text-3xl font-bold text-accent">0 件</p>
              <p className="text-xs text-gray-500 mt-2">新しいタスクを追加</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">
                  平均納期
                </h3>
                <span className="text-2xl">⏱️</span>
              </div>
              <p className="text-3xl font-bold text-green-600">24h</p>
              <p className="text-xs text-gray-500 mt-2">初回応答時間</p>
            </div>
          </div>

          {/* クイックアクション */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold mb-6">クイックアクション</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-6 border-2 border-primary/20 rounded-xl hover:bg-primary/5 transition-all text-left">
                <div className="text-2xl mb-2">➕</div>
                <h3 className="font-semibold mb-1">新しいタスクを追加</h3>
                <p className="text-sm text-gray-600">
                  完成した変更をリクエスト
                </p>
              </button>

              <button className="p-6 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-left">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-semibold mb-1">レポートを表示</h3>
                <p className="text-sm text-gray-600">
                  完成した変更の履歴を確認
                </p>
              </button>

              <button className="p-6 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-left">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold mb-1">サポートに連絡</h3>
                <p className="text-sm text-gray-600">
                  質問やお問い合わせ
                </p>
              </button>

              <button className="p-6 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-left">
                <div className="text-2xl mb-2">⚙️</div>
                <h3 className="font-semibold mb-1">プラン管理</h3>
                <p className="text-sm text-gray-600">
                  プランの変更・アップグレード
                </p>
              </button>
            </div>
          </div>

          {/* お知らせ */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">
              🎉 ダッシュボードへようこそ
            </h3>
            <p className="text-sm text-blue-800">
              テスト環境として構築されています。実際のタスク管理機能は今後実装予定です。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
