import Header from "../(marketing)/_components/Header";
import FAQ from "../(marketing)/_components/FAQ";
import CTASection from "../(marketing)/_components/CTASection";
import Footer from "../(marketing)/_components/Footer";

export const metadata = {
  title: "よくある質問 | スポットエンジニア",
  description: "時間売りではありません。成果物で納品します。個人指名・常駐も不可。人材派遣ではなくBPOです。",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-12 pb-4">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-8">
              よくある質問
            </h1>
          </div>
        </section>
        <FAQ />
        <section className="section bg-gray-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-extrabold mb-4">
              その他のご質問
            </h2>
            <p className="text-[var(--text-2)]">
              上記以外のご質問は、
              <a href="/contact" className="link font-semibold hover:underline" data-cta="faq_contact_link">
                お問い合わせフォーム
              </a>
              からお気軽にご連絡ください。
              無料相談（最短15分）も受け付けております。
            </p>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
