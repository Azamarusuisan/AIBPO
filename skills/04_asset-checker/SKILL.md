# asset-checker

## Metadata
- **name**: asset-checker
- **description**: 画像・CLS・sizes/aspect-ratioの静的検査
- **allowed-tools**: Read, Grep, Bash

---

## 概要

この Skill は、プロジェクト内の画像アセットと Next.js Image コンポーネントの使用状況を静的に検査します。
CLS（Cumulative Layout Shift）を防ぐために必要な `sizes`、`width/height`、`aspect-ratio` の設定を確認します。

## 検査項目

1. **画像ファイルの存在確認**
   - `/public/` 配下の画像ファイルをスキャン
   - コード内で参照されている画像パスと突合

2. **Image コンポーネントの検査**
   - `next/image` の使用箇所を特定
   - `fill` 属性使用時の `sizes` 指定確認
   - `width/height` または `aspect-ratio` の指定確認

3. **CLS リスク評価**
   - サイズ指定なしの画像を警告
   - レスポンシブ対応の不備を指摘

## 使い方

```bash
./check.sh
```

スクリプトを実行すると、以下の作業が自動で行われます：

1. `/public/` 配下の画像ファイルをリスト化
2. コード内の `<Image>` コンポーネントを抽出
3. 各画像の設定を検査し、問題を報告
4. CLS リスクのサマリーを出力

## 出力例

```
[asset-checker] 画像アセットを検査中...

📁 画像ファイル: 12個
  ✅ /public/hero-workspace.jpg
  ✅ /public/pm-profile.jpg
  ⚠️ /public/case-study-1.png (未使用)

🔍 Image コンポーネント検査:
  ✅ app/(marketing)/_components/HeroSplit.tsx:45
     - sizes="(max-width: 768px) 100vw, 1200px" ✓
     - fill 属性 ✓

  ⚠️ app/(marketing)/_components/CaseStudies.tsx:52
     - sizes 属性が未指定（CLS リスク）
     - 推奨: sizes="350px" を追加

[asset-checker] 完了: 2件の警告
```

## 注意事項

- `unoptimized` 属性がある画像も検査対象です
- SVG ファイルは CLS の影響が少ないため警告レベルが低くなります
- 動的にパスを生成している画像は検出できません

## トラブルシューティング

**Q: 誤検出が多い**
A: check.sh の正規表現パターンを調整してください

**Q: 画像が検出されない**
A: /public/ 配下に画像が配置されているか確認してください

**Q: sizes の推奨値が分からない**
A: レスポンシブブレークポイントに応じて設定してください
   例: `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`
