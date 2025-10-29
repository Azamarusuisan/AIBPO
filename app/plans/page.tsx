import Header from "../(marketing)/_components/Header";
import Plans from "../(marketing)/_components/Plans";
import CTASection from "../(marketing)/_components/CTASection";
import Footer from "../(marketing)/_components/Footer";

export const metadata = {
  title: "料金プラン | スポットエンジニア",
  description: "月額14万円から。時間バンド制（20h/40h/80h/160h）で必要な分だけ柔軟に利用。透明性の高い料金体系。",
};

export default function PlansPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-12 md:pt-16 pb-0">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">料金プラン</h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              時間売りではなく、成果物で納品します。
            </p>
          </div>
        </section>
        <Plans />
        <section className="section bg-gray-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-extrabold mb-4">プランの選び方</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card bg-white border border-gray-200 p-6">
                <h3 className="font-bold mb-2">Starter (20h)</h3>
                <ul className="text-sm text-[var(--text-2)] space-y-1">
                  <li>・小さな改修を月次で進めたい</li>
                  <li>・まずは試してみたい</li>
                  <li>・非同期でOK</li>
                </ul>
              </div>
              <div className="card bg-white border border-gray-200 p-6">
                <h3 className="font-bold mb-2">Growth (40h)</h3>
                <ul className="text-sm text-[var(--text-2)] space-y-1">
                  <li>・定期的な改善を進めたい</li>
                  <li>・週次レビューで壁打ちしたい</li>
                  <li>・改善提案も欲しい</li>
                </ul>
              </div>
              <div className="card bg-white border border-gray-200 p-6">
                <h3 className="font-bold mb-2">Pro (80h)</h3>
                <ul className="text-sm text-[var(--text-2)] space-y-1">
                  <li>・スピード重視</li>
                  <li>・当日対応が必要</li>
                  <li>・優先キューで安心したい</li>
                </ul>
              </div>
              <div className="card bg-white border border-gray-200 p-6">
                <h3 className="font-bold mb-2">Team (160h)</h3>
                <ul className="text-sm text-[var(--text-2)] space-y-1">
                  <li>・複数プロジェクト並行</li>
                  <li>・専任PM配置が必要</li>
                  <li>・カスタム対応が必要</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
