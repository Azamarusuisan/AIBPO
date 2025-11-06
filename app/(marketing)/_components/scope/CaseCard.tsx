"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Bullet = {
  label: string;
  text: string;
};

type CaseCardProps = {
  badge: string;
  imageSrc: string;
  imageAlt: string;
  badges: string[];
  title: string;
  summary: string;
  bullets: Bullet[];
  priority?: boolean;
  index?: number;
};

export default function CaseCard({
  badge,
  imageSrc,
  imageAlt,
  badges,
  title,
  summary,
  bullets,
  priority = false,
  index = 0,
}: CaseCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`grid md:grid-cols-12 gap-6 md:gap-8 items-start rounded-2xl bg-white ring-1 ring-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0"
          : isEven
          ? "opacity-0 -translate-x-12"
          : "opacity-0 translate-x-12"
      }`}
    >
      {/* 左：画像 */}
      <figure className="md:col-span-5">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200 shadow-sm relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
            priority={priority}
          />
        </div>
      </figure>

      {/* 右：本文 */}
      <div className="md:col-span-7">
        {/* 数値バッジ */}
        <div className="inline-block px-3 py-1.5 rounded-full text-sm font-bold bg-sky-50 text-sky-700 ring-1 ring-sky-100 mb-3">
          {badge}
        </div>

        {/* メタ情報 */}
        <div className="flex flex-wrap gap-2 mb-3">
          {badges.map((b, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700 ring-1 ring-slate-200"
            >
              {b}
            </span>
          ))}
        </div>

        {/* 見出し */}
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900 mb-3">
          {title}
        </h3>

        {/* 要約 */}
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4">
          {summary}
        </p>

        {/* 箇条書き */}
        <ul className="space-y-2.5 text-base md:text-lg text-slate-700 leading-7">
          {bullets.map((b, i) => (
            <li key={i}>
              <b className="text-gray-900 font-semibold">{b.label}：</b>
              {b.text}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
