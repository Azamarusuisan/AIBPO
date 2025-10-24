"use client";
import { useState } from "react";

const COMPANY_EMAIL = "contact@spot-engineer.com"; // 変更可能

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: "",
    companySize: "",
    name: "",
    email: "",
    phone: "",
    authority: "",
    content: "",
    selectedPlan: "",
    meeting1Date: "",
    meeting1Time: "",
    meeting2Date: "",
    meeting2Time: "",
    meeting3Date: "",
    meeting3Time: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // アコーディオン開閉状態
  const [companySizeOpen, setCompanySizeOpen] = useState(false);
  const [authorityOpen, setAuthorityOpen] = useState(false);

  const companySizes = ["1-10名", "11-50名", "51-100名", "101-500名", "501名以上"];

  const plans = [
    {
      name: "Starter",
      capacity: "上限5件/月",
      price: "¥30,000/月",
      description: "小規模な改善・バグ修正に最適。必要なときだけスポット対応。",
      features: [
        "初回応答24h以内",
        "非同期コミュニケーション",
        "完成した変更をお返し",
        "追加10件=¥60,000（2ヶ月有効）"
      ]
    },
    {
      name: "Standard",
      capacity: "上限20件/月",
      price: "¥100,000/月",
      badge: "おすすめ",
      description: "継続的な開発支援。週1回の同期レビューで品質担保。",
      features: [
        "初回応答24h以内",
        "週1回・30分の同期レビュー",
        "優先同一担当努力",
        "完成した変更をお返し"
      ]
    },
    {
      name: "Pro",
      capacity: "上限60件/月",
      price: "¥280,000/月",
      description: "大規模プロジェクト・チーム開発向け。当日着手で即座に対応。",
      features: [
        "当日着手可能",
        "週2回・60分の同期レビュー",
        "専任担当配置",
        "アーキテクチャ相談",
        "完成した変更をお返し"
      ]
    }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!formData.companyName.trim()) {
      setErrorMessage("会社名を入力してください");
      return false;
    }
    if (!formData.companySize) {
      setErrorMessage("企業規模を選択してください");
      return false;
    }
    if (!formData.name.trim()) {
      setErrorMessage("お名前を入力してください");
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("有効なメールアドレスを入力してください");
      return false;
    }
    if (!formData.authority) {
      setErrorMessage("決裁権限を選択してください");
      return false;
    }
    if (!formData.content.trim()) {
      setErrorMessage("相談内容を入力してください");
      return false;
    }
    if (!formData.selectedPlan) {
      setErrorMessage("希望のプランを選択してください");
      return false;
    }
    if (!formData.meeting1Date) {
      setErrorMessage("第1希望の日付を入力してください");
      return false;
    }
    if (!formData.agree) {
      setErrorMessage("プライバシーポリシーに同意してください");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      // シミュレーション：2秒待機
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus("success");
      setFormData({
        companyName: "",
        companySize: "",
        name: "",
        email: "",
        phone: "",
        authority: "",
        content: "",
        selectedPlan: "",
        meeting1Date: "",
        meeting1Time: "",
        meeting2Date: "",
        meeting2Time: "",
        meeting3Date: "",
        meeting3Time: "",
        agree: false,
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("送信に失敗しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          無料相談・お見積もり
        </h2>
        <p className="text-[var(--text-2)] mt-2 text-sm sm:text-base mb-6">
          * は必須項目です
        </p>

        {/* 成功メッセージ */}
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold text-green-900 mb-1">送信完了しました</h3>
              <p className="text-sm text-green-700">
                24時間以内に担当者よりご連絡させていただきます。
              </p>
            </div>
          </div>
        )}

        {/* エラーメッセージ */}
        {status === "error" && errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold text-red-900 mb-1">エラー</h3>
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 企業情報 */}
          <div className="bg-white rounded-xl p-6 border border-primary/20">
            <h3 className="text-lg font-bold mb-4 text-primary">企業情報</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">会社名 *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                  className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">企業規模 *</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setCompanySizeOpen(!companySizeOpen)}
                    className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] flex items-center justify-between bg-white"
                  >
                    <span className={formData.companySize ? "text-gray-900" : "text-gray-400"}>
                      {formData.companySize || "選択してください"}
                    </span>
                    <svg className={`w-5 h-5 transition-transform ${companySizeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {companySizeOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                      {companySizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, companySize: size }));
                            setCompanySizeOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ご担当者情報 */}
          <div className="bg-white rounded-xl p-6 border border-primary/20">
            <h3 className="text-lg font-bold mb-4 text-primary">ご担当者情報</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">お名前 *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">メールアドレス *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@company.com"
                  className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">電話番号</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03-1234-5678"
                  className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">導入決定における貴方の権限をお選びください *</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setAuthorityOpen(!authorityOpen)}
                    className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] flex items-center justify-between bg-white text-left"
                  >
                    <span className={formData.authority ? "text-gray-900" : "text-gray-400"}>
                      {formData.authority || "選択してください"}
                    </span>
                    <svg className={`w-5 h-5 transition-transform flex-shrink-0 ${authorityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {authorityOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {[
                        "予算承認・導入決定の最終決裁が可能です",
                        "一定金額内での承認権限があります",
                        "上位決裁者への推薦・提案が可能です",
                        "現在は情報収集・調査段階です"
                      ].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, authority: option }));
                            setAuthorityOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm border-b border-gray-100 last:border-0"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 課題とニーズ */}
          <div className="bg-white rounded-xl p-6 border border-primary/20">
            <h3 className="text-lg font-bold mb-4 text-primary">課題とニーズ</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">相談内容 *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="現在の課題や実現したいことをご記入ください"
                  rows={5}
                  className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                />
              </div>
            </div>
          </div>

          {/* 希望のプラン */}
          <div className="bg-white rounded-xl p-6 border border-primary/20">
            <h3 className="text-lg font-bold mb-4 text-primary">希望のプラン *</h3>
            <div className="space-y-4">
              {plans.map((plan) => (
                <label
                  key={plan.name}
                  className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.selectedPlan === plan.name
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="selectedPlan"
                      value={plan.name}
                      checked={formData.selectedPlan === plan.name}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-primary focus:ring-primary"
                      required
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-base">{plan.name}</h4>
                        {plan.badge && (
                          <span className="text-xs bg-primary text-white px-2 py-1 rounded">{plan.badge}</span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-lg font-bold text-primary">{plan.price}</span>
                        <span className="text-sm text-gray-600">（{plan.capacity}）</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{plan.description}</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-primary">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </label>
              ))}
              <label className="block p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary/50">
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="selectedPlan"
                    value="相談"
                    checked={formData.selectedPlan === "相談"}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-primary focus:ring-primary"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">最適なプランを一緒に検討させていただきます</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* オンライン面談希望日時 */}
          <div className="bg-white rounded-xl p-6 border border-primary/20">
            <h3 className="text-lg font-bold mb-4 text-primary">オンライン面談希望日時</h3>
            <p className="text-sm text-[var(--text-2)] mb-4">
              面談時間は30分程度を予定しています。ZoomまたはTeamsで実施いたします。<br />
              最も都合の良い日時で調整させていただきます
            </p>
            <div className="space-y-4">
              {[
                { label: "第1希望", dateField: "meeting1Date", timeField: "meeting1Time", required: true },
                { label: "第2希望", dateField: "meeting2Date", timeField: "meeting2Time", required: false },
                { label: "第3希望", dateField: "meeting3Date", timeField: "meeting3Time", required: false },
              ].map((meeting) => (
                <div key={meeting.label} className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {meeting.label} {meeting.required && "*"}
                    </label>
                    <input
                      type="date"
                      name={meeting.dateField}
                      value={formData[meeting.dateField as keyof typeof formData] as string}
                      onChange={handleChange}
                      className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      required={meeting.required}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">時間</label>
                    <select
                      name={meeting.timeField}
                      value={formData[meeting.timeField as keyof typeof formData] as string}
                      onChange={handleChange}
                      className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    >
                      <option value="">時間を選択</option>
                      {Array.from({ length: 9 }, (_, i) => i + 10).map((hour) => (
                        <option key={hour} value={`${hour}:00`}>{hour}:00</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* プライバシーポリシー */}
          <div className="bg-white rounded-xl p-6 border border-primary/20">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                required
              />
              <span className="text-sm">
                <a href="/privacy" className="text-primary hover:underline" target="_blank">
                  プライバシーポリシー
                </a>
                に同意します *
              </span>
            </label>
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-hover transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                送信中...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                送信
              </>
            )}
          </button>

          <p className="text-center text-sm text-[var(--text-2)]">
            送信後、24時間以内に担当者よりご連絡いたします
          </p>
        </form>
      </div>
    </section>
  );
}
