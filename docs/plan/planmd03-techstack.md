# planmd03: TechStackFull（対応技術スタック）

**バージョン**: v1.0
**最終更新**: 2025-01-23
**依存**: `tokens.md`, `bpo.ts`
**優先度**: P0

---

## 1. 機能名

TechStackFull - 対応技術スタック一覧セクション

---

## 2. 目的

1. **技術カバー範囲の明示** - Frontend/Backend/Infra/Mobile
2. **補足テキスト** - 「他技術も対応」で柔軟性訴求
3. **視認性向上** - カテゴリヘッダーに背景色

---

## 3. UI/ワイヤーフレーム

```
対応技術スタック
主要スタックの一部です。ご希望があれば他技術も対応します。

┌──────────────────────┐
│ FRONTEND             │ ← bg-gray-50
├──────────────────────┤
│ React / Next.js / Vue│
└──────────────────────┘

┌──────────────────────┐
│ BACKEND              │
├──────────────────────┤
│ Node.js / Python / Go│
└──────────────────────┘
...
```

---

## 4. データ構造

```typescript
// app/(marketing)/_data/bpo.ts
export interface TechGroup {
  title: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "FastAPI", "Go", "Ruby on Rails"]
  },
  {
    title: "Infrastructure",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Vercel"]
  },
  {
    title: "Mobile",
    items: ["React Native", "Swift", "Kotlin"]
  }
];
```

---

## 5. スタイリング

### カテゴリヘッダー
```css
.tech-category-header {
  background: var(--background-alt); /* bg-gray-50 */
  padding: 0.5rem 1.25rem;
  margin: -1.25rem -1.25rem 0.75rem; /* 親のpaddingを打ち消し */
  border-bottom: 1px solid var(--border);
  font-size: 0.75rem; /* text-xs */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em; /* tracking-widest */
  color: var(--text-2);
}
```

---

## 6. 実装タスク

- [ ] TechStackFull.tsx に補足テキスト追加
- [ ] カテゴリヘッダーに `bg-gray-50` 背景
- [ ] bpo.ts の techStack データ確認

---

## 7. 受け入れ基準

- [ ] 補足テキスト「主要スタックの一部です。ご希望があれば他技術も対応します。」が表示される
- [ ] カテゴリヘッダーに背景色が適用されている
- [ ] 4カテゴリ（Frontend/Backend/Infrastructure/Mobile）が表示される

---

**次のステップ**: 受け入れ基準を満たしたら `planmd04-casestudies.md` に進んでください。
