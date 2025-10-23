"use client";
import { useState, useEffect, useRef } from "react";

export default function Process() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps sequentially
            [0, 1, 2, 3].forEach((index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stepIcons = [
    // 課題を送る
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    // 担当を割当
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    // 実装 → 最終レビュー
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    // 完成した変更をお返し
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ];

  const steps = [
    {
      title: "課題を送る",
      description: "フォーム or Issue"
    },
    {
      title: "担当を割当",
      description: "オンデマンド＋自動チェック"
    },
    {
      title: "実装 → 最終レビュー",
      description: "元PMがチェック"
    },
    {
      title: "完成した変更をお返し",
      description: "そのまま適用可能"
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-gray-50" id="process">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">進め方</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center transition-all duration-500 ${
                visibleSteps.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* Icon with check indicator */}
              <div className="relative mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm p-3 sm:p-4 text-primary">
                  {stepIcons[index]}
                </div>
                {/* Green check - appears when step is visible */}
                {visibleSteps.includes(index) && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent flex items-center justify-center shadow-md animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Step number */}
              <div className="text-sm font-bold text-primary mb-2">STEP {index + 1}</div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[var(--text-2)]">{step.description}</p>

              {/* Arrow (except last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-8 text-2xl text-gray-300">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
