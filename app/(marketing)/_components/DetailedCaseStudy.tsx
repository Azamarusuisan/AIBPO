"use client";
import { useState } from "react";
import UserAvatar from "./UserAvatar";

export default function DetailedCaseStudy() {
  const cases = [
    {
      industry: "小売業",
      businessType: "玩具販売",
      contractHours: "月4時間",
      title: "気軽に相談できる「窓口」としてご利用ください",
      challenge: "全国にファンがいる玩具店を経営されているお客様から、ご相談をいただきました。店舗販売とオンライン販売の両方を行っているため、契約しているサーバー会社やEC-CUBEから度々送られてくるメールへの対応にお困りのご様子でした。特に、軽微な改修が発生するため、その都度システム開発会社に相談するのは手間がかかり、常に気軽に相談できる窓口が必要だとお感じになっていました。",
      support: [
        {
          phase: "状況の把握・調査",
          description: "サーバー会社やEC-CUBEからの連絡内容を整理し、どのような対応が必要かをリスト化しました。また、軽微な改修やシステムの調整が多く発生する点も確認しました。"
        },
        {
          phase: "作業",
          tasks: [
            "連絡対応サポート",
            "EC-CUBEアプリケーション保守",
            "軽微な改修と調整"
          ]
        },
        {
          phase: "報告",
          description: "作業後はどのように改修したか報告いたします。報告書はテキストでお送りし、社内で共有いただいています。"
        }
      ],
      testimonial: "サーバー会社やEC-CUBEからの連絡にどう対応すべきか悩むことが多かったのですが、こちらの定額エンジニアサービスを利用してからは、何かあった時にすぐ相談できるので、非常に心強いです。軽微な改修も迅速に行ってもらえ、大変助かっています。全国に顧客がいる当店にとって、安心して運営できる環境が整いました。",
      customerName: "山田 花子",
      customerRole: "代表取締役"
    },
    {
      industry: "製造業",
      businessType: "部品製造",
      contractHours: "月8時間",
      title: "生産管理システムの保守・改善をお任せ",
      challenge: "従業員50名規模の部品製造企業様から、既存の生産管理システムの保守・改善についてご相談をいただきました。現場からの改善要望が溜まっているものの、システムベンダーへの依頼は都度見積もりが必要で、小規模な改修を依頼しづらい状況でした。",
      support: [
        {
          phase: "状況の把握・調査",
          description: "現行システムの仕様を確認し、現場からの改善要望をヒアリング。優先順位をつけて対応計画を立案しました。"
        },
        {
          phase: "作業",
          tasks: [
            "生産管理システムの軽微な改修",
            "帳票フォーマットの調整",
            "データエクスポート機能の追加",
            "月次レポートの自動化"
          ]
        },
        {
          phase: "報告",
          description: "毎月の作業内容をレポートにまとめ、次月の改善提案も含めてご報告しています。"
        }
      ],
      testimonial: "これまで小規模な改修は後回しになっていましたが、定額で気軽に依頼できるようになり、現場の不満が大幅に解消されました。月次の定例ミーティングで次の改善を相談できるのも良いですね。",
      customerName: "佐藤 健一",
      customerRole: "工場長"
    },
    {
      industry: "貿易業",
      businessType: "輸出入代行",
      contractHours: "月12時間",
      title: "基幹システムとWebサイトの一元管理",
      challenge: "輸出入代行を行う企業様から、基幹システムとWebサイトの管理について相談をいただきました。それぞれ別の会社に依頼していたため、連携がうまくいかず、二重入力が発生していました。",
      support: [
        {
          phase: "状況の把握・調査",
          description: "既存の基幹システムとWebサイトの仕様を確認し、API連携の可能性を調査しました。"
        },
        {
          phase: "作業",
          tasks: [
            "基幹システムとWebサイトのAPI連携",
            "顧客情報の自動同期",
            "在庫情報のリアルタイム表示",
            "Webサイトの保守・更新"
          ]
        },
        {
          phase: "報告",
          description: "連携状況のモニタリングレポートを定期的に提出し、エラー発生時は即座に対応しています。"
        }
      ],
      testimonial: "二重入力がなくなり、業務効率が劇的に向上しました。一つの窓口で両方の相談ができるので、コミュニケーションコストも削減できました。",
      customerName: "鈴木 美咲",
      customerRole: "システム担当"
    }
  ];

  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* 見出し */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            幅広い業種でご利用いただいています
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            活用事例
          </p>
        </div>

        {/* 業種タブ */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {cases.map((c, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCase === index
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-primary"
              }`}
            >
              {c.industry}
            </button>
          ))}
        </div>

        {/* 事例詳細 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-primary/20">
          {/* ヘッダー */}
          <div className="flex flex-wrap items-center justify-between mb-6 pb-6 border-b border-gray-200">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {cases[activeCase].industry}
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                  {cases[activeCase].contractHours}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {cases[activeCase].title}
              </h3>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-sm text-gray-500">業界</div>
              <div className="text-lg font-bold text-gray-900">
                {cases[activeCase].businessType}
              </div>
            </div>
          </div>

          {/* 課題 */}
          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              課題
            </h4>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
              {cases[activeCase].challenge}
            </p>
          </div>

          {/* サポート内容 */}
          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              定額エンジニアサービスのサポート
            </h4>
            <div className="space-y-4">
              {cases[activeCase].support.map((s, i) => (
                <div key={i} className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <h5 className="font-bold text-gray-900">{s.phase}</h5>
                  </div>
                  {s.description && (
                    <p className="text-sm text-gray-700 leading-relaxed ml-8">
                      {s.description}
                    </p>
                  )}
                  {s.tasks && (
                    <ul className="ml-8 mt-2 space-y-1">
                      {s.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {task}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* お客様の声 */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 border-2 border-accent/30">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              お客様の声
            </h4>
            <div className="mb-4">
              <UserAvatar
                name={cases[activeCase].customerName}
                role={cases[activeCase].customerRole}
                size="lg"
                colorScheme="green"
              />
            </div>
            <blockquote className="text-sm md:text-base text-gray-700 leading-relaxed italic pl-4 border-l-4 border-accent">
              「{cases[activeCase].testimonial}」
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
