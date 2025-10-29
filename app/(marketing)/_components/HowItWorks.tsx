"use client";
import React, { useEffect, useRef, useState } from "react";

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [visibleArrows, setVisibleArrows] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, idx) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => {
                if (prev.includes(idx)) return prev;
                return [...prev, idx];
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    const arrowObservers = arrowRefs.current.map((ref, idx) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleArrows((prev) => {
                if (prev.includes(idx)) return prev;
                return [...prev, idx];
              });
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      arrowObservers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "課題を送る",
      description: "フォームまたはGitHub Issueで課題を送信。要件をテキストで共有するだけ。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "担当を割当",
      description: "AI×プロジェクトマネージャーが最適な担当をアサイン。自動でチェック開始。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "実装 → 最終レビュー",
      description: "エンジニアが実装。元PMが品質チェック。必要に応じてフィードバック。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "納品",
      description: "テスト済み・レビュー済みの変更をお返し。そのまま本番適用可能。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">進め方（4ステップ）</h2>
          <p className="text-base md:text-lg text-gray-600">
            はじめての方でも安心。どう頼むか→何が戻るかを視覚化します。
          </p>
        </div>

        {/* Desktop: 横長カード + 矢印 */}
        <div className="hidden md:block space-y-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* カード */}
              <div
                ref={(el) => { stepRefs.current[idx] = el; }}
                className={`bg-white/95 backdrop-blur-sm border-2 border-primary/20 rounded-xl p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300 opacity-0 ${
                  visibleSteps.includes(idx) ? "step-card-visible" : ""
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-center gap-8">
                  {/* アイコン */}
                  <div
                    className={`flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center ${
                      visibleSteps.includes(idx) ? "step-icon-visible" : ""
                    }`}
                  >
                    <div className="w-10 h-10">
                      {step.icon}
                    </div>
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                        {step.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* 矢印（最後のカード以外） - 突き刺さるアニメーション */}
              {idx < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <svg
                    className={`w-10 h-10 text-primary animate-arrow-stab-${idx + 1}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: 縦並びカード */}
        <div className="md:hidden space-y-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* カード */}
              <div
                ref={(el) => {
                  stepRefs.current[idx + 4] = el;
                }}
                className={`bg-white/95 backdrop-blur-sm border-2 border-primary/20 rounded-xl p-6 opacity-0 ${
                  visibleSteps.includes(idx + 4) ? "step-card-visible" : ""
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* アイコン */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center ${
                      visibleSteps.includes(idx + 4) ? "step-icon-visible" : ""
                    }`}
                  >
                    <div className="w-7 h-7">
                      {step.icon}
                    </div>
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* 矢印（最後のカード以外） - 突き刺さるアニメーション */}
              {idx < steps.length - 1 && (
                <div
                  ref={(el) => { arrowRefs.current[idx] = el; }}
                  className="flex justify-center py-2"
                >
                  <svg
                    className={`w-8 h-8 text-primary opacity-0 ${
                      visibleArrows.includes(idx) ? `animate-arrow-stab-${idx + 1}` : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
