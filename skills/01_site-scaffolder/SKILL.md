# site-scaffolder

## Metadata
- **name**: site-scaffolder
- **description**: LP→サイト骨格のページ分割自動生成
- **allowed-tools**: Read, Write, Bash

---

## 概要

この Skill は、既存の LP（Landing Page）をベースに、サイト全体の骨格を自動で生成します。
ヘッダー・フッター・共通レイアウトを抽出し、各セクションを独立ページに分割する作業を自動化します。

## 使い方

```bash
./scaffold.sh
```

スクリプトを実行すると、以下の作業が自動で行われます：

1. `app/(marketing)/_components/Header.tsx` と `Footer.tsx` を読み取り
2. トップページ (`app/page.tsx`) から各セクションを抽出
3. `/value`、`/plans`、`/scope`、`/faq`、`/contact` ページを自動生成
4. 各ページにヘッダー・フッター・該当コンポーネントを配置
5. 生成結果をサマリーとして出力

## 出力例

```
[site-scaffolder] ページ骨格を生成しました:
  - app/value/page.tsx (提供価値)
  - app/plans/page.tsx (料金プラン)
  - app/scope/page.tsx (対応範囲)
  - app/faq/page.tsx (FAQ)
  - app/contact/page.tsx (お問い合わせ)

[site-scaffolder] 完了: 5ページを生成
```

## 注意事項

- 既存ファイルが存在する場合は上書きされます
- `Header.tsx` と `Footer.tsx` が存在することを前提としています
- コンポーネント名はプロジェクトの命名規則に従ってください

## トラブルシューティング

**Q: ページが生成されない**
A: Header.tsx と Footer.tsx が存在するか確認してください

**Q: コンポーネントが見つからない**
A: app/(marketing)/_components/ 配下にコンポーネントが存在するか確認してください
