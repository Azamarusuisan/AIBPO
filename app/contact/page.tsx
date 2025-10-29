import Header from "../(marketing)/_components/Header";
import Contact from "../(marketing)/_components/Contact";
import Footer from "../(marketing)/_components/Footer";

export const metadata = {
  title: "お問い合わせ | スポットエンジニア",
  description: "無料相談（最短15分）。壁打ち歓迎（GPT/エンジニア同席）。その場で概算をお出しします。",
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <main className="min-h-screen">
        <section className="pt-12 pb-4" style={{ backgroundColor: 'var(--background)' }}>
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              お問い合わせ
            </h1>
            <p className="text-[var(--text-2)] text-base mb-6">
              無料相談（最短15分）で、課題をヒアリング。その場で概算をお出しします。
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
