import Link from "next/link";
import Header from "./(marketing)/_components/Header";
import Footer from "./(marketing)/_components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-white">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ページが見つかりません
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              お探しのページは存在しないか、移動した可能性があります。
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary-hover transition-colors shadow-md hover:shadow-lg"
              data-cta="404_home"
            >
              トップページに戻る
            </Link>

            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">お困りの場合は、以下のページもご確認ください：</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#value" className="text-primary hover:underline" data-cta="404_value">
                  提供価値
                </Link>
                <Link href="/plans" className="text-primary hover:underline" data-cta="404_plans">
                  プラン
                </Link>
                <Link href="/#scope" className="text-primary hover:underline" data-cta="404_scope">
                  対応範囲
                </Link>
                <Link href="/faq" className="text-primary hover:underline" data-cta="404_faq">
                  FAQ
                </Link>
                <Link href="/contact" className="text-primary hover:underline" data-cta="404_contact">
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
