"use client";
import { useState, useEffect } from "react";

export default function FAQ() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const faqs = [
    {
      q: "なぜこんなに安いのですか？",
      a: "自社でNVIDIAの最高GPUを有しており、そこで完全自動バグ修正システムを自社開発しているため、工数削減と費用削減が実現されています。「機械が時間を削り、人が価値を出す」というコンセプトのもと、自動化できる部分はAIに任せ、人手は難所に集中することで、相場より大幅に安い価格を実現しています。"
    },
    {
      q: "時間で何時間使えますか？",
      a: "時間バンド制を採用しています。Starterは20h/月、Standardは40h/月、Proは80h/月、Teamは160h/月まで対応可能です。時間売りではなく、成果は「完成した変更」としてお返しします。超過時間は¥6,500〜7,000/hで対応可能です。"
    },
    {
      q: "品質はどのように担保されていますか？",
      a: "すべての「完成した変更」は元PMによる最終レビューを経て返却されます。具体的には、①AIによる自動テスト生成とデバッグ、②エンジニアによる実装、③元PMによる最終レビュー（アーキテクチャ判断、実装の難所確認、受入基準チェック）という3段階のチェック体制を敷いています。"
    },
    {
      q: "個人指名・常駐はできますか？",
      a: "人材派遣モデルではないため、個人指名や常駐対応はできません。当サービスは「課題を受けて実装し、完成した変更をお返しする」BPOモデルです。これにより、人材管理のコストを削減し、低価格での提供を実現しています。"
    },
    {
      q: "小規模な修正でも依頼できますか？",
      a: "はい、小規模な修正でも大歓迎です。Starterプランは月¥140,000から利用可能で、バグ修正や小規模な機能追加に最適です。時間バンド制のため、無駄なく利用できます。"
    }
  ];


  // 背景アニメーション用のコードスニペット
  const codeLines = [
    'const faq = { q: "品質は?", a: "元PMレビュー" };',
    'function findAnswer(question) {',
    '  return faqs.find(f => f.q === question)?.a;',
    '}',
    '',
    'const security = { nda: true, runner: "private" };',
  ];

  return (
    <section className="relative section" id="faq" aria-labelledby="faq-heading" style={{ backgroundColor: 'var(--background)' }}>
      {/* 背景アニメーション：スクロールするコード */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 animate-code-scroll">
          <pre className="font-mono text-sm leading-relaxed text-gray-600 whitespace-pre w-full">
            {codeLines.concat(codeLines).concat(codeLines).concat(codeLines).map(line =>
              line + '    ' + line + '    ' + line
            ).join('\n')}
          </pre>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <h2 id="faq-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
          よくある質問
        </h2>
        <div className="mt-3 sm:mt-4 divide-y divide-primary/20 bg-white/95 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-sm">
          {faqs.map((f, i) => (
            <details key={i} className="group border-b border-primary/10 last:border-b-0" open={!isMobile && i < 2}>
              <summary className="font-semibold cursor-pointer px-4 sm:px-6 py-3 sm:py-4 hover:bg-primary/5 transition-colors duration-200 list-none flex items-center justify-between text-sm sm:text-base bg-white">
                <span className="flex-1">{f.q}</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="overflow-hidden transition-all duration-300 ease-in-out">
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-1 sm:pt-2 text-[var(--text-2)] bg-gray-50 text-sm sm:text-base leading-relaxed">
                  {f.a}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
