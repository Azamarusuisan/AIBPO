export default function Challenges() {
  const challenges = [
    {
      text: "システムエンジニアを雇うのは不安",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      text: "できるだけ少ないコストでIT化を進めたい",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      text: "毎月の作業量がそれほど多くない",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      text: "システムの保守や相談に乗ってほしい",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      text: "柔軟な作業時間に対応してほしい",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
        </svg>
      )
    },
    {
      text: "リソース不足を補いたい",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            このようなお悩みございませんか？
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-bold">
            高額な採用コストは不要です
          </p>
        </div>

        {/* シンプルな2カラムリスト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex items-start gap-4 py-3"
            >
              <div className="flex-shrink-0 text-red-500 mt-1">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                {challenge.text}
              </span>
            </div>
          ))}
        </div>

        {/* 解決策セクション */}
        <div className="text-center py-8 border-t-2 border-gray-200">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            AIを駆使したBPOサービスなら、<br className="md:hidden" />
            これらの課題を3つの視点で解決します
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8 mb-6">
            <div className="inline-flex items-center gap-4 -translate-x-6 md:translate-x-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                01
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900">経費削減</span>
            </div>
            <div className="hidden md:block text-gray-300 text-2xl">→</div>
            <div className="inline-flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                02
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900">運用の負担軽減</span>
            </div>
            <div className="hidden md:block text-gray-300 text-2xl">→</div>
            <div className="inline-flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                03
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900">柔軟な時間利用</span>
            </div>
          </div>

          <div className="text-primary text-xl font-bold">
            ↓ 詳しく見ていきましょう
          </div>
        </div>
      </div>
    </section>
  );
}
