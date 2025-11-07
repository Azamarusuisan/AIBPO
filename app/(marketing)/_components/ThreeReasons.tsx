import Image from "next/image";

export default function ThreeReasons() {
  const items = [
    {
      key: "issue",
      title: "企業様（課題）",
      img: "/images/reason-issue.png",
      alt: "経営課題のイメージ（採用コスト・指示負担・作業量の波）",
      bullets: [
        "採用コストが重い",
        "専門知識の指示が難しい",
        "作業量に波がある"
      ]
    },
    {
      key: "pm",
      title: "専任PM（対応）",
      img: "/images/reason-pm.png",
      alt: "専任PMが要件を翻訳し、進捗と品質を管理する様子",
      bullets: [
        "要件を翻訳して指示",
        "進捗・品質を見える化",
        "優先度を整理して段取り"
      ]
    },
    {
      key: "result",
      title: "成果物（結果）",
      img: "/images/reason-result.png",
      alt: "コスト削減とチェックマークで結果を示すダッシュボード",
      bullets: [
        "開発コスト▲30%",
        "運用負担▲40%",
        "必要時だけ柔軟稼働"
      ]
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 py-20 md:py-24">
        {/* セクションタイトル */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-balance text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            選ばれる3つの理由
          </h2>
          <p className="text-slate-600 text-xl font-medium">
            課題 / 進め方 / 結果
          </p>
        </div>

        {/* フロー図 */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {items.map((item, index) => (
              <div key={item.key} className="relative">
                {/* カード */}
                <div className="bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm overflow-hidden">
                  {/* 画像 */}
                  <figure className="aspect-[3/2] bg-slate-50 relative overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      className="object-cover saturate-[.9] contrast-95"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </figure>

                  {/* 本文 */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <ul className="space-y-2 text-lg font-medium text-slate-700 leading-relaxed">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 矢印（md以上、最後のカード以外） */}
                {index < items.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 大型カード - 重要な訴求ポイント */}
        <div className="mt-16 space-y-8">
          {/* 経費削減 */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src="/images/reason-issue.png"
                alt="経費削減のイメージ"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-transparent"></div>
            </div>

            <div className="relative h-full flex items-center">
              <div className="max-w-2xl px-8 md:px-16">
                <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xl font-bold mb-6 border border-white/30">
                  経費削減
                </div>
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  月3万円〜
                </h3>
                <p className="text-2xl md:text-3xl font-medium text-white/90 mb-8 leading-relaxed">
                  採用コスト・広告費・教育費用は一切不要。<br />
                  必要な分だけ、明瞭な価格で。
                </p>
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 inline-block shadow-2xl">
                  <p className="text-xl md:text-2xl font-extrabold text-gray-900">
                    <span className="text-red-600 line-through">採用活動: 数百万円</span>
                    <span className="mx-3 text-gray-400">→</span>
                    <span className="text-green-600">0円</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PM代行 */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src="/images/reason-pm.png"
                alt="PM代行のイメージ"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-900/90 via-blue-800/80 to-transparent"></div>
            </div>

            <div className="relative h-full flex items-center justify-end">
              <div className="max-w-2xl px-8 md:px-16 text-right">
                <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xl font-bold mb-6 border border-white/30">
                  負担軽減
                </div>
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  専任PM代行
                </h3>
                <p className="text-2xl md:text-3xl font-medium text-white/90 mb-8 leading-relaxed">
                  専門知識不要。<br />
                  専任PMが企業様とエンジニアの橋渡しを担当します。
                </p>
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 inline-block shadow-2xl">
                  <p className="text-xl md:text-2xl font-extrabold text-gray-900">
                    <span className="text-gray-600">技術的な指示</span>
                    <span className="mx-3 text-gray-400">→</span>
                    <span className="text-blue-600">専任PMにお任せ</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
