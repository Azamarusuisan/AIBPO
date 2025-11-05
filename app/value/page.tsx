import Header from "../(marketing)/_components/Header";
import Reasons from "../(marketing)/_components/Reasons";
import TechStackFull from "../(marketing)/_components/TechStackFull";
import CTASection from "../(marketing)/_components/CTASection";
import Footer from "../(marketing)/_components/Footer";
import PMProfile from "../(marketing)/_components/PMProfile";
import EngineeringLead from "../(marketing)/_components/EngineeringLead";

export const metadata = {
  title: "提供価値 | エンジニアがいなくても、AIがあれば開発できる",
  description: "AI活用で開発時間を1/3に短縮。DB設計は2時間、デバッグは自動化。従来の1/3の時間とコストで開発をお届けします。",
};

export default function ValuePage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-12 md:pt-16 pb-0" style={{ backgroundColor: 'var(--background)' }}>
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">提供価値</h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              AI活用で開発時間を1/3に短縮。DB設計は数時間、デバッグは自動化。
            </p>
          </div>
        </section>

        <Reasons />
        <TechStackFull />
        <PMProfile />
        <EngineeringLead />
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
