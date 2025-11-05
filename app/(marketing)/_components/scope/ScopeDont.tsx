import { Box, Server, Cpu, Shield, Briefcase, AlertCircle } from "lucide-react";
import Link from "next/link";

type Category = {
  icon: React.ElementType;
  title: string;
  summary: string;
  note?: string;
};

const categories: Category[] = [
  {
    icon: Box,
    title: "3D・ゲーム開発",
    summary: "Unity / Unreal Engine開発、3Dモデリング・アニメーション、WebGL / Three.js複雑な実装、ゲームロジック・物理エンジン",
    note: "要件次第で別見積り"
  },
  {
    icon: Server,
    title: "専門的インフラ作業",
    summary: "Kubernetesクラスタ構築・運用、大規模データベース移行（TB級）、ネットワーク設計・VPC構築、オンプレミスサーバー構築",
    note: "パートナー連携で対応可"
  },
  {
    icon: Cpu,
    title: "組込み・ハードウェア",
    summary: "IoTデバイスファームウェア開発、Arduino / Raspberry Pi低レイヤー制御、C/C++組込みシステム、リアルタイムOS開発",
    note: "対応範囲外"
  },
  {
    icon: Shield,
    title: "専門的セキュリティ",
    summary: "ペネトレーションテスト、脆弱性診断・セキュリティ監査、暗号化アルゴリズム実装、ブロックチェーン・スマートコントラクト",
    note: "専門パートナーにご紹介"
  },
  {
    icon: Briefcase,
    title: "大規模・長期案件",
    summary: "ゼロからの大規模プロダクト開発（要件定義〜リリース）、3ヶ月以上の専任常駐、デザイン制作（Figma / Photoshop）、マーケティング・SEO施策",
    note: "別途お見積り"
  },
];

export default function ScopeDont() {
  return (
    <section id="dont" className="py-20 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
            できないこと
          </h2>
          <p className="text-gray-600 text-lg">
            以下の領域は対応範囲外、または別途お見積りとなります
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 flex-shrink-0">
                  <cat.icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {cat.title}
                </h3>
              </div>
              <p className="text-sm text-slate-700 leading-7 mb-3">
                {cat.summary}
              </p>
              {cat.note && (
                <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                  {cat.note}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* パートナー連携の案内 */}
        <div className="mt-12 rounded-2xl bg-slate-100 ring-1 ring-slate-200 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                これらの領域について
              </h3>
              <p className="text-slate-700 leading-8 mb-4">
                上記の技術領域は当サービスの対応範囲外ですが、<strong>パートナー企業との連携により対応可能な場合があります</strong>。ご希望の場合は、お気軽にご相談ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
