import React from "react";

export default function CaseStudies() {
  const items = [
    {
      title: "既存バグ修正（Next.js）",
      badge: "エラー率 -91%",
      request: "フォーム送信で500",
      action: "入力チェック／API修正／自動テスト3件",
      delivery: "完成した変更（テスト付き）",
      result: "エラー率 2.3% → 0.1%、36h",
    },
    {
      title: "表示速度改善（React）",
      badge: "TTFB -65%",
      request: "一覧ページのTTFBが遅い",
      action: "SSRキャッシュ／Redis／N+1解消／計測",
      delivery: "完成した変更＋計測レポ",
      result: "TTFB 1.2s → 420ms",
    },
    {
      title: "回帰対策（FastAPI）",
      badge: "回帰不具合 -41%",
      request: "更新のたび不具合",
      action: "回帰テスト12件／CI整備",
      delivery: "完成した変更（CI設定とテスト）",
      result: "回帰不具合 -41%",
    },
  ];

  return (
    <section className="section" id="cases">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">具体的な事例</h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="group min-w-0 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 relative mb-3">
                {/* Before layer (top) - fades out on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 flex items-start justify-start p-2 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="text-xs font-semibold text-red-600 bg-white/80 px-2 py-0.5 rounded">Before</span>
                </div>
                {/* After layer (bottom) - revealed on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 flex items-end justify-end p-2">
                  <span className="text-xs font-semibold text-green-600 bg-white/80 px-2 py-0.5 rounded">After</span>
                </div>
                {/* Badge */}
                <div className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                  {it.badge}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-3">{it.title}</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-2)]">
                <li><span className="font-semibold text-[var(--text-1)]">依頼：</span>{it.request}</li>
                <li><span className="font-semibold text-[var(--text-1)]">対応：</span>{it.action}</li>
                <li><span className="font-semibold text-[var(--text-1)]">返却物：</span>{it.delivery}</li>
                <li><span className="font-semibold text-accent">結果：</span>{it.result}</li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
