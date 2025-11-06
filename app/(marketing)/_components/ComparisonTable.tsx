export default function ComparisonTable() {
  const rows = [
    {
      category: "価格",
      spotEngineer: { value: "◎", detail: "月3万円〜", highlight: true },
      freelance: { value: "△", detail: "時給3,000円〜（変動）" },
      dispatch: { value: "×", detail: "月60万円〜" },
      offshore: { value: "○", detail: "月20万円〜" }
    },
    {
      category: "品質",
      spotEngineer: { value: "◎", detail: "一定水準を保証", highlight: true },
      freelance: { value: "△", detail: "個人差が大きい" },
      dispatch: { value: "○", detail: "安定" },
      offshore: { value: "△", detail: "ムラがある" }
    },
    {
      category: "対応速度",
      spotEngineer: { value: "◎", detail: "初回24h / Pro当日", highlight: true },
      freelance: { value: "△", detail: "個人のスケジュール次第" },
      dispatch: { value: "○", detail: "即日〜1週間" },
      offshore: { value: "×", detail: "時差・言語の壁" }
    },
    {
      category: "コミュニケーション",
      spotEngineer: { value: "◎", detail: "日本語・Slack即応", highlight: true },
      freelance: { value: "○", detail: "直接やり取り可能" },
      dispatch: { value: "○", detail: "対面・日本語" },
      offshore: { value: "△", detail: "言語・文化の違い" }
    },
    {
      category: "契約柔軟性",
      spotEngineer: { value: "◎", detail: "月単位・件数調整可", highlight: true },
      freelance: { value: "○", detail: "柔軟" },
      dispatch: { value: "×", detail: "最低3ヶ月〜" },
      offshore: { value: "△", detail: "契約変更に時間" }
    },
    {
      category: "情報管理",
      spotEngineer: { value: "◎", detail: "NDA・厳格な管理", highlight: true },
      freelance: { value: "△", detail: "個人に依存" },
      dispatch: { value: "○", detail: "企業保証あり" },
      offshore: { value: "△", detail: "国外拠点リスク" }
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            他の選択肢との比較
          </h2>
          <div className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full shadow-md">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-base md:text-lg font-bold">
              スポットエンジニアが選ばれる理由
            </span>
          </div>
        </div>

        {/* モバイル：カード形式 */}
        <div className="md:hidden space-y-6">
          {rows.map((row, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 text-base">{row.category}</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-blue-50 rounded-lg p-3 border-2 border-primary shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-900">スポットエンジニア</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">{row.spotEngineer.value}</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{row.spotEngineer.detail}</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <div className="text-xs text-gray-500 mb-1">フリーランス</div>
                    <div className="text-lg font-bold text-gray-700">{row.freelance.value}</div>
                    <p className="text-xs text-gray-500 mt-1">{row.freelance.detail}</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <div className="text-xs text-gray-500 mb-1">派遣</div>
                    <div className="text-lg font-bold text-gray-700">{row.dispatch.value}</div>
                    <p className="text-xs text-gray-500 mt-1">{row.dispatch.detail}</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <div className="text-xs text-gray-500 mb-1">オフショア</div>
                    <div className="text-lg font-bold text-gray-700">{row.offshore.value}</div>
                    <p className="text-xs text-gray-500 mt-1">{row.offshore.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* デスクトップ：テーブル形式 */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-left font-bold text-gray-900 border-b-2 border-gray-300 text-base">比較項目</th>
                <th className="px-6 py-4 text-center font-bold text-white bg-primary border-b-2 border-primary text-base">
                  スポットエンジニア
                  <div className="text-sm font-normal text-white/90 mt-1">（当サービス）</div>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 border-b-2 border-gray-300 text-base">フリーランス</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 border-b-2 border-gray-300 text-base">派遣</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 border-b-2 border-gray-300 text-base">オフショア</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 text-base">{row.category}</td>
                  <td className="px-6 py-5 text-center bg-blue-50 border-l-2 border-r-2 border-b border-primary">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div className="text-2xl font-bold text-green-600">{row.spotEngineer.value}</div>
                    </div>
                    <div className="text-base text-gray-900 font-semibold">{row.spotEngineer.detail}</div>
                  </td>
                  <td className="px-6 py-4 text-center border-b border-gray-200">
                    <div className="text-xl font-bold text-gray-700 mb-1">{row.freelance.value}</div>
                    <div className="text-sm text-gray-600">{row.freelance.detail}</div>
                  </td>
                  <td className="px-6 py-4 text-center border-b border-gray-200">
                    <div className="text-xl font-bold text-gray-700 mb-1">{row.dispatch.value}</div>
                    <div className="text-sm text-gray-600">{row.dispatch.detail}</div>
                  </td>
                  <td className="px-6 py-4 text-center border-b border-gray-200">
                    <div className="text-xl font-bold text-gray-700 mb-1">{row.offshore.value}</div>
                    <div className="text-sm text-gray-600">{row.offshore.detail}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* まとめ */}
        <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 border-2 border-primary shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              スポットエンジニアが選ばれる理由
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
              <div className="text-green-600 font-bold text-lg md:text-xl mb-2">◎ 高コスパ</div>
              <p className="text-base text-gray-700">月3万円〜の明瞭な価格設定</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
              <div className="text-green-600 font-bold text-lg md:text-xl mb-2">◎ 高品質</div>
              <p className="text-base text-gray-700">一定水準を保証する体制</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
              <div className="text-green-600 font-bold text-lg md:text-xl mb-2">◎ 高速対応</div>
              <p className="text-base text-gray-700">初回24h、Pro当日着手</p>
            </div>
          </div>
        </div>

        {/* 注釈 */}
        <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-base md:text-lg">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            評価基準
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-base text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">◎</span>
              <span>非常に優れている</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">○</span>
              <span>良好</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-yellow-600">△</span>
              <span>やや不安定</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-red-600">×</span>
              <span>課題あり</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
