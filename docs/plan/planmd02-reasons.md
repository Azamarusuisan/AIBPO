# planmd02: Reasons（安い理由セクション）

**バージョン**: v1.0
**最終更新**: 2025-01-23
**依存**: `tokens.md`
**優先度**: P0

---

## 1. 機能名

Reasons - 「なぜ安いのか」を説明する3項目セクション

---

## 2. 目的

価格の妥当性と差別化要因を明示：
1. **「機械が時間を削り、人が価値を出す。」** - 自動化による効率化
2. **3つの理由を丸数字チップで視覚的に整理** - 理解しやすさ
3. **信頼性の向上** - 「安かろう悪かろう」の懸念を払拭

---

## 3. 対象ユーザーとユースケース

### ペルソナ
- **予算重視のCTO** - 「なぜこの価格で可能なのか」を理解したい
- **品質懸念のあるPM** - 「安いけど大丈夫？」を払拭したい

### ユースケース
1. Hero通過後、スクロールして価格根拠を確認
2. モバイルで縦読み → 丸数字チップで視認性向上
3. 競合と比較中 → 自動化の差別化要因を理解

---

## 4. UI/ワイヤーフレーム

### レイアウト
```
+----------------------------------------+
| 機械が時間を削り、人が価値を出す。      |
+----------------------------------------+
| [①] GPU × 自動化                       |
|     説明文...                          |
+----------------------------------------+
| [②] 元PMによる最終チェック               |
|     説明文...                          |
+----------------------------------------+
| [③] 固定費なし                          |
|     説明文...                          |
+----------------------------------------+
```

### レスポンシブ
- **モバイル**: 縦積み、丸数字チップ 7×7
- **デスクトップ**: 3カラムor縦積み（既存実装に準拠）

### 要素構成
```tsx
<section className="section bg-gray-50" id="value">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">
    <h2>機械が時間を削り、人が価値を出す。</h2>

    <div className="mt-6 space-y-4">
      {reasons.map((r, i) => (
        <div key={i} className="flex gap-3">
          {/* 丸数字チップ */}
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
            {i + 1}
          </div>

          <div>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## 5. コピー

### H2（見出し）
```
機械が時間を削り、人が価値を出す。
```

### 3つの理由

#### ① GPU × 自動化
**タイトル**: `GPU × 自動化で機械が時間を削る`
**説明**:
```
自動デバッグ・変更案生成・テスト実行を私有GPU上で並列処理。人は難所のレビューと調整に集中し、ルーチンワークは機械が担います。
```

#### ② 元PMによる最終チェック
**タイトル**: `元PMによる最終チェック`
**説明**:
```
すべての変更は、元PM（実務経験5年以上）が最終確認。仕様の見落とし・品質リスクを人の目で検証してから納品します。
```

#### ③ 固定費なし
**タイトル**: `固定費なし、成果だけ購入`
**説明**:
```
人材派遣や時間売りではなく、「完成した変更」単位で課金。待機時間・会議・調整コストは一切発生しません。
```

---

## 6. スタイリング

### カラー（tokens.md参照）
- 背景: `bg-gray-50` (--background-alt)
- 丸数字チップ背景: `bg-primary/10` (rgba(37, 99, 235, 0.1))
- 丸数字チップテキスト: `text-primary` (#2563eb)

### 丸数字チップ
```css
.reason-number {
  width: 2rem; /* w-8 = 32px */
  height: 2rem; /* h-8 = 32px */
  border-radius: 9999px; /* rounded-full */
  background: rgba(37, 99, 235, 0.1); /* bg-primary/10 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-weight: 700; /* font-bold */
  font-size: 0.875rem; /* text-sm */
  flex-shrink: 0;
}

/* モバイル時は小さく */
@media (max-width: 640px) {
  .reason-number {
    width: 1.75rem; /* 28px */
    height: 1.75rem;
    font-size: 0.75rem; /* text-xs */
  }
}
```

---

## 7. データ構造

```typescript
// app/(marketing)/_data/bpo.ts
export const reasons = [
  {
    title: "GPU × 自動化で機械が時間を削る",
    description: "自動デバッグ・変更案生成・テスト実行を私有GPU上で並列処理。人は難所のレビューと調整に集中し、ルーチンワークは機械が担います。"
  },
  {
    title: "元PMによる最終チェック",
    description: "すべての変更は、元PM（実務経験5年以上）が最終確認。仕様の見落とし・品質リスクを人の目で検証してから納品します。"
  },
  {
    title: "固定費なし、成果だけ購入",
    description: "人材派遣や時間売りではなく、「完成した変更」単位で課金。待機時間・会議・調整コストは一切発生しません。"
  }
];
```

---

## 8. API

不要（静的コンテンツ）

---

## 9. 実装タスク

- [ ] Reasons.tsx のH2を「機械が時間を削り、人が価値を出す。」に変更
- [ ] 丸数字チップのスタイルを `bg-primary/10` `text-primary` に統一
- [ ] reasons データを bpo.ts に移動（既存の場合は確認）
- [ ] モバイル時の丸数字サイズ調整（sm: 7×7 → 8×8）
- [ ] 禁止用語チェック（「PR」「派遣」「チケット」）

---

## 10. テスト要件

### コンポーネントテスト
```typescript
// Reasons.test.tsx
describe('Reasons', () => {
  it('renders correct heading', () => {
    render(<Reasons />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('機械が時間を削り、人が価値を出す。');
  });

  it('renders 3 reason cards with numbered chips', () => {
    render(<Reasons />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('does not contain prohibited terms', () => {
    const { container } = render(<Reasons />);
    const text = container.textContent || '';
    expect(text).not.toMatch(/\bPR\b/);
    expect(text).not.toMatch(/派遣/);
    expect(text).not.toMatch(/チケット/);
  });
});
```

### ビジュアルリグレッション
```bash
npx playwright test --grep "reasons-screenshot"
```

---

## 11. リスク・エッジケース

### 丸数字チップの色が見えない
**リスク**: `bg-primary/10` の透明度が低すぎて視認性低下
**対策**:
- コントラスト比4.5:1以上を確保
- 必要なら `bg-primary/15` に調整

### 長い説明文の折り返し
**リスク**: 説明文が長すぎてカードが不均等になる
**対策**:
- `line-clamp-3` で3行制限
- モバイル時は制限解除

### 「派遣」という単語の混入
**リスク**: 理由③に「人材派遣ではなく」という否定文で使用
**対策**:
- 否定文での使用はOK（禁止は単独使用のみ）
- 念のため最終チェックで確認

---

## 12. 受け入れ基準

- [ ] H2が「機械が時間を削り、人が価値を出す。」になっている
- [ ] 丸数字チップが3つ（1/2/3）正しく表示される
- [ ] 丸数字チップの色が `bg-primary/10` `text-primary`
- [ ] モバイル（< 640px）で縦積みレイアウト
- [ ] デスクトップで適切な間隔（gap-3 or gap-4）
- [ ] 禁止用語チェック：`grep -r "PR\|チケット" app/(marketing)/_components/Reasons.tsx` で0件
- [ ] 「派遣」は否定文でのみ使用（「人材派遣ではなく」）
- [ ] テストが全てパス

---

## 13. 参考実装

既存ファイル: `app/(marketing)/_components/Reasons.tsx`

差分適用箇所：
- H2テキスト変更
- 丸数字チップ色の調整（tokens.md準拠）

---

**次のステップ**: 受け入れ基準を満たしたら `planmd03-techstack.md` に進んでください。
