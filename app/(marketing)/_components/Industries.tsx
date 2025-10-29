"use client";
import { useRef } from "react";

// アイコンコンポーネント - より洗練されたデザイン
const TravelIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2.5 4-2.5 14 0 18M12 3c2.5 4 2.5 14 0 18" />
  </svg>
);

const RetailIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
  </svg>
);

const FinanceIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2l2-7 4 15 4-11 2 3h4" />
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
  </svg>
);

const InsuranceIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
);

const EducationIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l10 5 10-5" />
  </svg>
);

const MedicalIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
  </svg>
);

const WelfareIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 11h4M19 9v4" />
  </svg>
);

const RealEstateIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <rect x="3" y="10" width="18" height="11" rx="2" strokeWidth="1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21V10M12 21V10M17 21V10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 10l10-7 10 7" />
  </svg>
);

const TechIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
  </svg>
);

const HotelIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18" />
    <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="1.5" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
  </svg>
);

const RestaurantIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 2v7c0 1.1.9 2 2 2v11M7 2v7c0 1.1-.9 2-2 2M17 2v20M21 6v10a2 2 0 01-2 2h-2" />
  </svg>
);

const ApparelIcon = () => (
  <svg className="size-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4l4 4v13H4V8l4-4M8 4h8M7 12h10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4" />
  </svg>
);

export default function Industries() {
  const panelRef = useRef<HTMLDivElement>(null);

  const industries = [
    { name: "旅行", Icon: TravelIcon },
    { name: "小売", Icon: RetailIcon },
    { name: "金融", Icon: FinanceIcon },
    { name: "保険", Icon: InsuranceIcon },
    { name: "教育", Icon: EducationIcon },
    { name: "医療", Icon: MedicalIcon },
    { name: "福祉", Icon: WelfareIcon },
    { name: "不動産", Icon: RealEstateIcon },
    { name: "情報通信", Icon: TechIcon },
    { name: "宿泊", Icon: HotelIcon },
    { name: "飲食", Icon: RestaurantIcon },
    { name: "アパレル", Icon: ApparelIcon }
  ];

  return (
    <section className="relative pt-8 pb-1 md:pt-12 md:pb-6" id="industries">
      <div
        ref={panelRef}
        onPointerMove={(e) => {
          const el = panelRef.current!;
          const r = el.getBoundingClientRect();
          el.style.setProperty("--x", `${e.clientX - r.left}px`);
          el.style.setProperty("--y", `${e.clientY - r.top}px`);
        }}
        onPointerLeave={() => {
          const el = panelRef.current!;
          el.style.setProperty("--x", "50%");
          el.style.setProperty("--y", "0%");
        }}
        className="relative overflow-hidden bg-[var(--heroPanel)]"
      >
        {/* 動くハイライト */}
        <div className="pointer-events-none absolute inset-0 transition-[background] duration-300"
             style={{
               background:
                 "radial-gradient(600px 320px at var(--x,50%) var(--y,0%), rgba(37,99,235,.18), transparent 60%)",
             }} />
        {/* うっすらグリッド */}
        <div className="pointer-events-none absolute inset-0 opacity-[.08] [mask-image:radial-gradient(circle_at_50%_0%,white,transparent_70%)]"
             style={{
               backgroundImage:
                 "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
               backgroundSize: "24px 24px",
             }} />
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight text-white">
            対応業種
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.Icon;
              // モバイル（sm未満）では最初の6個のみ表示
              const isHiddenOnMobile = index >= 6;
              return (
                <button
                  key={industry.name}
                  type="button"
                  className={`group relative rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 text-left text-white/90 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition
                             hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                             motion-reduce:transform-none ${isHiddenOnMobile ? 'hidden sm:block' : ''}`}
                >
                  {/* グラデ枠＆発光 */}
                  <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-[var(--primary)]/40" />
                  <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition
                                    group-hover:opacity-100
                                    bg-[radial-gradient(40rem_20rem_at_50%_0%,rgba(37,99,235,.18),rgba(34,197,94,.10),transparent_70%)]" />
                  <div className="relative flex items-center gap-3">
                    <span className="grid place-content-center size-10 rounded-xl bg-white/10 ring-1 ring-white/10">
                      <Icon />
                    </span>
                    <span className="font-medium">{industry.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-center text-sm text-white/70">
            上記以外の業種もご相談ください
          </p>
        </div>
      </div>
    </section>
  );
}
