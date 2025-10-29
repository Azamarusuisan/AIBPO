# マスタープラン：スポットエンジニア（仮）BPO LP

**バージョン**: v1.0
**最終更新**: 2025-01-23
**ハッシュ**: `e4f8a3b` (初版)

---

## 1. プロダクト概要

### 目的
「完成した変更」を毎月届けるBPOサービスのランディングページ。時間売りではなく、**成果物ベースの納品モデル**を訴求し、スタートアップ/中小企業の開発リソース不足を解決する。

### 対象ユーザー
- **スタートアップCTO/エンジニアリングマネージャー**（予算制約あり）
- **受託開発会社のPM**（スポット需要に対応したい）
- **社内開発チームのリーダー**（小規模改善を外注したい）

### 主要KPI
1. **初回応答時間**: 24時間以内（Pro: 当日）
2. **価格**: 月3万円〜（明朗会計）
3. **成果単位**: 完成した変更の件数（5/20/60件）

### MVP（最小限実装）
- Hero（Split型） + 料金プラン + お問い合わせ
- 無料コード健診フォーム
- FAQ

---

## 2. 用語定義・制約

### 必須表現
- ✅ **完成した変更** - 納品単位の呼称
- ✅ **件** - カウント単位（× チケット、× 枚）
- ✅ **BPO** - サービスカテゴリ
- ✅ **スポット対応** - オンデマンド性の強調

### 禁止表現
- ❌ **PR** - 単独使用禁止（「完成した変更」に置換）
- ❌ **派遣** - 人材派遣と誤認される
- ❌ **チケット** - Jira的な印象を避ける
- ❌ **時間売り** - 否定文以外で使用禁止

---

## 3. ページ構成

```
/(marketing)
  - Header          # グローバルナビ
  - HeroSplit       # メインビジュアル + KPIチップ
  - Reasons         # 安い理由（丸数字チップ）
  - TechStackFull   # 対応技術スタック
  - CaseStudies     # 事例（Before/Afterホバー）
  - Plans           # 料金プラン（3段階）
  - HowItWorks      # 進め方4ステップ
  - FAQ             # よくある質問
  - Contact         # お問い合わせ

/services/engineer-bpo
  - page.tsx        # 月額型エンジニアBPO（時間バンド制）

/audit
  - page.tsx        # 無料コード健診フォーム
```

---

## 4. チャンク分割と依存関係

各機能は独立した `planmdXX-*.md` に分割し、依存順に実装する：

| チャンク | 機能 | 依存 | 優先度 |
|---------|------|------|--------|
| **tokens.md** | デザイントークン定義 | - | **P0** |
| **planmd01-hero.md** | HeroSplit | tokens.md | **P0** |
| **planmd02-reasons.md** | Reasons | tokens.md | P0 |
| **planmd03-techstack.md** | TechStackFull | tokens.md, bpo.ts | P0 |
| **planmd04-casestudies.md** | CaseStudies | tokens.md | P0 |
| **planmd05-plans.md** | Plans | tokens.md, bpo.ts | **P0** |
| **planmd06-howitworks.md** | HowItWorks | tokens.md | P1 |
| **planmd07-faq.md** | FAQ | tokens.md | P0 |
| **planmd08-contact.md** | Contact | tokens.md | P0 |
| **planmd09-audit.md** | Audit Form | tokens.md, API | **P0** |
| **planmd12-engineer-bpo.md** | 月額型エンジニアBPO | tokens.md | **P1** |

---

## 5. 共通ルール

### 実装原則
1. **planmd は順番に参照する**（依存解決のため）
2. **小さなコミット単位で進める**（1機能 = 1コミット）
3. **受け入れ基準を満たしてから次へ**
4. **出力は差分と対応テストを明示**

### テスト戦略
- **ユニットテスト**: データ変換ロジック（bpo.ts）
- **コンポーネントテスト**: ホバー演出、フォーム検証
- **E2Eテスト**: /audit フォーム送信、CTA遷移
- **ビジュアルリグレッション**: スクリーンショット比較（Playwright）

### エッジケース対応
- 画像404時 → プレースホルダ表示
- API失敗時 → リトライ UI + エラーメッセージ
- 非対応ブラウザ → graceful degradation（アニメーション省略）

---

## 6. デザイントークン

詳細は `tokens.md` 参照。

```css
--primary: #2563eb;      /* 行動（CTA、リンク） */
--accent: #22c55e;       /* 実績（バッジ、成果） */
--heroPanel: #0a2540;    /* ヒーロー右パネル */
--text-1: #0a0a0a;       /* 本文 */
--text-2: #525252;       /* 補足 */
--radius: 0.75rem;       /* border-radius */
--spacing-unit: 0.25rem; /* 4px基準 */
```

---

## 7. 必須アセット

### 画像
- `/public/images/hero-workspace.jpg` (1600×900+)
  - 開発作業のクローズアップ（コード、キーボード、端末）
  - 人物の顔は避ける

### ロゴ（任意）
- `/public/logos/*.svg` - クライアントロゴ

---

## 8. 受け入れ基準（全体）

- [ ] すべての planmd の受け入れ基準を満たす
- [ ] 用語チェック：`grep -r "PR\|派遣\|チケット" app/` で0件
- [ ] Lighthouse スコア：Performance 90+, Accessibility 100
- [ ] CLS < 0.1（すべてのビューポート）
- [ ] 全CTA に `data-cta` 属性付与
- [ ] /audit フォーム送信成功率 > 95%

---

## 9. バージョン管理

### 変更履歴
| 日付 | ハッシュ | 変更内容 |
|------|---------|---------|
| 2025-01-23 | e4f8a3b | 初版作成 |

### 差分保持ルール
- 破壊的変更時は `.v2` ファイルを作成
- 例：`planmd01-hero.md.v2`（v1からの差分をコメント記載）

---

## 10. 参考リンク

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [デザイントークン](./tokens.md)
- [実装済みチェックリスト](../../plan.md)

---

**次のステップ**: `tokens.md` を読み、`planmd01-hero.md` から順に実装を開始してください。
