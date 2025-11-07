"use client";
import { useState, useRef } from "react";

export default function ThreeReasons() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            選ばれる3つの理由
          </h2>
          <p className="text-xl text-gray-600">
            経営者様の課題を、シンプルに解決します
          </p>
        </div>

        {/* インタラクティブ比較スライダー */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              コストを比較してみましょう
            </h3>
            <p className="text-lg text-gray-600">
              スライダーを左右に動かして比較できます
            </p>
          </div>

          <div
            ref={sliderRef}
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* Before: 従来の採用 */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-500 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-bold text-red-900 mb-4">従来の採用</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 bg-white/80 rounded-lg p-4">
                      <span className="text-2xl">💸</span>
                      <div>
                        <p className="font-bold text-red-900">採用コスト</p>
                        <p className="text-red-700">数百万円〜</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/80 rounded-lg p-4">
                      <span className="text-2xl">📢</span>
                      <div>
                        <p className="font-bold text-red-900">広告・手数料</p>
                        <p className="text-red-700">10万円〜350万円</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/80 rounded-lg p-4">
                      <span className="text-2xl">📚</span>
                      <div>
                        <p className="font-bold text-red-900">教育費用</p>
                        <p className="text-red-700">10万円〜50万円</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After: スポットエンジニア */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-bold text-green-900 mb-4">スポットエンジニア</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 bg-white/80 rounded-lg p-4">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="font-bold text-green-900">月額費用のみ</p>
                        <p className="text-green-700">月3万円〜</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/80 rounded-lg p-4">
                      <span className="text-2xl">✅</span>
                      <div>
                        <p className="font-bold text-green-900">採用不要</p>
                        <p className="text-green-700">すぐに開始可能</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/80 rounded-lg p-4">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-bold text-green-900">柔軟な調整</p>
                        <p className="text-green-700">必要な分だけ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* スライダーハンドル */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* メインフロー図 */}
        <div className="mb-16">
          <div className="relative">
            {/* フロー */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* 企業（お悩み） */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-red-200 relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-red-50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">企業様</h3>
                  <p className="text-sm text-gray-600">
                    コスト高<br />
                    専門知識なし<br />
                    作業量不安定
                  </p>
                </div>
              </div>

              {/* 矢印 */}
              <div className="hidden md:flex justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* 弊社PM */}
              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 shadow-lg relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">弊社PM</h3>
                  <p className="text-sm text-white/90">
                    課題整理<br />
                    指示代行<br />
                    品質管理
                  </p>
                </div>
              </div>

              {/* 矢印 */}
              <div className="hidden md:flex justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* 成果 */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200 relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">成果物</h3>
                  <p className="text-sm text-gray-600">
                    コスト削減<br />
                    運用負担軽減<br />
                    柔軟な対応
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3つの理由カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 01 経費削減 */}
          <div
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary group"
            style={{
              transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
              transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out"
            }}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = (y - centerY) / 10;
              const rotateY = (centerX - x) / 10;
              card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
            }}
          >
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                01
              </div>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                経費削減
              </h3>
              <p className="text-3xl font-bold text-green-600 mb-3">
                月3万円〜
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                採用コスト・広告費・教育費用は一切不要。必要な分だけ、明瞭な価格で。
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-semibold">
                  採用活動: 数百万円 → 0円
                </p>
              </div>
            </div>
          </div>

          {/* 02 負担軽減 */}
          <div
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary group"
            style={{
              transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
              transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out"
            }}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = (y - centerY) / 10;
              const rotateY = (centerX - x) / 10;
              card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
            }}
          >
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                02
              </div>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                負担軽減
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-3">
                PM代行
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                専門知識不要。弊社PMが企業様とエンジニアの橋渡しを担当します。
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-semibold">
                  技術的な指示 → PMにお任せ
                </p>
              </div>
            </div>
          </div>

          {/* 03 柔軟対応 */}
          <div
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary group"
            style={{
              transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
              transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out"
            }}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = (y - centerY) / 10;
              const rotateY = (centerX - x) / 10;
              card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
            }}
          >
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                03
              </div>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                柔軟対応
              </h3>
              <p className="text-3xl font-bold text-purple-600 mb-3">
                月単位調整
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                作業量が不安定でもOK。必要な時だけ、必要な分だけ利用可能。
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-semibold">
                  最低契約期間なし、自由に調整
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* まとめ */}
        <div className="mt-12 bg-white rounded-2xl p-8 md:p-10 border-2 border-primary shadow-lg">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full shadow-md mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">だから選ばれています</span>
            </div>
            <p className="text-xl text-gray-700">
              スポットエンジニアなら、コストを抑えながら、専門知識不要で、柔軟に開発を進められます
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
