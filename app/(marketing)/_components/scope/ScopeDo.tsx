import { Monitor, Server, Cog, Wrench, Smartphone, FileCode } from "lucide-react";

type Category = {
  icon: React.ElementType;
  title: string;
  summary: string;
  example?: string;
};

const categories: Category[] = [
  {
    icon: Monitor,
    title: "フロントエンド開発",
    summary: "React/Next.js/Vue.jsコンポーネント実装、レスポンシブデザイン、状態管理、UI/UX改善、パフォーマンス最適化、アクセシビリティ対応",
    example: "例：LP制作、フォーム改修、Lighthouseスコア改善"
  },
  {
    icon: Server,
    title: "バックエンド開発",
    summary: "REST API / GraphQL開発、認証・認可機能、データベース設計・クエリ最適化、バッチ処理、API連携、Webhook実装",
    example: "例：Node.js / Express / Nest.js / Next.js API Routes"
  },
  {
    icon: Cog,
    title: "自動化・DevOps",
    summary: "CI/CDパイプライン構築、自動テスト導入、デプロイ自動化、コード品質チェック、依存関係更新、ログ監視・エラー通知設定",
    example: "例：GitHub Actions / Vercel / AWS デプロイ"
  },
  {
    icon: Wrench,
    title: "保守・改善",
    summary: "バグ修正・デバッグ（自動解析支援付き）、技術的負債の解消、ライブラリアップグレード、セキュリティ脆弱性対応、パフォーマンス改善",
    example: "例：npm audit 対応、リファクタリング、コードレビュー"
  },
  {
    icon: Smartphone,
    title: "モバイルアプリ",
    summary: "Swift / SwiftUI（iOS）開発、Kotlin（Android）開発、React Native軽微な修正、Firebase連携、アプリ内購入・通知機能実装",
    example: "例：Firestore / Auth / FCM 連携"
  },
  {
    icon: FileCode,
    title: "その他対応技術",
    summary: "TypeScript型定義強化、ドキュメント整備、E2Eテスト導入、データ移行スクリプト、技術選定・アーキテクチャ相談",
    example: "例：OpenAPI / Storybook / Playwright"
  },
];

export default function ScopeDo() {
  return (
    <section id="do" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            できること
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl">
            AI活用で、速く・安く・高品質を実現
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="bg-white rounded-xl p-6 md:p-8 ring-1 ring-slate-200 hover:ring-primary/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-3">
                    {cat.summary}
                  </p>
                  {cat.example && (
                    <p className="text-sm md:text-base text-slate-600 italic">
                      {cat.example}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
