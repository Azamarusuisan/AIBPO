"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function NavigationCards() {
  const cards = [
    {
      title: "提供価値",
      description: "AI×GPUで人の時間を削る",
      href: "/#value",
      image: "/事例カード.jpg",
    },
    {
      title: "プラン",
      description: "月3万円から、件数ベース",
      href: "/plans",
      image: "/プラン.jpg",
    },
    {
      title: "対応範囲",
      description: "小粒開発を継続納品",
      href: "/#scope",
      image: "/対応範囲.jpg",
    },
    {
      title: "FAQ",
      description: "よくある質問",
      href: "/faq",
      image: "/FAQ.jpg",
    },
    {
      title: "お問い合わせ",
      description: "無料相談（最短15分）",
      href: "/contact",
      image: "/お問合せ.jpg",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // スクロール位置の監視
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newSlide = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newSlide);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
  };

  return (
    <section className="section pt-16 md:pt-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* モバイル：スライド形式 */}
        <div className="md:hidden">
          {/* スワイプヒント */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>スワイプして見る</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* カルーセル */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className="flex-shrink-0 w-full snap-center group block rounded-2xl border-2 border-primary/20 overflow-hidden shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ドットインジケーター */}
          <div className="flex justify-center gap-2 mt-4">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-300'
                }`}
                aria-label={`スライド ${index + 1} に移動`}
              />
            ))}
          </div>
        </div>

        {/* デスクトップ：ピラミッド型レイアウト */}
        <div className="hidden md:block space-y-6">
          {/* 上段：2つのカード（中央寄せ） */}
          <div className="flex justify-center gap-6">
            <div className="w-full max-w-md">
              <a
                href={cards[0].href}
                className="group block rounded-2xl border-2 border-primary/20 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={cards[0].image}
                    alt={cards[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:underline">
                      {cards[0].title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {cards[0].description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full max-w-md">
              <a
                href={cards[1].href}
                className="group block rounded-2xl border-2 border-primary/20 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={cards[1].image}
                    alt={cards[1].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:underline">
                      {cards[1].title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {cards[1].description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* 下段：3つのカード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.slice(2).map((card, i) => (
              <a
                key={i + 2}
                href={card.href}
                className="group block rounded-2xl border-2 border-primary/20 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:underline">
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
