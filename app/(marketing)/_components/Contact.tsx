"use client";
import { useState } from "react";

export default function Contact() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [typeOpen, setTypeOpen] = useState(false);

  return (
    <section className="section" id="contact">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          無料相談(最短15分)
        </h2>
        <p className="text-[var(--text-2)] mt-2 text-sm sm:text-base">
          壁打ち歓迎(GPT/エンジニア同席)。その場で概算お出しします。
        </p>
        <form className="grid gap-3 sm:gap-4 mt-4 sm:mt-6">
          <input
            placeholder="お名前 *"
            className="border rounded-lg p-3 sm:p-3.5 text-sm sm:text-base border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
          <input
            type="email"
            placeholder="メールアドレス *"
            className="border rounded-lg p-3 sm:p-3.5 text-sm sm:text-base border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
          <div className="relative">
            <div className="border rounded-lg border-[var(--muted)] bg-white">
              <button
                type="button"
                onClick={() => setTypeOpen(!typeOpen)}
                className="w-full p-3 sm:p-3.5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[var(--primary)] rounded-lg"
              >
                <span className={`text-sm sm:text-base ${selectedType ? "text-gray-900" : "text-gray-400"}`}>
                  {selectedType || "お問い合わせ種別 *"}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${typeOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {typeOpen && (
                <div className="border-t border-gray-200">
                  {[
                    "壁打ち希望(GPT同席)",
                    "新規開発",
                    "引き継ぎ",
                    "改善",
                    "運用"
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedType(option);
                        setTypeOpen(false);
                      }}
                      className="w-full px-3 sm:px-3.5 py-3 text-left hover:bg-gray-50 transition-colors text-sm sm:text-base"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input type="hidden" name="type" value={selectedType} required />
          </div>
          <textarea
            placeholder="相談内容 *(納期、現状の課題など)"
            rows={5}
            className="border rounded-lg p-3 sm:p-3.5 text-sm sm:text-base border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          ></textarea>
          <button
            type="submit"
            className="btn-primary px-6 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base w-full sm:w-auto"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}
