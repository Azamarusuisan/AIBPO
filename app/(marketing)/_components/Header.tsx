"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // メニューが開いたときにbodyのスクロールを無効化
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 h-24 flex items-center relative">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="text-3xl">スポットエンジニア（仮）</span>
        </a>

        {/* Desktop Navigation - Right Aligned */}
        <nav className="hidden md:flex items-center gap-8 text-lg ml-auto relative z-10">
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
          className="md:hidden ml-auto p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors relative z-[110]"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300"
          >
            <line
              x1={open ? "18" : "3"}
              y1="6"
              x2={open ? "6" : "21"}
              y2={open ? "18" : "6"}
              className="transition-all duration-300 origin-center"
              style={{ transform: open ? 'rotate(0deg)' : 'rotate(0deg)' }}
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className="transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <line
              x1={open ? "6" : "3"}
              y1={open ? "6" : "18"}
              x2={open ? "18" : "21"}
              y2="18"
              className="transition-all duration-300 origin-center"
            />
          </svg>
        </button>
      </div>

      {/* Backdrop Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden animate-fade-in"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed left-0 right-0 top-[97px] z-[95]
        bg-white border-t border-gray-200 shadow-2xl
        transition-all duration-300 ease-out
        ${open
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
        }
      `}>
        <div className="px-6 py-6 grid gap-1 max-h-[calc(100vh-97px)] overflow-y-auto">
          {[
            { href: '/value', label: '提供価値', delay: '50ms' },
            { href: '/plans', label: 'プラン', delay: '100ms' },
            { href: '/scope', label: '対応範囲', delay: '150ms' },
            { href: '/faq', label: 'FAQ', delay: '200ms' },
            { href: '/contact', label: 'お問い合わせ', delay: '250ms', cta: 'header_contact_link_mobile' },
          ].map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-[var(--primary)] transition-all"
              data-cta={item.cta}
              style={{
                animation: open ? `slide-in-stagger 0.3s ease-out ${item.delay} both` : 'none'
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-xl bg-primary px-4 py-3 text-white text-center hover:opacity-90 transition-all font-semibold shadow-lg"
            data-cta="header_consultation_mobile"
            style={{
              animation: open ? 'slide-in-stagger 0.3s ease-out 300ms both' : 'none'
            }}
          >
            無料相談
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-in-stagger {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
