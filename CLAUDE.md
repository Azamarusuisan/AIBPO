# Claude Code 実装ガイド

このプロジェクトは、**docs/plan/** ディレクトリの仕様書チャンクを参照して実装しています。

## 📋 最優先で確認すべきドキュメント

1. **docs/plan/master.md** - プロダクト全体のマスタープラン
2. **docs/plan/tokens.md** - デザイントークン定義（全コンポーネント共通）
3. **docs/plan/planmdXX-*.md** - 機能別の詳細仕様（依存順に実装）
4. このファイル（CLAUDE.md） - 技術的な実装ガイド

## 🚨 重要：実装ルール

**必ず以下の順序で作業してください：**

1. **master.md** で全体像を把握
2. **tokens.md** でデザインシステムを確認
3. **planmdXX** を依存順に参照（01→02→03...）
4. 各planmdの「受け入れ基準」を満たしてから次へ進む
5. 小さなコミット単位で実装（1機能 = 1コミット）
6. 出力は差分と対応テストを明示

## 🎯 プロジェクト概要

「完成した変更」を毎月届けるBPOサービスのランディングページ

### 重要な制約
- ❌ **「PR」という用語を使用禁止** → 「完成した変更」に統一
- ❌ **「派遣」という用語を単独で使用禁止** → 「BPO」「スポット対応」
- ✅ **成果物ベースの表現**を徹底

## 📁 プロジェクト構造

```
/docs/plan                  # 仕様書ディレクトリ（新規）
  - master.md               # マスタープラン
  - tokens.md               # デザイントークン定義
  - planmd01-hero.md        # HeroSplit仕様
  - planmd02-reasons.md     # Reasons仕様
  - planmd03-techstack.md   # TechStackFull仕様
  - planmd04-casestudies.md # CaseStudies仕様
  - planmd05-plans.md       # Plans仕様
  - planmd06-howitworks.md  # HowItWorks仕様
  - planmd07-faq.md         # FAQ仕様
  - planmd08-contact.md     # Contact仕様
  - planmd09-audit.md       # Audit Form仕様

/app
  /(marketing)
    /_components
      - Header.tsx          # グローバルナビゲーション
      - HeroSplit.tsx       # メインビジュアル + KPIチップ
      - Reasons.tsx         # 安い理由（丸数字チップ付き）
      - TechStackFull.tsx   # 対応技術スタック
      - CaseStudies.tsx     # 事例（Before/Afterホバー演出）
      - Plans.tsx           # 料金プラン（件数ベース）
      - HowItWorks.tsx      # 進め方4ステップ
      - FAQ.tsx             # よくある質問
      - Contact.tsx         # お問い合わせ
    /_data
      - bpo.ts              # データ定義
  /audit
    - page.tsx              # 無料コード健診フォーム
  /api/audit
    - route.ts              # 健診フォーム送信API
  /page.tsx                 # トップページ
  /globals.css              # グローバルスタイル
/public
  /images
    - hero-workspace.jpg    # ヒーロー画像（要配置）
  /logos                    # クライアントロゴ（任意）
```

## 🚀 実装済み機能（P0完了）

### ✅ 完了した実装
1. **HeroSplit.tsx**
   - KPIチップ3つ（初回応答24h / 当日着手（Pro） / 月3万円〜）
   - サブコピー差し替え（plan.md 2.1参照）
   - data-cta属性付与

2. **Reasons.tsx**
   - 見出し「機械が時間を削り、人が価値を出す。」
   - 丸数字チップ（1/2/3）bg-primary/10、text-primary

3. **Plans.tsx**
   - 上限件数表記「上限：5/20/60件（完成した変更）」
   - Standardに「おすすめ」チップ
   - 脚注2行固定表示

4. **CaseStudies.tsx**
   - Before/Afterホバー演出（赤→緑グラデーション）
   - 「返却物」「結果」表示

5. **FAQ.tsx**
   - 先頭2問を初期展開（open属性）

6. **audit/page.tsx**
   - 右カラムに安心カード2枚追加

7. **globals.css**
   - フォント最適化CSS
   - tracking調整

## ⚠️ 未完了・注意事項

### 画像アセット
- `/public/images/hero-workspace.jpg` が未配置
  - 推奨サイズ: 1600×900以上
  - 内容: 開発作業のクローズアップ（コード画面、キーボード、端末）
  - 人物の顔は避ける

### Framer Motion
- インストール失敗（依存関係の問題）
- HowItWorks.tsxのアニメーションは未実装
- 必要な場合は `npm install framer-motion --legacy-peer-deps` で再試行

## 🎨 デザインシステム

### カラー
```css
--primary: #2563eb;  /* 行動（CTA、リンク） */
--accent: #22c55e;   /* 実績（バッジ、成果） */
--heroPanel: #0a2540; /* ヒーロー右パネル */
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

## 📝 コピーライティング規則

### 必須表現
- ✅ 「完成した変更」
- ✅ 「変更一式」
- ✅ 「BPO」
- ✅ 「スポット対応」
- ✅ 「件数」（チケットではなく）

### 禁止表現
- ❌ 「PR」（単独使用）
- ❌ 「派遣」（単独使用）
- ❌ 「時間売り」（否定文以外）

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プロダクションサーバー
npm start
```

## 📊 実装状況

### P0タスク（今日）: 9/9 完了 ✅
### P1タスク（今週）: 2/3 完了
### P2タスク（来週）: 0/3 未着手

詳細は **plan.md** の「5. 実装タスク」を参照

## 🎯 次のアクション

新しい作業を始める前に：
1. **docs/plan/master.md** でプロジェクト全体像を確認
2. **docs/plan/tokens.md** でデザイントークンを確認
3. **docs/plan/planmdXX-*.md** を依存順に参照（依存関係はmaster.mdに記載）
4. 各planmdの「受け入れ基準」を満たしてから次へ進む
5. テスト要件を確認し、実装と同時にテストコードを作成
6. リスク・エッジケースを確認し、対策を実装

## 🐛 トラブルシューティング

### 画像が表示されない
→ `/public/images/hero-workspace.jpg` を配置

### Framer Motionが動かない
→ 現在インストール失敗中。代替手段（CSS transition）で実装済み

### 文言に「PR」が残っている
→ `grep -r "PR" app/` で検索し、「完成した変更」に置換

## 📚 参考リンク

- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS: https://tailwindcss.com/docs
- **プロジェクト仕様書**: `docs/plan/master.md` から開始
- **デザイントークン**: `docs/plan/tokens.md`
- **機能別仕様**: `docs/plan/planmd01-hero.md` 〜 `planmd09-audit.md`

## 📖 仕様書の読み方

### 依存順（実装順序）

1. **tokens.md** - 全コンポーネント共通のトークン定義
2. **planmd01-hero.md** - HeroSplit（依存: tokens.md）
3. **planmd02-reasons.md** - Reasons（依存: tokens.md）
4. **planmd03-techstack.md** - TechStackFull（依存: tokens.md, bpo.ts）
5. **planmd04-casestudies.md** - CaseStudies（依存: tokens.md）
6. **planmd05-plans.md** - Plans（依存: tokens.md, bpo.ts）
7. **planmd06-howitworks.md** - HowItWorks（依存: tokens.md, Framer Motion[オプション]）
8. **planmd07-faq.md** - FAQ（依存: tokens.md）
9. **planmd08-contact.md** - Contact（依存: tokens.md）
10. **planmd09-audit.md** - Audit Form（依存: tokens.md, API）

### 各planmdの構成

各仕様書には以下の項目が含まれます：

1. **機能名** - コンポーネント名と目的
2. **目的** - なぜこの機能が必要か
3. **対象ユーザーとユースケース** - ペルソナと利用シーン
4. **UI/ワイヤーフレーム** - レイアウトと要素構成
5. **コピー** - 実際の文言（そのまま使用）
6. **スタイリング** - tokens.md準拠のCSS定義
7. **データ構造** - TypeScript型定義
8. **API仕様**（必要な場合） - エンドポイント/リクエスト/レスポンス
9. **実装タスク** - チェックリスト形式
10. **テスト要件** - ユニット/コンポーネント/E2Eテスト
11. **リスク・エッジケース** - 想定される問題と対策
12. **受け入れ基準** - 完了条件（全て満たす必要あり）

## 🔄 ワークフロー

```
1. master.md でプロジェクト全体を把握
   ↓
2. tokens.md を実装（globals.css / tailwind.config.ts）
   ↓
3. planmd01 を読む
   ↓
4. planmd01 の実装タスクを実行
   ↓
5. planmd01 のテストを作成・実行
   ↓
6. planmd01 の受け入れ基準を全て満たす
   ↓
7. コミット（1機能 = 1コミット）
   ↓
8. planmd02 に進む（繰り返し）
```

## ⚙️ バージョン管理

各planmdはバージョン管理されています：

- **ハッシュ**: 各ファイル冒頭に記載（例：`e4f8a3b`）
- **差分管理**: 破壊的変更時は `.v2` ファイルを作成
- **変更履歴**: master.md の「9. バージョン管理」セクションに記録

---

## 🎯 Skills 運用ガイド（Claude Code）

このプロジェクトには、開発を効率化するための **Skills** が用意されています。

### 📦 利用可能な Skills

#### 1. **site-scaffolder** - LP→サイト骨格の自動生成
ランディングページから各セクションを独立したページに分割します。

```bash
cd skills/01_site-scaffolder
./scaffold.sh
```

**生成されるページ:**
- `/value` - 提供価値
- `/plans` - 料金プラン
- `/scope` - 対応範囲
- `/faq` - FAQ
- `/contact` - お問い合わせ

**使うタイミング:**
- LP の各セクションを独立ページに分割したいとき
- ヘッダー・フッターを含む基本構造を自動生成したいとき

---

#### 2. **ngword-linter** - 禁止用語の自動検出
コピーライティング規則に違反する用語を検出します。

```bash
cd skills/02_ngword-linter
./lint.sh
```

**検出する用語:**
- `PR`（単独使用） → 「完成した変更」
- `派遣`（単独使用） → 「BPO」「スポット対応」
- `チケット` → 「件数」「完成した変更」
- `時間売り`（肯定文） → 「成果物ベース」

**使うタイミング:**
- コミット前の最終チェック
- 新しいコンテンツを追加した後
- 外部ライターからのテキストを取り込むとき

---

#### 3. **plan-navigator** - 実装タスクの依存順抽出
`docs/plan/` の仕様書から実装すべきタスクを依存順に抽出します。

```bash
cd skills/03_plan-navigator
./summarize.sh
```

**出力内容:**
- planmd ファイルの実装順序（依存関係順）
- 各ファイルの未完了タスク
- 完了済みタスクのサマリー

**使うタイミング:**
- 新しい作業を始める前
- 次に何を実装すべきか確認したいとき
- プロジェクトの進捗を把握したいとき

---

#### 4. **asset-checker** - 画像とCLSの静的検査
画像アセットと Next.js Image コンポーネントの設定を検査します。

```bash
cd skills/04_asset-checker
./check.sh
```

**検査項目:**
- `/public/` 配下の画像ファイルの使用状況
- `<Image>` コンポーネントの `sizes` 属性
- `width/height` または `aspect-ratio` の指定
- CLS（Cumulative Layout Shift）リスクの評価

**使うタイミング:**
- 新しい画像を追加した後
- パフォーマンス最適化を行うとき
- ビルド前の最終チェック

---

### 🛠️ Skills のセットアップ

すべての Skills はすでに実行可能な状態になっています。

```bash
# 権限確認（必要に応じて）
ls -l skills/*/*.sh

# 実行権限がない場合
chmod +x skills/*/*.sh
```

---

### 📋 実行例

#### ワークフロー例 1: 新機能追加前

```bash
# 1. 実装タスクを確認
cd skills/03_plan-navigator && ./summarize.sh

# 2. 禁止用語をチェック
cd ../02_ngword-linter && ./lint.sh

# 3. 画像アセットを確認
cd ../04_asset-checker && ./check.sh
```

#### ワークフロー例 2: LP をサイトに分割

```bash
# 1. ページ骨格を自動生成
cd skills/01_site-scaffolder && ./scaffold.sh

# 2. 禁止用語をチェック
cd ../02_ngword-linter && ./lint.sh

# 3. ビルドして確認
cd ../.. && npm run build
```

---

### 🔒 セキュリティと制約

**Skills が実行できる操作:**
- ファイルの読み取り（Read）
- ファイルの書き込み（Write, Edit）
- Bash コマンドの実行（Grep, find, ls など）

**Skills が実行できない操作:**
- Git 操作（コミット、プッシュなど）
- npm install やパッケージ管理
- 外部 API への接続
- システム設定の変更

**注意事項:**
- Skills は既存ファイルを上書きする場合があります
- 実行前に変更内容をコミットしておくことを推奨
- 自動生成されたファイルは手動で調整が必要な場合があります

---

### 📚 Skills のカスタマイズ

各 Skill は以下のファイルで構成されています：

```
skills/
  XX_skill-name/
    SKILL.md      # 使い方とドキュメント
    script.sh     # 実行スクリプト
```

スクリプトを編集することで、プロジェクト固有の要件に合わせてカスタマイズできます。

**カスタマイズ例:**
- `ngword-linter/lint.sh`: 禁止用語の追加
- `site-scaffolder/scaffold.sh`: 生成するページの追加
- `asset-checker/check.sh`: 検査ルールの調整

---

### 🐛 トラブルシューティング

**Q: スクリプトが実行できない**
```bash
# 実行権限を付与
chmod +x skills/*/*.sh
```

**Q: "command not found" エラー**
```bash
# bash のパスを確認
which bash

# シェバンを調整（必要に応じて）
#!/usr/bin/env bash
```

**Q: 誤検出が多い**
各スクリプトの正規表現パターンを調整してください。
詳細は各 Skill の `SKILL.md` を参照。

---

### ✅ Skills 活用のベストプラクティス

1. **定期的な実行**: コミット前に必ず `ngword-linter` を実行
2. **タスク確認**: 新しい作業を始める前に `plan-navigator` を実行
3. **アセット検査**: 画像を追加したら `asset-checker` を実行
4. **ログ保存**: 検査結果をファイルに保存して後で参照
   ```bash
   ./lint.sh > lint-report.txt
   ```
5. **CI/CD 統合**: GitHub Actions などで自動実行を検討

---

これらの Skills を活用することで、開発効率を大幅に向上させ、品質を一定に保つことができます。
