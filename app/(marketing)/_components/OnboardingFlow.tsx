"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OnboardingFlow() {
  const steps = [
    {
      number: "01",
      title: "お問い合わせ",
      subtitle: "お電話・WEBフォームでのお問い合わせ",
      description: "お問い合わせフォームより、必須事項をご入力・ご送信ください。「お問い合わせ受付」メールが自動送付されますのでご確認ください。",
      image: "/images/onboarding-step-1.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "ご相談内容のヒアリング",
      subtitle: "Zoom・電話にてヒアリング",
      description: "Zoom・電話にてヒアリングを行います。お客様のご要望・運用状況・ご予算等の詳細をお伺いします。",
      image: "/images/onboarding-step-2.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "作業範囲の確認",
      subtitle: "最適なプランをご提案",
      description: "ヒアリングしたご希望を元に、現状の環境や要件を確認し、ご希望に沿ったプランをご提案します。",
      image: "/images/onboarding-step-3.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "04",
      title: "お申し込み（ご発注）",
      subtitle: "正式なお申し込み",
      description: "お見積書をご確認頂き、正式にお申し込み（ご発注）を頂きます。通常、お申し込みから1週間程度でサービス開始となります。",
      image: "/images/onboarding-step-4.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "サービスのご利用開始",
      subtitle: "開発支援スタート",
      description: "サービス利用の開始となります。お客様専用のSlackチャンネルを開設し、迅速なコミュニケーションを実現します。",
      image: "/images/onboarding-step-5.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "06",
      title: "定期的なご報告・ご相談",
      subtitle: "継続的なサポート",
      description: "月次レポートで進捗を共有し、必要に応じて改善提案を行います。Slackでいつでもご相談いただけます。",
      image: "/images/onboarding-step-6.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // 1から開始（0番目はクローン）
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 無限ループ用の拡張配列（最後と最初のクローンを追加）
  const extendedSteps = [steps[steps.length - 1], ...steps, steps[0]];

  // 自動回転
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // クローン分の+1
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  // トランジション終了後の処理
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(steps.length);
    } else if (currentIndex === extendedSteps.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* 見出し */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-accent text-white rounded-full text-base font-bold mb-4 shadow-lg">
            最短7営業日でサービス開始します
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            導入までの流れ
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            お問い合わせから開始までスムーズに進めます
          </p>
        </div>

        {/* モバイル：カルーセル */}
        <div className="md:hidden">
          <div className="relative">
            {/* カード */}
            <div className="overflow-hidden">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: isTransitioning ? 'transform 300ms ease-out' : 'none'
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedSteps.map((step, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary/20">
                      {/* 画像セクション */}
                      {step.image && (
                        <div className="mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-4 flex items-center justify-center">
                          <div className="relative w-full h-48 flex items-center justify-center">
                            <Image
                              src={step.image}
                              alt={step.title}
                              width={400}
                              height={400}
                              className="object-contain w-auto h-full"
                              sizes="100vw"
                              loading={index <= 1 ? "eager" : "lazy"}
                              priority={index === 1}
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm text-primary font-semibold">
                            {step.subtitle}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ナビゲーションボタン */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 z-10"
              aria-label="前へ"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 z-10"
              aria-label="次へ"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* インジケーター（ドット） */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => {
              const isActive = (currentIndex === index + 1) ||
                               (currentIndex === 0 && index === steps.length - 1) ||
                               (currentIndex === steps.length + 1 && index === 0);
              return (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`${index + 1}番目のステップを表示`}
                />
              );
            })}
          </div>
        </div>

        {/* デスクトップ：ジグザグレイアウト */}
        <div className="hidden md:block relative">
          {/* 中央の縦線 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-accent transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                {/* コンテンツ */}
                <div className="flex-1">
                  <div
                    className={`bg-white rounded-xl p-6 shadow-lg border-2 border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    }`}
                  >
                    {/* 画像セクション */}
                    {step.image && (
                      <div className="mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-4 flex items-center justify-center">
                        <div className="relative w-full h-48 flex items-center justify-center">
                          <Image
                            src={step.image}
                            alt={step.title}
                            width={400}
                            height={400}
                            className="object-contain w-auto h-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading={index > 1 ? "lazy" : "eager"}
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-primary font-semibold">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* 中央の番号 */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* 反対側のスペーサー */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-8 shadow-lg border-2 border-primary/30">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            まずはお気軽にご相談ください
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            お客様のご要望に合わせて、最適なプランをご提案いたします
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            data-cta="onboarding_flow_contact"
          >
            無料相談を申し込む
          </Link>
        </div>
      </div>
    </section>
  );
}
