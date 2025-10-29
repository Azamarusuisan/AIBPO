import { flow } from "../_data/bpo";

export default function Flow() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
          進め方(SLA)
        </h2>
        <ol className="grid gap-2 sm:gap-3 mt-3 sm:mt-4 list-decimal pl-5 sm:pl-6 text-sm sm:text-base">
          {flow.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
