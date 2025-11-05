"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/company-logo.png"
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-extrabold tracking-tight">スポットエンジニア</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-base">
          <Link href="/value" className="hover:text-primary transition-colors">
            提供価値
          </Link>
          <Link href="/plans" className="hover:text-primary transition-colors">
            プラン
          </Link>
          <Link href="/scope" className="hover:text-primary transition-colors">
            対応範囲
          </Link>
          <Link href="/faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            お問い合わせ
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-white hover:opacity-90 transition-opacity font-semibold"
          >
            無料相談
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="メニューを開く"
          className="md:hidden h-12 w-12 flex items-center justify-center text-gray-700 hover:text-gray-900 active:bg-gray-100 rounded-lg transition-colors"
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
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/company-logo.png"
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold">スポットエンジニア</span>
            </div>
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
            <Link
              href="/value"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3.5 text-lg font-bold text-gray-900 hover:bg-gray-50 rounded-lg active:bg-gray-100"
            >
              提供価値
            </Link>
            <Link
              href="/plans"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3.5 text-lg font-bold text-gray-900 hover:bg-gray-50 rounded-lg active:bg-gray-100"
            >
              プラン
            </Link>
            <Link
              href="/scope"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3.5 text-lg font-bold text-gray-900 hover:bg-gray-50 rounded-lg active:bg-gray-100"
            >
              対応範囲
            </Link>
            <Link
              href="/faq"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3.5 text-lg font-bold text-gray-900 hover:bg-gray-50 rounded-lg active:bg-gray-100"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3.5 text-lg font-bold text-gray-900 hover:bg-gray-50 rounded-lg active:bg-gray-100"
            >
              お問い合わせ
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-6 rounded-lg bg-primary px-6 py-4 text-white text-center font-bold text-lg hover:opacity-90 active:opacity-80"
            >
              無料相談
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
