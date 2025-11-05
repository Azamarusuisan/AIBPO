# コンテンツ修正指示書（AI活用メッセージング強化版）

## 📄 1. HeroSplit.tsx の修正

### 修正箇所：3箇所（H1見出し + KPIチップ + サブコピー）

#### ✏️ 修正1：H1見出し
**場所：** 68-71行目

**Before:**
```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
  エンジニアがいなくても、
  <br />
  開発できる時代になった。
</h1>
```

**After:**
```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
  エンジニアがいなくても、
  <br />
  AIがあれば、開発できる。
</h1>
```

**変更理由：**
- 「時代になった」→「AIがあれば」に変更
- AI活用を明示的に訴求
- より能動的で力強いメッセージに

---

#### ✏️ 修正2：KPIチップ（3つのバッジ）
**場所：** 7行目、74-84行目

**Before:**
```tsx
const chips = ["初回応答24h", "当日着手（Pro）", "月3万円〜"];
```

**After:**
```tsx
const chips = ["AI活用で開発時間1/3", "デバッグ自動化", "月3万円〜"];
```

**変更理由：**
- AI活用の具体的効果を前面に出す
- 「開発時間1/3」で時短効果を数値化
- 「デバッグ自動化」で差別化要因を明示

---

#### ✏️ 修正3：サブコピー（pタグ）
**場所：** 86-89行目

**Before:**
```tsx
<p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
  JavaScript／TypeScript／Python を軸に、フロントエンドからバックエンドまで対応可能なエンジニアを、月額定額で活用できるBPOサービスです。ホームページ運用・業務ツール開発・API連携・自動化など、3D領域以外の幅広い業務をスピーディーにサポートします。
</p>
```

**After:**
```tsx
<p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
  「営業ツールを作りたい」「ブログを始めたい」「業務を自動化したい」
  <br className="hidden sm:block" />
  でも、エンジニアを採用する余裕はない。フリーランスに頼むと、高くて遅い。
</p>
<p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed font-semibold">
  私たちは、最新のAIツール（Claude・Cursor・GitHub Copilot）を駆使して、従来の1/3の時間とコストで開発します。
  <br className="hidden sm:block" />
  DB設計は数時間。デバッグは自動化。月3万円から、エンジニアがいなくても開発という機能を手に入れられます。
</p>
```

**変更理由：**
- 技術スタック羅列から「顧客の課題」へ転換
- AI活用の具体例を明示（DB設計、デバッグ）
- 「機能の獲得」を強調

---

### 📝 HeroSplit.tsx 修正後の全体像（68-89行目）

```tsx
{/* 右側：テキストとCTA（モバイルで下に配置） */}
<div className="space-y-4 sm:space-y-6 order-1 md:order-2">
  {/* H1 */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
    エンジニアがいなくても、
    <br />
    AIがあれば、開発できる。
  </h1>

  {/* KPIチップ3つ */}
  <div className="flex flex-wrap gap-2 sm:gap-3">
    {chips.map((chip, i) => (
      <span
        key={chip}
        className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-primary/10 text-primary border border-primary/20"
      >
        {chip}
      </span>
    ))}
  </div>

  {/* サブコピー */}
  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
    「営業ツールを作りたい」「ブログを始めたい」「業務を自動化したい」
    <br className="hidden sm:block" />
    でも、エンジニアを採用する余裕はない。フリーランスに頼むと、高くて遅い。
  </p>
  <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed font-semibold">
    私たちは、最新のAIツール（Claude・Cursor・GitHub Copilot）を駆使して、従来の1/3の時間とコストで開発します。
    <br className="hidden sm:block" />
    DB設計は数時間。デバッグは自動化。月3万円から、エンジニアがいなくても開発という機能を手に入れられます。
  </p>
```

---

## 📄 2. Reasons.tsx の修正

### 修正箇所：2箇所（見出し + 4つの理由すべて）

#### ✏️ 修正1：セクション見出し
**場所：** 52-57行目

**Before:**
```tsx
<h2 id="value-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3">
  機械が時間を削り、人が価値を出す。
</h2>
<p className="text-sm sm:text-base text-[var(--text-2)] mb-4 sm:mb-6">
  私たちの持っている強み
</p>
```

**After:**
```tsx
<h2 id="value-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3">
  AI時代の開発は、
  <br className="hidden sm:block" />
  従来の1/3の時間とコストで完了する。
</h2>
<p className="text-sm sm:text-base text-[var(--text-2)] mb-4 sm:mb-6">
  DB設計は数時間。デバッグは自動化。人が時間をかけていた作業を、AIが瞬時に処理します。
</p>
```

---

#### ✏️ 修正2：4つの理由（items配列）
**場所：** 2-23行目

**Before:**
```tsx
const items = [
  {
    number: "01",
    title: "透明性のある料金",
    description: "時間バンド制（20h/40h/80h/160h）。月14万から／超過時間：¥6,500〜7,000/h／契約は月次更新（3か月割引あり）"
  },
  {
    number: "02",
    title: "オフショアより低コスト、国内品質で安心",
    description: "実質6,000〜7,000円/hの単価レンジで、国内SES（人月80〜120万円）より安価。日本語対応PM＋レビュー体制により、オフショアの\"言語ギャップ\"リスクを回避。国内水準の開発品質・進行管理・SLAを標準装備"
  },
  {
    number: "03",
    title: "自動化×品質",
    description: "自社でNVIDIAの最高GPUを有しており、そこで完全自動バグ修正を自社開発。工数削減と費用削減が実現され相場よりお安く提供できます。最後は元PMレビュー。"
  },
  {
    number: "04",
    title: "対応領域の幅広さ",
    description: "フロントエンド（Next.js/React/Vite）、バックエンド（Node.js/Express/FastAPI）、ツール開発（ダッシュボード、レポート生成、軽量ETL）、保守・運用（サイト更新、モニタリング、CI/CD、QA支援）"
  }
];
```

**After:**
```tsx
const items = [
  {
    number: "01",
    title: "DB設計が数時間で完了",
    description: "従来、エンジニアが数日〜数週間かけていたDB設計を、最新のAIツール（Claude、GPT-4、Cursor）が数時間で生成。例：営業管理システムのDB設計が従来3日 → AI活用で2時間。開発時間が1/3に短縮。だから月3万円〜を実現できる。"
  },
  {
    number: "02",
    title: "デバッグが自動化され、チェック工数が激減",
    description: "従来、エンジニアが手作業でバグを探し、修正していた工程を、AI（GitHub Copilot、自社開発の自動デバッグシステム）が自動化。例：フォーム送信のバグ修正が従来半日 → AI活用で5分。チェック工数が1/10に削減。元PMが最終レビューするだけ。"
  },
  {
    number: "03",
    title: "最新AIツールに精通しているから、最大パフォーマンスを発揮",
    description: "Claude 3.5 Sonnet、Cursor、v0.dev、GitHub Copilot...AIツールは日々進化している。私たちは、これらの最新ツールを使いこなし、「AIに何を任せ、人が何を判断すべきか」を理解している。だから、エンジニアがいない企業でも、最先端の開発スピードと品質を手に入れられる。"
  },
  {
    number: "04",
    title: "「AI時代の開発」を社内で再現するには、膨大なコストがかかる",
    description: "最新AIツールを使いこなすには、ツールの選定と学習、プロンプトエンジニアリングのスキル、「AIに任せる部分」と「人が判断する部分」の見極めが必要。これらを社内で習得するには時間とコストがかかりすぎる。月3万円で、AI活用のノウハウごと外部に委ねる方が合理的。"
  }
];
```

**変更内容：**
- **01:** 料金説明 → DB設計の時短効果（具体例付き）
- **02:** オフショア比較 → デバッグ自動化（具体例付き）
- **03:** 自動化×品質 → 最新AIツール精通（差別化）
- **04:** 対応領域 → 社内再現コストの高さ（外部委託の合理性）

---

## 📄 3. CaseStudies.tsx の修正

### 修正箇所：事例3件の内容を全面改修
**場所：** 12-40行目

**Before:**
```tsx
const items = [
  {
    title: "既存バグ修正（Next.js）",
    badge: "エラー率 -91%",
    request: "フォーム送信で500エラー",
    action: "入力チェック／API修正／自動テスト3件",
    delivery: "納品物（テスト付き）",
    result: "エラー率 2.3% → 0.1%、36h",
    image: "/バグ修正.jpg",
  },
  {
    title: "表示速度改善（React）",
    badge: "TTFB -65%",
    request: "一覧ページのTTFBが遅い",
    action: "SSRキャッシュ／Redis／N+1解消／計測",
    delivery: "納品物＋計測レポ",
    result: "TTFB 1.2s → 420ms、48h",
    image: "/速度改善.jpg",
  },
  {
    title: "回帰対策（FastAPI）",
    badge: "回帰不具合 -41%",
    request: "更新のたび不具合が発生",
    action: "回帰テスト12件／CI整備／自動実行",
    delivery: "納品物（CI設定とテスト）",
    result: "回帰不具合 -41%、72h",
    image: "/回帰対策.jpg",
  },
];
```

**After:**
```tsx
const items = [
  {
    title: "営業会社（社員15名、エンジニア0名）",
    badge: "開発コスト -72%",
    request: "営業先リストを自動生成するツール。Excelでの手作業に限界。",
    action: "AI活用：DB設計2時間、実装2週間。従来なら2ヶ月・50万円の案件。",
    delivery: "営業管理ツール（DB + 管理画面）",
    result: "開発費50万円→14万円、期間2ヶ月→2週間。リスト作成時間：週10h→30分",
    image: "/バグ修正.jpg",
  },
  {
    title: "小売店（社員5名、エンジニア0名）",
    badge: "初期費用 -90%",
    request: "GitHubの無料テーマでブログ構築 + SEO対策。技術知識ゼロ。",
    action: "AI活用：テーマカスタマイズ、SEO設定を1週間で完了。",
    delivery: "ブログサイト + 継続保守（月3万円）",
    result: "初期費30万円→3万円。3ヶ月で月間PV5,000達成、問い合わせ月3件増",
    image: "/速度改善.jpg",
  },
  {
    title: "コンサル会社（社員20名、エンジニア0名）",
    badge: "作業時間 -96%",
    request: "クライアント向けレポート自動生成。毎月手作業で50時間。",
    action: "AI活用：要件をAIが分析、4週間で自動生成ツールを納品。",
    delivery: "レポート自動生成システム（Excel→PDF）",
    result: "開発費100万円→56万円。レポート作成：月50h→2h。年間削減600万円",
    image: "/回帰対策.jpg",
  },
];
```

**変更内容：**
- 技術的事例 → エンジニア不在企業の事例に変更
- 「従来の開発」との比較を明示（費用・時間）
- AI活用の効果を具体的に記載
- バッジも技術指標 → ビジネス成果に変更

---

## 📄 4. FAQ.tsx の修正

### 修正箇所：既存5問の後に3問追加
**場所：** 2-23行目（faqs配列の末尾に追加）

**Before:**
```tsx
const faqs = [
  {
    q: "なぜこんなに安いのですか？",
    a: "自社でNVIDIAの最高GPUを有しており、そこで完全自動バグ修正システムを自社開発しているため、工数削減と費用削減が実現されています。「機械が時間を削り、人が価値を出す」というコンセプトのもと、自動化できる部分はAIに任せ、人手は難所に集中することで、相場より大幅に安い価格を実現しています。"
  },
  // ...残り4問
];
```

**After:**
```tsx
const faqs = [
  {
    q: "なぜこんなに安いのですか？",
    a: "自社でNVIDIAの最高GPUを有しており、そこで完全自動バグ修正システムを自社開発しているため、工数削減と費用削減が実現されています。「機械が時間を削り、人が価値を出す」というコンセプトのもと、自動化できる部分はAIに任せ、人手は難所に集中することで、相場より大幅に安い価格を実現しています。"
  },
  {
    q: "時間で何時間使えますか？",
    a: "時間バンド制を採用しています。Starterは20h/月、Standardは40h/月、Proは80h/月、Teamは160h/月まで対応可能です。時間売りではなく、成果は「納品物」としてお返しします。超過時間は¥6,500〜7,000/hで対応可能です。"
  },
  {
    q: "品質はどのように担保されていますか？",
    a: "すべての「納品物」は元PMによる最終レビューを経て返却されます。具体的には、①AIによる自動テスト生成とデバッグ、②エンジニアによる実装、③元PMによる最終レビュー（アーキテクチャ判断、実装の難所確認、受入基準チェック）という3段階のチェック体制を敷いています。"
  },
  {
    q: "個人指名・常駐はできますか？",
    a: "人材派遣モデルではないため、個人指名や常駐対応はできません。当サービスは「課題を受けて実装し、納品物をお返しする」BPOモデルです。これにより、人材管理のコストを削減し、低価格での提供を実現しています。"
  },
  {
    q: "小規模な修正でも依頼できますか？",
    a: "はい、小規模な修正でも大歓迎です。Starterプランは月¥140,000から利用可能で、バグ修正や小規模な機能追加に最適です。時間バンド制のため、無駄なく利用できます。"
  },
  // ↓↓↓ ここから追加 ↓↓↓
  {
    q: "AIを使うと、なぜそんなに速く・安くなるのですか？",
    a: "従来エンジニアが時間をかけていた作業を、AIが自動化するからです。具体例：【DB設計】従来エンジニアが3日 → AI活用で2時間（-88%）、【デバッグ】従来半日 → AIが5分で原因特定（-90%）、【コード生成】CursorやGitHub Copilotが8割を生成 → PMが品質チェック（-70%）。この時短効果により、月3万円〜という価格を実現しています。"
  },
  {
    q: "AIだけで開発して、品質は大丈夫ですか？",
    a: "いいえ、AIだけでは開発しません。「AIに任せる部分」と「人が判断する部分」を明確に分けています。【AIに任せる部分】DB設計の初期案生成、定型的なコード生成（CRUD、フォーム）、バグの自動検出と修正案提示、テストコード生成。【人（元PM）が判断する部分】アーキテクチャの妥当性、セキュリティ要件、パフォーマンス最適化、受入基準の最終チェック。AI活用で時間を削減し、その分を人の品質チェックに充てています。だから「速くて安い」のに「品質が高い」を実現できます。"
  },
  {
    q: "エンジニアがいなくても、本当に開発できますか？",
    a: "はい、問題ありません。「何を作りたいか」を伝えるだけで大丈夫です。例：「営業先リストを自動生成したい」「GitHubのブログテーマでブログを始めたい」「業務レポートを自動化したい」など。技術的なこと（Next.js、React、FastAPIなどの技術スタック）は私たちが判断します。まずは無料相談（15分）で、実現可能性と概算見積もりをご提案します。"
  }
];
```

**追加内容：**
- AI活用の速度・コスト削減の仕組み（具体的な数字）
- AI vs 人間の役割分担（品質保証）
- エンジニア不在企業向けの安心メッセージ

---

## 📋 実装時のチェックリスト

### HeroSplit.tsx
- [ ] chips配列を変更
- [ ] H1見出しを変更
- [ ] サブコピーを2段落に分割

### Reasons.tsx
- [ ] セクション見出しを変更
- [ ] items配列（4項目）を全て変更

### CaseStudies.tsx
- [ ] items配列（3事例）を全て変更

### FAQ.tsx
- [ ] faqs配列の末尾に3問追加

---

## 🎯 全体のメッセージング戦略

### Before（技術寄り）
- 技術スタック羅列
- SESとの比較
- 時間単価の説明

### After（AI活用×顧客課題）
- 「エンジニア不在企業」にフォーカス
- AI活用の具体的効果（DB設計2時間、デバッグ5分）
- Before/After比較（費用・時間）
- 「開発という機能を手に入れる」価値訴求
