"use client";
import React from "react";
import Link from "next/link";
import Footer from "../(marketing)/_components/Footer";

export default function AuditPage() {
  const [open, setOpen] = React.useState(false);
  const [selectedIssue, setSelectedIssue] = React.useState<string>("");
  const [selectedPlan, setSelectedPlan] = React.useState<string>("");
  const [issueOpen, setIssueOpen] = React.useState(false);
  const [planOpen, setPlanOpen] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // 送信処理は後日実装（API不要、モーダル表示のみ）
    console.log("/audit submitted", Object.fromEntries(form.entries()));
    setOpen(true);
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold">無料コード健診</h1>
        <p className="mt-2 text-sm text-gray-600">
          GitHub連携は不要。URLと課題の概要だけでもOKです。
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Left: Form */}
          <form onSubmit={onSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          <div>
            <label htmlFor="github_url" className="block text-sm font-medium mb-1">
              GitHub URL（任意）
            </label>
            <input
              id="github_url"
              name="github_url"
              type="url"
              placeholder="https://github.com/org/repo"
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="stack" className="block text-sm font-medium mb-1">
              技術スタック
            </label>
            <input
              id="stack"
              name="stack"
              type="text"
              placeholder="例：Next.js / TypeScript / FastAPI など"
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              困りごと
            </label>
            <div className="mt-1 w-full rounded-xl border border-gray-300 bg-white">
              <button
                type="button"
                onClick={() => setIssueOpen(!issueOpen)}
                className="w-full px-4 py-2 text-left flex items-center justify-between focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl"
              >
                <span className={selectedIssue ? "text-gray-900" : "text-gray-400"}>
                  {selectedIssue || "選択してください"}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${issueOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {issueOpen && (
                <div className="border-t border-gray-200">
                  {["バグ修正", "小機能の追加", "テスト追加/CI整備", "パフォーマンス改善", "その他"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedIssue(option);
                        setIssueOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input type="hidden" name="issue" value={selectedIssue} required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              希望プラン
            </label>
            <div className="mt-1 w-full rounded-xl border border-gray-300 bg-white">
              <button
                type="button"
                onClick={() => setPlanOpen(!planOpen)}
                className="w-full px-4 py-2 text-left flex items-center justify-between focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl"
              >
                <span className={selectedPlan ? "text-gray-900" : "text-gray-400"}>
                  {selectedPlan || "選択してください"}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${planOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {planOpen && (
                <div className="border-t border-gray-200">
                  {[
                    "Starter ¥30,000（5件/48h/非同期）",
                    "Standard ¥120,000（20件/24h/週1）",
                    "Pro ¥300,000（60件/当日/優先）"
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedPlan(option);
                        setPlanOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input type="hidden" name="plan" value={selectedPlan} required />
          </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-all"
              data-cta="audit_submit"
            >
              送信して仮受付
            </button>
          </form>

          {/* Right: Safety Cards */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-base mb-3">提出後の流れ</h3>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>1–2営業日内にご連絡</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>必要なら再現手順を確認</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>最初の変更1件を優先対応</span>
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-base mb-3">データの扱い</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>NDA対応</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>私有Runner</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>最小権限</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>監査ログ対応</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
            ← トップページに戻る
          </Link>
        </div>
      </div>

      {/* Thanks Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold">受付しました</h2>
            <p className="mt-2 text-sm text-gray-600">
              1–2営業日内にご連絡します。必要に応じて追加情報（再現手順など）をお伺いします。
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/"
                className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-sm text-center hover:bg-gray-50 transition-colors"
              >
                トップへ戻る
              </Link>
              <Link
                href="/plans"
                className="flex-1 rounded-xl bg-primary px-4 py-2 text-sm text-center text-white hover:opacity-90 transition-all"
              >
                プランを見る
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
