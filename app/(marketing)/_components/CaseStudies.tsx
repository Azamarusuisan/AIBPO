"use client";
import React, { useState } from "react";
import Image from "next/image";
import CaseStepper, { Step } from "./CaseStepper";

type CaseStudiesProps = {
  layout?: "carousel" | "grid";
};

export default function CaseStudies({ layout = "carousel" }: CaseStudiesProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items = [
    {
      title: "既存バグ修正（Next.js）",
      badge: "エラー率 -91%",
      request: "フォーム送信で500エラー",
      action: "入力チェック／API修正／自動テスト3件",
      delivery: "納品物（テスト付き）",
      result: "エラー率 2.3% → 0.1%、36h",
      image: "/バグ修正.jpg",
    },
    {
      title: "表示速度改善（React）",
      badge: "TTFB -65%",
      request: "一覧ページのTTFBが遅い",
      action: "SSRキャッシュ／Redis／N+1解消／計測",
      delivery: "納品物＋計測レポ",
      result: "TTFB 1.2s → 420ms、48h",
      image: "/速度改善.jpg",
    },
    {
      title: "回帰対策（FastAPI）",
      badge: "回帰不具合 -41%",
      request: "更新のたび不具合が発生",
      action: "回帰テスト12件／CI整備／自動実行",
      delivery: "納品物（CI設定とテスト）",
      result: "回帰不具合 -41%、72h",
      image: "/回帰対策.jpg",
    },
  ];

  // 配列を2倍にして無限ループを実現
  const doubledItems = [...items, ...items];

  // ステッパー用のステップデータを生成（各ステップで異なる画像を使用）
  const firstCase = items[0];
  const steps: Step[] = [
    {
      key: "request",
      title: "依頼",
      desc: firstCase.request,
      src: items[0].image, // バグ修正.jpg
      alt: `${firstCase.title} - 依頼内容`
    },
    {
      key: "action",
      title: "対応",
      desc: firstCase.action,
      src: items[1].image, // 速度改善.jpg
      alt: `${firstCase.title} - 対応内容`
    },
    {
      key: "delivery",
      title: "返却物",
      desc: firstCase.delivery,
      src: items[2].image, // 回帰対策.jpg
      alt: `${firstCase.title} - 返却物`
    },
    {
      key: "result",
      title: "結果",
      desc: firstCase.result,
      src: "/事例カード.jpg", // 事例カード.jpg（別の画像）
      alt: `${firstCase.title} - 結果`
    }
  ];

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

      {/* レイアウト切り替え */}
      {layout === "grid" ? (
        /* グリッドレイアウト（/scopeページ用） */
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6">
          {items.map((it, idx) => (
            <article key={`${it.title}-${idx}`} className="flex flex-col rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-gray-100 relative">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  quality={85}
                />
                <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  {it.badge}
                </div>
              </div>
              <div className="flex-grow p-6">
                <h3 className="text-lg font-bold mb-4">{it.title}</h3>
                <ul className="space-y-2 text-sm text-[var(--text-2)]">
                  <li><span className="font-semibold text-[var(--text-1)]">依頼：</span>{it.request}</li>
                  <li><span className="font-semibold text-[var(--text-1)]">対応：</span>{it.action}</li>
                  <li><span className="font-semibold text-[var(--text-1)]">返却物：</span>{it.delivery}</li>
                  <li><span className="font-semibold text-accent">結果：</span>{it.result}</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* カルーセルレイアウト（トップページ用・デフォルト） */
        <div className="relative overflow-hidden">
          {/* モバイル: ステッパー表示 */}
          <div className="md:hidden">
            <CaseStepper steps={steps} heading="" />
          </div>

          {/* デスクトップ: 自動回転カルーセル */}
          <div className="hidden md:block mt-8 overflow-hidden relative">
            <div className="flex gap-6 animate-scroll-left">
              {doubledItems.map((it, idx) => (
                <article
                  key={`${it.title}-${idx}`}
                  className="flex-shrink-0 w-[400px] rounded-2xl border border-primary/20 bg-white/95 backdrop-blur-sm p-5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 relative mb-3">
                    <Image
                      src={it.image}
                      alt={it.title}
                      fill
                      className="object-cover"
                      sizes="400px"
                      quality={85}
                    />
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
        </div>
      )}
    </section>
  );
}
