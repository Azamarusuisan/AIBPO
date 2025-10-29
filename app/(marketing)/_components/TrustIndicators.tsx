export default function TrustIndicators() {
  const indicators = [
    {
      value: "50+",
      label: "導入企業数",
      description: "スタートアップから中堅企業まで"
    },
    {
      value: "1,200+",
      label: "完成した変更",
      description: "累計納品件数"
    },
    {
      value: "8ヶ月",
      label: "平均継続期間",
      description: "長期的なパートナーシップ"
    },
    {
      value: "4.8/5.0",
      label: "顧客満足度",
      description: "導入企業からの評価"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-primary/5 to-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            50社以上の企業に選ばれています
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            継続的な開発支援で、ビジネスの成長をサポート
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2 num-tabular">
                  {item.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                  {item.label}
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 追加の信頼要素 */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>NDA対応</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>情報管理体制</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>品質保証</span>
          </div>
        </div>
      </div>
    </section>
  );
}
