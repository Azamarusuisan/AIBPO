import CaseCard from "./CaseCard";

const cases = [
  {
    badge: "開発コスト -72%",
    imageSrc: "/images/case-study-retail.png",
    imageAlt: "営業管理ツール開発の事例",
    badges: ["社員15名", "エンジニア0名"],
    title: "営業会社（社員15名、エンジニア0名）",
    summary: "営業先リストを自動生成するツール。Excelでの手作業に限界。",
    bullets: [
      {
        label: "課題",
        text: "営業先リストの手作業管理に限界。週10時間の作業負荷",
      },
      {
        label: "対応",
        text: "AI活用：DB設計2時間、実装2週間。従来なら2ヶ月・50万円の案件",
      },
      {
        label: "成果",
        text: "開発費50万円→14万円、期間2ヶ月→2週間。リスト作成時間：週10h→30分",
      },
    ],
  },
  {
    badge: "初期費用 -90%",
    imageSrc: "/images/case-study-trade.png",
    imageAlt: "ブログサイト構築の事例",
    badges: ["社員5名", "エンジニア0名"],
    title: "小売店（社員5名、エンジニア0名）",
    summary: "GitHubの無料テーマでブログ構築 + SEO対策。技術知識ゼロ。",
    bullets: [
      {
        label: "課題",
        text: "ブログを始めたいが、技術知識がなくWordPressも難しい",
      },
      {
        label: "対応",
        text: "AI活用：テーマカスタマイズ、SEO設定を1週間で完了",
      },
      {
        label: "成果",
        text: "初期費30万円→3万円。3ヶ月で月間PV5,000達成、問い合わせ月3件増",
      },
    ],
  },
  {
    badge: "作業時間 -96%",
    imageSrc: "/images/case-study-manufacturing.png",
    imageAlt: "レポート自動生成システムの事例",
    badges: ["社員20名", "エンジニア0名"],
    title: "コンサル会社（社員20名、エンジニア0名）",
    summary: "クライアント向けレポート自動生成。毎月手作業で50時間。",
    bullets: [
      {
        label: "課題",
        text: "毎月50時間かけて手作業でレポート作成。属人化も課題",
      },
      {
        label: "対応",
        text: "AI活用：要件をAIが分析、4週間で自動生成ツールを納品",
      },
      {
        label: "成果",
        text: "開発費100万円→56万円。レポート作成：月50h→2h。年間削減600万円",
      },
    ],
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-20 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            事例
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl">
            エンジニアがいない企業でも、AI活用で成果を実現
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <CaseCard key={i} {...c} priority={i === 0} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
