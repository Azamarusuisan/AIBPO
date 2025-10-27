import Header from "../(marketing)/_components/Header";
import Contact from "../(marketing)/_components/Contact";
import Footer from "../(marketing)/_components/Footer";

export const metadata = {
  title: "お問い合わせ | スポットエンジニア（仮）",
  description: "無料相談（最短15分）。壁打ち歓迎（GPT/エンジニア同席）。その場で概算をお出しします。",
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <main className="min-h-screen">
        <section className="section" style={{ backgroundColor: 'var(--background)' }}>
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              お問い合わせ
            </h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              無料相談（最短15分）で、課題をヒアリング。その場で概算をお出しします。
            </p>
          </div>
        </section>
        <Contact />
        <section className="section" style={{ backgroundColor: 'var(--background-alt)' }}>
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-extrabold mb-6">相談の流れ</h2>
            <div className="relative grid md:grid-cols-5 gap-4">
              {[
                { num: "01", title: "フォーム送信", desc: "相談内容を送信" },
                { num: "02", title: "初回返信", desc: "24時間以内に返信" },
                { num: "03", title: "無料スコープ", desc: "15分で課題確認" },
                { num: "04", title: "概算提示", desc: "タスク分解して提示" },
                { num: "05", title: "契約・着手", desc: "納得後に開始" },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-xl p-5 border border-primary/20 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="text-3xl font-black text-primary/30 mb-2">{step.num}</div>
                    <h3 className="font-bold text-base mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--text-2)]">{step.desc}</p>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="animate-pulse-arrow"
                      >
                        <path
                          d="M6 2L12 8L6 14"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
