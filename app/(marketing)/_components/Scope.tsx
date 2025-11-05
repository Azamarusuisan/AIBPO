"use client";
import { scope } from "../_data/bpo";

const iconMap: Record<string, JSX.Element> = {
  cube: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
    </svg>
  ),
  server: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
    </svg>
  ),
  chip: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 7H7v6h6V7z" />
      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  briefcase: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
    </svg>
  )
};

export default function Scope() {
  return (
    <section className="section bg-white" id="scope">
      <div className="mx-auto max-w-7xl px-6">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            何ができて、何ができないか
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            AI活用で、速く・安く・高品質
          </p>
        </div>

        {/* できること */}
        <div className="mb-12">
          <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-white p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">できること</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scope.do.map((category, i) => (
                <div key={i} className="bg-white rounded-xl p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 pb-3">
                    {category.category}
                  </h4>
                  <ul className="space-y-2.5">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 注釈 */}
            <div className="mt-8 bg-accent/5 rounded-lg p-4 border-l-4 border-accent">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">対応技術スタック: </span>
                {scope.stacks.join(" / ")}
              </p>
            </div>
          </div>
        </div>

        {/* できないこと */}
        <div>
          <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-white p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">できないこと</h3>
                <p className="text-sm text-gray-600 mt-1">以下の領域は対応範囲外、または別途お見積りとなります</p>
              </div>
            </div>

            {/* 最初の2カテゴリ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {scope.dont.slice(0, 2).map((category, i) => (
                <div key={i} className="bg-white rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                      {iconMap[category.icon]}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {category.category}
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 残りの3カテゴリ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scope.dont.slice(2).map((category, i) => (
                <div key={i + 2} className="bg-white rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                      {iconMap[category.icon]}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {category.category}
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 注釈 */}
            <div className="mt-8 bg-orange-50 rounded-lg p-5 border-l-4 border-orange-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    これらの領域について
                  </p>
                  <p className="text-sm text-gray-700">
                    上記の技術領域は当サービスの対応範囲外ですが、パートナー企業との連携により対応可能な場合があります。詳しくはお問い合わせください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
