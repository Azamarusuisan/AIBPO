import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "../../(marketing)/_components/Header";
import Footer from "../../(marketing)/_components/Footer";

const TerminalAnimation = dynamic(() => import("./_components/TerminalAnimation"), {
  ssr: false,
});

export const metadata = {
  title: "月額型エンジニアBPO（時間バンド制）| スポットエンジニア",
  description:
    "JavaScript／TypeScript／Pythonを軸に、フロントからバックエンドまで横断対応。20h／40h／80h／160hの時間バンドで、採用や育成を待たずに月額で必要な分だけ稼働を確保できます。",
};

interface PricingPlan {
  name: string;
  hours: string;
  price: string;
  unitPrice: string;
}

const pricingPlans: PricingPlan[] = [
  { name: "Starter", hours: "20h", price: "¥140,000", unitPrice: "¥7,000/h" },
  { name: "Growth", hours: "40h", price: "¥275,000", unitPrice: "¥6,875/h" },
  { name: "Pro", hours: "80h", price: "¥520,000", unitPrice: "¥6,500/h" },
  { name: "Team", hours: "160h", price: "¥980,000", unitPrice: "¥6,125/h" },
];

export default function EngineerBPOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  月額型エンジニアBPO（時間バンド制）
                </h1>
                <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
                  <p className="font-semibold text-primary">
                    JavaScript／TypeScript／Python を軸に、フロントエンドからバックエンドまで対応可能なエンジニアを、月額定額で活用できるBPOサービスです。
                  </p>
                  <p>
                    ホームページ運用・業務ツール開発・API連携・自動化など、3D領域以外の幅広い業務をスピーディーにサポートします。採用や育成を待たず、月額の時間バンドで必要な分だけ稼働を確保できます。
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-workspace.jpg"
                  alt="エンジニアの開発作業風景"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: 課題 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
              こんな課題に
            </h2>
            <ul className="space-y-4 text-base md:text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  運用・保守・小規模改修が滞留している
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  採用・教育コストを抑えたい
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  オフショアの言語・品質リスクを避けたい
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  小さな改善を継続的に積み上げたい
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>定期予算内で業務改善を平準化したい</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: サービスの特徴 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight">
              特徴
            </h2>

            {/* 特徴1: 料金プラン */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                1) 月額定額・時間バンド制
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                20h／40h／80h／160h の時間プランを用意。必要な分だけ柔軟に利用でき、余剰工数の繰り越しや煩雑な見積もりは不要です。
              </p>

              {/* 料金表 */}
              <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
                <table className="w-full border-collapse">
                  <caption className="sr-only">
                    時間バンドと料金（税別）
                  </caption>
                  <thead>
                    <tr className="bg-primary/10">
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-sm md:text-base font-semibold text-primary"
                      >
                        プラン
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-sm md:text-base font-semibold text-primary"
                      >
                        月間稼働の目安
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-sm md:text-base font-semibold text-primary"
                      >
                        月額（税別）
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-sm md:text-base font-semibold text-primary"
                      >
                        想定単価
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingPlans.map((plan, idx) => (
                      <tr
                        key={plan.name}
                        className={`border-t border-gray-200 ${
                          idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-4 py-3 text-sm md:text-base font-semibold">
                          {plan.name}
                        </td>
                        <td className="px-4 py-3 text-sm md:text-base num-tabular">
                          {plan.hours}
                        </td>
                        <td className="px-4 py-3 text-sm md:text-base num-tabular">
                          {plan.price}
                        </td>
                        <td className="px-4 py-3 text-sm md:text-base num-tabular text-accent">
                          {plan.unitPrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p>※ 超過時間：¥6,500〜7,000/h</p>
                <p>※ 契約は月次更新（3か月割引あり）</p>
              </div>
            </div>

            {/* 特徴2 */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                2) オフショアより低コスト、国内品質で安心
              </h3>
              <ul className="space-y-3 text-base md:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    実質6,000〜7,000円/hの単価レンジで、国内SES（人月80〜120万円）より安価
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    日本語対応PM＋レビュー体制により、オフショアの「言語ギャップ」リスクを回避
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    国内水準の開発品質・進行管理・SLAを標準装備
                  </span>
                </li>
              </ul>
            </div>

            {/* 特徴3 */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                3) 対応領域の広さ
              </h3>
              <ul className="space-y-3 text-base md:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    フロント：Next.js／React／Vite（UI構築、LP・フォーム改修）
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    バック：Node.js／Express／FastAPI（API開発・自動化）
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    ツール：ダッシュボード、レポート生成、軽量ETL
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    保守運用：サイト更新、モニタリング、CI/CD、QA支援
                  </span>
                </li>
              </ul>
            </div>

            {/* 特徴4 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                4) 品質保証
              </h3>
              <ul className="space-y-3 text-base md:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    チケット駆動、一次応答4時間以内、軽微改修は3営業日以内。レビュー二重化・品質ゲート。
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Terminal Demo Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center tracking-tight">
              デプロイまで自動化
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-center mb-10">
              コード変更からテスト、デプロイまで一貫して対応します
            </p>
            <TerminalAnimation />
          </div>
        </section>

        {/* Section 3: 導入のメリット */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
              導入メリット
            </h2>
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
              <table className="w-full border-collapse">
                <caption className="sr-only">
                  課題と解決策の対応表
                </caption>
                <thead>
                  <tr className="bg-primary/10">
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-sm md:text-base font-semibold text-primary"
                    >
                      課題
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-sm md:text-base font-semibold text-primary"
                    >
                      解決策
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 text-sm md:text-base">
                      採用・教育コストが高い
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-accent font-semibold">
                      月単位で即稼働。育成不要。
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 text-sm md:text-base">
                      運用・軽改修が後回し
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-accent font-semibold">
                      定常稼働でタスク滞留を防止。
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 text-sm md:text-base">
                      オフショアの仕様齟齬
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-accent font-semibold">
                      日本語PMが翻訳不要で進行。
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 text-sm md:text-base">
                      成果物品質のばらつき
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-accent font-semibold">
                      コードレビュー＋品質ゲートで均質化。
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 text-sm md:text-base">
                      予算管理が煩雑
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-accent font-semibold">
                      月額固定で経理処理がシンプル。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: 導入プロセス */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
              導入プロセス
            </h2>
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    無料相談／PoC（20h・¥140,000）
                  </h3>
                  <p className="text-gray-700"></p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    環境・チケット初期設定
                  </h3>
                  <p className="text-gray-700">開発環境／タスク管理／連絡手段</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-2">月次運用開始</h3>
                  <p className="text-gray-700">チケット単位で稼働、週次レポート共有</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    継続評価／次月の最適化
                  </h3>
                  <p className="text-gray-700">業務量・難易度に応じて調整</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 5: 活用シーン例 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
              活用シーン
            </h2>
            <ul className="space-y-4 text-base md:text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>サイト／LP更新・A/Bテスト</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>社内ダッシュボード改修</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>API連携・自動処理</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>社内向けツール・スクリプト</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>既存システムの軽微改修・保守</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tech Stack Visual Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center tracking-tight">
              幅広い技術スタックに対応
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">⚛️</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">フロントエンド</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>Next.js / React</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>Vite / Vue.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>Tailwind CSS</span>
                  </li>
                </ul>
              </div>

              {/* Backend Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">バックエンド</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>Node.js / Express</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>Python / FastAPI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>PostgreSQL / MongoDB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>REST / GraphQL</span>
                  </li>
                </ul>
              </div>

              {/* DevOps Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">⚙️</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">インフラ・運用</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>AWS / Vercel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>Docker / CI/CD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>GitHub Actions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>監視・ログ管理</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              まずは無料相談から
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              採用より速く、オフショアより近く、定額で成果を積み上げるBPOエンジニアリング。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA */}
              <a
                href="/contact"
                data-cta="bpo_monthly_contact"
                className="inline-block bg-primary text-white font-semibold rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all"
              >
                無料相談する
              </a>

              {/* Secondary CTA */}
              <a
                href="/audit"
                data-cta="bpo_monthly_trial_20h"
                className="inline-block border-2 border-primary text-primary font-semibold rounded-2xl px-8 py-4 hover:bg-primary/5 transition-all"
              >
                初月20hトライアルを申し込む
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
