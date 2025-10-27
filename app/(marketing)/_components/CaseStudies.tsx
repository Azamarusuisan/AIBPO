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
      image: "/バグ修正.jpg",
    },
    {
      title: "表示速度改善（React）",
      badge: "TTFB -65%",
      request: "一覧ページのTTFBが遅い",
      action: "SSRキャッシュ／Redis／N+1解消／計測",
      delivery: "完成した変更＋計測レポ",
      result: "TTFB 1.2s → 420ms、48h",
      image: "/速度改善.jpg",
    },
    {
      title: "回帰対策（FastAPI）",
      badge: "回帰不具合 -41%",
      request: "更新のたび不具合が発生",
      action: "回帰テスト12件／CI整備／自動実行",
      delivery: "完成した変更（CI設定とテスト）",
      result: "回帰不具合 -41%、72h",
      image: "/回帰対策.jpg",
    },
  ];

  // 配列を2倍にして無限ループを実現
  const doubledItems = [...items, ...items];

  // 背景アニメーション用のコードスニペット
  const codeLines = [
    'async function fixBug(issue) {',
    '  const analysis = await analyzeBug(issue);',
    '  const fix = generateFix(analysis);',
    '  await runTests(fix);',
    '  return { fix, tests, rollback };',
    '}',
    '',
    'const result = { errorRate: "2.3% → 0.1%", time: "36h" };',
  ];

  return (
    <section className="relative section bg-white" id="cases">
      {/* 背景アニメーション：スクロールするコード */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 animate-code-scroll">
          <pre className="font-mono text-sm leading-relaxed text-gray-600 whitespace-pre w-full">
            {codeLines.concat(codeLines).concat(codeLines).concat(codeLines).map(line =>
              line + '    ' + line + '    ' + line
            ).join('\n')}
          </pre>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">具体的な事例</h2>
      </div>

      {/* デスクトップ: 横スクロールカルーセル / モバイル: 2行グリッド */}
      <div className="relative overflow-hidden">
        {/* モバイル: 2行グリッド */}
        <div className="md:hidden grid grid-cols-1 gap-4 px-4">
          {items.map((it, idx) => (
            <article key={`${it.title}-${idx}`} className="rounded-2xl border border-primary/20 bg-white/95 backdrop-blur-sm p-4 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 relative mb-3">
                {/* Image */}
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 350px"
                  quality={85}
                />
                {/* Badge */}
                <div className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full shadow z-10">
                  {it.badge}
                </div>
              </div>
              <h3 className="text-base font-bold mb-3">{it.title}</h3>
              <ul className="space-y-2 text-xs text-[var(--text-2)]">
                <li><span className="font-semibold text-[var(--text-1)]">依頼：</span>{it.request}</li>
                <li><span className="font-semibold text-[var(--text-1)]">対応：</span>{it.action}</li>
                <li><span className="font-semibold text-[var(--text-1)]">返却物：</span>{it.delivery}</li>
                <li><span className="font-semibold text-accent">結果：</span>{it.result}</li>
              </ul>
            </article>
          ))}
        </div>

        {/* デスクトップ: 横スクロール */}
        <div className="hidden md:flex gap-6 animate-scroll-left">
          {doubledItems.map((it, idx) => (
            <article key={`${it.title}-${idx}`} className="flex-shrink-0 w-[350px] rounded-2xl border border-primary/20 bg-white/95 backdrop-blur-sm p-5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
              <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 relative mb-3">
                {/* Image */}
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="350px"
                  quality={85}
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
