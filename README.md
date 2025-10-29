# スポットエンジニア（仮）BPO LP

「納品物」を毎月届けるBPOサービスのランディングページ

---

## ⚠️ 重要：新しいドキュメント構造

このプロジェクトは **GPT → plan.md → Claude Code** ワークフローに対応した仕様書チャンク構造に移行しました。

### 📋 必読ドキュメント

1. **[docs/plan/master.md](docs/plan/master.md)** - プロジェクト全体のマスタープラン
2. **[docs/plan/tokens.md](docs/plan/tokens.md)** - デザイントークン定義
3. **[CLAUDE.md](CLAUDE.md)** - 実装ガイド（Claude Code向け）

### 📚 機能別仕様書（実装順）

| 順序 | ファイル | 機能 | 優先度 | 状態 |
|-----|---------|------|--------|------|
| 0 | [tokens.md](docs/plan/tokens.md) | デザイントークン | P0 | ✅ |
| 1 | [planmd01-hero.md](docs/plan/planmd01-hero.md) | HeroSplit | P0 | ✅ |
| 2 | [planmd02-reasons.md](docs/plan/planmd02-reasons.md) | Reasons | P0 | ✅ |
| 3 | [planmd03-techstack.md](docs/plan/planmd03-techstack.md) | TechStackFull | P0 | ✅ |
| 4 | [planmd04-casestudies.md](docs/plan/planmd04-casestudies.md) | CaseStudies | P0 | ✅ |
| 5 | [planmd05-plans.md](docs/plan/planmd05-plans.md) | Plans | P0 | ✅ |
| 6 | [planmd06-howitworks.md](docs/plan/planmd06-howitworks.md) | HowItWorks | P1 | ⚠️ |
| 7 | [planmd07-faq.md](docs/plan/planmd07-faq.md) | FAQ | P0 | ✅ |
| 8 | [planmd08-contact.md](docs/plan/planmd08-contact.md) | Contact | P0 | ✅ |
| 9 | [planmd09-audit.md](docs/plan/planmd09-audit.md) | Audit Form | P0 | ✅ |

---

## 🚀 クイックスタート

### インストール

```bash
pnpm install
```

### 開発サーバー起動

```bash
pnpm dev
```

ブラウザで http://localhost:3000 (またはポートが使用中の場合は別のポート)にアクセス

### ビルド

```bash
pnpm build
pnpm start
```

## 📁 プロジェクト構成

```
docs/plan/                # 仕様書ディレクトリ（新規）
├── master.md             # マスタープラン
├── tokens.md             # デザイントークン定義
└── planmd01-09.md        # 機能別仕様書

app/
├── (marketing)/
│   ├── _components/      # 各セクションコンポーネント
│   │   ├── Header.tsx    # グローバルナビゲーション
│   │   ├── Footer.tsx    # フッター（法務リンク含む）
│   │   ├── HeroSplit.tsx # ヒーローセクション（Split型）
│   │   ├── Challenges.tsx # 課題セクション
│   │   ├── Reasons.tsx   # 安い理由（丸数字チップ）
│   │   ├── TechStackFull.tsx # 対応技術スタック
│   │   ├── CaseStudies.tsx   # 事例（Before/After演出）
│   │   ├── Plans.tsx     # プラン・料金（成果ベース定額制）
│   │   ├── Scope.tsx     # 対応範囲（できること/できないこと）
│   │   ├── HowItWorks.tsx # 進め方4ステップ
│   │   ├── FAQ.tsx       # よくある質問
│   │   └── Contact.tsx   # お問い合わせフォーム
│   └── _data/
│       └── bpo.ts        # データ定義(Props管理)
├── legal/               # 法務ページ
│   ├── nda/
│   │   └── page.tsx     # NDA・秘密保持
│   ├── privacy/
│   │   └── page.tsx     # プライバシーポリシー
│   └── tokushoho/
│       └── page.tsx     # 特定商取引法
├── faq/
│   └── page.tsx         # FAQ詳細ページ
├── contact/
│   └── page.tsx         # お問い合わせページ
├── audit/
│   └── page.tsx         # 無料コード健診フォーム
├── api/audit/
│   └── route.ts         # 健診フォーム送信API
├── globals.css          # デザイントークン
├── layout.tsx           # ルートレイアウト
└── page.tsx             # トップページ
```

## 🎨 カスタマイズ

### 文言・料金の変更

`app/(marketing)/_data/bpo.ts` を編集することで、すべての文言と料金プランを変更できます。

```typescript
// 例: ヒーローの文言変更
export const hero = {
  title: "月額3万円から、社内に"使える"エンジニアを。",
  sub: "自社GPU×自動デバッグで、人は難所に集中。小さく速く、確実に。",
  // ...
};

// 例: プラン追加・変更
export const plans: Plan[] = [
  {
    name: "Starter",
    price: "¥30,000/月",
    // ...
  },
  // 新しいプランを追加可能
];
```

### デザインの変更

`app/globals.css` でカラーやフォントなどのデザイントークンを変更できます。

```css
:root {
  --primary: #2563eb;   /* アクションボタンの色（青） */
  --accent: #64748b;    /* グレー */
  --bg: #ffffff;        /* 背景は白 */
  --text: #0a0a0a;      /* テキスト色 */
  /* ... */
}
```

### 画像の差し替え

1. `/public/bpo-hero.svg` を削除
2. 新しい画像を `/public/bpo-hero.jpg` として配置
3. `app/(marketing)/_components/Hero.tsx` の `src` を更新

## ✅ 受け入れ基準チェックリスト

- [x] ヒーローに「月額3万円〜」「GPU×自動デバッグ」「無料相談(最短15分)」が明示されている
- [x] プラン: Starter(¥140,000/20h), Standard(¥275,000/40h), Pro(¥520,000/80h), Team(¥980,000/160h)が表示
- [x] 画像は角丸内に収まり、CLSが発生しない(aspect-ratio or fill+sizes)
- [x] スマホ幅で横スクロールなし / 見出しはヘッダーに隠れない(scroll-margin-top)
- [x] CTAやタグに色の役割が効き、視線誘導ができている(Primary/Accent)
- [x] フォームに企業情報とオンライン面談希望日時を選択可能
- [x] 文言・料金をPropsで管理(将来の横展開用)
- [x] フッターに「NDA/プライバシー/特商法」リンクを配置（実装済み）
- [x] 法務ページ3種類（NDA、プライバシーポリシー、特定商取引法）完成

## 🔧 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📝 機能一覧

### 実装済みセクション（P0）

1. **HeroSplit** - Split型メインビジュアル + KPIチップ3つ
2. **Challenges** - 課題セクション（5項目、文章量均等化済み）
3. **Reasons** - 「機械が時間を削り、人が価値を出す。」+ 丸数字チップ
4. **TechStackFull** - 4カテゴリ技術スタック + 補足テキスト
5. **CaseStudies** - Before/Afterホバー演出付き事例カード
6. **Plans** - 4段階料金プラン（成果ベース定額制） + プラン選択ヒントカード3種
7. **Scope** - 対応範囲（できること/できないこと/対応技術）
8. **HowItWorks** - 進め方4ステップ（CSS transitionアニメーション）
9. **FAQ** - よくある質問（先頭2問初期展開、5問に厳選）
10. **Contact** - お問い合わせフォーム（企業情報 + オンライン面談希望日時選択）
11. **Legal Pages** - 法務ページ3種（NDA、プライバシーポリシー、特定商取引法）

### 今後の拡張予定（P1/P2）

- **KPI Mini Counter** - 数字カウントアップアニメーション
- **Item Count Simulator** - 件数シミュレーター
- **Logo Marquee** - クライアントロゴスクロール
- **Framer Motion統合** - より高度なアニメーション効果

### アクセシビリティ対応

- セマンティックHTML
- 適切な見出し階層(h1-h3)
- alt属性の設定
- フォーカス表示
- scroll-margin-top設定

### パフォーマンス最適化

- next/image の使用
- sizes 属性による画像最適化
- CLSゼロ(aspect-ratio)
- フォントの最適読み込み

## 🌐 フォント

Google Fontsから以下のフォントを読み込んでいます：

- **Inter** (欧文)
- **Zen Kaku Gothic New** (和文)
- **Noto Sans JP** (和文フォールバック)

## 🚢 デプロイ

### Render.com へのデプロイ

1. GitHubリポジトリと連携
2. Build Command: `pnpm install && pnpm build`
3. Start Command: `pnpm start`
4. 環境変数の設定（必要に応じて）

### Vercel へのデプロイ

```bash
npx vercel
```

## 📄 ライセンス

© 2025 株式会社ZETTAI. All rights reserved.
