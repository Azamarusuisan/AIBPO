export default function Challenges() {
  const challenges = [
    "社内エンジニアが新規開発に追われ、運用・保守・改修タスクが滞留している状況を解決したい",
    "採用・教育コストをかけずに、すぐに動けるエンジニアリソースを柔軟に確保したい",
    "オフショア開発でのコミュニケーション負荷や品質リスクを抑えて開発を進めたい",
    "小規模な改善タスクを継続的に積み上げていける開発体制を構築したい",
    "定期予算の範囲内で、業務改善とシステム改修を計画的に平準化したい"
  ];

  return (
    <section className="section bg-gray-50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          こんな課題を抱える企業様に
        </h2>
        <ul className="space-y-4">
          {challenges.map((challenge, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mt-0.5">
                {index + 1}
              </span>
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                {challenge}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
