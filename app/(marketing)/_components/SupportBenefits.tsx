export default function SupportBenefits() {
  const benefits = [
    {
      number: "02",
      title: "運用の負担軽減",
      subtitle: "実務でお忙しい経営者様へ",
      description: "成果を上げるためには、指示の出し方がカギ",
      detailText: "指示を正確に伝えることができないと、エンジニアとの理解が進まず、期待していたような進捗や成果が出ない可能性が高くなります。",
      mainPoint: "企業様に相談いただいた内容を弊社がエンジニアに指示いたします",
      concerns: [
        "ITの専門用語が分からない",
        "エンジニアの能力や成果の評価が難しい",
        "技術者とのコミュニケーションが難しい",
        "採用後、社内教育できる環境がない"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      conclusion: "定額エンジニアサービスなら、専門知識がなくても安心です",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      number: "03",
      title: "柔軟な時間利用",
      subtitle: "効率的に業務を進めたい経営者様へ",
      description: "必要な時間だけ活用して、企業の負担を軽減できます",
      detailText: "作業量が不安定な場合でも、月単位で時間を調整できるため、繁閑に応じた柔軟な運用が可能です。必要な時だけエンジニアリソースを活用できます。",
      mainPoint: "月単位・時間単位で柔軟に調整できるので、無駄なコストを抑えられます",
      concerns: [
        "毎月の作業量が多くない",
        "少しずつIT化をしていきたい",
        "必要状況に応じて作業時間を増やしたい",
        "自社でエンジニアを抱えたくない"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      conclusion: "定額エンジニアサービスなら、少ない時間からでも利用可能です",
      bgColor: "from-green-50 to-green-100"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div key={index}>
              {/* 見出し */}
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  {benefit.number} {benefit.title}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                  {benefit.subtitle}
                </h2>
              </div>

              {/* メインコンテンツ */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* 左側：説明 */}
                <div className={`bg-gradient-to-br ${benefit.bgColor} rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-200 relative overflow-hidden`}>
                  {/* 背景の装飾イラスト */}
                  <div className="absolute top-0 right-0 opacity-5">
                    {index === 0 ? (
                      <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    ) : (
                      <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-md">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {benefit.description}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 relative z-10">
                    {benefit.detailText}
                  </p>
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-primary/30">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm md:text-base font-semibold text-gray-900">
                        {benefit.mainPoint}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 右側：お悩み */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                    よくあるお困りごと
                  </h3>
                  <div className="space-y-3">
                    {benefit.concerns.map((concern, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm md:text-base text-gray-700">{concern}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 結論 */}
              <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 shadow-lg border-2 border-primary/30">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    {benefit.conclusion}
                  </p>
                </div>
              </div>

              {/* 区切り線（最後以外） */}
              {index < benefits.length - 1 && (
                <div className="mt-16 border-t border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
