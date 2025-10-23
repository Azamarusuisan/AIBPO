export default function FAQ() {
  const faqs = [
    {
      q: "時間で何時間使えますか？",
      a: "時間売りではありません。成果は\"完成した変更\"としてお返しします。"
    },
    {
      q: "個人指名・常駐はできますか？",
      a: "人材派遣モデルではないため不可です。課題を受けて当社が実装→完成した変更をお返しします。"
    },
    {
      q: "なぜ安いのですか？",
      a: "GPU×自動化で\"機械が時間を削る\"ため、人手は難所に集中します。"
    },
    {
      q: "セキュリティは？",
      a: "私有Runner/GPUで閉域実行。NDA/最小権限/監査ログに対応します。"
    },
    {
      q: "会議は？",
      a: "Starterは非同期のみ。Standard以上で週1・30分の同期レビュー可。"
    },
    {
      q: "著作権は？",
      a: "成果物は原則クライアント帰属。NDA対応可。"
    },
    {
      q: "緊急時は？",
      a: "Proは当日、Standardは24hで一次対応。夜間・休日はスピードオプション(+20%)。"
    },
    {
      q: "壁打ちだけでも良い？",
      a: "OKです。GPT/エンジニア同席の壁打ち枠を用意します。"
    }
  ];

  return (
    <section className="section bg-gray-50" id="faq" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="faq-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
          よくある質問
        </h2>
        <div className="mt-3 sm:mt-4 divide-y divide-gray-200 bg-white rounded-xl border border-gray-200 overflow-hidden">
          {faqs.map((f, i) => (
            <details key={i} className="group" open={i < 2}>
              <summary className="font-semibold cursor-pointer px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors list-none flex items-center justify-between text-sm sm:text-base">
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
              <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-1 sm:pt-2 text-[var(--text-2)] bg-gray-50 text-xs sm:text-sm">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
