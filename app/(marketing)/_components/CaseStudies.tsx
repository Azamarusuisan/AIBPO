"use client";
import React from "react";
import Image from "next/image";

export default function CaseStudies() {
  const items = [
    {
      title: "既存バグ修正（Next.js）",
      badge: "エラー率 -91%",
      request: "フォーム送信で500エラー",
      action: "入力チェック／API修正／自動テスト3件",
      delivery: "完成した変更（テスト付き）",
      result: "エラー率 2.3% → 0.1%、36h",
      image: "/バグ修正.png",
    },
    {
      title: "表示速度改善（React）",
      badge: "TTFB -65%",
      request: "一覧ページのTTFBが遅い",
      action: "SSRキャッシュ／Redis／N+1解消／計測",
      delivery: "完成した変更＋計測レポ",
      result: "TTFB 1.2s → 420ms、48h",
      image: "/速度改善.png",
    },
    {
      title: "回帰対策（FastAPI）",
      badge: "回帰不具合 -41%",
      request: "更新のたび不具合が発生",
      action: "回帰テスト12件／CI整備／自動実行",
      delivery: "完成した変更（CI設定とテスト）",
      result: "回帰不具合 -41%、72h",
      image: "/回帰対策.png",
    },
  ];

  // 配列を2倍にして無限ループを実現
  const doubledItems = [...items, ...items];

  return (
    <section className="section" id="cases" style={{ backgroundColor: 'var(--background-alt)' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">具体的な事例</h2>
      </div>

      {/* 横スクロールカルーセル */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-scroll-left">
          {doubledItems.map((it, idx) => (
            <article key={`${it.title}-${idx}`} className="flex-shrink-0 w-[300px] sm:w-[350px] rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 relative mb-3">
                {/* Image */}
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="350px"
                />
                {/* Badge */}
                <div className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full shadow z-10">
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
