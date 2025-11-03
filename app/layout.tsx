import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "スポットエンジニア | 月3万円から、AI人材をスポットでお届け",
  description:
    "課題を送れば、必要なタイミングでAI×エンジニアがスポット対応。自動デバッグで短縮し、最終レビュー（元PM）で品質を確認。納品物をそのまま適用できます。",
  keywords: [
    "BPO",
    "スポット対応",
    "AI人材",
    "エンジニア外注",
    "開発支援",
    "自動デバッグ",
    "システム開発",
    "納品物",
  ],
  openGraph: {
    title: "スポットエンジニア | 月3万円から、AI人材をスポットでお届け",
    description: "課題を送れば、必要なタイミングでAI×エンジニアがスポット対応。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans">{children}</body>
    </html>
  );
}
