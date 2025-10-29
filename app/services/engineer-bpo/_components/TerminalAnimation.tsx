"use client";

import { useState, useEffect } from "react";

interface TerminalLine {
  type: "command" | "output" | "success" | "info";
  text: string;
  delay: number;
}

const terminalSequence: TerminalLine[] = [
  { type: "command", text: "$ npm run deploy", delay: 0 },
  { type: "output", text: "Building project...", delay: 800 },
  { type: "output", text: "✓ Compiled successfully", delay: 1500 },
  { type: "output", text: "Running tests...", delay: 2200 },
  { type: "success", text: "✓ All tests passed (12/12)", delay: 3000 },
  { type: "output", text: "Deploying to production...", delay: 3800 },
  { type: "success", text: "✓ Deployment complete", delay: 5000 },
  { type: "info", text: "https://your-app.com", delay: 5500 },
];

export default function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= terminalSequence.length) {
      // リセット（ループ）
      const resetTimer = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLineIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const currentLine = terminalSequence[currentLineIndex];
    const timer = setTimeout(() => {
      setVisibleLines((prev) => [...prev, currentLine]);
      setCurrentLineIndex((prev) => prev + 1);
    }, currentLine.delay);

    return () => clearTimeout(timer);
  }, [currentLineIndex]);

  return (
    <div className="bg-[#1e293b] rounded-xl p-6 font-mono text-sm overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-600">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-400 text-xs ml-2">terminal — bash</span>
      </div>

      {/* Terminal Content */}
      <div className="space-y-2 min-h-[240px]">
        {visibleLines.map((line, idx) => (
          <div
            key={idx}
            className={`animate-fadeIn ${
              line.type === "command"
                ? "text-cyan-400"
                : line.type === "success"
                ? "text-green-400"
                : line.type === "info"
                ? "text-blue-400 underline cursor-pointer"
                : "text-gray-300"
            }`}
          >
            {line.text}
          </div>
        ))}
        {currentLineIndex < terminalSequence.length && (
          <div className="inline-block w-2 h-4 bg-cyan-400 animate-blink" />
        )}
      </div>
    </div>
  );
}
