#!/bin/bash
set -eo pipefail

echo "[ngword-linter] 禁止用語をスキャン中..."

TOTAL=0

# 禁止用語と代替表現のペア
check_ngword() {
  local pattern=$1
  local suggestion=$2
  local found=0

  while IFS=: read -r file line content; do
    if [[ -n "$file" ]]; then
      echo ""
      echo "⚠️ ${file}:${line}"
      echo "  検出: ${content}"
      echo "  提案: ${suggestion}"
      ((TOTAL++))
      found=1
    fi
  done < <(grep -rn -E "$pattern" app/ --include="*.tsx" --include="*.ts" --include="*.md" 2>/dev/null || true)

  return 0
}

# 各禁止用語をチェック
check_ngword "\\bPR\\b" "完成した変更"
check_ngword "\\b派遣\\b" "BPO / スポット対応"
check_ngword "\\bチケット\\b" "件数 / 完成した変更"
check_ngword "時間売り" "成果物ベース"

echo ""
if [[ $TOTAL -eq 0 ]]; then
  echo "[ngword-linter] ✅ 禁止用語は検出されませんでした"
else
  echo "[ngword-linter] 完了: ${TOTAL}件の禁止用語を検出"
fi
