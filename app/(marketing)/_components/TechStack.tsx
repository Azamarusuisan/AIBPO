"use client";

type Item = { name: string; icon: JSX.Element };

const Icon = {
  React: () => (
    <svg viewBox="0 0 256 256" width="40" height="40" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="12">
        <circle cx="128" cy="128" r="16" />
        <ellipse cx="128" cy="128" rx="100" ry="40" />
        <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(120 128 128)" />
      </g>
    </svg>
  ),
  Vue: () => (
    <svg viewBox="0 0 261 226" width="40" height="40" aria-hidden="true">
      <path d="M130.5 0L261 226H0L130.5 0Z" fill="currentColor" opacity=".1" />
      <path d="M130.5 40L217 190H44L130.5 40Z" fill="currentColor" />
    </svg>
  ),
  Laravel: () => (
    <svg viewBox="0 0 256 256" width="40" height="40" aria-hidden="true">
      <path
        d="M40 176l80 48 96-56V88l-80-48-96 56v80z"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 256 256" width="40" height="40" aria-hidden="true">
      <path
        d="M128 24c-44 0-48 18-48 40v24h48v8H56c-22 0-40 8-40 48s18 48 40 48h16v-24c0-22 4-40 48-40h16c44 0 48-18 48-40V64c0-22-4-40-48-40h-8z"
        fill="currentColor"
        opacity=".9"
      />
      <circle cx="96" cy="72" r="8" fill="#fff" />
      <circle cx="160" cy="184" r="8" fill="#fff" />
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 256 256" width="40" height="40" aria-hidden="true">
      <path
        d="M40 168c40 32 136 32 176 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M48 96c0-32 32-56 80-56s80 24 80 56-32 56-80 56-80-24-80-56z"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
      />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 256 256" width="40" height="40" aria-hidden="true">
      <rect x="88" y="112" width="32" height="32" rx="4" fill="currentColor" />
      <rect x="128" y="112" width="32" height="32" rx="4" fill="currentColor" />
      <rect x="88" y="152" width="32" height="32" rx="4" fill="currentColor" />
      <rect x="128" y="152" width="32" height="32" rx="4" fill="currentColor" />
      <path
        d="M40 168h176c0 32-40 48-88 48S40 200 40 168z"
        fill="currentColor"
        opacity=".1"
      />
    </svg>
  ),
};

const items: Item[] = [
  { name: "React", icon: <Icon.React /> },
  { name: "Vue.js", icon: <Icon.Vue /> },
  { name: "Laravel", icon: <Icon.Laravel /> },
  { name: "Python", icon: <Icon.Python /> },
  { name: "AWS", icon: <Icon.AWS /> },
  { name: "Docker", icon: <Icon.Docker /> },
];

export default function TechStack() {
  return (
    <section className="section" id="stack" aria-labelledby="stack-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="stack-heading" className="text-2xl md:text-3xl font-extrabold">
          対応技術
        </h2>
        <p className="text-[var(--text-2)] mt-1">
          主要スタックの一部です。ご希望があれば他技術も対応します。
        </p>

        <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((it) => (
            <li key={it.name}>
              <div
                className="h-full card flex flex-col items-center justify-center gap-2 border border-[#E9EDF3] px-4 py-6 bg-white
                           hover:shadow-md transition-all duration-200"
              >
                <div className="text-gray-700">{it.icon}</div>
                <div className="text-sm font-medium text-gray-800">{it.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
