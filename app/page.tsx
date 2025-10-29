import Header from "./(marketing)/_components/Header";
import HeroSplit from "./(marketing)/_components/HeroSplit";
import Challenges from "./(marketing)/_components/Challenges";
import ClientLogos from "./(marketing)/_components/ClientLogos";
import Reasons from "./(marketing)/_components/Reasons";
import TechStackFull from "./(marketing)/_components/TechStackFull";
import Scope from "./(marketing)/_components/Scope";
import Plans from "./(marketing)/_components/Plans";
import CaseStudies from "./(marketing)/_components/CaseStudies";
import FAQ from "./(marketing)/_components/FAQ";
import Footer from "./(marketing)/_components/Footer";
import CTASection from "./(marketing)/_components/CTASection";
import PMProfile from "./(marketing)/_components/PMProfile";
import EngineeringLead from "./(marketing)/_components/EngineeringLead";
import NavigationCards from "./(marketing)/_components/NavigationCards";
import WaveSeparator from "./(marketing)/_components/WaveSeparator";
import TrustIndicators from "./(marketing)/_components/TrustIndicators";
import Testimonials from "./(marketing)/_components/Testimonials";
import ComparisonTable from "./(marketing)/_components/ComparisonTable";
import SecurityBadges from "./(marketing)/_components/SecurityBadges";
import CostComparison from "./(marketing)/_components/CostComparison";
import SupportBenefits from "./(marketing)/_components/SupportBenefits";
import OnboardingFlow from "./(marketing)/_components/OnboardingFlow";
import DetailedCaseStudy from "./(marketing)/_components/DetailedCaseStudy";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Split Layout */}
        <HeroSplit />

        {/* 信頼指標 - 実績数値を表示 */}
        <TrustIndicators />

        {/* 課題セクション - 強化版 */}
        <Challenges />

        {/* コスト比較 - 採用コストとの詳細比較 */}
        <CostComparison />

        {/* サポートのメリット - 運用負担軽減、柔軟な時間利用 */}
        <SupportBenefits />

        {/* 対応範囲 */}
        <div id="scope">
          <Scope />
        </div>

        {/* Client Logos - 実際のロゴができるまでは空配列にして非表示 */}
        <ClientLogos logos={[]} />

        {/* 詳細な活用事例 - 業種別 */}
        <DetailedCaseStudy />

        {/* ナビゲーションカード */}
        <NavigationCards />

        {/* 事例（Before/After） */}
        <CaseStudies />

        {/* お客様の声 */}
        <Testimonials />

        {/* 他サービスとの比較表 */}
        <ComparisonTable />

        {/* プラン */}
        <div id="plans">
          <Plans />
        </div>

        {/* 導入までの流れ - 最短7営業日 */}
        <OnboardingFlow />

        {/* セキュリティ・信頼性 */}
        <SecurityBadges />

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
