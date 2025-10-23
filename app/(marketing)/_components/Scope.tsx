import { scope } from "../_data/bpo";

export default function Scope() {
  return (
    <section className="section" id="scope">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">対応範囲</h2>
        <div className="grid gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold mb-3 text-base sm:text-lg">できること</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                {scope.do.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold mb-3 text-base sm:text-lg">できないこと(別見積)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                {scope.dont.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold mb-3 text-base sm:text-lg">対応技術</h3>
            <div className="flex flex-wrap gap-2">
              {scope.stacks.map((s, i) => (
                <span
                  key={i}
                  className="badge text-xs sm:text-sm"
                  style={{ background: "var(--muted)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
