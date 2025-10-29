"use client";
import { useState, useRef, useEffect } from "react";
import { plans } from "../_data/bpo";

export default function Plans() {
  const [currentIndex, setCurrentIndex] = useState(0); // シンプルに0から開始
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  // スクロール位置の監視（シンプル版）
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // 背景アニメーション用のコードスニペット
  const codeLines = [
    'const plans = [',
    '  { name: "Starter", price: 140000, hours: 20 },',
    '  { name: "Growth", price: 275000, hours: 40 },',
    '  { name: "Pro", price: 520000, hours: 80 },',
    '  { name: "Team", price: 980000, hours: 160 },',
    '];',
    '',
    'function selectPlan(budget, hours) {',
    '  return plans.find(p => p.hours >= hours);',
    '}',
  ];

  return (
    <section className="relative section" id="plans" style={{ backgroundColor: 'var(--background)' }}>
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

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
          プラン・料金
        </h2>

        {/* モバイル: スライド式カルーセル */}
        <div className="md:hidden">
          {/* スワイプヒント */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>スワイプしてプランを比較</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* カルーセル */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-center bg-white/95 backdrop-blur-sm rounded-xl border-2 border-primary/30 p-5 sm:p-6 shadow-lg"
              >
                <div className="text-center mb-4 sm:mb-5">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{plan.name}</h3>
                    {plan.highlight && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-accent text-white">
                        おすすめ
                      </span>
                    )}
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">{plan.price}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{plan.tickets}</p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-xs sm:text-sm font-semibold text-primary">初回応答</span>
                    <span className="text-xs sm:text-sm text-gray-900">{plan.sla}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-xs sm:text-sm font-semibold text-primary">会議</span>
                    <span className="text-xs sm:text-sm text-gray-900">{plan.meeting}</span>
                  </div>
                  {plan.extras && plan.extras.length > 0 && (
                    <div className="py-2">
                      <span className="text-xs sm:text-sm font-semibold text-primary block mb-2">含まれるサービス</span>
                      <div className="space-y-1">
                        {plan.extras.map((x, ix) => (
                          <div key={ix} className="text-xs text-gray-900 flex items-start gap-1">
                            <span className="text-primary">•</span>
                            <span>{x}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href="/contact"
                  className="mt-5 sm:mt-6 block w-full text-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
                  data-cta={`plans_${plan.name.toLowerCase()}_mobile`}
                >
                  無料相談
                </a>
              </div>
            ))}
          </div>

          {/* ドットインジケーター */}
          <div className="flex justify-center gap-3 mt-4">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center p-2 transition-all duration-300 ${
                  currentIndex === index ? 'active' : ''
                }`}
                aria-label={`${plans[index].name}プランに移動`}
                aria-current={currentIndex === index ? "true" : "false"}
              >
                <span className={`block rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 h-3 bg-primary'
                    : 'w-3 h-3 bg-gray-300'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* デスクトップ: テーブル形式 */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-r border-gray-200">プラン</th>
                {plans.map((p, i) => (
                  <th key={i} className={`px-4 py-3 text-center text-sm font-bold text-gray-700 ${i < plans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                    <div className="flex flex-col items-center gap-1">
                      <span>{p.name}</span>
                      {p.highlight && (
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-accent text-white">
                          おすすめ
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* 価格 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-semibold text-gray-700 border-r border-gray-200">月額料金</td>
                {plans.map((p, i) => {
                  const priceWithoutMonth = p.price.replace('/月', '');
                  return (
                    <td key={i} className={`px-4 py-3 text-center ${i < plans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-gray-900">{priceWithoutMonth}</span>
                        <span className="text-sm text-gray-900">/月</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
              {/* 月間稼働 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-semibold text-gray-700 border-r border-gray-200">月間稼働の目安</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-sm text-gray-900 ${i < plans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                    {p.tickets}
                  </td>
                ))}
              </tr>
              {/* SLA */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-semibold text-gray-700 border-r border-gray-200">初回応答</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-sm text-gray-900 ${i < plans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                    {p.sla}
                  </td>
                ))}
              </tr>
              {/* 会議 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-semibold text-gray-700 border-r border-gray-200">会議</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-sm text-gray-900 ${i < plans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                    {p.meeting}
                  </td>
                ))}
              </tr>
              {/* 含まれるサービス */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-semibold text-gray-700 border-r border-gray-200">含まれるサービス</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-xs text-gray-900 ${i < plans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                    {p.extras?.map((x, ix) => (
                      <div key={ix}>{x}</div>
                    )) || '－'}
                  </td>
                ))}
              </tr>
              {/* CTA */}
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 text-sm font-semibold text-gray-700 border-r border-gray-200"></td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-4 text-center ${i < plans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                    <a
                      href="/contact"
                      className="inline-block px-4 py-2 rounded-lg text-sm font-semibold transition-colors bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
                      data-cta={`plans_${p.name.toLowerCase()}`}
                    >
                      無料相談
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* プラン選択のヒント */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-bold text-gray-900">まずは小さく</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Starter</strong>で月140,000円から。バグ修正や小規模改修を試して、体制を見極められます。
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-bold text-gray-900">継続的な改善に</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Standard</strong>は週1打合せ付き。月次レポートで改善提案を受けながら、開発体制を強化。
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="font-bold text-gray-900">事業成長と共に</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Pro / Team</strong>は当日対応・専任PM配置。急速な成長期の開発スピードを支えます。
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-white border border-gray-200 p-4 text-sm text-[var(--text-2)] space-y-1">
          <p><strong>ℹ︎ 時間売りではありません。</strong>成果は"納品物"としてお返しします。</p>
          <p><strong>※ 超過時間：</strong>¥6,500〜7,000/h ／ <strong>契約：</strong>月次更新（3か月割引あり）</p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
