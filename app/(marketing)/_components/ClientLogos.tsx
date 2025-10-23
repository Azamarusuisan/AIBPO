import React from "react";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
};

export default function ClientLogos({ logos = [] as Logo[] }) {
  if (!logos.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
        {logos.map((l) => (
          <div key={l.alt} className="relative mx-auto h-8 w-32">
            <Image
              src={l.src}
              alt={l.alt}
              fill
              sizes="128px"
              className="object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
