export default function SecurityBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "NDA対応",
      description: "秘密保持契約に基づく厳格な情報管理"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "セキュアな開発環境",
      description: "VPN、2段階認証、アクセスログ管理"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "コード品質保証",
      description: "レビュー・テスト・ドキュメント完備"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "サポート体制",
      description: "Slack/メール/ビデオ通話で迅速対応"
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            安心してご利用いただける体制
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            エンタープライズグレードのセキュリティと品質管理
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {badge.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 追加の信頼要素 */}
        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-gray-600">情報漏洩ゼロ</div>
              <div className="text-xs text-gray-500 mt-1">過去3年間の実績</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">24時間以内</div>
              <div className="text-sm text-gray-600">初回応答時間</div>
              <div className="text-xs text-gray-500 mt-1">Pro プランは当日対応</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">90%以上</div>
              <div className="text-sm text-gray-600">契約継続率</div>
              <div className="text-xs text-gray-500 mt-1">高い顧客満足度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
