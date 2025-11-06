type TechGroup = {
  category: string;
  accent?: boolean;
  techs: string[];
};

const techGroups: TechGroup[] = [
  {
    category: "Frontend",
    accent: true,
    techs: ["React", "Next.js", "Vue.js", "Nuxt", "Svelte", "Astro", "Tailwind CSS", "Vite"]
  },
  {
    category: "Mobile",
    accent: true,
    techs: ["Swift / SwiftUI", "Kotlin", "Flutter", "React Native"]
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Django", "Go", "Laravel", "Ruby on Rails", "FastAPI"]
  },
  {
    category: "Cloud / DB",
    techs: ["AWS", "GCP", "Firebase", "Supabase", "PostgreSQL", "Redis"]
  },
  {
    category: "DevOps",
    techs: ["Docker", "Kubernetes", "GitHub Actions", "Vercel", "CloudWatch", "Sentry"]
  },
];

export default function TechCloud() {
  return (
    <section id="stack" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            技術スタック
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl mb-2">
            主要スタックの一部です。ご希望があれば他技術も対応します。
          </p>
          <p className="text-base text-slate-500">
            ※ 記載以外の技術も対応可能な場合がありますので、お気軽にご相談ください。
          </p>
        </div>

        <div className="space-y-8">
          {techGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full text-base font-medium ring-1 transition-all hover:scale-105 ${
                      group.accent
                        ? "bg-sky-50 text-sky-700 ring-sky-100 hover:bg-sky-100 hover:ring-sky-200"
                        : "bg-slate-100 text-slate-700 ring-slate-200 hover:bg-slate-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 補足説明 */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-200 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            対応領域の幅広さ
          </h3>
          <ul className="space-y-3 text-base md:text-lg text-slate-700 leading-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>フロントエンド：</strong>Next.js / React / Vite などでUI構築、LP・フォーム改修</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>バックエンド：</strong>Node.js / Express / FastAPI によるAPI開発・スクリプト自動化</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>ツール開発：</strong>業務ダッシュボード、レポート生成、軽量ETL</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>保守・運用：</strong>サイト更新、モニタリング、CI/CD、QA支援</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
