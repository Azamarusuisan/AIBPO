"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // メニューが開いたときにbodyのスクロールを無効化
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold tracking-tight">
          スポットエンジニア
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-base">
          <a href="/value" className="hover:text-primary transition-colors">
            提供価値
          </a>
          <a href="/plans" className="hover:text-primary transition-colors">
            プラン
          </a>
          <a href="/scope" className="hover:text-primary transition-colors">
            対応範囲
          </a>
          <a href="/faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="/contact" className="hover:text-primary transition-colors">
            お問い合わせ
          </a>
          <a
            href="/contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-white hover:opacity-90 transition-opacity font-semibold"
          >
            無料相談
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="メニューを開く"
          className="md:hidden h-10 w-10 flex items-center justify-center text-gray-700 hover:text-gray-900"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200">
            <span className="text-2xl font-extrabold">スポットエンジニア</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="メニューを閉じる"
              className="h-10 w-10 flex items-center justify-center text-gray-700 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-6 py-8 space-y-2">
            <a
              href="/value"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-4 text-2xl font-bold text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              提供価値
            </a>
            <a
              href="/plans"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-4 text-2xl font-bold text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              プラン
            </a>
            <a
              href="/scope"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-4 text-2xl font-bold text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              対応範囲
            </a>
            <a
              href="/faq"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-4 text-2xl font-bold text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              FAQ
            </a>
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-4 text-2xl font-bold text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              お問い合わせ
            </a>
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-6 rounded-lg bg-primary px-6 py-5 text-white text-center font-bold text-2xl hover:opacity-90"
            >
              無料相談
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
