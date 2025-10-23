import Header from "../(marketing)/_components/Header";
import Reasons from "../(marketing)/_components/Reasons";
import TechStackFull from "../(marketing)/_components/TechStackFull";

export const metadata = {
  title: "提供価値 | スポットエンジニア（仮）",
  description: "AI×GPUで人の時間を削る。自社NVIDIA GPU、自動デバッグ、人は難所に集中。",
};

export default function ValuePage() {
  return (
    <>
      <Header />
      <main>
        <Reasons />
        <TechStackFull />
        <section className="section bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
              私たちが提供する価値
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[var(--text-2)]">
                スポットエンジニア（仮）は、従来の「時間売り」モデルではなく、
                <strong>成果物で納品</strong>する新しいBPOサービスです。
              </p>
              <p className="text-[var(--text-2)] mt-4">
                自社NVIDIA GPUサーバーによる並列ビルド・自動テスト・ログ解析、
                そして自動デバッグシステムにより、「機械が時間を削る」ことで、
                エンジニアは設計判断と最終レビューという難所に集中できます。
              </p>
              <p className="text-[var(--text-2)] mt-4">
                最終レビューは元PM（東大卒）が担当し、品質を担保。
                壊さず、前に進める開発を実現します。
              </p>
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
