import Header from "../(marketing)/_components/Header";
import Scope from "../(marketing)/_components/Scope";
import Flow from "../(marketing)/_components/Flow";
import Usecases from "../(marketing)/_components/Usecases";

export const metadata = {
  title: "対応範囲 | スポットエンジニア（仮）",
  description: "バグ修正、小規模機能追加、API連携、自動テスト追加、CI整備など。TypeScript、React、Python、AWSに対応。",
};

export default function ScopePage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">対応範囲</h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              小粒開発を継続納品。できること・できないことを明確にしています。
            </p>
          </div>
        </section>
        <Scope />
        <Flow />
        <Usecases />
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-400">
            © 2024 スポットエンジニア（仮）. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
