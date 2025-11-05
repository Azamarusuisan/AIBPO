import Header from "../(marketing)/_components/Header";
import Scope from "../(marketing)/_components/Scope";
import TechStackFull from "../(marketing)/_components/TechStackFull";
import CaseStudies from "../(marketing)/_components/CaseStudies";
import CTASection from "../(marketing)/_components/CTASection";
import Footer from "../(marketing)/_components/Footer";
import DetailedCaseStudy from "../(marketing)/_components/DetailedCaseStudy";

export const metadata = {
  title: "対応範囲 | エンジニアがいなくても、AIがあれば開発できる",
  description: "AI活用による開発支援の対応範囲。フロントエンド、バックエンド、ツール開発、保守・運用まで幅広く対応します。",
};

export default function ScopePage() {
  return (
    <>
      <Header />
      <main className="pt-6 md:pt-8">
        <Scope />
        <TechStackFull />
        <CaseStudies layout="grid" />
        <DetailedCaseStudy />
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
