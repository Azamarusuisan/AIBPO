import Header from "../(marketing)/_components/Header";
import Reasons from "../(marketing)/_components/Reasons";
import TechStackFull from "../(marketing)/_components/TechStackFull";
import CTASection from "../(marketing)/_components/CTASection";
import Footer from "../(marketing)/_components/Footer";
import Process from "../(marketing)/_components/Process";
import SecurityNote from "../(marketing)/_components/SecurityNote";
import KpiWall from "../(marketing)/_components/KpiWall";
import PMProfile from "../(marketing)/_components/PMProfile";

export const metadata = {
  title: "提供価値 | スポットエンジニア（仮）",
  description: "AI×GPUで人の時間を削る。自社NVIDIA GPU、自動デバッグ、人は難所に集中。",
};

export default function ValuePage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ backgroundColor: 'var(--background)' }}>
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">提供価値</h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              AI×GPUで人の時間を削る。自社NVIDIA GPU、自動デバッグ、人は難所に集中。
            </p>
          </div>
        </section>

        <Reasons />
        <Process />
        <TechStackFull />
        <KpiWall />
        <PMProfile />
        <SecurityNote />
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
