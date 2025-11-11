import CaseCard from "./value/CaseCard";

export default function DetailedCaseStudy() {
  const cases = [
    {
      imageSrc: "/images/case-study-retail.png",
      imageAlt: "EC-CUBEとサーバー管理のイメージ",
      badges: [
        { label: "小売業（玩具販売）", tone: "accent" as const },
        { label: "月4時間" },
      ],
      title: "気軽に相談できる「窓口」\nとしてご利用ください",
      summary:
        "全国にファンがいる玩具店で、サーバー会社やEC-CUBEからの連絡対応と軽微な改修が頻発。システム開発会社への都度相談は手間がかかり、気軽に相談できる窓口が必要でした。",
      bullets: [
        {
          label: "課題" as const,
          text: "サーバー・EC-CUBEからの連絡対応と軽微な改修が多発。都度システム会社に相談するのは手間がかかる",
        },
        {
          label: "対応" as const,
          text: "連絡内容の整理・リスト化、EC-CUBEアプリケーション保守、軽微な改修と調整を定額で対応",
        },
        {
          label: "成果" as const,
          text: "何かあった時にすぐ相談できる体制が整い、軽微な改修も迅速化。全国の顧客に安心して運営できる環境を実現",
        },
      ],
      first: true,
    },
    {
      imageSrc: "/images/case-study-manufacturing.png",
      imageAlt: "生産管理システムと工場のイメージ",
      badges: [
        { label: "製造業（部品製造）", tone: "accent" as const },
        { label: "月8時間" },
      ],
      title: "生産管理システムの保守・改善をお任せ",
      summary:
        "従業員50名規模の部品製造企業で、生産管理システムの改善要望が溜まっているものの、システムベンダーへの都度見積もりが必要で小規模な改修を依頼しづらい状況でした。",
      bullets: [
        {
          label: "課題" as const,
          text: "現場の改善要望が溜まっているが、ベンダーへの都度見積もりが必要で小規模改修を依頼しづらい",
        },
        {
          label: "対応" as const,
          text: "現行システム仕様確認・要望ヒアリング、生産管理システムの改修・帳票調整・データエクスポート機能追加・月次レポート自動化",
        },
        {
          label: "成果" as const,
          text: "小規模な改修が定額で気軽に依頼可能になり、現場の不満が大幅に解消。月次ミーティングで継続的な改善を実現",
        },
      ],
    },
    {
      imageSrc: "/images/case-study-trade.png",
      imageAlt: "基幹システムとWebサイト連携のイメージ",
      badges: [
        { label: "貿易業（輸出入代行）", tone: "accent" as const },
        { label: "月12時間" },
      ],
      title: "基幹システムとWebサイトの一元管理",
      summary:
        "輸出入代行を行う企業で、基幹システムとWebサイトを別会社に依頼していたため連携がうまくいかず、二重入力が発生していました。",
      bullets: [
        {
          label: "課題" as const,
          text: "基幹システムとWebサイトが別会社管理で連携不備、二重入力が発生",
        },
        {
          label: "対応" as const,
          text: "既存システム・Webサイト仕様確認、API連携実装、顧客情報の自動同期・在庫情報のリアルタイム表示・Webサイト保守を一元化",
        },
        {
          label: "成果" as const,
          text: "二重入力がなくなり業務効率が劇的に向上。一つの窓口で両方の相談ができ、コミュニケーションコストも削減",
        },
      ],
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      {/* 見出し */}
      <div className="text-center mb-16 md:mb-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
          幅広い業種でご利用いただいています
        </h2>
        <p className="text-lg md:text-xl text-gray-500">活用事例</p>
      </div>

      {/* 事例カード */}
      <div className="space-y-0">
        {cases.map((caseData, index) => (
          <CaseCard key={index} {...caseData} index={index} />
        ))}
      </div>
    </section>
  );
}
