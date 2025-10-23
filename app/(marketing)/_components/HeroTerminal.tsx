"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const MESSAGES = [
  "開発で足りないところ、AIがサクッと補完します。",
  "コードを自動生成→提案→反映。手戻りを減らす開発アシスタント。",
  "「完成した変更」を毎月お届け。開発の速度と品質を両取り。",
  "不足箇所を検出してワンクリック提案。実装のボトルネックを即解消。",
  "自動生成＋最終レビューで安心導入。現場に馴染むコードを提供。",
];

const TYPING_SPEED = 50; // ms per character (約35-60文字/分)
const DISPLAY_DURATION = 2200; // ms
const FADE_OUT_DURATION = 300; // ms

export default function HeroTerminal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useRef(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;

    if (prefersReducedMotion.current) {
      // Show final message immediately
      setDisplayedText(MESSAGES[MESSAGES.length - 1]);
      setIsTyping(false);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
      if (e.matches) {
        setDisplayedText(MESSAGES[MESSAGES.length - 1]);
        setIsTyping(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Animation loop
  useEffect(() => {
    if (prefersReducedMotion.current || isPaused) return;

    const currentMessage = MESSAGES[currentIndex];
    let charIndex = 0;

    // Typing phase
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (charIndex < currentMessage.length) {
          setDisplayedText(currentMessage.slice(0, charIndex + 1));
          charIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, TYPING_SPEED);

      return () => clearInterval(typingInterval);
    }

    // Display phase
    const displayTimer = setTimeout(() => {
      setIsVisible(false);
    }, DISPLAY_DURATION);

    return () => clearTimeout(displayTimer);
  }, [currentIndex, isTyping, isPaused]);

  // Fade out and move to next message
  useEffect(() => {
    if (prefersReducedMotion.current || isPaused) return;

    if (!isVisible && !isTyping) {
      const fadeOutTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
        setDisplayedText("");
        setIsTyping(true);
        setIsVisible(true);
      }, FADE_OUT_DURATION);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [isVisible, isTyping, isPaused]);

  return (
    <div
      className="hero-terminal-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="complementary"
      aria-label="開発アシスタント機能の紹介"
    >
      <div className="hero-terminal">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red" aria-hidden="true" />
            <span className="dot dot-yellow" aria-hidden="true" />
            <span className="dot dot-green" aria-hidden="true" />
          </div>
          <div className="terminal-title">terminal</div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body">
          <div className="terminal-prompt" aria-hidden="true">
            $ <span className="cursor">_</span>
          </div>
          <p
            className={`terminal-text ${isVisible ? "visible" : "fading"}`}
            aria-live="polite"
            aria-atomic="true"
          >
            {displayedText}
          </p>
        </div>

        {/* CTA Buttons (visible on hover) */}
        <div className="terminal-cta">
          <Link
            href="/contact"
            className="terminal-btn terminal-btn-primary"
            data-cta="hero_terminal_contact"
          >
            提案を確認する
          </Link>
          <Link
            href="/audit"
            className="terminal-btn terminal-btn-secondary"
            data-cta="hero_terminal_audit"
          >
            無料でコード健診
          </Link>
        </div>
      </div>
    </div>
  );
}
