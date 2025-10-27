"use client";
import Image from "next/image";
import { useState } from "react";

export default function EngineeringLead() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section" id="pm" style={{ backgroundColor: 'var(--background-alt)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          最終レビュー担当PM
        </h2>
        <p className="text-[var(--text-2)] mb-8 text-sm sm:text-base">
          すべての完成した変更は、元PMによる最終レビューを経て返却されます。
        </p>

        <div className="bg-white rounded-2xl border border-primary/20 p-8 shadow-sm">
          <div className="grid md:grid-cols-[400px_1fr] gap-8 items-start">
            {/* 左: 画像 */}
            <div className="mx-auto md:mx-0">
              <div className="relative w-80 h-96 md:w-full md:h-auto md:aspect-[4/5] rounded-2xl overflow-hidden border-4 border-primary/20">
                <Image
                  src="/pm-profile.jpg"
                  alt="藤田春菜 - エンジニアリング担当"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '30% 35%' }}
                  sizes="(max-width: 768px) 320px, 400px"
                  quality={85}
                  priority={false}
                />
              </div>
            </div>

            {/* 右: プロフィール */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                  藤田 春菜
                </h3>
                <p className="text-xs text-[var(--text-2)] mb-1">
                  HARUNA FUJITA
                </p>
                <p className="text-sm font-semibold text-[var(--text-1)] mb-2">
                  エンジニアリング担当 / ENGINEERING LEAD
                </p>

                {/* アコーディオンボタン（モバイルのみ） */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden w-full flex items-center justify-between py-3 px-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors mt-3"
                >
                  <span className="text-sm font-semibold text-primary">
                    {isOpen ? '詳細を閉じる' : '詳細を見る'}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* 詳細コンテンツ */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:block mt-3 space-y-4`}>
                  <p className="text-[var(--text-2)] leading-relaxed text-sm">
                    東京大学工学部機械情報工学科を卒業後、ベトナムでオフショア開発のプロジェクトマネージャーとして経験を積み、株式会社ZETTAIに参画。グローバルな開発チームを率いた経験と技術への深い理解を武器に、ZETTAIのエンジニアリング組織を牽引している。
                  </p>
                  <p className="text-primary font-semibold italic text-xs md:text-sm">
                    「技術で社会を変え、世界をつなぐ。」
                  </p>

                  <div>
                    <h4 className="font-bold text-base mb-2 text-[var(--text-1)]">専門分野</h4>
                    <ul className="space-y-2 text-[var(--text-2)] text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">✓</span>
                        <span>プロジェクトマネジメント</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">✓</span>
                        <span>オフショア開発</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">✓</span>
                        <span>エンジニアリング・技術戦略</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-base mb-2 text-[var(--text-1)]">主要実績</h4>
                    <ul className="space-y-2 text-[var(--text-2)] text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>東京大学工学部機械情報工学科卒業</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>ベトナムでオフショア開発PM経験</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>グローバル開発体制の構築</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>ZETTAIエンジニアリング組織の立ち上げ</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 bg-primary/5 rounded-xl border border-primary/20">
                    <p className="text-xs text-[var(--text-2)] leading-relaxed">
                      <strong className="text-primary">最終レビューの役割：</strong>
                      すべての「完成した変更」は藤田による最終レビューを経て返却されます。アーキテクチャ判断、実装の難所確認、受入基準（ビルドOK / テスト合格 / ロールバック手順）のチェックを通じて、品質を担保しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
