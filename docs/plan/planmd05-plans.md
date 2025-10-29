# planmd05: Plans（料金プラン）

**バージョン**: v1.0
**最終更新**: 2025-01-23
**依存**: `tokens.md`, `bpo.ts`
**優先度**: P0

---

## 1. 機能名

Plans - 3段階料金プランセクション

---

## 2. 目的

1. **明朗会計の訴求** - 件数ベースの明確な価格設定
2. **Standardプランへの誘導** - 「おすすめ」チップで推奨プラン明示
3. **上限件数の明確化** - 「完成した変更」の件数を強調

---

## 3. 対象ユーザーとユースケース

### ペルソナ
- **予算重視のCTO** - Starter（月3万）で試したい
- **継続利用を検討するPM** - Standard（月12万/週1MTG）が最適
- **優先対応が必要な企業** - Pro（当日対応）

### ユースケース
1. 価格比較 → Standardの「おすすめ」で意思決定
2. 上限件数確認 → 自社の月間変更数と照合
3. 脚注で「時間売りではない」を再確認

---

## 4. UI/ワイヤーフレーム

### レイアウト
```
+------------+  +------------+  +------------+
| Starter    |  | Standard   |  | Pro        |
| ¥30,000/月 |  | ¥120,000/月|  | ¥300,000/月|
|            |  | [おすすめ]  |  |            |
| 上限：5件  |  | 上限：20件  |  | 上限：60件  |
| 48h応答    |  | 24h応答     |  | 当日対応    |
| 非同期のみ |  | 週1MTG     |  | 優先キュー  |
+------------+  +------------+  +------------+

[脚注2行]
```

### レスポンシブ
- **モバイル**: 縦積み
- **デスクトップ**: 3カラム（等幅）

### 要素構成
```tsx
<section className="section" id="plans">
  <div className="mx-auto max-w-6xl px-4">
    <h2>料金プラン</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div key={plan.name} className={plan.highlight ? 'ring-2 ring-primary' : ''}>
          {plan.highlight && <span className="badge">おすすめ</span>}
          <h3>{plan.name}</h3>
          <p className="text-3xl font-bold">{plan.price}</p>
          <p className="text-sm text-gray-600">{plan.tickets}</p>
          <ul>
            <li>{plan.sla}</li>
            <li>{plan.meeting}</li>
            {plan.extras?.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </div>
      ))}
    </div>

    {/* 脚注 */}
    <div className="mt-6 rounded-xl bg-white border p-4 text-sm">
      <p><strong>ℹ︎ 時間売りではありません。</strong>成果は"完成した変更"としてお返しします。</p>
      <p><strong>追加：</strong>10件=¥60,000（2ヶ月有効）／ 夜間・休日対応は +20%</p>
    </div>
  </div>
</section>
```

---

## 5. コピー

### H2
```
料金プラン
```

### プラン詳細

#### Starter
- **価格**: `¥30,000/月`
- **件数**: `上限：5件（完成した変更）`
- **SLA**: `初回応答48h以内`
- **会議**: `非同期対応のみ`

#### Standard（おすすめ）
- **価格**: `¥120,000/月`
- **件数**: `上限：20件（完成した変更）`
- **SLA**: `初回応答24h以内`
- **会議**: `週1・30分の打合せOK`
- **追加特典**: `月次レポート(改善提案)`

#### Pro
- **価格**: `¥300,000/月`
- **件数**: `上限：60件（完成した変更）`
- **SLA**: `当日優先対応`
- **会議**: `平日オンコール可`
- **追加特典**: `週次レビュー`, `優先キュー運用`

### 脚注
```
ℹ︎ 時間売りではありません。成果は"完成した変更"としてお返しします。
追加：10件=¥60,000（2ヶ月有効）／ 夜間・休日対応は +20%
```

---

## 6. スタイリング

### 「おすすめ」バッジ
```css
.badge-recommend {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: var(--accent); /* #22c55e */
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
}
```

### ハイライトカード
```css
.plan-highlight {
  position: relative;
  border: 2px solid var(--primary);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.1);
}
```

---

## 7. データ構造

```typescript
// app/(marketing)/_data/bpo.ts
export interface Plan {
  name: string;
  price: string;
  tickets: string;
  sla: string;
  meeting: string;
  extras?: string[];
  highlight?: boolean;
}

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
```

---

## 8. API

不要（静的コンテンツ）

---

## 9. 実装タスク

- [ ] Plans.tsx でStandardに「おすすめ」バッジ追加
- [ ] 件数表記を「上限：X件（完成した変更）」に統一
- [ ] 脚注を2行固定表示（折りたたみなし）
- [ ] bpo.ts の Plan 型に `highlight?: boolean` 追加
- [ ] 禁止用語チェック（「PR」「チケット」「枚」）

---

## 10. テスト要件

### コンポーネントテスト
```typescript
// Plans.test.tsx
describe('Plans', () => {
  it('renders 3 plans', () => {
    render(<Plans />);
    expect(screen.getByText('Starter')).toBeInTheDocument();
    expect(screen.getByText('Standard')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('highlights Standard plan with badge', () => {
    render(<Plans />);
    const standard = screen.getByText('Standard').closest('div');
    expect(standard).toHaveClass('ring-2', 'ring-primary');
    expect(screen.getByText('おすすめ')).toBeInTheDocument();
  });

  it('shows correct count format', () => {
    render(<Plans />);
    expect(screen.getByText(/上限：5件（完成した変更）/)).toBeInTheDocument();
    expect(screen.getByText(/上限：20件（完成した変更）/)).toBeInTheDocument();
    expect(screen.getByText(/上限：60件（完成した変更）/)).toBeInTheDocument();
  });

  it('displays footnote with 2 lines', () => {
    render(<Plans />);
    expect(screen.getByText(/時間売りではありません/)).toBeInTheDocument();
    expect(screen.getByText(/追加：10件=¥60,000/)).toBeInTheDocument();
  });
});
```

---

## 11. リスク・エッジケース

### 「件」vs「枚」の混在
**リスク**: 旧実装で「枚」が残っている
**対策**:
```bash
grep -r "枚" app/(marketing)/_components/Plans.tsx app/(marketing)/_data/bpo.ts
# 全て「件」に置換
```

### 価格表示の視認性
**リスク**: 価格が小さく見える
**対策**:
- `text-3xl font-bold` で強調
- `num-tabular` で数字揃え

### モバイルでのカード幅
**リスク**: 3カラムがモバイルで崩れる
**対策**:
- `grid-cols-1 md:grid-cols-3` で縦積み

---

## 12. 受け入れ基準

- [ ] 3つのプランが正しく表示される
- [ ] Standardに「おすすめ」バッジが表示される
- [ ] 件数が「上限：X件（完成した変更）」形式
- [ ] 脚注が2行固定で表示される
- [ ] 禁止用語チェック：`grep -r "PR\|チケット\|枚" app/(marketing)/_components/Plans.tsx` で0件
- [ ] モバイルで縦積みレイアウト
- [ ] デスクトップで3カラム等幅
- [ ] テストが全てパス

---

**次のステップ**: 受け入れ基準を満たしたら `planmd06-howitworks.md` に進んでください。
