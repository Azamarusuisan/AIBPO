"use client";
import React, { useState } from "react";
import Link from "next/link";
import HeroTerminal from "./HeroTerminal";

export default function HeroSplit() {
  const chips = ["初回応答24h", "当日着手（Pro）", "月3万円〜"];
  const [ctaOpen, setCtaOpen] = useState(false);

  // 背景アニメーション用のコードスニペット
  const codeLines = [
    'import { useEffect, useState } from "react";',
    '',
    'export default function Dashboard() {',
    '  const [data, setData] = useState([]);',
    '  const [loading, setLoading] = useState(true);',
    '',
    '  useEffect(() => {',
    '    fetch("/api/analytics")',
    '      .then(res => res.json())',
    '      .then(data => {',
    '        setData(data);',
    '        setLoading(false);',
    '      });',
    '  }, []);',
    '',
    '  if (loading) return <Spinner />;',
    '',
    '  return (',
    '    <div className="container">',
    '      <h1>Analytics Dashboard</h1>',
    '      <Chart data={data} />',
    '    </div>',
    '  );',
    '}',
    '',
    'const API_URL = process.env.NEXT_PUBLIC_API;',
    '',
    'async function fetchUserData(id) {',
    '  const response = await fetch(`${API_URL}/users/${id}`);',
    '  return response.json();',
    '}',
  ];

  return (
    <section className="relative bg-white min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      {/* 背景アニメーション：スクロールするコード（全画面） */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none">
        <div className="absolute inset-0 animate-code-scroll">
          <pre className="font-mono text-sm leading-relaxed text-gray-400 whitespace-pre w-full">
            {codeLines.concat(codeLines).concat(codeLines).map(line =>
              line + '    ' + line + '    ' + line
            ).join('\n')}
          </pre>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 左側：ターミナル */}
          <div className="flex items-center justify-center">
            <HeroTerminal />
          </div>

          {/* 右側：テキストとCTA */}
          <div className="space-y-6">
            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              月3万円から、
              <br />
              "AI人材"をスポットでお届け。
            </h1>

            {/* KPIチップ3つ */}
            <div className="flex flex-wrap gap-3">
              {chips.map((chip, i) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* サブコピー */}
            <p className="text-lg text-gray-700 leading-relaxed">
              課題を送れば、必要なタイミングでAI×エンジニアがスポット対応。自動デバッグで短縮し、最終レビュー（元PM）で品質を確認。完成した変更をそのまま適用できます。
            </p>

            {/* CTA */}
            <div className="max-w-md">
              <div className="rounded-xl border-2 border-primary/30 bg-white overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setCtaOpen(!ctaOpen)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-primary hover:bg-primary/5 transition-colors"
                >
                  <span className="text-lg font-semibold">お問い合わせ・申し込み</span>
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
                  <div className="border-t border-primary/20 bg-primary/5">
                    <Link
                      href="/contact"
                      className="block px-6 py-3 text-base text-gray-900 hover:bg-primary/10 transition-colors border-b border-primary/10"
                      data-cta="hero_consultation"
                      onClick={() => setCtaOpen(false)}
                    >
                      無料相談（最短15分）
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-6 py-3 text-base text-gray-900 hover:bg-primary/10 transition-colors border-b border-primary/10"
                      data-cta="hero_trial"
                      onClick={() => setCtaOpen(false)}
                    >
                      1ヶ月トライアル
                    </Link>
                    <Link
                      href="/audit"
                      className="block px-6 py-3 text-base text-gray-900 hover:bg-primary/10 transition-colors"
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
        </div>
      </div>
    </section>
  );
}
