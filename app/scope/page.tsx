import Header from "../(marketing)/_components/Header";
import Subnav from "../(marketing)/_components/scope/Subnav";
import ScopeDo from "../(marketing)/_components/scope/ScopeDo";
import ScopeDont from "../(marketing)/_components/scope/ScopeDont";
import TechCloud from "../(marketing)/_components/scope/TechCloud";
import CasesSection from "../(marketing)/_components/scope/CasesSection";
import CTASection from "../(marketing)/_components/CTASection";
import Footer from "../(marketing)/_components/Footer";

export const metadata = {
  title: "対応範囲 | エンジニアがいなくても、AIがあれば開発できる",
  description: "AI活用による開発支援の対応範囲。フロントエンド、バックエンド、ツール開発、保守・運用まで幅広く対応します。",
};

export default function ScopePage() {
  return (
    <>
      <Header />
      <main className="pt-6 md:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Subnav />
        </div>
        <ScopeDo />
        <ScopeDont />
        <TechCloud />
        <CasesSection />
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
