import Image from "next/image";

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
    <section className="section bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            他の選択肢との比較
          </h2>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-green-600 text-white px-6 py-3 rounded-full shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-base md:text-lg font-bold">
              スポットエンジニアが選ばれる理由
            </span>
          </div>
        </div>

        {/* コスト比較ビジュアル */}
        <div className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg ring-1 ring-gray-200">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white shadow-md">
              <Image
                src="/images/ai-assistant-2.jpg"
                alt="コスト比較：スポットエンジニア ¥30,000 vs フリーランス ¥60,000+ vs 派遣 ¥10,000+ vs オフショア ¥20,000+"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 50vw, 90vw"
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              月額コストの比較：スポットエンジニアが最もコストパフォーマンスに優れています
            </p>
          </div>
        </div>

        {/* モバイル：カード形式 */}
        <div className="md:hidden space-y-6">
          {rows.map((row, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-primary/20 overflow-hidden shadow-lg">
              <div className="bg-primary/10 px-4 py-3 border-b border-primary/20">
                <h3 className="font-bold text-gray-900">{row.category}</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-gradient-to-r from-accent/20 to-green-600/20 rounded-lg p-3 border-2 border-accent shadow-md">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-900">スポットエンジニア</span>
                    </div>
                    <span className="text-2xl font-bold text-accent">{row.spotEngineer.value}</span>
                  </div>
                  <p className="text-xs text-gray-900 font-medium">{row.spotEngineer.detail}</p>
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
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-left font-bold text-gray-900 border border-gray-300">比較項目</th>
                <th className="px-6 py-4 text-center font-bold text-white bg-gradient-to-br from-accent to-green-600 border-2 border-accent shadow-lg">
                  スポットエンジニア
                  <div className="text-xs font-normal text-white mt-1">（当サービス）</div>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 border border-gray-300">フリーランス</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 border border-gray-300">派遣</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 border border-gray-300">オフショア</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 font-semibold text-gray-900 border border-gray-300">{row.category}</td>
                  <td className="px-6 py-4 text-center bg-gradient-to-br from-accent/20 to-green-600/20 border-2 border-accent shadow-md">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div className="text-2xl font-bold text-accent">{row.spotEngineer.value}</div>
                    </div>
                    <div className="text-sm text-gray-900 font-semibold">{row.spotEngineer.detail}</div>
                  </td>
                  <td className="px-6 py-4 text-center border border-gray-300">
                    <div className="text-xl font-bold text-gray-700 mb-1">{row.freelance.value}</div>
                    <div className="text-sm text-gray-600">{row.freelance.detail}</div>
                  </td>
                  <td className="px-6 py-4 text-center border border-gray-300">
                    <div className="text-xl font-bold text-gray-700 mb-1">{row.dispatch.value}</div>
                    <div className="text-sm text-gray-600">{row.dispatch.detail}</div>
                  </td>
                  <td className="px-6 py-4 text-center border border-gray-300">
                    <div className="text-xl font-bold text-gray-700 mb-1">{row.offshore.value}</div>
                    <div className="text-sm text-gray-600">{row.offshore.detail}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* まとめ */}
        <div className="mt-8 bg-gradient-to-br from-accent/10 via-green-600/10 to-accent/10 rounded-2xl p-6 md:p-8 border-2 border-accent shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-green-600 flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              スポットエンジニアが選ばれる理由
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-accent font-bold text-lg mb-1">◎ 高コスパ</div>
              <p className="text-sm text-gray-600">月3万円〜の明瞭な価格設定</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-accent font-bold text-lg mb-1">◎ 高品質</div>
              <p className="text-sm text-gray-600">一定水準を保証する体制</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-accent font-bold text-lg mb-1">◎ 高速対応</div>
              <p className="text-sm text-gray-600">初回24h、Pro当日着手</p>
            </div>
          </div>
        </div>

        {/* 注釈 */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            評価基準
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-accent">◎</span>
              <span>非常に優れている</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-700">○</span>
              <span>良好</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-700">△</span>
              <span>やや不安定</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-700">×</span>
              <span>課題あり</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
