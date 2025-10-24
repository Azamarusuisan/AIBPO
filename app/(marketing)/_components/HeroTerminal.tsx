"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const LINES = [
  "課題を送信すると、AI×エンジニアが即座に受付。必要なタイミングでスポット対応を開始します。",
  "自動チェックが並列で実行中：再現確認・Lint検証・型チェックを同時に処理しています。",
  "AI が変更を生成し、自動でテストコードも作成。品質を担保しながら開発を加速します。",
  "元 PM による最終レビューを実施。アーキテクチャ判断と実装の難所を人が確認します。",
  "完成した変更をそのまま適用可能な形でお返しします。すぐに本番環境へ反映できます。",
] as const;

// タイミング（お好みで調整）
const SPEED = 55;           // 1文字あたり(ms)
const HOLD_AFTER = 1500;    // 全文表示後のホールド(ms)
const ERASE_SPEED = 20;     // 消すときの1文字(ms)
const GAP_BETWEEN = 500;    // 次文言までの間隔(ms)

export default function HeroTerminal() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0); // 現在の文言インデックス
  const phase = useRef<"type"|"hold"|"erase"|"gap">("type");
  const current = useMemo(() => LINES[idx], [idx]);

  useEffect(() => {
    let i = 0;
    let id: any;

    const type = () => {
      id = setInterval(() => {
        i++;
        setText(current.slice(0, i));
        if (i >= current.length) {
          clearInterval(id);
          phase.current = "hold";
          id = setTimeout(() => {
            phase.current = "erase";
            erase();
          }, HOLD_AFTER);
        }
      }, SPEED);
    };

    const erase = () => {
      id = setInterval(() => {
        i--;
        setText(current.slice(0, i));
        if (i <= 0) {
          clearInterval(id);
          phase.current = "gap";
          id = setTimeout(() => {
            phase.current = "type";
            setIdx((p) => (p + 1) % LINES.length);
          }, GAP_BETWEEN);
        }
      }, ERASE_SPEED);
    };

    type();
    return () => clearInterval(id);
  }, [current]);

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
        <span className="h-3 w-3 rounded-full bg-green-400/90" />
        <span className="ml-3 text-xs text-white/60">terminal</span>
      </div>

      {/* 本文（フレームは固定。中身だけ変化） */}
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
