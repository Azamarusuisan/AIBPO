export default function FAQ() {
  const faqs = [
    {
      q: "なぜこんなに安いのですか？",
      a: "自社でNVIDIAの最高GPUを有しており、そこで完全自動バグ修正システムを自社開発しているため、工数削減と費用削減が実現されています。「機械が時間を削り、人が価値を出す」というコンセプトのもと、自動化できる部分はAIに任せ、人手は難所に集中することで、相場より大幅に安い価格を実現しています。"
    },
    {
      q: "時間で何時間使えますか？",
      a: "時間バンド制を採用しています。Starterは20h/月、Standardは40h/月、Proは80h/月、Teamは160h/月まで対応可能です。時間売りではなく、成果は「納品物」としてお返しします。超過時間は¥6,500〜7,000/hで対応可能です。"
    },
    {
      q: "品質はどのように担保されていますか？",
      a: "すべての「納品物」は元PMによる最終レビューを経て返却されます。具体的には、①AIによる自動テスト生成とデバッグ、②エンジニアによる実装、③元PMによる最終レビュー（アーキテクチャ判断、実装の難所確認、受入基準チェック）という3段階のチェック体制を敷いています。"
    },
    {
      q: "個人指名・常駐はできますか？",
      a: "人材派遣モデルではないため、個人指名や常駐対応はできません。当サービスは「課題を受けて実装し、納品物をお返しする」BPOモデルです。これにより、人材管理のコストを削減し、低価格での提供を実現しています。"
    },
    {
      q: "小規模な修正でも依頼できますか？",
      a: "はい、小規模な修正でも大歓迎です。Starterプランは月¥140,000から利用可能で、バグ修正や小規模な機能追加に最適です。時間バンド制のため、無駄なく利用できます。"
    },
    {
      q: "AIを使うと、なぜそんなに速く・安くなるのですか？",
      a: "従来エンジニアが時間をかけていた作業を、AIが自動化するからです。具体例：【DB設計】従来エンジニアが3日 → AI活用で2時間（-88%）、【デバッグ】従来半日 → AIが5分で原因特定（-90%）、【コード生成】CursorやGitHub Copilotが8割を生成 → PMが品質チェック（-70%）。この時短効果により、月3万円〜という価格を実現しています。"
    },
    {
      q: "AIだけで開発して、品質は大丈夫ですか？",
      a: "いいえ、AIだけでは開発しません。「AIに任せる部分」と「人が判断する部分」を明確に分けています。【AIに任せる部分】DB設計の初期案生成、定型的なコード生成（CRUD、フォーム）、バグの自動検出と修正案提示、テストコード生成。【人（元PM）が判断する部分】アーキテクチャの妥当性、セキュリティ要件、パフォーマンス最適化、受入基準の最終チェック。AI活用で時間を削減し、その分を人の品質チェックに充てています。だから「速くて安い」のに「品質が高い」を実現できます。"
    },
    {
      q: "エンジニアがいなくても、本当に開発できますか？",
      a: "はい、問題ありません。「何を作りたいか」を伝えるだけで大丈夫です。例えば、「営業先リストを自動で作るツールが欲しい」「在庫管理をExcelじゃなくてシステムでやりたい」「レポートを毎週手作業で作ってるのを自動化したい」といったざっくりした要望でOK。要件定義AIが、それを「どう作るか」の仕様書に変換します。技術的な知識は一切不要です。実際に、エンジニア0名の営業会社（社員15名）、小売店（社員8名）、コンサル会社（社員20名）などで導入実績があります。"
    }
  ];


  // 背景アニメーション用のコードスニペット
  const codeLines = [
    'const faq = { q: "品質は?", a: "元PMレビュー" };',
    'function findAnswer(question) {',
    '  return faqs.find(f => f.q === question)?.a;',
    '}',
    '',
    'const security = { nda: true, runner: "private" };',
  ];

  return (
    <section className="relative section" id="faq" aria-labelledby="faq-heading" style={{ backgroundColor: 'var(--background)' }}>
      {/* 背景アニメーション：スクロールするコード */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 animate-code-scroll">
          <pre className="font-mono text-sm leading-relaxed text-gray-600 whitespace-pre w-full">
            {codeLines.concat(codeLines).concat(codeLines).concat(codeLines).map(line =>
              line + '    ' + line + '    ' + line
            ).join('\n')}
          </pre>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-extrabold mb-6">
          よくある質問
        </h2>
        <div className="mt-6 divide-y divide-primary/20 bg-white/95 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-sm">
          {faqs.map((f, i) => (
            <details key={i} className="group border-b border-primary/10 last:border-b-0">
              <summary className="font-semibold cursor-pointer px-4 sm:px-6 py-4 sm:py-5 hover:bg-primary/5 transition-colors duration-200 list-none flex items-center justify-between text-base sm:text-lg bg-white leading-relaxed">
                <span className="flex-1">{f.q}</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="overflow-hidden transition-all duration-300 ease-in-out">
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-3 sm:pt-4 text-gray-700 bg-white text-base sm:text-lg leading-relaxed">
                  {f.a}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
