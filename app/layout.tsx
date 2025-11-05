import type { Metadata } from "next";
import { Inter, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

// 欧文フォント（Inter）
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 和文フォント（Zen Kaku Gothic New）
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "エンジニアがいなくても、AIがあれば開発できる | 月3万円から、AI活用開発BPO",
  description:
    "AI活用で開発時間を1/3に短縮。DB設計は2時間、デバッグは自動化。エンジニア不在企業でも、月3万円から開発という機能を手に入れられます。Claude・Cursor・GitHub Copilot等の最新AIツールを駆使して、従来の1/3の時間とコストで開発をお届けします。",
  keywords: [
    "AI開発",
    "BPO",
    "エンジニア外注",
    "開発支援",
    "AI活用",
    "Claude",
    "Cursor",
    "GitHub Copilot",
    "自動デバッグ",
    "DB設計",
    "システム開発",
    "納品物",
    "低コスト開発",
  ],
  openGraph: {
    title: "エンジニアがいなくても、AIがあれば開発できる",
    description: "AI活用で開発時間1/3。DB設計2時間、デバッグ自動化。月3万円から、最新AIツールで開発をお届け。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aibpo.onrender.com/#organization",
        name: "スポットエンジニア",
        url: "https://aibpo.onrender.com",
        logo: {
          "@type": "ImageObject",
          url: "https://aibpo.onrender.com/company-logo.png",
        },
        description: "AI活用で開発時間を1/3に短縮。エンジニア不在企業向けの開発BPOサービス。",
      },
      {
        "@type": "WebSite",
        "@id": "https://aibpo.onrender.com/#website",
        url: "https://aibpo.onrender.com",
        name: "エンジニアがいなくても、AIがあれば開発できる",
        publisher: {
          "@id": "https://aibpo.onrender.com/#organization",
        },
      },
      {
        "@type": "Service",
        "@id": "https://aibpo.onrender.com/#service",
        serviceType: "AI活用開発BPO",
        provider: {
          "@id": "https://aibpo.onrender.com/#organization",
        },
        areaServed: "JP",
        description: "Claude・Cursor・GitHub Copilot等の最新AIツールを駆使して、DB設計2時間、デバッグ自動化で従来の1/3の時間とコストで開発をお届けします。",
        offers: {
          "@type": "Offer",
          price: "30000",
          priceCurrency: "JPY",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "30000",
            priceCurrency: "JPY",
            unitText: "月額",
          },
        },
      },
    ],
  };

  return (
    <html lang="ja" className={`${inter.variable} ${zenKakuGothicNew.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
