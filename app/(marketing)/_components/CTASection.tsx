export default function CTASection() {
  return (
    <section className="pt-0 pb-10 md:pt-0 md:pb-14 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800">
      <div className="mx-auto max-w-4xl px-6 pt-8 md:pt-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
          まずは無料相談から始めませんか？
        </h2>
        <p className="text-lg mb-8 text-white/90">
          最短15分で課題をヒアリング。その場で概算をお出しします。
        </p>
        <a
          href="/contact"
          className="inline-block rounded-xl bg-white px-10 py-5 text-xl font-bold text-gray-700 hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          data-cta="cta_section_contact"
        >
          相談をしてみる
        </a>
      </div>
    </section>
  );
}
