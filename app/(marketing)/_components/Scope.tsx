import { scope } from "../_data/bpo";

export default function Scope() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16" id="scope">
      {/* セクションタイトル */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          何ができて、何ができないか
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          AI駆動のBPOサービスとして、スピードと品質を両立させた対応範囲をご確認ください
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* できること */}
        <article className="rounded-2xl bg-gradient-to-br from-green-50 to-white border-2 border-green-200 shadow-md hover:shadow-lg transition-shadow p-5 sm:p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-green-100">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">できること</h3>
          </div>
          <ul className="space-y-3.5">
            {scope.do.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-800 leading-relaxed">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* できないこと */}
        <article className="rounded-2xl bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 shadow-md hover:shadow-lg transition-shadow p-5 sm:p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-100">
              <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">できないこと（別見積）</h3>
          </div>
          <ul className="space-y-3.5">
            {scope.dont.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-800 leading-relaxed">
                <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
