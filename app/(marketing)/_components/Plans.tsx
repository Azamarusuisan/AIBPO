"use client";
import { useState } from "react";
import { plans } from "../_data/bpo";

export default function Plans() {
  const [currentIndex, setCurrentIndex] = useState(1); // デフォルトはStandard

  const nextPlan = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  const prevPlan = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  // 背景アニメーション用のコードスニペット
  const codeLines = [
    'const plans = [',
    '  { name: "Lite", price: 30000, tickets: 5 },',
    '  { name: "Standard", price: 120000, tickets: 20 },',
    '  { name: "Pro", price: 300000, tickets: 60 },',
    '];',
    '',
    'function selectPlan(budget, volume) {',
    '  return plans.find(p => p.tickets >= volume);',
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

        {/* モバイル: スライド式 */}
        <div className="md:hidden">
          <div className="relative">
            {/* 現在のプラン */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl border-2 border-primary/30 p-6 shadow-lg kpi-card-glow">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-primary">{plans[currentIndex].name}</h3>
                  {plans[currentIndex].highlight && (
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-accent text-white">
                      おすすめ
                    </span>
                  )}
                </div>
                <p className="text-3xl font-bold text-gray-900">{plans[currentIndex].price}</p>
                <p className="text-sm text-gray-600 mt-1">{plans[currentIndex].tickets}</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-sm font-semibold text-primary">初回応答</span>
                  <span className="text-sm text-gray-900">{plans[currentIndex].sla}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-sm font-semibold text-primary">会議</span>
                  <span className="text-sm text-gray-900">{plans[currentIndex].meeting}</span>
                </div>
                {plans[currentIndex].extras && plans[currentIndex].extras.length > 0 && (
                  <div className="py-2">
                    <span className="text-sm font-semibold text-primary block mb-2">特典</span>
                    <div className="space-y-1">
                      {plans[currentIndex].extras.map((x, ix) => (
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
                className="mt-6 block w-full text-center px-6 py-3 rounded-lg text-base font-semibold transition-colors bg-primary text-white hover:bg-primary-hover"
                data-cta={`plans_${plans[currentIndex].name.toLowerCase()}_mobile`}
              >
                無料相談
              </a>
            </div>

            {/* ナビゲーションボタン */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={prevPlan}
                className="p-3 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors"
                aria-label="前のプラン"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* インジケーター */}
              <div className="flex gap-2">
                {plans.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`プラン ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextPlan}
                className="p-3 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors"
                aria-label="次のプラン"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* デスクトップ: テーブル形式 */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full bg-white/95 backdrop-blur-sm rounded-xl border-2 border-primary/30 overflow-hidden shadow-lg kpi-card-glow">
            <thead>
              <tr className="bg-primary/10 border-b-2 border-primary/30">
                <th className="px-4 py-3 text-left text-sm font-bold text-primary border-r border-primary/20">プラン</th>
                {plans.map((p, i) => (
                  <th key={i} className={`px-4 py-3 text-center text-sm font-bold text-primary ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
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
            <tbody className="divide-y divide-primary/20">
              {/* 価格 */}
              <tr className="bg-primary/5">
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">月額料金</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-lg font-bold text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.price}
                  </td>
                ))}
              </tr>
              {/* 件数 */}
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">件数上限</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-sm text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.tickets}
                  </td>
                ))}
              </tr>
              {/* SLA */}
              <tr className="bg-primary/5">
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">初回応答</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-sm text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.sla}
                  </td>
                ))}
              </tr>
              {/* 会議 */}
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">会議</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-sm text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.meeting}
                  </td>
                ))}
              </tr>
              {/* 特典 */}
              <tr className="bg-primary/5">
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">特典</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-xs text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.extras?.map((x, ix) => (
                      <div key={ix}>{x}</div>
                    )) || '－'}
                  </td>
                ))}
              </tr>
              {/* CTA */}
              <tr className="border-t-2 border-primary/30">
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20"></td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-4 text-center ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    <a
                      href="/contact"
                      className="inline-block px-4 py-2 rounded-lg text-sm font-semibold transition-colors bg-primary text-white hover:bg-primary-hover"
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

        <div className="mt-6 rounded-xl bg-white border border-gray-200 p-4 text-sm text-[var(--text-2)] space-y-1">
          <p><strong>ℹ︎ 時間売りではありません。</strong>成果は"完成した変更"としてお返しします。</p>
          <p><strong>追加：</strong>10件=¥60,000（2ヶ月有効）／ 夜間・休日対応は +20%</p>
        </div>
      </div>
    </section>
  );
}
