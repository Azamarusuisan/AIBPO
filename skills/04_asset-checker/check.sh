#!/bin/bash
set -euo pipefail

echo "[asset-checker] 画像アセットを検査中..."

PUBLIC_DIR="public"
APP_DIR="app"

# 画像ファイルをリスト化
echo ""
echo "📁 画像ファイル:"
IMAGE_FILES=$(find "$PUBLIC_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" -o -iname "*.avif" -o -iname "*.svg" \) 2>/dev/null || true)

if [[ -z "$IMAGE_FILES" ]]; then
  echo "  ⚠️ 画像ファイルが見つかりません"
else
  IMAGE_COUNT=$(echo "$IMAGE_FILES" | wc -l | xargs)
  echo "  合計: ${IMAGE_COUNT}個"
  echo "$IMAGE_FILES" | while read -r img; do
    # コード内で使用されているか確認
    img_path="${img#public}"
    if grep -rq "$img_path" "$APP_DIR" 2>/dev/null; then
      echo "  ✅ ${img}"
    else
      echo "  ⚠️ ${img} (未使用の可能性)"
    fi
  done
fi

# Image コンポーネント検査
echo ""
echo "🔍 Image コンポーネント検査:"

WARNINGS=0

# <Image> タグを含むファイルを検索
IMAGE_COMPONENTS=$(grep -rn "<Image" "$APP_DIR" --include="*.tsx" --include="*.jsx" 2>/dev/null || true)

if [[ -z "$IMAGE_COMPONENTS" ]]; then
  echo "  ℹ️ Image コンポーネントが見つかりません"
else
  while IFS=: read -r file line content; do
    if [[ -n "$file" ]]; then
      echo ""
      echo "  📄 ${file}:${line}"

      # fill 属性があるか確認
      if echo "$content" | grep -q "fill"; then
        echo "     - fill 属性使用 ✓"

        # sizes 属性があるか確認
        if ! grep -A5 -B5 "$content" "${file}" | grep -q 'sizes='; then
          echo "     ⚠️ sizes 属性が未指定（CLS リスク）"
          echo "     推奨: sizes 属性を追加"
          ((WARNINGS++))
        else
          echo "     - sizes 属性指定済み ✓"
        fi
      else
        # width/height 指定確認
        if ! echo "$content" | grep -q -E "(width=|height=)"; then
          echo "     ⚠️ width/height が未指定（CLS リスク）"
          echo "     推奨: width と height を指定"
          ((WARNINGS++))
        else
          echo "     - width/height 指定済み ✓"
        fi
      fi
    fi
  done <<< "$IMAGE_COMPONENTS"
fi

echo ""
if [[ $WARNINGS -eq 0 ]]; then
  echo "[asset-checker] ✅ 問題は検出されませんでした"
else
  echo "[asset-checker] 完了: ${WARNINGS}件の警告"
fi
