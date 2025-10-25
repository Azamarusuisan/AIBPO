"use client";
import { getLogo } from "./TechLogo";

type Item = { name: string };
type Group = { title: string; items: Item[] };

const groups: Group[] = [
  {
    title: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Nuxt" },
      { name: "Svelte" },
      { name: "Astro" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Swift / SwiftUI" },
      { name: "Kotlin" },
      { name: "Flutter" },
      { name: "React Native" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "Django" },
      { name: "Go" },
      { name: "Laravel" },
      { name: "Ruby on Rails" },
      { name: "FastAPI" },
    ],
  },
  {
    title: "Cloud/DevOps/DB",
    items: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "GCP" },
      { name: "Firebase" },
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "Redis" },
    ],
  },
];

function Card({ name }: { name: string }) {
  const Logo = getLogo(name);
  if (!Logo) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 hover:shadow-md transition-shadow">
      <div className="logo-wrap flex-shrink-0">
        <Logo size={24} />
      </div>
      <span className="text-xs font-medium text-gray-800 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TechStackFull() {
  return (
    <section className="section" id="stack" aria-labelledby="stack-heading" style={{ backgroundColor: 'var(--background-alt)' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="stack-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">
          技術スタック
        </h2>
        <p className="text-[var(--text-2)] mb-8 text-sm sm:text-base">
          主要スタックの一部です。ご希望があれば他技術も対応します。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => {
            const validItems = g.items.filter((it) => !!getLogo(it.name));
            if (validItems.length === 0) return null;

            return (
              <div key={g.title} className="bg-white rounded-2xl border border-primary/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <h3 className="bg-gray-50 px-5 py-2 text-xs font-semibold text-gray-600 uppercase tracking-widest border-b border-gray-200">
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-3 p-6">
                  {validItems.map((it) => (
                    <Card key={it.name} name={it.name} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
