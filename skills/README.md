# Skills ディレクトリ

このディレクトリには、開発を効率化するための Skills が格納されています。

## 📦 利用可能な Skills

| Skill | 説明 | 実行コマンド |
|-------|------|-------------|
| **01_site-scaffolder** | LP→サイト骨格の自動生成 | `./skills/01_site-scaffolder/scaffold.sh` |
| **02_ngword-linter** | 禁止用語の自動検出 | `./skills/02_ngword-linter/lint.sh` |
| **03_plan-navigator** | 実装タスクの依存順抽出 | `./skills/03_plan-navigator/summarize.sh` |
| **04_asset-checker** | 画像とCLSの静的検査 | `./skills/04_asset-checker/check.sh` |

## 🚀 クイックスタート

```bash
# 禁止用語をチェック
./skills/02_ngword-linter/lint.sh

# 画像アセットを検査
./skills/04_asset-checker/check.sh

# 実装タスクを確認
./skills/03_plan-navigator/summarize.sh

# ページ骨格を生成（既存ページがある場合は上書き注意）
./skills/01_site-scaffolder/scaffold.sh
```

## 📖 詳細ドキュメント

各 Skill の詳細な使い方は、各ディレクトリの `SKILL.md` を参照してください。

プロジェクト全体の Skills 運用ガイドは、`CLAUDE.md` の「Skills 運用ガイド」セクションを参照してください。

## 🛠️ メンテナンス

スクリプトをカスタマイズする場合は、各ディレクトリの `.sh` ファイルを編集してください。

実行権限がない場合：
```bash
chmod +x skills/*/*.sh
```
