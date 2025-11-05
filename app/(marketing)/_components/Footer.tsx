export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-bold mb-2">スポットエンジニア</h3>
            <p className="text-gray-400">
              月3万円から、"AI人材"を毎月お届け。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">ページ</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="/#value" className="hover:text-white transition-colors">
                  提供価値
                </a>
              </li>
              <li>
                <a href="/plans" className="hover:text-white transition-colors">
                  料金プラン
                </a>
              </li>
              <li>
                <a href="/#scope" className="hover:text-white transition-colors">
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
                <a href="/legal/nda" className="hover:text-white transition-colors">
                  NDA・秘密保持
                </a>
              </li>
              <li>
                <a href="/legal/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/legal/tokushoho" className="hover:text-white transition-colors">
                  特定商取引法
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <a
                href="https://zettai.co.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover transition-colors text-sm flex items-center gap-1"
              >
                <span>本社サイト</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-between text-gray-400 text-sm">
          <p>© 2024 スポットエンジニア. All rights reserved.</p>
          <a
            href="/admin/login"
            className="text-gray-600 hover:text-gray-400 transition-colors text-xs opacity-50 hover:opacity-100"
          >
            🔐
          </a>
        </div>
      </div>
    </footer>
  );
}
