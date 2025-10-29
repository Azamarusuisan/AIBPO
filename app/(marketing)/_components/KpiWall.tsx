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
      className="section"
      id="kpi"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          実績KPI
        </h2>
        <p className="text-[var(--text-2)] mb-8 text-sm sm:text-base">
          導入後の平均値です。スピード、品質、継続率のすべてにおいて高い成果を実現しています。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-primary/20 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                isVisible ? 'kpi-count-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3">
                <span className="text-sm font-semibold text-primary">
                  {kpi.label}
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <div className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
                  kpi.neonClass ? 'text-accent' : 'text-primary'
                }`}>
                  {kpi.value}
                </div>
                <div className="text-base text-[var(--text-2)]">
                  {kpi.suffix}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
