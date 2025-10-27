import Header from "../(marketing)/_components/Header";
import Scope from "../(marketing)/_components/Scope";
import TechStackFull from "../(marketing)/_components/TechStackFull";
import CaseStudies from "../(marketing)/_components/CaseStudies";
import CTASection from "../(marketing)/_components/CTASection";
import Footer from "../(marketing)/_components/Footer";
import Industries from "../(marketing)/_components/Industries";

export const metadata = {
  title: "対応範囲 | スポットエンジニア（仮）",
  description: "バグ修正、小規模機能追加、API連携、自動テスト追加、CI整備など。TypeScript、React、Python、AWSに対応。",
};

export default function ScopePage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-12 md:pt-16 pb-0">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">対応範囲</h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              小粒開発を継続納品。できること・できないことを明確にしています。
            </p>
          </div>
        </section>
        <Scope />
        <TechStackFull />
        <CaseStudies layout="grid" />
        <Industries />
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
