"use client";
import Image from "next/image";
import { useState } from "react";

export default function PMProfile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-12 md:py-16" id="founder">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          代表メッセージ
        </h2>
        <p className="text-[var(--text-2)] mb-6 text-lg md:text-xl font-medium">
          実績あるプロフェッショナルが、最新技術と実務経験を融合させた開発支援を提供します。
        </p>

        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 md:p-8 shadow-sm">
          <div className="grid md:grid-cols-[320px_1fr] gap-6 items-start">
            {/* 左: 画像 */}
            <div className="mx-auto md:mx-0">
              <div className="relative w-64 h-80 md:w-full md:h-auto md:aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary/20">
                <Image
                  src="/shimizu2.jpg"
                  alt="清水望 - 共同設立者"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  quality={85}
                  priority={false}
                />
              </div>
            </div>

            {/* 右: プロフィール */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  清水 望
                </h3>
                <p className="text-sm md:text-base text-[var(--text-2)] mb-2 font-medium">
                  NOZOMU SHIMIZU
                </p>
                <p className="text-base md:text-lg font-bold text-[var(--text-1)] mb-3">
                  共同設立者 / CO-FOUNDER & BOARD DIRECTOR
                </p>

                {/* アコーディオンボタン（モバイルのみ） */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden w-full flex items-center justify-between py-3 px-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors mt-3"
                >
                  <span className="text-base font-bold text-primary">
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
                <div className={`${isOpen ? 'block' : 'hidden'} md:block mt-3 space-y-3`}>
                  <p className="text-[var(--text-2)] leading-relaxed text-base md:text-lg font-medium">
                    18歳で光通信入社後、営業として実績を積む。26歳でラストワンマイルを創業し、2021年に東証グロース市場に上場。営業経験と起業経験を活かし、ギブファーストの理念のもと、新しい価値創造に取り組んでいる。
                  </p>
                  <p className="text-primary font-bold italic text-sm md:text-base">
                    「『ギブファースト』—まず与えることから始める。この姿勢が信頼を生み、ポジティブな循環を創る。」
                  </p>

                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <h4 className="font-bold text-base md:text-lg mb-3 text-primary">私たちの強み</h4>
                    <p className="text-sm md:text-base text-[var(--text-2)] leading-relaxed mb-3 font-medium">
                      <strong className="text-primary font-bold">自社NVIDIA最高GPUで自動化：</strong>
                      自社でNVIDIAの最高GPUを有しており、そこで完全自動バグ修正システムを自社開発しているため、工数削減と費用削減が実現され相場よりお安く提供できます。
                    </p>
                    <p className="text-sm md:text-base text-[var(--text-2)] leading-relaxed font-medium">
                      <strong className="text-primary font-bold">実務経験豊富な人材：</strong>
                      単なる派遣ではなく、実際のプロジェクト経験を積んだエンジニアとPMが対応。現場で即戦力となる実務スキルを持つプロフェッショナルを配置し、確実な成果物をお届けします。
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
