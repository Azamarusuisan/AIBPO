"use client";
import { useEffect, useState } from "react";

const LINES = [
  "課題を送信 → AI×エンジニアが即座に受付",
  "自動チェック実行中：再現確認・Lint・型チェック",
  "AIが変更を生成、自動でテストコードも作成",
  "元PMによる最終レビュー → 品質確認完了",
  "完成した変更を返却 → すぐに本番適用可能",
] as const;

const SPEED = 40;           // 1文字あたり(ms)
const HOLD_AFTER = 1800;    // 全文表示後のホールド(ms)
const ERASE_SPEED = 15;     // 消すときの1文字(ms)
const GAP_BETWEEN = 300;    // 次文言までの間隔(ms)

export default function HeroTerminal() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentLine = LINES[lineIndex];
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      // タイピング中
      const typeChar = () => {
        if (charIndex <= currentLine.length) {
          setText(currentLine.slice(0, charIndex));
          charIndex++;
          timeoutId = setTimeout(typeChar, SPEED);
        } else {
          // タイピング完了、ホールド開始
          timeoutId = setTimeout(() => {
            setIsTyping(false);
          }, HOLD_AFTER);
        }
      };
      typeChar();
    } else {
      // 消去中
      charIndex = currentLine.length;
      const eraseChar = () => {
        if (charIndex >= 0) {
          setText(currentLine.slice(0, charIndex));
          charIndex--;
          timeoutId = setTimeout(eraseChar, ERASE_SPEED);
        } else {
          // 消去完了、次の行へ
          timeoutId = setTimeout(() => {
            setLineIndex((prev) => (prev + 1) % LINES.length);
            setIsTyping(true);
          }, GAP_BETWEEN);
        }
      };
      eraseChar();
    }

    return () => clearTimeout(timeoutId);
  }, [lineIndex, isTyping]);

  return (
    <div
      className="
        relative rounded-2xl bg-black/80 text-white shadow-2xl ring-1 ring-white/10
        w-[min(520px,88vw)] h-[180px] sm:h-[200px] overflow-hidden
      "
      aria-label="terminal"
    >
      {/* タイトルバー */}
      <div className="h-9 flex items-center gap-2 px-3 border-b border-white/10">
        <span className="h-3 w-3 rounded-full bg-red-400/90" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
        <span className="h-3 w-3 rounded-full bg-gray-400/90" />
        <span className="ml-3 text-xs text-white/60">terminal</span>
      </div>

      {/* 本文 */}
      <pre
        className="
          text-[14px] leading-relaxed
          p-4 sm:p-5 whitespace-pre-wrap
          [mask-image:linear-gradient(to_bottom,white_85%,transparent)]
          h-[calc(100%-36px)]
        "
        style={{ fontFamily: "Arial, sans-serif", color: "#ffffff" }}
      >
        <span style={{ color: "#ffffff" }}>{text}</span>
        <span className="ml-1 inline-block h-4 w-[8px] translate-y-[2px] animate-pulse" style={{ backgroundColor: "#ffffff" }} />
      </pre>
    </div>
  );
}
