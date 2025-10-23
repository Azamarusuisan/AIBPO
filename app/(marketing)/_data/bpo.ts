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
    "自動デバッグ: 失敗→要約→修正パッチ生成→再実行",
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
    price: "¥30,000/月",
    tickets: "上限：5件（完成した変更）",
    sla: "初回応答48h以内",
    meeting: "非同期対応のみ"
  },
  {
    name: "Standard",
    price: "¥120,000/月",
    tickets: "上限：20件（完成した変更）",
    sla: "初回応答24h以内",
    meeting: "週1・30分の打合せOK",
    extras: ["月次レポート(改善提案)"],
    highlight: true
  },
  {
    name: "Pro",
    price: "¥300,000/月",
    tickets: "上限：60件（完成した変更）",
    sla: "当日優先対応",
    meeting: "平日オンコール可",
    extras: ["週次レビュー", "優先キュー運用"]
  }
];

export const scope = {
  do: [
    "バグ修正 / 小規模機能追加 / API連携 / 自動テスト追加 / CI整備",
    "ライブラリアップデート / 軽微UI調整 / スクリプト作成",
    "週次レビュー / コードレビュー / 小口リファクタ"
  ],
  dont: [
    "大規模新規プロダクト / 長期常駐 / 企画〜フル開発(別PJ)",
    "専門的なセキュリティ監査 / ペネトレーションテスト"
  ],
  stacks: ["TypeScript", "Node/Next.js/React", "Swift/SwiftUI", "Kotlin", "Firebase", "GCP/AWS"]
};

export const flow = [
  "課題を送る（フォーム or Issue）",
  "担当を割当（オンデマンド）＋自動チェック",
  "実装→最終レビュー（元PM）",
  "\"完成した変更\"をお返し（そのまま適用可能）"
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
