"use client";
import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "課題を送る",
      description: "フォーム or Issue",
      image: "/step1.png",
    },
    {
      number: "02",
      title: "担当を割当",
      description: "オンデマンド + 自動チェック",
      image: "/step2.png",
    },
    {
      number: "03",
      title: "実装 → 最終レビュー",
      description: "元PM がチェック",
      image: "/step3.png",
    },
    {
      number: "04",
      title: "完成した変更をお返し",
      description: "そのまま適用可能",
      image: "/step4.png",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16" style={{ backgroundColor: 'var(--background-alt)' }}>
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">進め方（4ステップ）</h2>
        <p className="text-sm text-gray-600">
          はじめての方でも安心。どう頼むか→何が戻るかを視覚化します。
        </p>
      </div>

      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:flex items-start justify-between gap-4 relative">
        {/* Connection Line */}
        <div className="absolute top-20 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" aria-hidden="true" />

        {steps.map((step, idx) => (
          <div key={idx} className="flex-1 relative">
            <div className="flex flex-col items-center text-center">
              {/* Image Circle */}
              <div className="w-40 h-40 rounded-full bg-white border-4 border-primary shadow-lg overflow-hidden flex items-center justify-center mb-4 relative z-10">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
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
              <div className="absolute left-10 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" aria-hidden="true" />
            )}

            {/* Image Circle */}
            <div className="w-20 h-20 rounded-full bg-white border-3 border-primary shadow-lg overflow-hidden flex items-center justify-center flex-shrink-0 relative z-10">
              <Image
                src={step.image}
                alt={step.title}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
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
