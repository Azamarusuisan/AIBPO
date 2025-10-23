"use client";
import { useState, useEffect, useRef } from "react";

export default function KpiWall() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const kpis = [
    {
      label: "最短着手",
      value: "当日",
      suffix: "(Pro)",
      neonClass: "kpi-neon-cyan",
      isLarge: true,
      symbol: ">>"
    },
    {
      label: "平均初回応答",
      value: "8-24",
      suffix: "h",
      neonClass: "kpi-neon-blue",
      isLarge: true,
      symbol: "~"
    },
    {
      label: "月内上限",
      value: "5/20/60",
      suffix: "件",
      neonClass: "",
      isLarge: false,
      symbol: "[]"
    },
    {
      label: "回帰不具合率",
      value: "-35",
      suffix: "%",
      neonClass: "kpi-neon-green",
      isLarge: false,
      symbol: "-"
    },
    {
      label: "テストカバレッジ",
      value: "+18",
      suffix: "pt",
      neonClass: "kpi-neon-green",
      isLarge: true,
      symbol: "+"
    },
    {
      label: "継続率",
      value: "90",
      suffix: "%",
      neonClass: "",
      isLarge: false,
      symbol: "="
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
      id="kpi"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Heading & Description */}
          <div className="space-y-6">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-4">
                Performance Metrics
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[var(--text)] leading-tight tracking-tight">
                実績KPI
              </h2>
              <p className="text-base md:text-lg text-[var(--text-2)] leading-relaxed">
                導入後の平均値です。<br />
                スピード、品質、継続率の<br className="hidden sm:inline" />
                すべてにおいて高い成果を<br className="hidden sm:inline" />
                実現しています。
              </p>
            </div>
          </div>

          {/* Right Column - KPI Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-[var(--muted)] bg-white p-5 hover:border-primary hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'kpi-count-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3">
                <span className="inline-block rounded-full bg-[var(--bg-2)] px-3 py-1 text-xs font-medium text-[var(--text-2)]">
                  {kpi.label}
                </span>
              </div>
              <div className="flex items-end gap-1">
                <div className={`text-3xl md:text-4xl font-extrabold tracking-tight font-latin ${
                  kpi.neonClass ? kpi.neonClass.replace('kpi-neon-', 'text-') : 'text-[var(--text)]'
                }`}>
                  {kpi.value}
                </div>
                <div className="text-sm text-[var(--text-2)] pb-1">
                  {kpi.suffix}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
