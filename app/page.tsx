import Header from "./(marketing)/_components/Header";
import HeroSplit from "./(marketing)/_components/HeroSplit";
import ClientLogos from "./(marketing)/_components/ClientLogos";
import Reasons from "./(marketing)/_components/Reasons";
import TechStackFull from "./(marketing)/_components/TechStackFull";
import Scope from "./(marketing)/_components/Scope";
import Plans from "./(marketing)/_components/Plans";
import CaseStudies from "./(marketing)/_components/CaseStudies";
import FAQ from "./(marketing)/_components/FAQ";
import Footer from "./(marketing)/_components/Footer";
import CTASection from "./(marketing)/_components/CTASection";
import HowItWorks from "./(marketing)/_components/HowItWorks";
import PMProfile from "./(marketing)/_components/PMProfile";
import EngineeringLead from "./(marketing)/_components/EngineeringLead";
import NavigationCards from "./(marketing)/_components/NavigationCards";
import WaveSeparator from "./(marketing)/_components/WaveSeparator";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Split Layout */}
        <HeroSplit />

        {/* Client Logos - 実際のロゴができるまでは空配列にして非表示 */}
        <ClientLogos logos={[]} />

        {/* ナビゲーションカード */}
        <NavigationCards />

        {/* 事例 */}
        <CaseStudies />

        {/* プラン */}
        <div id="plans">
          <Plans />
        </div>

        {/* 進め方（4ステップ） */}
        <HowItWorks />

        {/* 技術スタック */}
        <div id="stack">
          <TechStackFull />
        </div>

        {/* 代表メッセージ */}
        <PMProfile />

        {/* PM紹介 */}
        <EngineeringLead />

        {/* FAQ */}
        <div id="faq">
          <FAQ />
        </div>
      </main>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  );
}
