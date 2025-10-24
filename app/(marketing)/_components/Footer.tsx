export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-bold mb-2">スポットエンジニア（仮）</h3>
            <p className="text-gray-400">
              月3万円から、"AI人材"を毎月お届け。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">ページ</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="/value" className="hover:text-white transition-colors">
                  提供価値
                </a>
              </li>
              <li>
                <a href="/plans" className="hover:text-white transition-colors">
                  料金プラン
                </a>
              </li>
              <li>
                <a href="/scope" className="hover:text-white transition-colors">
                  対応範囲
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">法務</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  NDA・秘密保持
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  特定商取引法
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2024 スポットエンジニア（仮）. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
