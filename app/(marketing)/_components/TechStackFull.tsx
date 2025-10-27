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
  // 背景アニメーション用のコードスニペット
  const codeLines = [
    'const stack = ["React", "Next.js", "TypeScript"];',
    'function checkSupport(tech) {',
    '  return stack.includes(tech) ? "対応" : "要確認";',
    '}',
    '',
    'const backend = ["Node.js", "Python", "Go"];',
    'const infra = ["AWS", "Docker", "Kubernetes"];',
  ];

  return (
    <section className="relative section" id="stack" aria-labelledby="stack-heading" style={{ backgroundColor: 'var(--background-alt)' }}>
      {/* 背景アニメーション：スクロールするコード */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
        <div className="absolute inset-0 animate-code-scroll">
          <pre className="font-mono text-sm leading-relaxed text-gray-600 whitespace-pre w-full">
            {codeLines.concat(codeLines).concat(codeLines).concat(codeLines).map(line =>
              line + '    ' + line + '    ' + line
            ).join('\n')}
          </pre>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <h2 id="stack-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">
          技術スタック
        </h2>
        <p className="text-[var(--text-2)] mb-4 text-sm sm:text-base">
          主要スタックの一部です。ご希望があれば他技術も対応します。
        </p>
        <div className="mb-8 bg-white/95 backdrop-blur-sm rounded-xl border border-primary/20 p-4 sm:p-6">
          <h3 className="font-bold text-base sm:text-lg mb-3 text-primary">対応領域の幅広さ</h3>
          <ul className="space-y-2 text-sm sm:text-base text-[var(--text-2)]">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>フロントエンド：</strong>Next.js / React / Vite などでUI構築、LP・フォーム改修</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>バックエンド：</strong>Node.js / Express / FastAPI によるAPI開発・スクリプト自動化</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>ツール開発：</strong>業務ダッシュボード、レポート生成、軽量ETL</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>保守・運用：</strong>サイト更新、モニタリング、CI/CD、QA支援</span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => {
            const validItems = g.items.filter((it) => !!getLogo(it.name));
            if (validItems.length === 0) return null;

            return (
              <div key={g.title} className="bg-white/95 backdrop-blur-sm rounded-2xl border border-primary/20 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
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
