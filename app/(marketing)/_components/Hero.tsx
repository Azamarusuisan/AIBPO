"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section relative" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl px-6 grid gap-5">
        <h1 id="hero-heading" className="hero-title">
          月3万円から、成果で納品するBPO。
        </h1>
        <p className="hero-sub">
          自社GPU×自動デバッグで速く、最終レビュー(元PM)で確実に。小粒開発を継続納品します。
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <a href="#contact" className="btn-primary px-6 py-3 rounded-xl text-center">
            無料相談(最短15分)
          </a>
          <a href="#plans" className="btn-secondary px-6 py-3 rounded-xl text-center">
            1ヶ月トライアル
          </a>
          <a href="#audit" className="link font-semibold px-2 py-3 hover:underline text-center sm:text-left">
            無料コード健診 →
          </a>
        </div>

        <div className="media rounded-2xl shadow-lg">
          <Image
            src="/bpo-hero.svg"
            alt="スポットエンジニアサービスイメージ"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
