export default function Process() {
  const steps = [
    {
      num: "01",
      title: "課題を送る",
      desc: "フォームまたはIssueで課題を送信",
    },
    {
      num: "02",
      title: "割当 & 自動チェック",
      desc: "必要なタイミングで担当を割当、自動チェック開始",
    },
    {
      num: "03",
      title: "実装 → 最終レビュー",
      desc: "AI×エンジニアが実装、最終レビュー（元PM）で品質担保",
    },
    {
      num: "04",
      title: "完成した変更を返却",
      desc: "そのまま適用可能な形で返却（ロールバック手順付き）",
    },
  ];

  return (
    <section className="section" id="process" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
          進め方（4ステップ）
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-primary/20 text-center">
              <div className="text-4xl font-black text-primary/30 mb-3">{step.num}</div>
              <h3 className="font-bold text-lg mb-2 text-[var(--text-1)]">{step.title}</h3>
              <p className="text-sm text-[var(--text-2)]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-white border border-primary/20 p-4 text-sm text-[var(--text-2)]">
          <p>
            <strong className="text-primary">最終レビュー（元PM）：</strong>
            アーキテクチャ判断と実装の難所を人が確認。受入基準（ビルドOK／テスト合格／ロールバック手順）を満たしてから返却します。
          </p>
        </div>
      </div>
    </section>
  );
}
