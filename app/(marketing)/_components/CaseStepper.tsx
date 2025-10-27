"use client";
import { useState } from "react";
import Image from "next/image";

export type Step = {
  key: string;
  title: string;
  desc?: string;
  src: string;
  alt: string;
};

export default function CaseStepper({
  steps,
  heading = "具体的な事例"
}: {
  steps: Step[];
  heading?: string;
}) {
  const [active, setActive] = useState(steps[0]?.key);
  const current = steps.find(s => s.key === active) ?? steps[0];

  return (
    <section className="mx-auto max-w-6xl px-4 py-4">
      {heading && <h3 className="text-xl font-semibold tracking-tight mb-4">{heading}</h3>}

      <div className="rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-white">
        {/* 画像表示エリア */}
        <div className="relative aspect-[16/9]">
          <Image
            key={current?.src}
            src={current?.src}
            alt={current?.alt || current?.title || "事例画像"}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
            priority
          />
        </div>

        {/* 選択中の説明 */}
        <div className="p-4 bg-gray-50 border-b border-black/5">
          <div className="text-sm font-bold text-gray-900 mb-1">{current?.title}</div>
          <p className="text-xs text-gray-600 leading-relaxed">{current?.desc}</p>
        </div>

        {/* コンパクトなタブ形式ステップボタン */}
        <div className="flex border-t border-black/5">
          {steps.map((s, idx) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`flex-1 py-3 px-2 text-xs font-medium transition-colors min-h-[44px] flex items-center justify-center gap-1
                ${active === s.key
                  ? "bg-[var(--primary)] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"}`}
              aria-current={active === s.key ? "step" : undefined}
            >
              <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold
                ${active === s.key ? "bg-white text-[var(--primary)]" : "bg-gray-200"}`}
              >
                {idx + 1}
              </span>
              <span className="hidden sm:inline">{s.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
