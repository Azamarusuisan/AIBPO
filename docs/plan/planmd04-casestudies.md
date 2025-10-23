# planmd04: CaseStudies（事例セクション）

**バージョン**: v1.0
**最終更新**: 2025-01-23
**依存**: `tokens.md`
**優先度**: P0

---

## 1. 機能名

CaseStudies - Before/Afterホバー演出付き事例カード

---

## 2. 目的

1. **実績の可視化** - 具体的な改善数値で信頼性向上
2. **Before/After演出** - ホバーで赤→緑グラデーション切替
3. **返却物の明示** - 「完成した変更」という成果物を強調

---

## 3. UI/ワイヤーフレーム

### カード構造
```
┌─────────────────────────┐
│ [Before/After画像エリア] │ ← ホバーで赤→緑
├─────────────────────────┤
│ タイトル                 │
│ ・依頼：...             │
│ ・対応：...             │
│ ・返却物：完成した変更   │
│ ・結果：エラー率 2.3%→0.1%│
└─────────────────────────┘
```

### Before/After演出
- **Before層**: `bg-gradient-to-br from-red-50 to-red-100` + `opacity: 1`
- **After層**: `bg-gradient-to-br from-green-50 to-green-100` + 常に表示
- **ホバー時**: Before層の `opacity: 0` でAfter層が見える

---

## 4. データ構造

```typescript
// app/(marketing)/_data/bpo.ts
export interface CaseStudy {
  title: string;
  request: string;     // 依頼
  action: string;      // 対応
  delivery: string;    // 返却物
  result: string;      // 結果
}

export const caseStudies: CaseStudy[] = [
  {
    title: "既存バグ修正（Next.js）",
    request: "フォーム送信で500が発生（再現手順あり）",
    action: "入力バリデーションとAPIハンドラ修正、単体テスト3件追加",
    delivery: "完成した変更（テスト付き）",
    result: "エラー率 2.3% → 0.1%、対応時間 36h",
  },
  // ...
];
```

---

## 5. スタイリング

### Before/After Layer
```css
.before-layer {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, #fef2f2, #fee2e2);
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .before-layer {
  opacity: 0;
}

.after-layer {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, #f0fdf4, #dcfce7);
}
```

---

## 6. 実装タスク

- [ ] CaseStudies.tsx のBefore/After演出を確認
- [ ] 返却物に「完成した変更」が含まれているか確認
- [ ] 禁止用語チェック（「PR」）

---

## 7. 受け入れ基準

- [ ] 3つの事例カードが表示される
- [ ] ホバー時にBefore→After演出が動作
- [ ] 「返却物」「結果」が正しく表示される
- [ ] 禁止用語なし（`grep -r "PR" app/(marketing)/_components/CaseStudies.tsx` で0件）
- [ ] モバイルでも演出が動作（タップで切替）

---

**次のステップ**: 受け入れ基準を満たしたら `planmd05-plans.md` に進んでください。
