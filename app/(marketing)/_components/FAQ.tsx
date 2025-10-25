export default function FAQ() {
  const faqs = [
    {
      q: "時間で何時間使えますか？",
      a: "時間売りではありません。成果は「完成した変更」としてお返しします。プランごとに月間の上限件数が設定されており、Starterは5件/月、Standardは20件/月、Proは60件/月まで対応可能です。"
    },
    {
      q: "個人指名・常駐はできますか？",
      a: "人材派遣モデルではないため、個人指名や常駐対応はできません。当サービスは「課題を受けて実装し、完成した変更をお返しする」BPOモデルです。これにより、人材管理のコストを削減し、低価格での提供を実現しています。Standard以上のプランでは「優先同一担当努力」を行い、可能な限り同じ担当者がプロジェクトを継続して担当しますが、休暇や他案件との兼ね合いで変更になる場合もあります。基本的には、課題の内容や技術スタックに応じて、最適なスキルを持つ担当者をオンデマンドでアサインする方式です。これにより、幅広い技術領域に対応できる体制を整えています。"
    },
    {
      q: "なぜこんなに安いのですか？",
      a: "自社でNVIDIAの最高GPUを有しており、そこで自動バグ修正システムを自社開発しているため、工数削減と費用削減が実現されています。「機械が時間を削り、人が価値を出す」というコンセプトのもと、自動化できる部分はAIに任せ、人手は難所に集中することで、相場より大幅に安い価格を実現しています。具体的には、テストコード生成、バグの初期デバッグ、コードレビューの一次チェックなどをAIが担当し、最終的な判断とアーキテクチャ設計を経験豊富な元PMが行うことで、品質を保ちながらコストを削減しています。また、オンデマンドモデルにより、固定人件費を抑えていることも低価格の理由です。"
    },
    {
      q: "品質はどのように担保されていますか？",
      a: "すべての「完成した変更」は元PMによる最終レビューを経て返却されます。具体的には、①AIによる自動テスト生成とデバッグ、②エンジニアによる実装、③元PMによる最終レビュー（アーキテクチャ判断、実装の難所確認、受入基準チェック）という3段階のチェック体制を敷いています。受入基準として、ビルドOK、テスト合格、ロールバック手順の3点を必須としており、万が一の際も安全に元に戻せる状態で納品します。また、コードの可読性や保守性も重視し、将来の拡張を見据えた設計を心がけています。"
    },
    {
      q: "セキュリティ対策はどうなっていますか？",
      a: "セキュリティは最重要課題として取り組んでいます。①私有Runner/GPUで閉域実行を行い、外部ネットワークにコードが流出しない環境を構築、②NDA（秘密保持契約）締結、③最小権限の原則に基づくアクセス制御、④すべての操作の監査ログ記録、⑤定期的なセキュリティ監査の実施、を行っています。クライアントのコードは厳重に管理され、第三者に開示されることは一切ありません。また、金融機関や医療機関など、より高いセキュリティ要件が求められる場合は、オンプレミス環境での対応や、IPアドレス制限、二要素認証などの追加対策も検討可能です。"
    },
    {
      q: "会議や打ち合わせはどのくらいありますか？",
      a: "プランによって異なります。Starterは非同期コミュニケーションのみ。Standardでは週1回・30分の同期レビュー、Proでは週2回・60分の同期レビューが含まれます。過度な会議を避け、効率的なコミュニケーションを心がけています。"
    },
    {
      q: "成果物の著作権はどうなりますか？",
      a: "成果物の著作権は原則クライアントに帰属します。NDA締結も対応可能です。安心してご利用ください。"
    },
    {
      q: "緊急対応は可能ですか？",
      a: "Proプランは当日着手可能、Standardプランは初回応答24時間以内で一次対応します。夜間・休日対応が必要な場合は、スピードオプション（+20%）をご利用いただけます。"
    },
    {
      q: "対応可能な技術スタックは？",
      a: "React、Next.js、Vue、Node.js、Python、Go、Ruby、PHP、Java、Swift、Kotlin、Flutter、React Native、Terraform、Docker、Kubernetes、AWS、GCP、Azure、Firebase、Supabase、PostgreSQL、MySQL、MongoDBなど、幅広い技術スタックに対応しています。詳細は技術スタックセクションをご覧ください。"
    },
    {
      q: "壁打ちや相談だけでも依頼できますか？",
      a: "もちろん可能です！GPT×エンジニアが同席する壁打ち枠を用意しています。技術的な相談やアーキテクチャ設計の壁打ちなど、お気軽にご利用ください。"
    },
    {
      q: "契約期間や解約について教えてください",
      a: "基本は月額制で、最低契約期間は1ヶ月です。解約は前月末までのご連絡で翌月から可能です。縛りはありませんので、ご安心ください。"
    },
    {
      q: "追加料金が発生するケースはありますか？",
      a: "プランの上限件数を超えた場合、追加10件パック（¥60,000・2ヶ月有効）をご購入いただけます。また、夜間・休日対応が必要な場合は+20%のスピードオプションが適用されます。それ以外の隠れた追加料金は一切ありません。"
    },
    {
      q: "小規模な修正でも依頼できますか？",
      a: "はい、小規模な修正でも大歓迎です。Starterプランは月3万円から利用可能で、バグ修正や小規模な機能追加に最適です。1件単位でカウントされるため、無駄なく利用できます。"
    },
    {
      q: "どのような企業が利用していますか？",
      a: "スタートアップから中堅企業まで、幅広い企業にご利用いただいています。特に、開発リソースが不足している企業や、スピーディーな開発を求める企業に好評です。"
    },
    {
      q: "無料トライアルはありますか？",
      a: "無料トライアルは現在実施しておりませんが、無料のコード健診を実施しています。まずはお気軽にご相談ください。"
    }
  ];

  // モバイルでは最初の8問のみ表示
  const displayedFaqs = typeof window !== 'undefined' && window.innerWidth < 768 ? faqs.slice(0, 8) : faqs;

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
        <h2 id="faq-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
          よくある質問
        </h2>
        <div className="mt-3 sm:mt-4 divide-y divide-primary/20 bg-white/95 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-sm">
          {/* モバイル: 8問 / デスクトップ: 全問 */}
          <div className="md:hidden">
            {faqs.slice(0, 8).map((f, i) => (
              <details key={i} className="group" open={i < 2}>
                <summary className="font-semibold cursor-pointer px-4 sm:px-6 py-3 sm:py-4 hover:bg-primary/5 transition-all duration-200 list-none flex items-center justify-between text-sm sm:text-base">
                  <span>{f.q}</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-open:rotate-180 flex-shrink-0 ml-2"
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
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-1 sm:pt-2 text-[var(--text-2)] bg-gray-50 text-xs sm:text-sm leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>

          {/* デスクトップ: 全問表示 */}
          <div className="hidden md:block">
            {faqs.map((f, i) => (
              <details key={i} className="group" open={i < 2}>
              <summary className="font-semibold cursor-pointer px-4 sm:px-6 py-3 sm:py-4 hover:bg-primary/5 transition-all duration-200 list-none flex items-center justify-between text-sm sm:text-base">
                <span>{f.q}</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-open:rotate-180 flex-shrink-0 ml-2"
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
              <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-1 sm:pt-2 text-[var(--text-2)] bg-gray-50 text-xs sm:text-sm leading-relaxed">
                {f.a}
              </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
