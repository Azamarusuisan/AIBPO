export default function Reasons() {
  const items = [
    {
      number: "01",
      title: "DB設計が数時間で完了",
      description: "従来、エンジニアが数日〜数週間かけていたDB設計を、最新のAIツール（Claude、GPT-4、Cursor）が数時間で生成。例：営業管理システムのDB設計が従来3日 → AI活用で2時間。開発時間が1/3に短縮。だから月3万円〜を実現できる。"
    },
    {
      number: "02",
      title: "デバッグが自動化され、チェック工数が激減",
      description: "従来、エンジニアが手作業でバグを探し、修正していた工程を、AI（GitHub Copilot、自社開発の自動デバッグシステム）が自動化。例：フォーム送信のバグ修正が従来半日 → AI活用で5分。チェック工数が1/10に削減。元PMが最終レビューするだけ。"
    },
    {
      number: "03",
      title: "最新AIツールに精通しているから、最大パフォーマンスを発揮",
      description: "Claude 3.5 Sonnet、Cursor、v0.dev、GitHub Copilot...AIツールは日々進化している。私たちは、これらの最新ツールを使いこなし、「AIに何を任せ、人が何を判断すべきか」を理解している。だから、エンジニアがいない企業でも、最先端の開発スピードと品質を手に入れられる。"
    },
    {
      number: "04",
      title: "「AI時代の開発」を社内で再現するには、膨大なコストがかかる",
      description: "最新AIツールを使いこなすには、ツールの選定と学習、プロンプトエンジニアリングのスキル、「AIに任せる部分」と「人が判断する部分」の見極めが必要。これらを社内で習得するには時間とコストがかかりすぎる。月3万円で、AI活用のノウハウごと外部に委ねる方が合理的。"
    }
  ];

  // 背景アニメーション用のコードスニペット
  const codeLines = [
    'const pricing = { base: 30000, unit: "納品物" };',
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
          AI時代の開発は、
          <br className="hidden sm:block" />
          従来の1/3の時間とコストで完了する。
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
          DB設計は数時間。デバッグは自動化。人が時間をかけていた作業を、AIが瞬時に処理します。
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="card bg-white/95 backdrop-blur-sm border border-primary/20 p-5 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 rounded-2xl shadow-sm group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {item.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
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
