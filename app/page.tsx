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
import Process from "./(marketing)/_components/Process";
import PMProfile from "./(marketing)/_components/PMProfile";
import NavigationCards from "./(marketing)/_components/NavigationCards";
import WaveSeparator from "./(marketing)/_components/WaveSeparator";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Split Layout */}
        <HeroSplit />

        {/* 波で区切る */}
        <WaveSeparator fill="#0a223a" height={64} />

        {/* 紺帯（スムーズな遷移） */}
        <section className="bg-[linear-gradient(180deg,#0f3a4a_0%,#0a223a_60%,#081826_100%)] -mt-[1px]">
          <div className="mx-auto max-w-7xl px-4 py-6 md:py-8"></div>
        </section>

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
        <Process />

        {/* 技術スタック */}
        <div id="stack">
          <TechStackFull />
        </div>

        {/* PM紹介 */}
        <PMProfile />

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
