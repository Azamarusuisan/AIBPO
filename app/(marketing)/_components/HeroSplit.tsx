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
      <div className="absolute inset-0 overflow-hidden opacity-[0.08] md:opacity-[0.15] pointer-events-none">
        <div className="absolute inset-0 animate-code-scroll">
          <pre className="font-mono text-sm leading-relaxed text-gray-400 whitespace-pre w-full">
            {codeLines.concat(codeLines).concat(codeLines).map(line =>
              line + '    ' + line + '    ' + line
            ).join('\n')}
          </pre>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 md:py-16 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* 左側：ターミナル（モバイルで上に配置） */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <HeroTerminal />
          </div>

          {/* 右側：テキストとCTA（モバイルで下に配置） */}
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              月3万円から、
              <br />
              "AI人材"をスポットでお届け。
            </h1>

            {/* KPIチップ3つ */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {chips.map((chip, i) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-primary/10 text-primary border border-primary/20"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* サブコピー */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              JavaScript／TypeScript／Python を軸に、フロントエンドからバックエンドまで対応可能なエンジニアを、月額定額で活用できるBPOサービスです。ホームページ運用・業務ツール開発・API連携・自動化など、3D領域以外の幅広い業務をスピーディーにサポートします。
            </p>

            {/* 実績数値 */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-gray-700">
                  <span className="font-bold text-primary num-tabular">50+</span> 導入企業
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-gray-700">
                  <span className="font-bold text-primary num-tabular">1,200+</span> 完成した変更
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-gray-700">
                  <span className="font-bold text-primary num-tabular">4.8/5.0</span> 顧客満足度
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-md relative">
              <button
                type="button"
                onClick={() => setCtaOpen(!ctaOpen)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between text-primary hover:bg-primary/5 transition-colors rounded-xl border-2 border-primary/30 bg-white shadow-sm"
              >
                <span className="text-base sm:text-lg font-semibold">お問い合わせ・申し込み</span>
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
                <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border-2 border-primary/30 bg-white shadow-lg overflow-hidden z-10">
                  <Link
                    href="/contact"
                    className="block px-4 sm:px-6 py-3 text-sm sm:text-base text-gray-900 hover:bg-primary/5 transition-colors border-b border-primary/10"
                    data-cta="hero_consultation"
                    onClick={() => setCtaOpen(false)}
                  >
                    無料相談（最短15分）
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 sm:px-6 py-3 text-sm sm:text-base text-gray-900 hover:bg-primary/5 transition-colors border-b border-primary/10"
                    data-cta="hero_trial"
                    onClick={() => setCtaOpen(false)}
                  >
                    1ヶ月トライアル
                  </Link>
                  <Link
                    href="/audit"
                    className="block px-4 sm:px-6 py-3 text-sm sm:text-base text-gray-900 hover:bg-primary/5 transition-colors"
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
    </section>
  );
}
