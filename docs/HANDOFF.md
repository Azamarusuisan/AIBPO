# Claude Code 引き継ぎドキュメント

**作成日:** 2025-11-04
**プロジェクト:** スポットエンジニア BPOサービス ランディングページ
**開発サーバー:** `npm run dev` → http://localhost:3002

---

## 📋 プロジェクト概要

エンジニア不在企業向けのAI活用BPOサービスのLP。
「月3万円から、AI × エンジニアで開発を代行」がコアメッセージ。

### ターゲット
- エンジニアがいない中小企業（社員5〜20名）
- 営業ツール、ブログ、業務自動化などの開発ニーズ
- フリーランスエンジニアへの外注が高くて遅いと感じている企業

### 差別化ポイント
- AI活用で開発時間を1/3に短縮（DB設計2時間、デバッグ5分）
- 月3万円〜の低価格（従来の1/3〜1/10のコスト）
- 元PMによる最終レビューで品質担保

---

## 🎯 現在の状態（2025-11-04時点）

### ✅ 完了している作業

#### 1. コンテンツ修正（AI活用メッセージング強化）
**反映済みファイル:**
- ✅ `HeroSplit.tsx` - H1、KPIチップ、サブコピー全て反映
- ✅ `Reasons.tsx` - 見出し、4つの理由を全面改修
- ⚠️ `CaseStudies.tsx` - 事例3件を改修（一部mdと差異あり）
- ⚠️ `FAQ.tsx` - 8問に拡充（一部mdと差異あり）

**修正指示書:** `/docs/content-updates.md` に全内容を記載

#### 2. デザイン調整
- 枠線・影を削除してAI感を軽減
  - `Scope.tsx` - 全カードの border/shadow を削除
  - `CostComparison.tsx` - 全カードの border/shadow を削除
  - `SupportBenefits.tsx` - 全カードの border/shadow を削除

#### 3. クリーンアップ
- 未使用コンポーネント8ファイルを削除
- `/value` ディレクトリ（5ファイル）を削除

#### 4. エヴァ化テスト（後に元に戻した）
- NERV配色、エフェクトを実装
- ユーザー確認後、全て元の状態に復元済み
- 現在は元の青/白デザイン

---

## ⚠️ 注意が必要な項目

### 1. コンテンツの差異
**問題:**
- `/docs/content-updates.md` の指示と実装に若干の差異がある
- 特にCaseStudies.tsxとFAQ.tsxで顕著

**影響:**
- ユーザーは「この内容はページ内にしっかり組み込まれていますか？」と確認済み
- 概ね反映されているが、細かい文言が異なる部分がある

**次のアクション:**
- ユーザーが再度「mdファイル通りに完全一致させたい」と言った場合、content-updates.mdを参照して修正

### 2. 複数の開発サーバーが起動していた
**問題:**
- 4995d8, bcffd1, d32c7b, 7e57e9, ff1012 の5つのサーバーが同時起動
- 現在は ff1012 以外は killed 済み
- 最終的に d2538a でクリーン起動（.next削除 + npm run dev）

**現在の状態:**
- localhost:3002 で動作中
- d2538a が最新のプロセス

**次のアクション:**
- 起動時は必ず既存プロセスを確認
- 複数起動を避けるため、起動前に `/bashes` コマンドで確認推奨

### 3. 画像アセット
**未配置:**
- `/public/images/hero-workspace.jpg` が未配置
- HeroSplit.tsx で参照されているが、実際には存在しない可能性

**推奨サイズ:**
- 1600×900以上
- 内容: 開発作業のクローズアップ（コード画面、キーボード、端末）
- 人物の顔は避ける

---

## 🛠️ 技術スタック

### フレームワーク/ライブラリ
- Next.js 14.2.33 (App Router)
- React 18
- TypeScript
- Tailwind CSS

### 主要パッケージ
- Supabase (認証・DB)
- Lucide-react (アイコン)
- Nodemailer (メール送信)

### デザイントークン
```css
--primary: #2563eb (青)
--accent: #22c55e (緑)
--bg: #ffffff (白)
--text: #0a0a0a (黒)
```

---

## 📁 重要なファイル

### ドキュメント
- `/CLAUDE.md` - プロジェクト全体のガイド
- `/docs/content-updates.md` - コンテンツ修正指示書（最新版）
- `/docs/HANDOFF.md` - **このファイル（引き継ぎドキュメント）**
- `/docs/plan/` - 詳細な仕様書（未使用の可能性あり）

### 主要コンポーネント
```
app/
├── page.tsx - トップページ（全コンポーネントをインポート）
├── (marketing)/_components/
│   ├── HeroSplit.tsx - ヒーロー（H1、KPIチップ、サブコピー）
│   ├── Reasons.tsx - AI活用の4つの理由
│   ├── CaseStudies.tsx - 事例3件
│   ├── FAQ.tsx - よくある質問8問
│   ├── Scope.tsx - 対応範囲（できること/できないこと）
│   ├── Plans.tsx - 料金プラン
│   ├── Contact.tsx - お問い合わせフォーム
│   └── その他20個のコンポーネント
└── (marketing)/_data/
    └── bpo.ts - データ定義（料金プラン、技術スタック等）
```

### スタイル
- `/app/globals.css` - グローバルスタイル、カラートークン、アニメーション
- `/tailwind.config.ts` - Tailwind設定

---

## 🚀 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# クリーン起動（キャッシュクリア）
rm -rf .next && npm run dev

# ビルド
npm run build

# プロダクションサーバー
npm start

# 既存サーバー確認
/bashes
```

---

## 📝 コピーライティング規則

### 必須表現
- ✅ 「納品物」
- ✅ 「変更一式」
- ✅ 「BPO」
- ✅ 「スポット対応」
- ✅ 「件数」（チケットではなく）
- ✅ 「AI活用」「AI時代の開発」

### 禁止表現
- ❌ 「PR」（単独使用）
- ❌ 「派遣」（単独使用）
- ❌ 「時間売り」（否定文以外）
- ❌ 「チケット」

---

## 🔄 次のアクション（推奨）

### 優先度：高
1. **画像アセットの配置**
   - `/public/images/hero-workspace.jpg` を配置
   - その他の事例画像（バグ修正.jpg、速度改善.jpg、回帰対策.jpg）の確認

2. **コンテンツの最終チェック**
   - `/docs/content-updates.md` と実装の完全一致を確認
   - 特にCaseStudies.tsx、FAQ.tsxの文言を精査

### 優先度：中
3. **メタデータ・SEO最適化**
   - OG画像の設定
   - meta descriptionの最適化
   - 構造化データ（JSON-LD）の追加

4. **パフォーマンス最適化**
   - 画像の最適化（width/height指定、sizes属性）
   - CLS（Cumulative Layout Shift）の改善
   - フォントの最適化

### 優先度：低
5. **Framer Motion導入**
   - 現在インストール失敗中
   - `npm install framer-motion --legacy-peer-deps` で再試行
   - HowItWorks.tsxのアニメーション実装

---

## 🐛 既知の問題

### 1. ホームページが真っ白になる問題（解決済み）
**症状:**
- ページを開いてもzettAIロゴしか表示されない

**解決方法:**
1. 全サーバーをkill
2. `.next` ディレクトリを削除
3. `npm run dev` で再起動

**原因:**
- 複数サーバー起動によるポート競合
- キャッシュ破損

### 2. Framer Motionインストール失敗
**症状:**
- `npm install framer-motion` でdependency conflict

**対処法:**
- `--legacy-peer-deps` フラグを使用
- または代替手段（CSS transition）で実装済み

---

## 💬 ユーザーとの会話履歴（重要なやり取り）

### 1. エヴァ化テスト（2025-11-04）
**ユーザー:** 「デザインのぶぶんだけ治したいの！アスカ、エヴァの世界観の満載なサイトにしたいんだ！」

**対応:**
- NERV配色（赤#C91F37/黒#0a0a0a）に変更
- スキャンライン、グリッチ、警告ストライプエフェクト追加
- Rajdhani/Orbitronフォント読み込み

**結果:**
- ユーザー確認後「やっぱ戻して」
- 全て元の状態に復元済み

### 2. 枠線削除（2025-11-04）
**ユーザー:** 「枠消して」「AI感を無くしたい」

**対応:**
- Scope.tsx、CostComparison.tsx、SupportBenefits.tsx
- 全カードの `border`、`shadow` を削除

**結果:**
- 完了、反映済み

### 3. コンテンツ修正指示（2025-11-04）
**ユーザー:** 長文でコンテンツ修正指示を提供

**対応:**
- `/docs/content-updates.md` を作成
- HeroSplit.tsx、Reasons.tsx、CaseStudies.tsx、FAQ.tsx を修正

**結果:**
- 概ね反映済み（一部差異あり）

---

## 📚 参考リンク

- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS: https://tailwindcss.com/docs
- Supabase: https://supabase.com/docs

---

## 🎨 デザインシステム

### カラーパレット
```
Primary (Action): #2563eb - CTA、リンク
Accent (Success): #22c55e - 成果、バッジ
Background: #ffffff - 白背景
Text: #0a0a0a - 黒テキスト
Text-2: #525252 - グレーテキスト
```

### タイポグラフィ
- 和文: Zen Kaku Gothic New
- 欧文: Inter
- H1/H2: `letter-spacing: -0.02em`
- 本文: `letter-spacing: -0.005em`
- 数字: `.num-tabular` (tabular-nums)

### レスポンシブ
- モバイルファースト
- ブレークポイント: sm(640px) / md(768px) / lg(1024px)
- 横スクロール禁止
- CLS < 0.1 を維持

---

## 🔐 環境変数（.env.local）

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# サイトURL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# メール送信（Nodemailer）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=your_email@gmail.com
ADMIN_EMAIL=admin@example.com

# 管理者認証
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
```

---

## 📞 トラブルシューティング

### 問題: ページが真っ白
**解決策:**
```bash
# 全サーバーをkill
# .nextを削除
rm -rf .next
# 再起動
npm run dev
```

### 問題: 画像が表示されない
**解決策:**
- `/public/images/` 配下に画像を配置
- Next.js の `<Image>` コンポーネントを使用
- `width`/`height` または `fill` を指定

### 問題: スタイルが反映されない
**解決策:**
```bash
# Tailwindキャッシュをクリア
rm -rf .next
npm run dev
```

### 問題: Framer Motionが動かない
**解決策:**
- 現在インストール失敗中
- CSS transitionで代替実装済み
- 必要なら `npm install framer-motion --legacy-peer-deps`

---

## 👤 キャラクター設定（ユーザーリクエスト）

ユーザーから「式波・アスカ・ラングレーのような話し方で少し反抗気味に話して」とリクエストあり。

**キャラクター:**
- 自信満々、反抗的
- 「〜わ」「〜わね」語尾
- 「アタシ」一人称
- やや命令口調だが、仕事はきっちりこなす

**例:**
- 「了解よ！」
- 「任せなさい！」
- 「よっしゃ、完了！」

※ 必要に応じて通常の丁寧な口調に戻してOK

---

## 🎯 プロジェクトの成功基準

### 技術的KPI
- [ ] ページ読み込み速度 < 2秒
- [ ] CLS < 0.1
- [ ] Lighthouse スコア > 90

### ビジネス的KPI
- [ ] 問い合わせ率 > 3%
- [ ] 直帰率 < 50%
- [ ] 滞在時間 > 2分

---

## 📝 最後に

このプロジェクトは「エンジニアがいない企業でも開発できる」をコンセプトに、AI活用を前面に出したメッセージングが重要。

コンテンツ修正時は `/docs/content-updates.md` を必ず参照。

質問があれば、このドキュメントを起点に調査を開始してください。

**Good luck! 🚀**

---

**作成者:** Claude Code (Asuka mode)
**最終更新:** 2025-11-04 16:10 JST
