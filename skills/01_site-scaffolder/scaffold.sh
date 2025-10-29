#!/bin/bash
set -euo pipefail

echo "[site-scaffolder] ページ骨格を生成します..."

# ベースディレクトリ
BASE_DIR="app"

# 生成するページ定義
declare -A PAGES=(
  ["value"]="提供価値"
  ["plans"]="料金プラン"
  ["scope"]="対応範囲"
  ["faq"]="FAQ"
  ["contact"]="お問い合わせ"
)

# 各ページを生成
for page in "${!PAGES[@]}"; do
  PAGE_DIR="${BASE_DIR}/${page}"
  PAGE_FILE="${PAGE_DIR}/page.tsx"

  mkdir -p "${PAGE_DIR}"

  # ページテンプレートを生成
  cat > "${PAGE_FILE}" <<EOF
import Header from "@/app/(marketing)/_components/Header";
import Footer from "@/app/(marketing)/_components/Footer";

export default function ${page^}Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            ${PAGES[$page]}
          </h1>
          {/* このページの詳細コンテンツをここに追加 */}
        </div>
      </main>
      <Footer />
    </>
  );
}
EOF

  echo "  - ${PAGE_FILE} (${PAGES[$page]})"
done

echo "[site-scaffolder] 完了: ${#PAGES[@]}ページを生成"
