export default function ThreeReasons() {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            選ばれる3つの理由
          </h2>
          <p className="text-xl text-gray-600">
            経営者様の課題を、シンプルに解決します
          </p>
        </div>

        {/* メインフロー図 */}
        <div className="mb-16">
          <div className="relative">
            {/* フロー */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* 企業（お悩み） */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-red-200 relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-red-50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">企業様</h3>
                  <p className="text-sm text-gray-600">
                    コスト高<br />
                    専門知識なし<br />
                    作業量不安定
                  </p>
                </div>
              </div>

              {/* 矢印 */}
              <div className="hidden md:flex justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* 弊社PM */}
              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 shadow-lg relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">弊社PM</h3>
                  <p className="text-sm text-white/90">
                    課題整理<br />
                    指示代行<br />
                    品質管理
                  </p>
                </div>
              </div>

              {/* 矢印 */}
              <div className="hidden md:flex justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* 成果 */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200 relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">成果物</h3>
                  <p className="text-sm text-gray-600">
                    コスト削減<br />
                    運用負担軽減<br />
                    柔軟な対応
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3つの理由カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 01 経費削減 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                01
              </div>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                経費削減
              </h3>
              <p className="text-3xl font-bold text-green-600 mb-3">
                月3万円〜
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                採用コスト・広告費・教育費用は一切不要。必要な分だけ、明瞭な価格で。
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-semibold">
                  採用活動: 数百万円 → 0円
                </p>
              </div>
            </div>
          </div>

          {/* 02 負担軽減 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                02
              </div>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                負担軽減
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-3">
                PM代行
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                専門知識不要。弊社PMが企業様とエンジニアの橋渡しを担当します。
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-semibold">
                  技術的な指示 → PMにお任せ
                </p>
              </div>
            </div>
          </div>

          {/* 03 柔軟対応 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                03
              </div>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-50 flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                柔軟対応
              </h3>
              <p className="text-3xl font-bold text-purple-600 mb-3">
                月単位調整
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                作業量が不安定でもOK。必要な時だけ、必要な分だけ利用可能。
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-semibold">
                  最低契約期間なし、自由に調整
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* まとめ */}
        <div className="mt-12 bg-white rounded-2xl p-8 md:p-10 border-2 border-primary shadow-lg">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full shadow-md mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">だから選ばれています</span>
            </div>
            <p className="text-xl text-gray-700">
              スポットエンジニアなら、コストを抑えながら、専門知識不要で、柔軟に開発を進められます
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
