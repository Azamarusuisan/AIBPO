import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "課題を送る",
      description: "フォーム or Issue",
      icon: "📝",
    },
    {
      number: "02",
      title: "担当を割当",
      description: "オンデマンド + 自動チェック",
      icon: "👤",
    },
    {
      number: "03",
      title: "実装 → 最終レビュー",
      description: "元PM がチェック",
      icon: "⚙️",
    },
    {
      number: "04",
      title: "完成した変更をお返し",
      description: "そのまま適用可能",
      icon: "✅",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">進め方（4ステップ）</h2>
        <p className="text-sm text-gray-600">
          はじめての方でも安心。どう頼むか→何が戻るかを視覚化します。
        </p>
      </div>

      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:flex items-start justify-between gap-4 relative">
        {/* Connection Line */}
        <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" aria-hidden="true" />

        {steps.map((step, idx) => (
          <div key={idx} className="flex-1 relative">
            <div className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-white border-2 border-primary shadow-lg flex items-center justify-center text-3xl mb-4 relative z-10">
                {step.icon}
              </div>

              {/* Step Number */}
              <div className="text-xs font-bold text-primary mb-2">{step.number}</div>

              {/* Title */}
              <h3 className="text-base font-bold mb-1">{step.title}</h3>

              {/* Description */}
              <p className="text-xs text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 relative">
            {/* Vertical Line */}
            {idx < steps.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" aria-hidden="true" />
            )}

            {/* Icon Circle */}
            <div className="w-12 h-12 rounded-full bg-white border-2 border-primary shadow-lg flex items-center justify-center text-xl flex-shrink-0 relative z-10">
              {step.icon}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <div className="text-xs font-bold text-primary mb-1">{step.number}</div>
              <h3 className="text-base font-bold mb-1">{step.title}</h3>
              <p className="text-xs text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
