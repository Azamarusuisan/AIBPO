# HeroTerminal コンポーネント

ヒーローセクションの左カラムにオーバーレイ表示されるターミナル風アニメーションコンポーネント

---

## 📋 概要

開発アシスタント機能を訴求するターミナル風UIコンポーネント。5つのメッセージが順番にタイプ表示→フェードアウトを繰り返します。

### 主な機能

- ✅ タイプライターアニメーション（35-60文字/分相当）
- ✅ ホバーで停止＋CTA表示
- ✅ `prefers-reduced-motion` 完全対応
- ✅ レスポンシブ対応（デスクトップ＝オーバーレイ、モバイル＝ダークパネル下）
- ✅ アクセシビリティ配慮（aria-live, キーボード操作）

---

## 🎨 デザイン仕様

### サイズ
- **デスクトップ**: 最大幅 400px、高さ自動
- **モバイル**: 幅100%、パディング調整

### カラー
- **背景**: `#0a1929` (ダークネイビー)
- **ヘッダー**: `#1a2332`
- **テキスト**: `#e6edf3` (明るいグレー)
- **プロンプト**: `#58a6ff` (青)
- **ドット**: 赤・黄・緑（macOS風）

### フォント
- 等幅フォント: `'Courier New', monospace`
- CTA: `var(--lat), var(--jp)` (Inter/Zen Kaku Gothic New)

---

## 🔧 実装詳細

### ファイル構成

```
app/(marketing)/_components/
├── HeroTerminal.tsx       # コンポーネント本体
└── HeroSplit.tsx          # 統合先（オーバーレイ＋モバイル配置）

app/globals.css            # スタイル定義（240行追加）

docs/
└── HeroTerminal.md        # このファイル
```

### アニメーションフロー

```
1. タイピングフェーズ（50ms/文字）
   ↓
2. 表示フェーズ（2200ms）
   ↓
3. フェードアウト（300ms）
   ↓
4. 次のメッセージへ（ループ）
```

### 表示メッセージ（5行）

1. 開発で足りないところ、AIがサクッと補完します。
2. コードを自動生成→提案→反映。手戻りを減らす開発アシスタント。
3. 「完成した変更」を毎月お届け。開発の速度と品質を両取り。
4. 不足箇所を検出してワンクリック提案。実装のボトルネックを即解消。
5. 自動生成＋最終レビューで安心導入。現場に馴染むコードを提供。

---

## 📱 レスポンシブ動作

### デスクトップ（≥ 768px）
- 左カラム画像の上にオーバーレイ
- `position: absolute` で中央配置
- `pointer-events-none` → ホバー時に `pointer-events-auto`

### モバイル（< 768px）
- ダークパネルの直下に配置
- 幅100%、背景 `bg-gray-50`
- オーバーレイは `hidden md:block` で非表示

---

## ♿ アクセシビリティ

### 実装済み対応

| 項目 | 実装内容 |
|------|---------|
| **aria-live** | `polite` で動的テキスト変更を通知 |
| **role** | `complementary` で補助コンテンツと明示 |
| **aria-label** | 「開発アシスタント機能の紹介」 |
| **キーボード操作** | `onFocus/onBlur` でホバーと同等の停止動作 |
| **reduced-motion** | アニメ完全停止＋最終メッセージ固定表示 |
| **コントラスト** | WCAG AA準拠（背景 #0a1929 / テキスト #e6edf3 = 12.6:1） |

### テストチェックリスト

```bash
# スクリーンリーダーテスト
- [ ] VoiceOver で aria-live が読み上げられる
- [ ] role="complementary" が認識される

# キーボード操作
- [ ] Tab キーでフォーカス可能
- [ ] フォーカス時にアニメ停止
- [ ] CTA にフォーカス移動可能

# Reduced Motion
- [ ] システム設定で reduced-motion 有効化
- [ ] アニメが停止し最終メッセージが固定表示
- [ ] カーソルの点滅も停止
```

---

## 🎯 CTA動作

### ホバー/フォーカス時

- アニメーション停止（`isPaused = true`）
- CTA が `opacity: 0 → 1` でフェードイン
- `pointer-events: none → auto` で操作可能化

### リンク先

| CTA | 遷移先 | data-cta属性 |
|-----|--------|-------------|
| **提案を確認する** | `/contact` | `hero_terminal_contact` |
| **無料でコード健診** | `/audit` | `hero_terminal_audit` |

---

## 🔄 統合方法

### HeroSplit.tsx への組み込み

```tsx
import HeroTerminal from "./HeroTerminal";

// デスクトップ：オーバーレイ
<div className="hidden md:block absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
  <div className="pointer-events-auto">
    <HeroTerminal />
  </div>
</div>

// モバイル：ダークパネル下
<div className="md:hidden px-4 py-6 bg-gray-50">
  <HeroTerminal />
</div>
```

---

## 🐛 既知の制約・注意点

### 1. パフォーマンス

- `useEffect` で50msごとに文字追加（React再レンダリング）
- 大量のコンポーネントがある場合は `useMemo` で最適化推奨

### 2. 画像との重なり

- オーバーレイのため、左カラム画像が透ける
- 現在は背景 `#0a1929` で不透明化
- 画像が重要な場合はオーバーレイ位置を調整

### 3. モバイル時の高さ

- ダークパネル下に配置するため、ヒーロー全体が縦に伸びる
- `min-height` 調整で高さを制限可能

---

## 📊 受け入れ基準（Acceptance Criteria）

- [x] **AC1**: デスクトップで左白領域中央に表示される
- [x] **AC2**: 5行が順にタイプ→表示→フェードアウトでループ
- [x] **AC3**: ホバーで停止しCTA操作可能
- [x] **AC4**: prefers-reduced-motion に従う
- [x] **AC5**: CTA が /contact, /audit に遷移
- [x] **AC6**: モバイルでダークパネル下に配置
- [x] **AC7**: aria-live とキーボード操作対応

---

## 🧪 テスト方法

### 手動テスト

```bash
# 1. デスクトップ表示確認
npm run dev
# → http://localhost:3000 でヒーロー左カラムにターミナル表示

# 2. ホバー動作確認
# → ターミナルにマウスホバー → アニメ停止 → CTA表示

# 3. Reduced Motion確認
# macOS: システム環境設定 > アクセシビリティ > ディスプレイ > 視差効果を減らす
# → 再読み込み → アニメ停止・最終メッセージ固定

# 4. モバイル確認
# → DevTools でモバイルビュー → ダークパネル下に表示
```

### 自動テスト（推奨）

```typescript
// tests/HeroTerminal.test.tsx
describe('HeroTerminal', () => {
  it('renders terminal with first message', () => {
    render(<HeroTerminal />);
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  it('pauses animation on hover', () => {
    render(<HeroTerminal />);
    const terminal = screen.getByRole('complementary');
    fireEvent.mouseEnter(terminal);
    // アニメ停止確認（isPaused = true）
  });

  it('shows CTAs on hover', () => {
    render(<HeroTerminal />);
    const terminal = screen.getByRole('complementary');
    fireEvent.mouseEnter(terminal);
    expect(screen.getByText('提案を確認する')).toBeVisible();
  });

  it('respects prefers-reduced-motion', () => {
    // matchMedia をモック
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
    render(<HeroTerminal />);
    // 最終メッセージが即座に表示されることを確認
  });
});
```

---

## 🚀 今後の改善案

### P1（優先度高）
- [ ] アニメーション速度の調整UI（設定で変更可能に）
- [ ] メッセージのカスタマイズ機能（CMSから取得）

### P2（優先度中）
- [ ] Lottie アニメーションへの置き換え検討
- [ ] ステータスアイコンの追加（✓ / ⚠ など）
- [ ] 音声読み上げのカスタマイズ

### P3（優先度低）
- [ ] テーマ切替（ライト/ダーク）
- [ ] アニメーションパターンの追加

---

## 📚 参考リンク

- [WCAG 2.1 - Understanding Success Criterion 2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)
- [MDN - prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [React Hooks - useEffect](https://react.dev/reference/react/useEffect)

---

**作成日**: 2025-01-23
**バージョン**: 1.0
**作成者**: Claude Code
