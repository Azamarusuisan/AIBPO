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
    {
      category: "フロントエンド開発",
      items: [
        "React/Next.js/Vue.jsコンポーネント実装・修正",
        "レスポンシブデザイン対応（Tailwind CSS / CSS Modules）",
        "状態管理（Redux / Zustand / Context API）",
        "フォームバリデーション・UI/UX改善",
        "Lighthouse スコア改善（パフォーマンス最適化）",
        "アクセシビリティ対応（WCAG準拠）"
      ]
    },
    {
      category: "バックエンド開発",
      items: [
        "REST API / GraphQL エンドポイント開発",
        "認証・認可機能（JWT / OAuth / Firebase Auth）",
        "データベース設計・クエリ最適化（N+1問題解消）",
        "バッチ処理・非同期ジョブ（Queue / Cron）",
        "API連携・Webhook実装",
        "Node.js / Express / Nest.js / Next.js API Routes"
      ]
    },
    {
      category: "自動化・DevOps",
      items: [
        "CI/CD パイプライン構築（GitHub Actions / GitLab CI）",
        "自動テスト導入（Jest / Vitest / Playwright）",
        "デプロイ自動化（Vercel / AWS / GCP）",
        "コード品質チェック（ESLint / Prettier / TypeScript strict）",
        "依存関係の自動更新（Renovate / Dependabot）",
        "ログ監視・エラー通知設定（Sentry / CloudWatch）"
      ]
    },
    {
      category: "保守・改善",
      items: [
        "バグ修正・デバッグ（自動解析支援付き）",
        "技術的負債の解消（リファクタリング）",
        "ライブラリ・フレームワークのアップグレード",
        "セキュリティ脆弱性対応（npm audit / Dependabot）",
        "パフォーマンスボトルネック特定・改善",
        "コードレビュー・品質向上提案"
      ]
    },
    {
      category: "モバイルアプリ",
      items: [
        "Swift / SwiftUI（iOS）開発",
        "Kotlin（Android）開発",
        "React Native 軽微な修正",
        "Firebase連携（Firestore / Auth / FCM）",
        "アプリ内購入・通知機能実装"
      ]
    },
    {
      category: "その他対応技術",
      items: [
        "TypeScript型定義強化・型安全性向上",
        "ドキュメント整備（OpenAPI / Storybook）",
        "E2Eテスト導入（Playwright / Cypress）",
        "簡易的なデータ移行スクリプト",
        "技術選定・アーキテクチャ相談"
      ]
    }
  ],
  dont: [
    {
      category: "3D・ゲーム開発",
      items: [
        "Unity / Unreal Engine開発",
        "3Dモデリング・アニメーション",
        "WebGL / Three.js 複雑な実装",
        "ゲームロジック・物理エンジン"
      ],
      icon: "cube"
    },
    {
      category: "専門的インフラ作業",
      items: [
        "Kubernetes クラスタ構築・運用",
        "大規模データベース移行（TB級）",
        "ネットワーク設計・VPC構築",
        "オンプレミスサーバー構築"
      ],
      icon: "server"
    },
    {
      category: "組込み・ハードウェア",
      items: [
        "IoTデバイスファームウェア開発",
        "Arduino / Raspberry Pi 低レイヤー制御",
        "C/C++ 組込みシステム",
        "リアルタイムOS開発"
      ],
      icon: "chip"
    },
    {
      category: "専門的セキュリティ",
      items: [
        "ペネトレーションテスト",
        "脆弱性診断・セキュリティ監査",
        "暗号化アルゴリズム実装",
        "ブロックチェーン・スマートコントラクト"
      ],
      icon: "shield"
    },
    {
      category: "大規模・長期案件",
      items: [
        "ゼロからの大規模プロダクト開発（要件定義〜リリース）",
        "3ヶ月以上の専任常駐",
        "デザイン制作（Figma / Photoshop）",
        "マーケティング・SEO施策"
      ],
      icon: "briefcase"
    }
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
