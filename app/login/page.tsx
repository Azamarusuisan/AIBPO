"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../(marketing)/_components/Header";
import Footer from "../(marketing)/_components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "ログインに失敗しました");
        setLoading(false);
        return;
      }

      // ログイン成功
      router.push("/dashboard");
    } catch (err) {
      setError("エラーが発生しました");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-md w-full">
          {/* ログインカード */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-center mb-2">
              ログイン
            </h1>
            <p className="text-sm text-gray-600 text-center mb-8">
              BPOサービスにログイン
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* メールアドレス */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="example@example.com"
                  required
                />
              </div>

              {/* パスワード（4桁） */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  パスワード（4桁）
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="0000"
                  maxLength={4}
                  required
                />
                <p className="mt-2 text-xs text-gray-500">
                  テスト環境: 0000で認証可能
                </p>
              </div>

              {/* ログインボタン */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "ログイン中..." : "ログイン"}
              </button>
            </form>

            {/* フッターリンク */}
            <div className="mt-6 text-center">
              <a
                href="/contact"
                className="text-sm text-primary hover:underline"
              >
                アカウントをお持ちでない方はこちら
              </a>
            </div>
          </div>

          {/* セキュリティノート */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-gray-600">
              🔒 このページは暗号化された接続で保護されています
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
