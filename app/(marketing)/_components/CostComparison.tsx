export default function CostComparison() {
  const hiringCosts = [
    { label: "広告費", amount: "10万円〜30万円" },
    { label: "採用手数料", amount: "年収の20%〜35%", detail: "（80万円〜350万円）" },
    { label: "選考・面接費用", amount: "5万円〜20万円" },
    { label: "年間給与・福利厚生", amount: "400万円〜1,000万円以上" },
    { label: "教育・トレーニング費用", amount: "10万円〜50万円" }
  ];

  const concerns = [
    "募集したことがあるが応募がほとんどなかった",
    "広告費は無駄だと思う",
    "いきなりエンジニアを雇うのは不安",
    "システムエンジニアの給与は高額に感じる"
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* 見出し */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            01 経費削減
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            無駄なコストは抑えたい経営者様へ
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            高額な採用コストは不要です
          </p>
        </div>

        {/* 採用コストの内訳 */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                システムエンジニア採用には<br className="md:hidden" />
                <span className="text-red-600">数百万〜数千万</span>かかる場合も
              </h3>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              エンジニア採用のコストは多岐にわたります。採用広告費、人材紹介手数料、選考・面接費用、そして年間給与・福利厚生、さらに教育・トレーニング費用が追加で必要となります。
            </p>

            <div className="space-y-3">
              {hiringCosts.map((cost, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-red-700 font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-gray-900">{cost.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-red-600 num-tabular">{cost.amount}</div>
                    {cost.detail && (
                      <div className="text-xs text-gray-500">{cost.detail}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 採用に関するお悩み */}
        <div className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">
            採用に関する、こんなお悩みありませんか？
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {concerns.map((concern, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
              >
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-700">{concern}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 比較図 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 通常の採用活動 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200 relative overflow-hidden">
            {/* 背景の悲しい表情アイコン */}
            <div className="absolute top-4 right-4 opacity-5">
              <svg className="w-32 h-32 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center relative z-10">通常の採用活動</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                広告費
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                採用手数料
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                選考・面接費用
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                給与・福利厚生
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                教育費用
              </div>
            </div>
          </div>

          {/* 定額エンジニアサービス */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 shadow-xl border-2 border-primary/30 relative overflow-hidden">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap z-10">
              たったこれだけ！
            </div>
            {/* 背景の笑顔アイコン */}
            <div className="absolute top-4 right-4 opacity-5">
              <svg className="w-32 h-32 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 011 1h4a1 1 0 110-2H8a1 1 0 01-1 1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center mt-2 relative z-10">スポットエンジニア</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-6 h-6 rounded bg-accent flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                月額費のみ
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2 num-tabular">
                月3万円〜
              </div>
              <p className="text-sm text-gray-600">
                必要な時だけ、必要な分だけ
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-primary/20">
          <p className="text-base md:text-lg font-semibold text-gray-900 mb-2">
            定額エンジニアサービスなら、月額費用のみで企業様をサポートします
          </p>
          <p className="text-sm text-gray-600">
            広告費、採用手数料、選考費用、教育費用は一切不要
          </p>
        </div>
      </div>
    </section>
  );
}
