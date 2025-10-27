import Header from "../../(marketing)/_components/Header";
import Footer from "../../(marketing)/_components/Footer";

export const metadata = {
  title: "NDA・秘密保持 | スポットエンジニア",
  description: "秘密保持契約（NDA）について。クライアント情報の厳格な管理と保護について説明します。",
};

export default function NDAPage() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <main className="min-h-screen">
        <section className="pt-12 md:pt-16 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">NDA・秘密保持</h1>
            <p className="text-[var(--text-2)] text-lg mb-8">
              最終更新日：2025年10月27日
            </p>

            <div className="space-y-8 text-gray-700">
              {/* はじめに */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">はじめに</h2>
                <p className="leading-relaxed">
                  スポットエンジニア（以下「当社」）は、クライアントの皆様からお預かりする情報の機密性を最重要課題として認識しています。
                  本ページでは、当社の秘密保持に関する方針と具体的な対策について説明します。
                </p>
              </section>

              {/* 秘密保持契約（NDA）について */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">秘密保持契約（NDA）について</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. NDA締結の標準化</h3>
                    <p className="leading-relaxed">
                      当社では、すべてのクライアント様との契約において、標準的に秘密保持契約（NDA）を締結いたします。
                      契約開始前に必ず締結し、お客様の機密情報を法的に保護します。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. 双方向NDA</h3>
                    <p className="leading-relaxed">
                      当社では双方向のNDA（相互秘密保持契約）を推奨しています。
                      これにより、クライアント様と当社の双方の機密情報が保護されます。
                      お客様のひな形をご利用いただくことも可能です。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. カスタムNDA対応</h3>
                    <p className="leading-relaxed">
                      金融機関、医療機関など、特に高度なセキュリティ要件が求められる業界のお客様には、
                      カスタムNDAの作成・締結にも対応いたします。お気軽にご相談ください。
                    </p>
                  </div>
                </div>
              </section>

              {/* 秘密情報の定義 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">秘密情報の定義</h2>
                <p className="leading-relaxed mb-4">
                  以下の情報を秘密情報として取り扱います：
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>ソースコード、設計書、仕様書、その他技術情報</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>顧客情報、取引先情報、従業員情報</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>ビジネスモデル、マーケティング戦略、経営情報</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>アクセス権限、パスワード、認証情報</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>その他、秘密である旨が明示された情報</span>
                  </li>
                </ul>
              </section>

              {/* 技術的セキュリティ対策 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">技術的セキュリティ対策</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. 閉域実行環境</h3>
                    <p className="leading-relaxed">
                      私有Runner/GPUを使用し、クライアントのコードは外部ネットワークに流出しない閉域環境で実行されます。
                      すべての処理は当社管理下のセキュアな環境内で完結します。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. アクセス制御</h3>
                    <p className="leading-relaxed">
                      最小権限の原則に基づき、必要最小限の担当者のみがプロジェクトにアクセスできます。
                      すべてのアクセスは監査ログに記録され、不正アクセスを検知・防止します。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. データ暗号化</h3>
                    <p className="leading-relaxed">
                      通信データは TLS 1.3 で暗号化。保存データは AES-256 で暗号化されます。
                      バックアップデータも同様に暗号化され、安全に保管されます。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. 定期的なセキュリティ監査</h3>
                    <p className="leading-relaxed">
                      第三者機関による定期的なセキュリティ監査を実施し、脆弱性の早期発見と対策を行います。
                    </p>
                  </div>
                </div>
              </section>

              {/* 組織的セキュリティ対策 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">組織的セキュリティ対策</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span><strong>従業員教育：</strong>全従業員に対して定期的なセキュリティ研修を実施</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span><strong>契約上の義務：</strong>全従業員・業務委託先と秘密保持契約を締結</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span><strong>物理的セキュリティ：</strong>オフィス入退室管理、監視カメラ設置</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span><strong>インシデント対応：</strong>万が一の情報漏洩に備えた対応手順を整備</span>
                  </li>
                </ul>
              </section>

              {/* 著作権・成果物の取り扱い */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">著作権・成果物の取り扱い</h2>
                <p className="leading-relaxed mb-4">
                  当社が作成した成果物の著作権は、原則としてクライアント様に帰属します。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>納品物の著作権はクライアント様に移転</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>クライアント様の事前承諾なく第三者に開示しません</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>プロジェクト終了後も秘密保持義務は継続</span>
                  </li>
                </ul>
              </section>

              {/* 情報の保持期間と廃棄 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">情報の保持期間と廃棄</h2>
                <p className="leading-relaxed mb-4">
                  クライアント様からお預かりした情報は、契約終了後、適切な方法で廃棄いたします。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span><strong>保持期間：</strong>契約終了後30日間（法令により保存が必要な場合を除く）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span><strong>廃棄方法：</strong>データは完全削除、物理媒体は物理的破壊</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span><strong>廃棄証明：</strong>ご要望に応じて廃棄証明書を発行</span>
                  </li>
                </ul>
              </section>

              {/* お問い合わせ */}
              <section className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
                <p className="leading-relaxed mb-4">
                  秘密保持に関するご質問、カスタムNDAのご相談は、お気軽にお問い合わせください。
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
