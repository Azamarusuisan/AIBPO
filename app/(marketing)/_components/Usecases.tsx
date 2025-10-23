import { usecases } from "../_data/bpo";

export default function Usecases() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
          ユースケース
        </h2>
        <ul className="grid sm:grid-cols-2 gap-2 list-disc pl-5 sm:pl-6 mt-3 sm:mt-4 text-sm sm:text-base">
          {usecases.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
