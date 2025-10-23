# デザイントークン定義

**バージョン**: v1.0
**最終更新**: 2025-01-23
**依存**: なし

---

## 概要

全コンポーネントで共通使用するデザイントークン（色・タイポグラフィ・間隔・角丸・アニメーション）を定義します。この定義に従うことで、デザインの一貫性を保ち、仕様の揺らぎを防ぎます。

---

## 1. カラーパレット

### 主要色
```css
:root {
  /* ブランドカラー */
  --primary: #2563eb;        /* 行動喚起（CTA、リンク、アクティブ状態） */
  --primary-hover: #1d4ed8;  /* プライマリホバー */
  --primary-foreground: #ffffff; /* プライマリテキスト */

  /* アクセントカラー */
  --accent: #22c55e;         /* 実績・成果（バッジ、成功メッセージ） */
  --accent-hover: #16a34a;   /* アクセントホバー */

  /* ヒーロー専用 */
  --heroPanel: #0a2540;      /* ヒーロー右パネル背景 */

  /* グレースケール */
  --text-1: #0a0a0a;         /* 本文（見出し） */
  --text-2: #525252;         /* 補足テキスト */
  --text-3: #a3a3a3;         /* プレースホルダ */
  --border: #e5e5e5;         /* ボーダー */
  --background: #ffffff;     /* 背景 */
  --background-alt: #f9fafb; /* 代替背景（セクション区切り） */

  /* 状態色 */
  --error: #ef4444;          /* エラー */
  --warning: #f59e0b;        /* 警告 */
  --success: #22c55e;        /* 成功（= accent） */
  --info: #3b82f6;           /* 情報 */
}
```

### セマンティックカラー
```css
:root {
  /* Before/After演出 */
  --before-bg: linear-gradient(to bottom right, #fef2f2, #fee2e2); /* red-50 to red-100 */
  --before-badge: #dc2626;   /* red-600 */
  --after-bg: linear-gradient(to bottom right, #f0fdf4, #dcfce7);  /* green-50 to green-100 */
  --after-badge: #16a34a;    /* green-600 */

  /* チップ（KPI、丸数字） */
  --chip-bg: rgba(255, 255, 255, 0.2);      /* Hero内KPIチップ */
  --chip-border: rgba(255, 255, 255, 0.3);
  --chip-number-bg: rgba(37, 99, 235, 0.1); /* bg-primary/10 */
  --chip-number-text: var(--primary);
}
```

---

## 2. タイポグラフィ

### フォントファミリー
```css
:root {
  /* 和文 */
  --font-ja: "Zen Kaku Gothic New", sans-serif;

  /* 欧文 */
  --font-en: "Inter", sans-serif;

  /* システムフォントフォールバック */
  --font-fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

body {
  font-family: var(--font-ja), var(--font-en), var(--font-fallback);
}
```

### フォントサイズ
```css
:root {
  --text-xs: 0.75rem;    /* 12px - 脚注、ラベル */
  --text-sm: 0.875rem;   /* 14px - 補足、ボタン */
  --text-base: 1rem;     /* 16px - 本文 */
  --text-lg: 1.125rem;   /* 18px - リード文 */
  --text-xl: 1.25rem;    /* 20px - H3 */
  --text-2xl: 1.5rem;    /* 24px - H2（モバイル） */
  --text-3xl: 1.875rem;  /* 30px - H1（モバイル） */
  --text-4xl: 2.25rem;   /* 36px - H1（デスクトップ） */
}
```

### フォントウェイト
```css
:root {
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}
```

### レターススペーシング
```css
/* 見出し */
h1, h2, h3 {
  letter-spacing: -0.02em; /* -2% */
}

/* 本文 */
body, p {
  letter-spacing: -0.005em; /* -0.5% */
}

/* 数字（等幅） */
.num-tabular {
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum" 1;
}
```

### テキストレンダリング最適化
```css
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-synthesis: none; /* 人工的な太字/斜体を無効化 */
}

/* 日本語カーニング */
.typo-feat {
  font-feature-settings: "palt" 1, "kern" 1;
}
```

---

## 3. スペーシング

### 基準単位
```css
:root {
  --spacing-unit: 0.25rem; /* 4px基準 */

  /* プリセット */
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
}
```

### セクション間隔
```css
:root {
  --section-padding-y: 4rem;  /* 64px（デスクトップ） */
  --section-padding-y-mobile: 2.5rem; /* 40px（モバイル） */
}

.section {
  padding-top: var(--section-padding-y-mobile);
  padding-bottom: var(--section-padding-y-mobile);
}

@media (min-width: 768px) {
  .section {
    padding-top: var(--section-padding-y);
    padding-bottom: var(--section-padding-y);
  }
}
```

---

## 4. 角丸

```css
:root {
  --radius-sm: 0.375rem;  /* 6px - チップ、バッジ */
  --radius: 0.75rem;      /* 12px - ボタン、カード */
  --radius-lg: 1rem;      /* 16px - セクションカード */
  --radius-xl: 1.25rem;   /* 20px - モーダル */
  --radius-2xl: 1.5rem;   /* 24px - ヒーローパネル */
  --radius-full: 9999px;  /* 完全な円形（チップ） */
}
```

---

## 5. シャドウ

```css
:root {
  /* カード */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

  /* フォーカス */
  --shadow-focus: 0 0 0 3px rgba(37, 99, 235, 0.2); /* primary/20 */
}
```

---

## 6. アニメーション

### トランジション
```css
:root {
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slower: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ホバー演出 */
.hover-lift {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* フェード */
.fade-in {
  animation: fadeIn var(--transition-slow) ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Before/After演出
```css
/* CaseStudies用 */
.before-layer {
  transition: opacity var(--transition-slow);
}

.group:hover .before-layer {
  opacity: 0;
}
```

---

## 7. ブレークポイント

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

Tailwindクラス対応：
- `sm:` → 640px+
- `md:` → 768px+
- `lg:` → 1024px+
- `xl:` → 1280px+
- `2xl:` → 1536px+

---

## 8. Z-index階層

```css
:root {
  --z-base: 0;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-modal-backdrop: 40;
  --z-modal: 50;
  --z-toast: 60;
  --z-tooltip: 70;
}
```

---

## 9. 実装方法

### globals.cssへの適用
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* tokens.mdの定義をここにコピー */
  }

  html {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    letter-spacing: -0.005em;
    font-synthesis: none;
  }

  h1, h2, h3 {
    letter-spacing: -0.02em;
  }
}

@layer utilities {
  .typo-feat {
    font-feature-settings: "palt" 1, "kern" 1;
  }

  .num-tabular {
    font-variant-numeric: tabular-nums;
  }
}
```

### Tailwind CSS設定
`tailwind.config.ts` で拡張：
```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        heroPanel: 'var(--heroPanel)',
      },
      spacing: {
        'section-y': 'var(--section-padding-y)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      transitionDuration: {
        'fast': '150ms',
        'slow': '300ms',
      },
    },
  },
};
```

---

## 10. 受け入れ基準

- [ ] globals.css にトークン定義を追加済み
- [ ] Tailwind config でトークン拡張済み
- [ ] 全コンポーネントでハードコードされた色・サイズを使用していない
- [ ] `--primary` `--accent` が正しく適用されている
- [ ] フォント最適化CSS（antialiased, text-rendering）が有効
- [ ] 数字表示箇所で `.num-tabular` 使用

---

## 11. テスト

### ビジュアルリグレッション
```bash
# Playwrightでスクリーンショット取得
npx playwright test --grep "design-tokens"
```

### カラーコントラスト
- WCAG AA基準（4.5:1以上）を満たすことを確認
- primary/accent の白テキストコントラストチェック

---

**次のステップ**: globals.css に tokens.md の定義を反映し、planmd01-hero.md の実装を開始してください。
