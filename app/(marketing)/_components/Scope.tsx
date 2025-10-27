import { scope } from "../_data/bpo";

export default function Scope() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14" id="scope">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">対応範囲</h2>
      <p className="mt-2 text-gray-600">
        小粒開発を継続納品。できること・できないことを明確にしています。
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* できること */}
        <article className="rounded-2xl bg-white border border-black/5 shadow-sm p-6 md:p-8">
          <h3 className="font-semibold text-gray-900">できること</h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            {scope.do.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </article>

        {/* できないこと */}
        <article className="rounded-2xl bg-white border border-black/5 shadow-sm p-6 md:p-8">
          <h3 className="font-semibold text-gray-900">できないこと（別見積）</h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            {scope.dont.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      {/* 対応技術 */}
      <div className="mt-8">
        <h3 className="sr-only">対応技術</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {scope.stacks.map((stack, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-gray-700 shadow-sm"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
