import Header from "../../(marketing)/_components/Header";
import Footer from "../../(marketing)/_components/Footer";

export const metadata = {
  title: "プライバシーポリシー | スポットエンジニア",
  description: "個人情報保護方針について。お客様の個人情報の取り扱いについて説明します。",
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <main className="min-h-screen">
        <section className="pt-12 md:pt-16 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">プライバシーポリシー</h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              最終更新日：2025年10月27日
            </p>

            <div className="space-y-8 text-gray-700">
              {/* はじめに */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">はじめに</h2>
                <p className="leading-relaxed">
                  スポットエンジニア（以下「当社」）は、お客様の個人情報保護の重要性を認識し、
                  個人情報の保護に関する法律（個人情報保護法）その他の関連法令を遵守し、
                  以下のプライバシーポリシーに基づき、適切に取り扱います。
                </p>
              </section>

              {/* 個人情報の定義 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 個人情報の定義</h2>
                <p className="leading-relaxed mb-4">
                  本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される、
                  生存する個人に関する情報であって、以下のいずれかに該当するものを指します：
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>氏名、生年月日、住所、電話番号、メールアドレス等により特定の個人を識別できる情報</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>他の情報と容易に照合することができ、それにより特定の個人を識別できる情報</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>個人識別符号（マイナンバー等）が含まれる情報</span>
                  </li>
                </ul>
              </section>

              {/* 個人情報の収集 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 個人情報の収集</h2>
                <p className="leading-relaxed mb-4">
                  当社は、以下の目的で個人情報を収集します：
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">収集する情報</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span><strong>お名前：</strong>サービス提供、契約書作成のため</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span><strong>メールアドレス：</strong>連絡、サポート、情報提供のため</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span><strong>電話番号：</strong>緊急時の連絡、サポートのため</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span><strong>会社名・部署名：</strong>契約書作成、請求書発行のため</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span><strong>住所：</strong>契約書郵送、請求書発行のため</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">収集方法</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>お問い合わせフォーム、契約書、メールでの直接提供</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>サービス利用時の自動収集（アクセスログ、Cookie等）</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 個人情報の利用目的 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span>サービスの提供、運営、改善</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span>お問い合わせへの対応、カスタマーサポート</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span>契約の締結、履行、管理</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span>請求書の発行、料金の請求・回収</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span>サービスに関する情報提供、マーケティング活動</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span>利用状況の分析、統計データの作成</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span>法令遵守、紛争解決</span>
                  </li>
                </ul>
              </section>

              {/* 個人情報の第三者提供 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 個人情報の第三者提供</h2>
                <p className="leading-relaxed mb-4">
                  当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>法令に基づく場合</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>人の生命、身体または財産の保護のために必要がある場合</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</span>
                  </li>
                </ul>
              </section>

              {/* 個人情報の管理 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 個人情報の安全管理</h2>
                <p className="leading-relaxed mb-4">
                  当社は、個人情報の漏洩、滅失、毀損を防止するため、以下の安全管理措置を講じています：
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span><strong>技術的安全管理措置：</strong>アクセス制御、暗号化、不正アクセス対策</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span><strong>組織的安全管理措置：</strong>個人情報保護責任者の設置、定期的な研修</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span><strong>人的安全管理措置：</strong>従業員への教育、秘密保持契約の締結</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span><strong>物理的安全管理措置：</strong>入退室管理、施錠管理</span>
                  </li>
                </ul>
              </section>

              {/* Cookieの使用 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookieの使用</h2>
                <p className="leading-relaxed mb-4">
                  当社のウェブサイトでは、以下の目的でCookieを使用しています：
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>サービスの利便性向上</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>アクセス解析、統計データ作成</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>広告配信の最適化</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にすることができますが、
                  一部のサービスが正常に機能しない可能性があります。
                </p>
              </section>

              {/* 個人情報の開示・訂正・削除 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 個人情報の開示・訂正・削除</h2>
                <p className="leading-relaxed mb-4">
                  お客様は、当社が保有する個人情報について、以下の権利を有します：
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span><strong>開示請求：</strong>保有個人データの開示を請求できます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span><strong>訂正請求：</strong>内容が事実でない場合、訂正を請求できます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span><strong>削除請求：</strong>利用目的を達成した場合など、削除を請求できます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span><strong>利用停止請求：</strong>目的外利用などの場合、利用停止を請求できます</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  これらの請求については、お問い合わせフォームよりご連絡ください。
                  本人確認の上、合理的な期間内に対応いたします。
                </p>
              </section>

              {/* プライバシーポリシーの変更 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. プライバシーポリシーの変更</h2>
                <p className="leading-relaxed">
                  当社は、法令の変更や事業内容の変更に伴い、本プライバシーポリシーを変更することがあります。
                  変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
                  重要な変更がある場合は、ウェブサイト上で通知いたします。
                </p>
              </section>

              {/* お問い合わせ窓口 */}
              <section className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. お問い合わせ窓口</h2>
                <p className="leading-relaxed mb-4">
                  個人情報の取り扱いに関するお問い合わせは、以下よりご連絡ください：
                </p>
                <div className="space-y-2 mb-4">
                  <p><strong>事業者名：</strong>スポットエンジニア</p>
                  <p><strong>個人情報保護管理者：</strong>代表</p>
                  <p><strong>連絡先：</strong>お問い合わせフォームよりご連絡ください</p>
                </div>
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
