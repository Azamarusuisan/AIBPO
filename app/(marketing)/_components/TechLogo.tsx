"use client";
import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & { size?: number };
const S = ({ size = 40, ...p }: LogoProps) => (
  <svg width={size} height={size} aria-hidden {...p} />
);

export const Logos = {
  React: (props: LogoProps) => (
    <S viewBox="0 0 256 256" fill="none" stroke="#61DAFB" strokeWidth="12" {...props}>
      <circle cx="128" cy="128" r="16" fill="#61DAFB" />
      <ellipse cx="128" cy="128" rx="100" ry="40" />
      <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(60 128 128)" />
      <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(120 128 128)" />
    </S>
  ),
  "Next.js": (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <circle cx="128" cy="128" r="100" fill="none" stroke="#000000" strokeWidth="12" />
      <path d="M92 92h72M92 128h40" stroke="#000000" strokeWidth="12" strokeLinecap="round" />
      <path d="M104 96l80 96" stroke="#000000" strokeWidth="12" strokeLinecap="round" />
    </S>
  ),
  "Vue.js": (props: LogoProps) => (
    <S viewBox="0 0 261 226" {...props}>
      <path d="M130.5 0L261 226H0L130.5 0Z" fill="#41B883" opacity=".2" />
      <path d="M130.5 40L217 190H44L130.5 40Z" fill="#41B883" />
    </S>
  ),
  Nuxt: (props: LogoProps) => (
    <S viewBox="0 0 256 192" {...props}>
      <path d="M16 176 112 16l96 160H16Z" fill="none" stroke="#00DC82" strokeWidth="12" />
      <path d="M64 176 128 72l64 104H64Z" fill="#00DC82" opacity=".2" />
    </S>
  ),
  Svelte: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <path
        d="M168 56c-24-14-48-14-72 0-24 14-24 38 0 52l40 24c24 14 24 38 0 52-24 14-48 14-72 0"
        fill="none"
        stroke="#FF3E00"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </S>
  ),
  Astro: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <defs>
        <linearGradient id="astro-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5D01" />
          <stop offset="100%" stopColor="#FF1639" />
        </linearGradient>
      </defs>
      <path d="M128 24 56 200h32l40-96 40 96h32L128 24Z" fill="url(#astro-gradient)" />
      <circle cx="128" cy="200" r="16" fill="#FF5D01" opacity=".3" />
    </S>
  ),
  "Tailwind CSS": (props: LogoProps) => (
    <S viewBox="0 0 256 128" {...props}>
      <path
        d="M64 64c8-32 32-48 64-48 32 0 48 16 56 48-8-16-24-24-40-24-24 0-40 16-48 24-8 8-24 24-48 24-16 0-32-8-40-24 8 32 24 48 56 48 32 0 48-16 56-48Z"
        fill="#06B6D4"
      />
    </S>
  ),
  Vite: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <defs>
        <linearGradient id="vite-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
      <path d="M128 16 240 64 128 240 16 64 128 16Z" fill="url(#vite-gradient)" opacity=".2" />
      <path d="M128 40l40 24-40 72-40-72 40-24Z" fill="url(#vite-gradient)" />
    </S>
  ),
  "Swift / SwiftUI": (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <path d="M208 208H48V48h160v160Z" fill="none" stroke="#F05138" strokeWidth="12" />
      <path
        d="M176 176c-40-8-72-40-96-72 16 24 40 56 72 64-16-16-32-40-40-56 24 24 56 40 80 40-8 8-8 16-16 24Z"
        fill="#F05138"
      />
    </S>
  ),
  Kotlin: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <defs>
        <linearGradient id="kotlin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F52FF" />
          <stop offset="50%" stopColor="#C711E1" />
          <stop offset="100%" stopColor="#E44857" />
        </linearGradient>
      </defs>
      <path d="M24 24h208L120 136l112 96H24V24Z" fill="url(#kotlin-gradient)" />
    </S>
  ),
  Flutter: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <path d="M168 24 40 152l48 48 128-128-48-48Z" fill="#02569B" />
      <path d="M120 200l48 32 40-40-48-48-40 40Z" fill="#0175C2" />
    </S>
  ),
  "React Native": (props: LogoProps) => Logos.React(props),
  "Node.js": (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <path d="M128 16 24 72v112l104 56 104-56V72L128 16Z" fill="none" stroke="#339933" strokeWidth="12" />
      <path d="M96 176h64v-24H96v24Z" fill="#339933" />
    </S>
  ),
  Python: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <path
        d="M128 24c-44 0-48 18-48 40v24h48v8H56c-22 0-40 8-40 48s18 48 40 48h16v-24c0-22 4-40 48-40h16c44 0 48-18 48-40V64c0-22-4-40-48-40h-8Z"
        fill="#3776AB"
      />
      <circle cx="96" cy="72" r="8" fill="#FFD43B" />
      <circle cx="160" cy="184" r="8" fill="#3776AB" />
    </S>
  ),
  Django: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <path d="M72 208V48h48v128c0 32-16 48-48 32Z" fill="#092E20" />
      <rect x="144" y="48" width="40" height="160" fill="#092E20" />
    </S>
  ),
  Go: (props: LogoProps) => (
    <S viewBox="0 0 256 128" {...props}>
      <path
        d="M24 72h72M24 96h48M120 72h88M120 96h112"
        stroke="#00ADD8"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </S>
  ),
  Laravel: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <path
        d="M40 176l80 48 96-56V88l-80-48-96 56v80z"
        fill="none"
        stroke="#FF2D20"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    </S>
  ),
  "Ruby on Rails": (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <path d="M48 208h160l-16-112-80-32-64 144Z" fill="none" stroke="#CC0000" strokeWidth="12" />
      <circle cx="112" cy="128" r="8" fill="#CC0000" />
    </S>
  ),
  AWS: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <path
        d="M48 96c0-32 32-56 80-56s80 24 80 56-32 56-80 56-80-24-80-56Z"
        fill="none"
        stroke="#FF9900"
        strokeWidth="12"
      />
      <path d="M48 176c40 32 136 32 176 0" fill="none" stroke="#FF9900" strokeWidth="12" strokeLinecap="round" />
    </S>
  ),
  Docker: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <rect x="88" y="112" width="32" height="32" rx="4" fill="#2496ED" />
      <rect x="128" y="112" width="32" height="32" rx="4" fill="#2496ED" />
      <rect x="88" y="152" width="32" height="32" rx="4" fill="#2496ED" />
      <rect x="128" y="152" width="32" height="32" rx="4" fill="#2496ED" />
      <path d="M40 168h176c0 32-40 48-88 48S40 200 40 168Z" fill="#2496ED" opacity=".2" />
    </S>
  ),
  Kubernetes: (props: LogoProps) => (
    <S viewBox="0 0 256 256" {...props}>
      <circle cx="128" cy="128" r="96" fill="none" stroke="#326CE5" strokeWidth="12" />
      <path d="M128 56v144M56 128h144M86 86l84 84M170 86l-84 84" stroke="#326CE5" strokeWidth="12" />
    </S>
  ),
} as const;

export type LogoKey = keyof typeof Logos;
export function getLogo(name: string) {
  return (Logos as any)[name] as ((p: LogoProps) => JSX.Element) | undefined;
}
