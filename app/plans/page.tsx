import Header from "../(marketing)/_components/Header";
import Plans from "../(marketing)/_components/Plans";

export const metadata = {
  title: "料金プラン | スポットエンジニア（仮）",
  description: "月額3万円から。Starter/Standard/Proの3プラン。透明性の高い料金体系。",
};

export default function PlansPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">料金プラン</h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              時間売りではなく、成果物で納品します。
            </p>
          </div>
        </section>
        <Plans />
        <section className="section bg-gray-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-extrabold mb-4">プランの選び方</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card bg-white border border-gray-200 p-6">
                <h3 className="font-bold mb-2">Starterがおすすめの方</h3>
                <ul className="text-sm text-[var(--text-2)] space-y-1">
                  <li>・小さな不具合を月次で解消したい</li>
                  <li>・まずは試してみたい</li>
                  <li>・非同期でOK</li>
                </ul>
              </div>
              <div className="card bg-white border border-[var(--primary)] border-2 p-6">
                <h3 className="font-bold mb-2">Standardがおすすめの方</h3>
                <ul className="text-sm text-[var(--text-2)] space-y-1">
                  <li>・定期的な改善を進めたい</li>
                  <li>・週次レビューで壁打ちしたい</li>
                  <li>・改善提案も欲しい</li>
                </ul>
              </div>
              <div className="card bg-white border border-gray-200 p-6">
                <h3 className="font-bold mb-2">Proがおすすめの方</h3>
                <ul className="text-sm text-[var(--text-2)] space-y-1">
                  <li>・スピード重視</li>
                  <li>・当日対応が必要</li>
                  <li>・優先キューで安心したい</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-400">
            © 2024 スポットエンジニア（仮）. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
