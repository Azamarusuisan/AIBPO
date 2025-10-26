"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 h-24 flex items-center justify-between relative">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="text-3xl">スポットエンジニア（仮）</span>
        </a>

        {/* Desktop Navigation - Right Aligned */}
        <nav className="hidden md:flex items-center gap-8 text-base ml-auto relative z-10">
          <a href="/value" className="hover:text-[var(--primary)] transition-colors cursor-pointer">
            提供価値
          </a>
          <a href="/plans" className="hover:text-[var(--primary)] transition-colors cursor-pointer">
            プラン
          </a>
          <a href="/scope" className="hover:text-[var(--primary)] transition-colors cursor-pointer">
            対応範囲
          </a>
          <a href="/faq" className="hover:text-[var(--primary)] transition-colors cursor-pointer">
            FAQ
          </a>
          <a href="/contact" className="hover:text-[var(--primary)] transition-colors cursor-pointer" data-cta="header_contact_link">
            お問い合わせ
          </a>
          <a href="/login" className="hover:text-[var(--primary)] transition-colors cursor-pointer">
            ログイン
          </a>
          <a
            href="/contact"
            className="rounded-xl bg-primary px-6 py-3 text-white hover:opacity-90 transition-all cursor-pointer font-semibold"
            data-cta="header_consultation"
          >
            無料相談
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="メニュー"
          onClick={() => setOpen(!open)}
          className="md:hidden p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-3 grid gap-3">
            <a
              href="/value"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-[var(--primary)] transition-colors"
            >
              提供価値
            </a>
            <a
              href="/plans"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-[var(--primary)] transition-colors"
            >
              プラン
            </a>
            <a
              href="/scope"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-[var(--primary)] transition-colors"
            >
              対応範囲
            </a>
            <a
              href="/faq"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-[var(--primary)] transition-colors"
            >
              FAQ
            </a>
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-[var(--primary)] transition-colors"
              data-cta="header_contact_link_mobile"
            >
              お問い合わせ
            </a>
            <a
              href="/login"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-[var(--primary)] transition-colors"
            >
              ログイン
            </a>
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-primary px-4 py-2 text-white text-center hover:opacity-90 transition-all"
              data-cta="header_consultation_mobile"
            >
              無料相談
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
