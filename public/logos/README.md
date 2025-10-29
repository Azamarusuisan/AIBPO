# Client Logos

ここにクライアントのロゴ画像を配置してください。

## 推奨仕様
- フォーマット: SVGまたはPNG
- サイズ: 横幅 128px - 256px
- カラー: グレースケール対応（自動でgrayscaleフィルター適用）
- ファイル名: `sample-a.svg`, `sample-b.svg`, etc.

## 実装例
```tsx
<ClientLogos logos={[
  { src: "/logos/client-a.svg", alt: "Client A" },
  { src: "/logos/client-b.svg", alt: "Client B" },
  // ...
]} />
```

## 注意
- ロゴが用意できていない場合は、`logos` prop を空配列にするとセクション全体が非表示になります
- `logos={[]}` → セクション非表示
