export default function Reasons() {
  const items = [
    {
      number: "01",
      title: "透明性のある料金",
      description: "件数ベース（完成した変更）。月3万から／追加10件=¥60,000（2ヶ月有効）／夜間休日+20%"
    },
    {
      number: "02",
      title: "自動化×品質",
      description: "自社NVIDIA GPUで自動デバッグ／テスト生成。最後は元PMレビュー。"
    },
    {
      number: "03",
      title: "オンデマンド担当",
      description: "必要な時だけ担当を割当。固定常駐・個人指名は基本無し（Standard以上で優先同一担当努力）。"
    },
    {
      number: "04",
      title: "使えるナレッジ",
      description: "変更メモ／ロールバック手順も返却。あとから追跡しやすい。"
    }
  ];

  return (
    <section className="section bg-gray-50" id="value" aria-labelledby="value-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="value-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3">
          機械が時間を削り、人が価値を出す。
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-2)] mb-4 sm:mb-6">
          私たちの持っている強み
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible">
          {items.map((item, i) => (
            <div
              key={i}
              className="card bg-white border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow rounded-2xl shadow-sm snap-start min-w-[280px] sm:min-w-0"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="text-4xl sm:text-5xl font-black text-primary/20 leading-none flex-shrink-0">
                  {item.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-[var(--text-2)] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
