# plan-navigator

## Metadata
- **name**: plan-navigator
- **description**: docs/plan/* を読んで実装順のToDo抽出
- **allowed-tools**: Read, Grep

---

## 概要

この Skill は、`docs/plan/` ディレクトリ配下の仕様書（planmdXX-*.md）を読み取り、実装すべきタスクを依存順に抽出します。
master.md の依存関係定義に基づき、正しい実装順序を提示します。

## 使い方

```bash
./summarize.sh
```

スクリプトを実行すると、以下の作業が自動で行われます：

1. `docs/plan/master.md` から依存関係を読み取り
2. 各 `planmdXX-*.md` から「実装タスク」セクションを抽出
3. 依存順にソートして ToDo リストを生成
4. 未完了タスクと完了タスクを分けて表示

## 出力例

```
[plan-navigator] 実装タスクを抽出中...

📋 実装順序:
  1. tokens.md - デザイントークン定義
  2. planmd01-hero.md - HeroSplit
  3. planmd02-reasons.md - Reasons
  4. planmd05-plans.md - Plans

🔲 未完了タスク（planmd05-plans.md）:
  - [ ] Plans.tsx にテストコードを追加
  - [ ] モバイル表示の確認

✅ 完了タスク:
  - [x] tokens.md: globals.css への反映
  - [x] planmd01-hero.md: HeroSplit コンポーネント実装

[plan-navigator] 完了: 4ファイル、2未完了タスク
```

## 注意事項

- `docs/plan/master.md` が存在することを前提としています
- 「実装タスク」セクションは markdown チェックボックス形式を想定
- 依存関係は master.md の「依存順（実装順序）」セクションから取得

## トラブルシューティング

**Q: タスクが抽出されない**
A: planmdXX ファイルに「## 実装タスク」セクションがあるか確認してください

**Q: 依存順序が正しくない**
A: master.md の「依存順（実装順序）」セクションを確認してください
