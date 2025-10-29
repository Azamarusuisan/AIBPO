import Header from "../(marketing)/_components/Header";
import Scope from "../(marketing)/_components/Scope";
import TechStackFull from "../(marketing)/_components/TechStackFull";
import CaseStudies from "../(marketing)/_components/CaseStudies";
import CTASection from "../(marketing)/_components/CTASection";
import Footer from "../(marketing)/_components/Footer";
import Industries from "../(marketing)/_components/Industries";

export const metadata = {
  title: "何ができて、何ができないか | スポットエンジニア",
  description: "AI駆動の自動バグ修正・テスト生成、パフォーマンス最適化、技術的負債の解消、セキュリティ強化など、スピードと品質を両立させた対応範囲をご確認ください。",
};

export default function ScopePage() {
  return (
    <>
      <Header />
      <main className="pt-6 md:pt-8">
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
