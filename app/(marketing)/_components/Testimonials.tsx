"use client";
import { useState } from "react";
import UserAvatar from "./UserAvatar";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "社内エンジニアが新規開発に集中できるようになり、運用タスクの消化速度が3倍になりました。月額固定なので予算管理もしやすく、経営層への説明も簡単です。",
      author: "田中 太郎",
      position: "CTO",
      company: "株式会社テックスタート",
      industry: "SaaS",
      employees: "従業員50名",
      achievement: "運用タスク消化速度 3倍",
      rating: 5
    },
    {
      quote: "オフショア開発での品質問題に悩んでいましたが、スポットエンジニアは日本語でのコミュニケーションがスムーズで、仕様の行き違いがほぼゼロになりました。",
      author: "鈴木 花子",
      position: "開発部長",
      company: "株式会社デジタルソリューションズ",
      industry: "受託開発",
      employees: "従業員30名",
      achievement: "品質不具合 80%削減",
      rating: 5
    },
    {
      quote: "小規模な改善を継続的に積み上げられる体制が整い、ユーザーからの要望に素早く応えられるようになりました。初回応答24時間は本当に助かっています。",
      author: "佐藤 一郎",
      position: "プロダクトマネージャー",
      company: "株式会社グロースウェア",
      industry: "Webサービス",
      employees: "従業員20名",
      achievement: "機能改善サイクル 2週間→3日",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            お客様の声
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            導入企業から高い評価をいただいています
          </p>
        </div>

        {/* モバイル：カルーセル */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 shadow-lg border-2 border-primary/20 min-h-[400px] flex flex-col">
              {/* 星評価 */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* 引用文 */}
              <blockquote className="text-base text-gray-700 leading-relaxed mb-6 flex-grow">
                「{testimonials[activeIndex].quote}」
              </blockquote>

              {/* 著者情報 */}
              <div className="border-t border-gray-200 pt-4">
                <div className="mb-3">
                  <UserAvatar
                    name={testimonials[activeIndex].author}
                    role={`${testimonials[activeIndex].position} / ${testimonials[activeIndex].company}`}
                    size="lg"
                    colorScheme="blue"
                  />
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">
                    {testimonials[activeIndex].industry}
                  </span>
                  <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">
                    {testimonials[activeIndex].employees}
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                    {testimonials[activeIndex].achievement}
                  </span>
                </div>
              </div>
            </div>

            {/* ドットインジケーター */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-primary" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`お客様の声 ${index + 1} に移動`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* デスクトップ：グリッド表示 */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 flex flex-col"
            >
              {/* 星評価 */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* 引用文 */}
              <blockquote className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                「{item.quote}」
              </blockquote>

              {/* 著者情報 */}
              <div className="border-t border-gray-200 pt-4">
                <div className="mb-3">
                  <UserAvatar
                    name={item.author}
                    role={`${item.position} / ${item.company}`}
                    size="md"
                    colorScheme={index === 0 ? "blue" : index === 1 ? "green" : "purple"}
                  />
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">
                    {item.industry}
                  </span>
                  <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">
                    {item.employees}
                  </span>
                </div>
                <div className="mt-2 text-xs font-semibold text-primary">
                  ✓ {item.achievement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
