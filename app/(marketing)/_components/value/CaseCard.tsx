"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CaseCardProps = {
  imageSrc: string;
  imageAlt: string;
  badges: { label: string; tone?: "accent" | "neutral" }[];
  title: string;
  summary: string;
  bullets: { label: "課題" | "対応" | "成果"; text: string }[];
  first?: boolean;
  index?: number;
};

export default function CaseCard({
  imageSrc,
  imageAlt,
  badges,
  title,
  summary,
  bullets,
  first,
  index = 0,
}: CaseCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mx-auto max-w-[1120px] px-4 md:px-6 py-10 md:py-16 transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 md:translate-y-12"
      }`}
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
        {/* 画像 */}
        <figure
          className={`md:col-span-5 transition-all duration-700 delay-200 ease-out ${
            isEven ? "" : "md:order-2"
          } ${
            isVisible
              ? "opacity-100 translate-x-0"
              : isEven
              ? "opacity-0 -translate-x-4 md:-translate-x-8"
              : "opacity-0 translate-x-4 md:translate-x-8"
          }`}
        >
          <div className="group aspect-video md:aspect-[4/3] w-full overflow-hidden rounded-xl md:rounded-2xl bg-gray-50 ring-1 ring-gray-100 hover:ring-gray-200 transition-all duration-300 relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover saturate-[.95] contrast-[.97] group-hover:scale-[1.03] group-hover:saturate-100 transition-all duration-500 ease-out"
              sizes="(min-width: 1024px) 440px, (min-width: 768px) 100vw, 100vw"
              priority={!!first}
            />
          </div>
          <figcaption className="mt-2 md:mt-3 text-xs text-gray-400">
            ※ 参考イメージ
          </figcaption>
        </figure>

        {/* 本文 */}
        <div
          className={`md:col-span-7 transition-all duration-700 delay-300 ease-out ${
            isEven ? "" : "md:order-1"
          } ${
            isVisible
              ? "opacity-100 translate-x-0"
              : isEven
              ? "opacity-0 translate-x-4 md:translate-x-8"
              : "opacity-0 -translate-x-4 md:-translate-x-8"
          }`}
        >
          <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
            {badges.map((b, i) => (
              <span
                key={i}
                className={`transition-all duration-300 hover:scale-105 ${
                  b.tone === "accent"
                    ? "px-3 py-1.5 rounded-full text-sm bg-sky-50 text-sky-600 ring-1 ring-sky-50 hover:bg-sky-100 hover:ring-sky-100"
                    : "px-3 py-1.5 rounded-full text-sm bg-gray-50 text-gray-600 ring-1 ring-gray-50 hover:bg-gray-100"
                }`}
              >
                {b.label}
              </span>
            ))}
          </div>

          <h3 className="text-xl md:text-3xl font-semibold leading-tight text-balance text-gray-800">
            {title}
          </h3>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
            {summary}
          </p>

          <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-7 md:leading-8">
            {bullets.map((b, i) => (
              <li
                key={i}
                className={`transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <b className="text-gray-800 font-semibold">{b.label}：</b>
                {b.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
