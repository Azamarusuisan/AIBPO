export const hero = {
  title: "月額3万円から、社内に\"使える\"エンジニアを。",
  sub: "自社GPU×自動デバッグで、人は難所に集中。小さく速く、確実に。",
  badges: ["納期急ぎ歓迎", "その場で概算", "NDA可"],
  ctas: [
    { label: "無料相談(最短15分)", href: "#contact", primary: true },
    { label: "1ヶ月トライアル", href: "#plans", primary: false }
  ]
};

export const reasons = {
  heading: "機械が時間を削り、人が価値を出す。",
  points: [
    "自社NVIDIA GPUサーバーで並列ビルド・自動テスト・ログ解析",
    "完全自動デバッグ: 失敗→要約→修正パッチ生成→再実行",
    "人はアーキ判断・実装の難所に集中＝工数の山だけ触る"
  ]
};

export type Plan = {
  name: string;
  price: string;
  tickets: string;
  sla: string;
  meeting: string;
  extras?: string[];
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "¥140,000/月",
    tickets: "20h",
    sla: "初回応答24h以内",
    meeting: "非同期対応のみ",
    extras: [" ", " "]
  },
  {
    name: "Standard",
    price: "¥275,000/月",
    tickets: "40h",
    sla: "初回応答24h以内",
    meeting: "週1・30分の打合せOK",
    extras: ["月次レポート(改善提案)", " "],
    highlight: true
  },
  {
    name: "Pro",
    price: "¥520,000/月",
    tickets: "80h",
    sla: "当日優先対応",
    meeting: "平日オンコール可",
    extras: ["週次レビュー", "優先キュー運用"]
  },
  {
    name: "Team",
    price: "¥980,000/月",
    tickets: "160h",
    sla: "当日優先対応",
    meeting: "平日オンコール可",
    extras: ["専任PM配置", "カスタム対応"]
  }
];

export const scope = {
  do: [
    "AI駆動の自動バグ修正・テスト生成 / パフォーマンス最適化（N+1解消、Lighthouse改善）",
    "技術的負債の計画的解消（リファクタ、依存更新、型安全性向上）",
    "セキュリティ強化（脆弱性対応、認証改善、OWASP対策）/ CI/CD整備・自動化",
    "API設計・連携開発（REST/GraphQL/WebSocket）/ 中規模機能追加",
    "アーキテクチャ相談・技術選定支援 / コードレビュー・週次レビュー"
  ],
  dont: [
    "ゼロからの大規模プロダクト開発（要件定義〜リリースまでフルスコープ）",
    "長期専任常駐（3ヶ月以上）",
    "専門セキュリティ監査・ペネトレーションテスト / インフラ専門作業（K8s構築、大規模DB移行）"
  ],
  stacks: ["TypeScript", "Node/Next.js/React", "Swift/SwiftUI", "Kotlin", "Firebase", "GCP/AWS"]
};

export const flow = [
  "課題を送る（フォーム or Issue）",
  "担当を割当（オンデマンド）＋自動チェック",
  "実装→最終レビュー（元PM）",
  "\"納品物\"をお返し（そのまま適用可能）"
];

export const usecases = [
  "小さな不具合を週次で一掃",
  "手作業運用の自動化(CLI/ワークフロー化)",
  "要所のE2Eテスト導入",
  "古い依存の段階的アップグレード"
];

export const faqs = [
  {
    q: "なぜ安い?",
    a: "GPU自動化で\"時間を機械に置換\"。人は難所に集中するため、稼働あたりの成果量が増えます。"
  },
  {
    q: "会議は?",
    a: "Starterは非同期のみ。Standard以上で週1・30分の同期レビュー可。"
  },
  {
    q: "著作権は?",
    a: "成果物は原則クライアント帰属。NDA対応可。"
  },
  {
    q: "緊急時は?",
    a: "Proは当日、Standardは24hで一次対応。夜間・休日はスピードオプション(+20%)。"
  },
  {
    q: "壁打ちだけでも良い?",
    a: "OKです。GPT/エンジニア同席の壁打ち枠を用意します。"
  }
];
