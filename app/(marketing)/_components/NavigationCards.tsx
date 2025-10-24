import Image from "next/image";

export default function NavigationCards() {
  const cards = [
    {
      title: "提供価値",
      description: "AI×GPUで人の時間を削る",
      href: "/value",
      image: "/A_realistic_photograph_from_behind_showing_a_Japan-1761286179308.png",
    },
    {
      title: "プラン",
      description: "月3万円から、件数ベース",
      href: "/plans",
      image: "/プラン.png",
    },
    {
      title: "対応範囲",
      description: "小粒開発を継続納品",
      href: "/scope",
      image: "/対応範囲.png",
    },
    {
      title: "FAQ",
      description: "よくある質問",
      href: "/faq",
      image: "/FAQ.png",
    },
    {
      title: "お問い合わせ",
      description: "無料相談（最短15分）",
      href: "/contact",
      image: "/お問合せ.png",
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* ピラミッド型レイアウト：上段2つ（中央寄せ）+ 下段3つ */}
        <div className="space-y-6">
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
                  {/* 暗いオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  {/* テキストオーバーレイ */}
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
                  {/* 暗いオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  {/* テキストオーバーレイ */}
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
                  {/* 暗いオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  {/* テキストオーバーレイ */}
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
    </section>
  );
}
