"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroTerminal from "./HeroTerminal";

export default function HeroSplit() {
  const chips = ["初回応答24h", "当日着手（Pro）", "月3万円〜"];
  const [ctaOpen, setCtaOpen] = useState(false);

  return (
    <section className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-2xl bg-background shadow-sm">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#0b2f5a] to-[#061a30] opacity-0 md:opacity-100 pointer-events-none" />

      {/* 粒子アニメーション（任意） */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] animate-pulse-slow hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: white background with terminal overlay */}
        <div className="relative min-h-[260px] md:min-h-[420px] flex items-center justify-center bg-white">
          {/* Terminal Overlay - Desktop only */}
          <div className="hidden md:block flex items-center justify-center z-10">
            <HeroTerminal />
          </div>
        </div>
        {/* Right: dark panel */}
        <div className="relative flex items-center bg-[var(--heroPanel)] p-8 text-white md:p-12">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl hero-fade-up">
              月3万円から、"完成した変更"を毎月お届け。
            </h1>

            {/* KPIチップ3つ */}
            <div className="mt-3 flex flex-wrap gap-2">
              {chips.map((chip, i) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-sm hero-chip-fade"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  {chip}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm opacity-90 leading-relaxed hero-fade-up" style={{ animationDelay: "0.25s" }}>
              課題を送れば、必要なタイミングでAI×エンジニアがスポット対応。自動デバッグで短縮し、最終レビュー（元PM）で品質を確認。完成した変更をそのまま適用できます。
            </p>

            <div className="mt-6 hero-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setCtaOpen(!ctaOpen)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between text-white hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm font-semibold">お問い合わせ・申し込み</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${ctaOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {ctaOpen && (
                  <div className="border-t border-white/20 bg-white/5">
                    <Link
                      href="/audit"
                      className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors border-b border-white/10"
                      data-cta="hero_primary"
                      onClick={() => setCtaOpen(false)}
                    >
                      無料相談（最短15分）
                    </Link>
                    <Link
                      href="/audit"
                      className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors border-b border-white/10"
                      data-cta="hero_trial"
                      onClick={() => setCtaOpen(false)}
                    >
                      1ヶ月トライアル
                    </Link>
                    <Link
                      href="/audit"
                      className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                      data-cta="hero_audit"
                      onClick={() => setCtaOpen(false)}
                    >
                      無料コード健診
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Decorative angled strip */}
          <div className="pointer-events-none absolute -left-8 top-0 hidden h-full w-8 rotate-6 bg-primary/70 md:block" aria-hidden />
        </div>
      </div>

      {/* Terminal - Mobile: below dark panel */}
      <div className="md:hidden px-4 py-6 bg-gray-50">
        <HeroTerminal />
      </div>
    </section>
  );
}
