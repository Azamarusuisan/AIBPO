# planmd01: HeroSplit（メインビジュアル）

**バージョン**: v1.0
**最終更新**: 2025-01-23
**依存**: `tokens.md`
**優先度**: P0

---

## 1. 機能名

HeroSplit - Split型ヒーローセクション

---

## 2. 目的

ファーストビューで以下を訴求：
1. **「完成した変更」を毎月お届け** - 成果物ベースの明確な価値提案
2. **3つのKPI** - 初回応答24h / 当日着手（Pro） / 月3万円〜
3. **CTA導線** - 無料相談/無料コード健診への明確な導線

---

## 3. 対象ユーザーとユースケース

### ペルソナ
- **スタートアップCTO**（予算制約あり、即効性を求める）
- **受託開発PM**（スポット需要に対応したい）
- **社内開発リーダー**（小規模改善を外注したい）

### ユースケース
1. LPに訪問 → ヒーロー読了（3秒以内）→ CTA クリック
2. モバイルでアクセス → KPIチップで価格感を把握 → 下スクロール
3. デスクトップで閲覧 → 左画像と右コピーを同時視認 → 信頼性判断

---

## 4. UI/ワイヤーフレーム

### レイアウト
```
+--------------------------------------+
| [左: 画像]       | [右: 暗色パネル]    |
|                 |  H1: キャッチコピー  |
| hero-workspace  |  [KPIチップ×3]      |
| .jpg            |  サブコピー         |
|                 |  [CTA 2つ]         |
+--------------------------------------+
```

### レスポンシブ
- **モバイル（< 768px）**: 縦積み（画像 → コピー）
- **デスクトップ（≥ 768px）**: 横並び 50/50

### 要素構成
```tsx
<section className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-2xl bg-background shadow-sm">
  <div className="grid grid-cols-1 md:grid-cols-2">
    {/* 左: 画像 */}
    <div className="relative min-h-[260px] md:min-h-[420px]">
      <Image src="/images/hero-workspace.jpg" alt="開発作業イメージ" fill priority />
    </div>

    {/* 右: 暗色パネル */}
    <div className="bg-[var(--heroPanel)] text-white p-8 md:p-12">
      <h1>月3万円から、"完成した変更"を毎月お届け。</h1>

      {/* KPIチップ */}
      <div className="flex gap-2">
        <span className="chip">初回応答24h</span>
        <span className="chip">当日着手（Pro）</span>
        <span className="chip">月3万円〜</span>
      </div>

      <p>サブコピー...</p>

      {/* CTA */}
      <Link href="/audit" data-cta="hero_primary">無料相談（最短15分）</Link>
      <Link href="/audit" data-cta="hero_audit">無料コード健診</Link>
    </div>
  </div>
</section>
```

---

## 5. コピー

### H1（キャッチコピー）
```
月3万円から、"完成した変更"を毎月お届け。
```

### KPIチップ（3つ）
1. `初回応答24h`
2. `当日着手（Pro）`
3. `月3万円〜`

### サブコピー
```
課題を送れば、必要なタイミングでAI×エンジニアがスポット対応。自動デバッグで短縮し、最終レビュー（元PM）で品質を確認。完成した変更をそのまま適用できます。
```

### CTA
- **Primary**: `無料相談（最短15分）` → `/audit`
- **Secondary**: `無料コード健診` → `/audit`

---

## 6. スタイリング

### カラー（tokens.md参照）
- パネル背景: `var(--heroPanel)` = `#0a2540`
- テキスト: `text-white`
- CTAプライマリ: `bg-primary` = `#2563eb`
- CTAセカンダリ: `border border-white/30`

### KPIチップ
```css
.chip {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px; /* rounded-full */
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  background: rgba(255, 255, 255, 0.2); /* bg-white/20 */
  border: 1px solid rgba(255, 255, 255, 0.3); /* border-white/30 */
  color: white;
}
```

### 装飾要素（Decorative strip）
```tsx
<div
  className="absolute -left-8 top-0 h-full w-8 rotate-6 bg-primary/70 hidden md:block pointer-events-none"
  aria-hidden
/>
```

---

## 7. データ構造

このコンポーネントは静的コンテンツのため、外部データソース不要。

---

## 8. API

不要（静的コンテンツ）

---

## 9. 実装タスク

- [ ] `/images/hero-workspace.jpg` を配置（1600×900+）
- [ ] HeroSplit.tsx にトークン適用（`var(--heroPanel)` 使用）
- [ ] KPIチップのスタイリング統一（tokens.md の chip 定義）
- [ ] CTAに `data-cta` 属性付与（hero_primary / hero_audit）
- [ ] レスポンシブ確認（< 768px で縦積み）
- [ ] Image コンポーネントの priority 属性付与（LCP最適化）
- [ ] CLS対策（min-h 指定、aspect-ratio使用）

---

## 10. テスト要件

### ユニットテスト
不要（表示のみ）

### コンポーネントテスト
```typescript
// HeroSplit.test.tsx
describe('HeroSplit', () => {
  it('renders H1 with correct copy', () => {
    render(<HeroSplit />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('月3万円から、"完成した変更"を毎月お届け。');
  });

  it('renders 3 KPI chips', () => {
    render(<HeroSplit />);
    expect(screen.getByText('初回応答24h')).toBeInTheDocument();
    expect(screen.getByText('当日着手（Pro）')).toBeInTheDocument();
    expect(screen.getByText('月3万円〜')).toBeInTheDocument();
  });

  it('has correct CTA links with data-cta attributes', () => {
    render(<HeroSplit />);
    const primaryCTA = screen.getByRole('link', { name: /無料相談/ });
    expect(primaryCTA).toHaveAttribute('href', '/audit');
    expect(primaryCTA).toHaveAttribute('data-cta', 'hero_primary');
  });
});
```

### E2Eテスト
```typescript
// hero.spec.ts
test('Hero CTA navigates to /audit', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-cta="hero_primary"]');
  await expect(page).toHaveURL('/audit');
});
```

### ビジュアルリグレッション
```bash
npx playwright test --grep "hero-screenshot"
```

---

## 11. リスク・エッジケース

### 画像404エラー
**リスク**: `/images/hero-workspace.jpg` が存在しない場合、Next.js Image が404
**対策**:
1. プレースホルダ画像を用意（`/images/placeholder-hero.jpg`）
2. エラーバウンダリで fallback 表示
3. 実装前に画像配置を必須タスク化

```tsx
<Image
  src="/images/hero-workspace.jpg"
  alt="開発作業イメージ"
  fill
  priority
  onError={(e) => {
    e.currentTarget.src = '/images/placeholder-hero.jpg';
  }}
/>
```

### CLS（Cumulative Layout Shift）
**リスク**: 画像読み込み時にレイアウトシフト発生
**対策**:
1. `min-h-[260px] md:min-h-[420px]` で高さ固定
2. `fill` + `object-cover` で親要素サイズに追従
3. Lighthouse で CLS < 0.1 確認

### 長いコピーの折り返し
**リスク**: H1が長すぎて2行を超える（特にモバイル）
**対策**:
- `leading-tight` で行間調整
- 必要なら `text-2xl md:text-3xl lg:text-4xl` で段階的サイズ調整

### 禁止用語チェック
**リスク**: 「PR」「派遣」「チケット」が混入
**対策**:
```bash
grep -r "PR\|派遣\|チケット" app/(marketing)/_components/HeroSplit.tsx
# 0件であることを確認
```

---

## 12. 受け入れ基準

- [ ] H1に「完成した変更」という文言が含まれている
- [ ] KPIチップが3つ正しく表示される
- [ ] CTA2つが正常に `/audit` にリンクしている
- [ ] `data-cta` 属性が付与されている（hero_primary / hero_audit）
- [ ] `/images/hero-workspace.jpg` が配置され、404エラーがない
- [ ] モバイル（< 768px）で縦積みレイアウトになる
- [ ] デスクトップ（≥ 768px）で横並び50/50レイアウトになる
- [ ] Lighthouse Performance 90+, CLS < 0.1
- [ ] `grep -r "PR\|派遣\|チケット"` で0件
- [ ] テストが全てパス（コンポーネント/E2E）

---

## 13. 参考実装

既存ファイル: `app/(marketing)/_components/HeroSplit.tsx`

差分適用箇所：
- トークン変数への置き換え（ハードコードされた色を削除）
- 画像エラーハンドリング追加

---

**次のステップ**: 受け入れ基準を満たしたら `planmd02-reasons.md` に進んでください。
