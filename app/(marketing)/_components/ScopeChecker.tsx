"use client";
import { useState } from "react";
import { scope } from "../_data/bpo";
import Link from "next/link";

type CheckResult = {
  status: "can" | "cannot" | "unknown";
  matches: string[];
  message: string;
};

export default function ScopeChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // キーワードマッチングで判定
  const checkScope = (query: string) => {
    setIsLoading(true);

    // 少し遅延を入れて「考えている」感を出す
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();

      // 「できること」からマッチング
      const canMatches: string[] = [];
      scope.do.forEach(category => {
        category.items.forEach(item => {
          if (lowerQuery.includes(item.toLowerCase()) || item.toLowerCase().includes(lowerQuery)) {
            canMatches.push(`${category.category}：${item}`);
          }
        });
      });

      // 「できないこと」からマッチング
      const cannotMatches: string[] = [];
      scope.dont.forEach(category => {
        category.items.forEach(item => {
          if (lowerQuery.includes(item.toLowerCase()) || item.toLowerCase().includes(lowerQuery)) {
            cannotMatches.push(`${category.category}：${item}`);
          }
        });
      });

      // 結果を判定
      if (canMatches.length > 0) {
        setResult({
          status: "can",
          matches: canMatches,
          message: "はい、対応可能です！"
        });
      } else if (cannotMatches.length > 0) {
        setResult({
          status: "cannot",
          matches: cannotMatches,
          message: "申し訳ございません。この領域は対応範囲外です。"
        });
      } else {
        setResult({
          status: "unknown",
          matches: [],
          message: "詳細を確認させていただきたく思います。"
        });
      }

      setIsLoading(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      checkScope(input);
    }
  };

  const handleReset = () => {
    setInput("");
    setResult(null);
  };

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white" id="scope">
      <div className="mx-auto max-w-4xl px-6">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            対応可能かすぐにチェック
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            ご希望の開発内容を入力してください
          </p>
        </div>

        {/* チャットUI */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6 md:p-8">
          {/* 質問入力フォーム */}
          <form onSubmit={handleSubmit} className="mb-6">
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              どのような開発をご希望ですか？
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="例：Next.jsでWebアプリ開発、API作成、バグ修正..."
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary text-base"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isLoading ? "確認中..." : "チェック"}
              </button>
            </div>
          </form>

          {/* 結果表示 */}
          {result && (
            <div className="space-y-4">
              {/* できる場合 */}
              {result.status === "can" && (
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green-900 mb-2">{result.message}</h3>
                      <p className="text-base text-green-800 mb-4">
                        以下の項目に該当します：
                      </p>
                      <ul className="space-y-2">
                        {result.matches.map((match, i) => (
                          <li key={i} className="flex items-start gap-2 text-base text-green-900">
                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{match}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="flex-1 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-center"
                    >
                      無料相談に進む
                    </Link>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg border-2 border-green-200 hover:bg-green-50 transition-colors"
                    >
                      別の内容を確認
                    </button>
                  </div>
                </div>
              )}

              {/* できない場合 */}
              {result.status === "cannot" && (
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 border-orange-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-orange-900 mb-2">{result.message}</h3>
                      <p className="text-base text-orange-800 mb-4">
                        以下の領域は対応範囲外となります：
                      </p>
                      <ul className="space-y-2 mb-4">
                        {result.matches.map((match, i) => (
                          <li key={i} className="flex items-start gap-2 text-base text-orange-900">
                            <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span>{match}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-orange-700 bg-orange-100 rounded-lg p-3">
                        <strong>ご案内：</strong>パートナー企業との連携により対応可能な場合があります。詳しくはお問い合わせください。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="flex-1 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors text-center"
                    >
                      お問い合わせ
                    </Link>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-white text-orange-700 font-semibold rounded-lg border-2 border-orange-200 hover:bg-orange-50 transition-colors"
                    >
                      別の内容を確認
                    </button>
                  </div>
                </div>
              )}

              {/* 不明な場合 */}
              {result.status === "unknown" && (
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{result.message}</h3>
                      <p className="text-base text-blue-800 mb-4">
                        「{input}」について、担当者より詳しくご説明させていただきます。<br />
                        お気軽にお問い合わせください。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="flex-1 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-center"
                    >
                      詳しく相談する
                    </Link>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-200 hover:bg-blue-50 transition-colors"
                    >
                      別の内容を確認
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 初期状態のヒント */}
          {!result && !isLoading && (
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>入力例：</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                {["Webアプリ開発", "API作成", "バグ修正", "Next.js", "AI機能追加", "IoT開発"].map((example) => (
                  <button
                    key={example}
                    onClick={() => setInput(example)}
                    className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 詳細を見るリンク */}
        <div className="text-center mt-8">
          <Link
            href="/scope"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-base"
          >
            対応範囲の詳細を見る
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
