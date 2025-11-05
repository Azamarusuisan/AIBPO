"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { id: "do", label: "できること", href: "#do" },
  { id: "dont", label: "できないこと", href: "#dont" },
  { id: "stack", label: "技術スタック", href: "#stack" },
  { id: "cases", label: "事例", href: "#cases" },
];

export default function Subnav() {
  const [activeSection, setActiveSection] = useState("do");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-[72px] z-40 mb-8 bg-white ring-1 ring-slate-200 rounded-2xl px-3 py-2 shadow-sm"
      aria-label="セクションナビゲーション"
    >
      <ul className="flex items-center justify-center gap-1 sm:gap-2">
        {navItems.map(({ id, label, href }) => (
          <li key={id}>
            <a
              href={href}
              className={`block px-3 sm:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeSection === id
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
