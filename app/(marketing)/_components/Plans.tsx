import { plans } from "../_data/bpo";

export default function Plans() {
  return (
    <section className="section" id="plans" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
          プラン・料金
        </h2>

        {/* テーブル形式 */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl border-2 border-primary/30 overflow-hidden">
            <thead>
              <tr className="bg-primary/10 border-b-2 border-primary/30">
                <th className="px-4 py-3 text-left text-sm font-bold text-primary border-r border-primary/20">プラン</th>
                {plans.map((p, i) => (
                  <th key={i} className={`px-4 py-3 text-center text-sm font-bold text-primary ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    <div className="flex flex-col items-center gap-1">
                      <span>{p.name}</span>
                      {p.highlight && (
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-accent text-white">
                          おすすめ
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/20">
              {/* 価格 */}
              <tr className="bg-primary/5">
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">月額料金</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-lg font-bold text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.price}
                  </td>
                ))}
              </tr>
              {/* 件数 */}
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">件数上限</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-sm text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.tickets}
                  </td>
                ))}
              </tr>
              {/* SLA */}
              <tr className="bg-primary/5">
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">初回応答</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-sm text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.sla}
                  </td>
                ))}
              </tr>
              {/* 会議 */}
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">会議</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-sm text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.meeting}
                  </td>
                ))}
              </tr>
              {/* 特典 */}
              <tr className="bg-primary/5">
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20">特典</td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-3 text-center text-xs text-gray-900 ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    {p.extras?.map((x, ix) => (
                      <div key={ix}>{x}</div>
                    )) || '－'}
                  </td>
                ))}
              </tr>
              {/* CTA */}
              <tr className="border-t-2 border-primary/30">
                <td className="px-4 py-3 text-sm font-semibold text-primary border-r border-primary/20"></td>
                {plans.map((p, i) => (
                  <td key={i} className={`px-4 py-4 text-center ${i < plans.length - 1 ? 'border-r border-primary/20' : ''}`}>
                    <a
                      href="/contact"
                      className="inline-block px-4 py-2 rounded-lg text-sm font-semibold transition-colors bg-primary text-white hover:bg-primary-hover"
                      data-cta={`plans_${p.name.toLowerCase()}`}
                    >
                      無料相談
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl bg-white border border-gray-200 p-4 text-sm text-[var(--text-2)] space-y-1">
          <p><strong>ℹ︎ 時間売りではありません。</strong>成果は"完成した変更"としてお返しします。</p>
          <p><strong>追加：</strong>10件=¥60,000（2ヶ月有効）／ 夜間・休日対応は +20%</p>
        </div>
      </div>
    </section>
  );
}
