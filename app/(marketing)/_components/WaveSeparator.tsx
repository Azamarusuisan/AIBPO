export default function WaveSeparator({
  fill = "#0a223a",
  height = 64,
  className = "",
}: { fill?: string; height?: number; className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      {/* 被せ用 2px ライン（上の白/薄色面に1-2px重ねて隙間を確実に潰す） */}
      <div className="absolute top-0 left-0 h-[2px] w-full" style={{ background: fill }} />

      <svg
        viewBox="0 0 1440 80"
        width="100%"
        height={height}
        preserveAspectRatio="none"
        className="block absolute top-0 left-0 w-full"
        style={{ transform: "translateZ(0) scaleY(1.005)" }}
        shapeRendering="crispEdges"
      >
        <path
          d="M0,80 C240,10 480,10 720,80 C960,150 1200,150 1440,80 L1440,0 L0,0 Z"
          fill={fill}
          stroke="none"
          paintOrder="fill"
        />
      </svg>
    </div>
  );
}
