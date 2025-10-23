import type { Metadata } from "next";
import { inter, zenkaku } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI加速型BPO/SES | 月額3万円から、社内に使えるエンジニアを",
  description:
    "自社GPU×自動デバッグで、人は難所に集中。小さく速く、確実に。納期急ぎ歓迎、その場で概算、NDA可。",
  keywords: [
    "BPO",
    "SES",
    "AI開発",
    "GPU",
    "自動デバッグ",
    "エンジニア外注",
    "システム開発",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenkaku.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
