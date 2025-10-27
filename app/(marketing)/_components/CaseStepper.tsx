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
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h3 className="text-2xl font-semibold tracking-tight mb-6">{heading}</h3>

      <div className="grid grid-cols-1 gap-6">
        {/* ステップ一覧（モバイル） */}
        <ol className="space-y-3">
          {steps.map((s, idx) => (
            <li key={s.key}>
              <button
                onClick={() => setActive(s.key)}
                className={`w-full text-left rounded-xl border p-4 transition-all duration-200 min-h-[44px]
                  ${active === s.key
                    ? "border-[var(--primary)] bg-[var(--primary)]/5 shadow-sm"
                    : "border-black/10 bg-white hover:border-[var(--primary)]/30"}`}
                aria-current={active === s.key ? "step" : undefined}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                    ${active === s.key
                      ? "bg-[var(--primary)] text-white"
                      : "bg-gray-200 text-gray-600"}`}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{s.title}</div>
                    {s.desc && <p className="text-xs text-gray-600 mt-1 leading-relaxed">{s.desc}</p>}
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ol>

        {/* 画像表示エリア */}
        <div className="rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-white">
          <div className="relative aspect-[4/3]">
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
          <div className="p-4 bg-gray-50">
            <div className="text-sm font-medium text-gray-700">
              選択中：{current?.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
