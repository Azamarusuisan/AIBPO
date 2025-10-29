export default function Reasons() {
  const items = [
    {
      number: "01",
      title: "透明性のある料金",
      description: "時間バンド制（20h/40h/80h/160h）。月14万から／超過時間：¥6,500〜7,000/h／契約は月次更新（3か月割引あり）"
    },
    {
      number: "02",
      title: "オフショアより低コスト、国内品質で安心",
      description: "実質6,000〜7,000円/hの単価レンジで、国内SES（人月80〜120万円）より安価。日本語対応PM＋レビュー体制により、オフショアの\"言語ギャップ\"リスクを回避。国内水準の開発品質・進行管理・SLAを標準装備"
    },
    {
      number: "03",
      title: "自動化×品質",
      description: "自社でNVIDIAの最高GPUを有しており、そこで完全自動バグ修正を自社開発。工数削減と費用削減が実現され相場よりお安く提供できます。最後は元PMレビュー。"
    },
    {
      number: "04",
      title: "対応領域の幅広さ",
      description: "フロントエンド（Next.js/React/Vite）、バックエンド（Node.js/Express/FastAPI）、ツール開発（ダッシュボード、レポート生成、軽量ETL）、保守・運用（サイト更新、モニタリング、CI/CD、QA支援）"
    }
  ];

  // 背景アニメーション用のコードスニペット
  const codeLines = [
    'const pricing = { base: 30000, unit: "完成した変更" };',
    'function calculateCost(count) {',
    '  return pricing.base + (count * 6000);',
    '}',
    '',
    'const autoCheck = async (code) => {',
    '  const result = await runLint(code);',
    '  return result.isValid ? "OK" : "要修正";',
    '};',
  ];

  return (
    <section className="relative section" id="value" aria-labelledby="value-heading" style={{ backgroundColor: 'var(--background-alt)' }}>
      {/* 背景アニメーション：スクロールするコード */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.08] pointer-events-none">
        <div className="absolute inset-0 animate-code-scroll">
          <pre className="font-mono text-sm leading-relaxed text-gray-600 whitespace-pre w-full">
            {codeLines.concat(codeLines).concat(codeLines).concat(codeLines).map(line =>
              line + '    ' + line + '    ' + line
            ).join('\n')}
          </pre>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <h2 id="value-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3">
          機械が時間を削り、人が価値を出す。
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-2)] mb-4 sm:mb-6">
          私たちの持っている強み
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="card bg-white/95 backdrop-blur-sm border border-primary/20 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 rounded-2xl shadow-sm group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {item.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed">
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
