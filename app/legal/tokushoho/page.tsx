import Header from "../../(marketing)/_components/Header";
import Footer from "../../(marketing)/_components/Footer";

export const metadata = {
  title: "特定商取引法に基づく表記 | スポットエンジニア（仮）",
  description: "特定商取引法に基づく事業者情報、販売価格、支払方法、返品・キャンセルポリシーについて。",
};

export default function TokushohoPage() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <main className="min-h-screen">
        <section className="pt-12 md:pt-16 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">特定商取引法に基づく表記</h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              最終更新日：2025年10月27日
            </p>

            <div className="space-y-8 text-gray-700">
              {/* 事業者情報 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">事業者情報</h2>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-gray-900 min-w-[120px]">事業者名</dt>
                    <dd>株式会社ZETTAI</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-gray-900 min-w-[120px]">代表者名</dt>
                    <dd>代表取締役 小潟一翔</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-gray-900 min-w-[120px]">所在地</dt>
                    <dd>〒106-0045 東京都港区麻布十番1-5-10 第2石原ビル 別館 2階</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-gray-900 min-w-[120px]">電話番号</dt>
                    <dd>準備中（受付時間：平日9:00〜18:00）</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-gray-900 min-w-[120px]">メールアドレス</dt>
                    <dd>team@zettai.co.jp</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-gray-900 min-w-[120px]">ウェブサイト</dt>
                    <dd>https://zettai.co.jp</dd>
                  </div>
                </div>
              </section>

              {/* 販売価格 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">販売価格</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    各プランの料金は以下の通りです。すべて税込価格で表示しています。
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">プラン名</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">月額料金（税込）</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">時間バンド</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm">Starter</td>
                          <td className="px-4 py-3 text-sm">¥140,000</td>
                          <td className="px-4 py-3 text-sm">20h/月</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm">Standard</td>
                          <td className="px-4 py-3 text-sm">¥240,000</td>
                          <td className="px-4 py-3 text-sm">40h/月</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm">Pro</td>
                          <td className="px-4 py-3 text-sm">¥480,000</td>
                          <td className="px-4 py-3 text-sm">80h/月</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm">Team</td>
                          <td className="px-4 py-3 text-sm">¥960,000</td>
                          <td className="px-4 py-3 text-sm">160h/月</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    ※ 超過時間は別途¥6,500〜7,000/h（税込）で対応可能です。<br />
                    ※ 価格は予告なく変更される場合があります。
                  </p>
                </div>
              </section>

              {/* 支払方法 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">支払方法</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span><strong>銀行振込（前払い）：</strong>請求書発行後、月末締め翌月末払い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span><strong>クレジットカード：</strong>VISA、Mastercard、JCB、American Express、Diners Club</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span><strong>請求書払い：</strong>法人のお客様向け、与信審査後に利用可能</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  ※ 銀行振込の場合、振込手数料はお客様負担となります。<br />
                  ※ 請求書払いをご希望の場合は、事前にお問い合わせください。
                </p>
              </section>

              {/* サービス提供時期 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">サービス提供時期</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">契約開始</h3>
                    <p className="leading-relaxed">
                      お申し込み後、入金確認またはクレジットカード決済完了後、3営業日以内にサービスを開始します。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">「完成した変更」の納品</h3>
                    <p className="leading-relaxed">
                      各「完成した変更」は、着手から通常1〜5営業日以内に納品いたします。
                      複雑な実装の場合は事前に納期をお伝えします。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">初回応答</h3>
                    <p className="leading-relaxed">
                      ご依頼内容の受領後、24時間以内（営業時間内）に初回応答いたします。
                      Proプラン以上では当日着手を保証します。
                    </p>
                  </div>
                </div>
              </section>

              {/* 返品・交換・キャンセル */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">返品・交換・キャンセル</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">月額プランの解約</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>解約希望月の前月末までにお申し出いただければ、翌月から解約可能です。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>解約月の日割り計算は行いません。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>既に支払済みの料金は返金いたしかねます。</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">納品物の修正対応</h3>
                    <p className="leading-relaxed">
                      納品した「完成した変更」が仕様と異なる場合、無償で修正対応いたします。
                      納品後7営業日以内にご連絡ください。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">返金ポリシー</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>サービスの性質上、原則として返金は受け付けておりません。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>当社の責めに帰すべき事由により契約不履行があった場合は、個別に対応いたします。</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">クーリングオフ</h3>
                    <p className="leading-relaxed">
                      本サービスは継続的役務提供契約に該当しますが、事業者間取引のため、
                      特定商取引法に基づくクーリングオフの対象外となります。
                    </p>
                  </div>
                </div>
              </section>

              {/* 免責事項 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">免責事項</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                    <span>
                      天災地変、戦争、暴動、労働争議、伝染病、法令の制定改廃、公権力の行使、
                      その他当社の責めに帰すことのできない事由によりサービス提供が困難な場合、
                      当社は責任を負いません。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                    <span>
                      お客様の環境、設定、運用に起因する問題については、
                      当社は責任を負いかねます。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                    <span>
                      納品した「完成した変更」をお客様が改変した後に発生した問題については、
                      当社は責任を負いません。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                    <span>
                      当社の故意または重過失による場合を除き、当社の損害賠償責任は、
                      直近3ヶ月間にお客様から受領した料金の総額を上限とします。
                    </span>
                  </li>
                </ul>
              </section>

              {/* その他 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">その他</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">契約期間</h3>
                    <p className="leading-relaxed">
                      月額プランは1ヶ月単位の自動更新です。
                      解約のお申し出がない限り、毎月自動的に更新されます。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">準拠法と管轄裁判所</h3>
                    <p className="leading-relaxed">
                      本契約は日本国法に準拠し、本契約に関する一切の紛争については、
                      東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">本表記の変更</h3>
                    <p className="leading-relaxed">
                      当社は、本表記の内容を予告なく変更することがあります。
                      変更後の内容は、本ページに掲載した時点で効力を生じるものとします。
                    </p>
                  </div>
                </div>
              </section>

              {/* お問い合わせ */}
              <section className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
                <p className="leading-relaxed mb-4">
                  特定商取引法に関するご質問は、お気軽にお問い合わせください。
                </p>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-lg text-white bg-primary hover:bg-primary-hover transition-colors font-semibold"
                >
                  お問い合わせフォームへ
                </a>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
