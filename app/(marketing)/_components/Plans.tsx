import { plans } from "../_data/bpo";

export default function Plans() {
  return (
    <section className="section bg-gray-50" id="plans">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
          プラン・料金
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`card p-5 sm:p-6 border bg-white transition-all flex flex-col ${
                p.highlight
                  ? "border-[var(--primary)] shadow-lg lg:scale-105 lg:z-10"
                  : "border-[var(--muted)]"
              }`}
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold">{p.name}</h3>
                {p.highlight && <span className="badge badge-accent text-xs">おすすめ</span>}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold my-2 metrics">{p.price}</div>
              <ul className="grid gap-1 text-[var(--text-2)] text-xs sm:text-sm flex-grow mb-4">
                <li>{p.tickets}</li>
                <li>{p.sla}</li>
                <li>{p.meeting}</li>
                {p.extras?.map((x, ix) => (
                  <li key={ix}>・{x}</li>
                ))}
              </ul>
              <a
                href="/audit"
                className="btn-primary mt-auto inline-flex px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl justify-center text-sm sm:text-base w-full"
                data-cta={`plans_${p.name.toLowerCase()}`}
              >
                無料相談
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-white border border-gray-200 p-4 text-sm text-[var(--text-2)] space-y-1">
          <p><strong>ℹ︎ 時間売りではありません。</strong>成果は"完成した変更"としてお返しします。</p>
          <p><strong>追加：</strong>10件=¥60,000（2ヶ月有効）／ 夜間・休日対応は +20%</p>
        </div>
      </div>
    </section>
  );
}
