import Header from "../(marketing)/_components/Header";
import Contact from "../(marketing)/_components/Contact";

export const metadata = {
  title: "お問い合わせ | スポットエンジニア（仮）",
  description: "無料相談（最短15分）。壁打ち歓迎（GPT/エンジニア同席）。その場で概算をお出しします。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
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
        <section className="section bg-gray-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-extrabold mb-4">相談の流れ</h2>
            <ol className="space-y-3 list-decimal pl-6">
              <li>フォームから相談内容を送信</li>
              <li>24時間以内に初回返信</li>
              <li>無料スコープ（15分）で課題・環境を確認</li>
              <li>タスクを分解して概算提示</li>
              <li>納得いただけたら契約・着手</li>
            </ol>
          </div>
        </section>
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-400">
            © 2024 スポットエンジニア（仮）. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
