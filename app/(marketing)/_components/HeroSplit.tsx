"use client";
import React from "react";
import Link from "next/link";
import HeroTerminal from "./HeroTerminal";

export default function HeroSplit() {
  const chips = ["AI活用で開発時間1/3", "デバッグ自動化", "月3万円〜"];

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
    <section className="relative bg-white min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
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
            {/* H1 - 新しいタイポグラフィスケール */}
            <h1 className="h1 text-gray-900">
              エンジニアがいなくても、
              <br />
              <span className="mark-brand">AI</span>があれば、開発できる。
            </h1>

            {/* KPIチップ3つ */}
            <div className="flex flex-wrap gap-x-2 gap-y-2.5 sm:gap-3">
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
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
              「営業ツールを作りたい」「ブログを始めたい」「業務を自動化したい」
              <br className="hidden sm:block" />
              でも、エンジニアを採用する余裕はない。フリーランスに頼むと、高くて遅い。
            </p>
            <p className="text-base md:text-lg text-gray-900 leading-relaxed font-medium">
              私たちは、最新のAIツール（<span className="mark-term">Claude・Cursor・GitHub Copilot</span>）を駆使して、従来の<span className="mark-stat">1/3</span>の時間とコストで開発します。
              <br className="hidden sm:block" />
              <span className="mark-emphasis">DB設計は数時間</span>。<span className="mark-emphasis">デバッグは自動化</span>。<span className="mark-stat">月3万円</span>から、エンジニアがいなくても開発という機能を手に入れられます。
            </p>

            {/* 実績数値 */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-base">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-gray-700 font-normal">
                  <span className="font-title text-primary tabular-nums">50+</span> 導入企業
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-gray-700 font-normal">
                  <span className="font-title text-primary tabular-nums">1,200+</span> 完成した変更
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-gray-700 font-normal">
                  <span className="font-title text-primary tabular-nums">4.8/5.0</span> 顧客満足度
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-md">
              <Link
                href="/contact"
                className="w-full px-6 py-4 text-center flex items-center justify-center text-white bg-primary hover:bg-primary-hover transition-all rounded-xl shadow-lg font-title text-base md:text-lg"
                data-cta="hero_contact"
              >
                無料相談・お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
