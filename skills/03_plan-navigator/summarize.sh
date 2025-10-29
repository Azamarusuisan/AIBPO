#!/bin/bash
set -euo pipefail

echo "[plan-navigator] 実装タスクを抽出中..."

PLAN_DIR="docs/plan"
MASTER_FILE="${PLAN_DIR}/master.md"

if [[ ! -f "${MASTER_FILE}" ]]; then
  echo "❌ エラー: ${MASTER_FILE} が見つかりません"
  exit 1
fi

echo ""
echo "📋 実装順序:"

# planmd ファイルを依存順にリスト（01→02→03...）
PLANMD_FILES=$(ls "${PLAN_DIR}"/planmd*.md 2>/dev/null | sort || true)

if [[ -z "${PLANMD_FILES}" ]]; then
  echo "⚠️ planmd ファイルが見つかりません"
  exit 0
fi

TOTAL_FILES=0
TOTAL_PENDING=0

# 各 planmd ファイルから実装タスクを抽出
for file in ${PLANMD_FILES}; do
  filename=$(basename "$file")
  title=$(grep -m1 "^# " "$file" | sed 's/^# //' || echo "タイトルなし")

  echo "  $((++TOTAL_FILES)). ${filename} - ${title}"

  # 「実装タスク」セクションから未完了タスクを抽出
  if grep -q "## 実装タスク" "$file"; then
    pending=$(grep "^- \[ \]" "$file" || true)

    if [[ -n "$pending" ]]; then
      echo ""
      echo "🔲 未完了タスク（${filename}）:"
      echo "$pending"
      TOTAL_PENDING=$((TOTAL_PENDING + $(echo "$pending" | wc -l)))
    fi
  fi
done

echo ""
echo "[plan-navigator] 完了: ${TOTAL_FILES}ファイル、${TOTAL_PENDING}未完了タスク"
