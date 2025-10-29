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
  const [plansOpen, setPlansOpen] = useState(false);
  const [meeting1TimeOpen, setMeeting1TimeOpen] = useState(false);
  const [meeting2TimeOpen, setMeeting2TimeOpen] = useState(false);
  const [meeting3TimeOpen, setMeeting3TimeOpen] = useState(false);

  const companySizes = ["1-10名", "11-50名", "51-100名", "101-500名", "501名以上"];

  const plans = [
    {
      name: "Starter",
      capacity: "20h/月",
      price: "¥140,000/月",
      description: "小規模な改善・バグ修正に最適。必要なときだけスポット対応。",
      features: [
        "初回応答24h以内",
        "非同期コミュニケーション",
        "納品物をお返し",
        "超過時間: ¥6,500〜7,000/h"
      ]
    },
    {
      name: "Standard",
      capacity: "40h/月",
      price: "¥275,000/月",
      badge: "おすすめ",
      description: "継続的な開発支援。週1回の同期レビューで品質担保。",
      features: [
        "初回応答24h以内",
        "週1回・30分の同期レビュー",
        "月次レポート(改善提案)",
        "完成した変更をお返し"
      ]
    },
    {
      name: "Pro",
      capacity: "80h/月",
      price: "¥520,000/月",
      description: "大規模プロジェクト・チーム開発向け。当日着手で即座に対応。",
      features: [
        "当日優先対応",
        "平日オンコール可",
        "週次レビュー",
        "優先キュー運用",
        "完成した変更をお返し"
      ]
    },
    {
      name: "Team",
      capacity: "160h/月",
      price: "¥980,000/月",
      description: "複数プロジェクト並行。専任PM配置でカスタム対応。",
      features: [
        "当日優先対応",
        "平日オンコール可",
        "専任PM配置",
        "カスタム対応",
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
          <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">送信完了しました</h3>
              <p className="text-sm text-gray-700">
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

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* 企業情報 */}
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-primary/20 order-3 md:order-3">
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
                <div className="border rounded-lg border-[var(--muted)]">
                  <button
                    type="button"
                    onClick={() => setCompanySizeOpen(!companySizeOpen)}
                    className="w-full p-3 text-sm flex items-center justify-between bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className={formData.companySize ? "text-gray-900" : "text-gray-400"}>
                      {formData.companySize || "選択してください"}
                    </span>
                    <svg className={`w-5 h-5 transition-transform ${companySizeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {companySizeOpen && (
                    <div className="border-t border-[var(--muted)]">
                      {companySizes.map((size, idx) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, companySize: size }));
                            setCompanySizeOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-primary/5 text-sm transition-colors ${idx !== companySizes.length - 1 ? 'border-b border-gray-100' : ''}`}
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
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-primary/20">
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
                <div className="border rounded-lg border-[var(--muted)]">
                  <button
                    type="button"
                    onClick={() => setAuthorityOpen(!authorityOpen)}
                    className="w-full p-3 text-sm flex items-center justify-between bg-white rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className={formData.authority ? "text-gray-900" : "text-gray-400"}>
                      {formData.authority || "選択してください"}
                    </span>
                    <svg className={`w-5 h-5 transition-transform flex-shrink-0 ${authorityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {authorityOpen && (
                    <div className="border-t border-[var(--muted)]">
                      {[
                        "予算承認・導入決定の最終決裁が可能です",
                        "一定金額内での承認権限があります",
                        "上位決裁者への推薦・提案が可能です",
                        "現在は情報収集・調査段階です"
                      ].map((option, idx) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, authority: option }));
                            setAuthorityOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-primary/5 text-sm transition-colors ${idx !== 3 ? 'border-b border-gray-100' : ''}`}
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
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-primary/20 order-4 md:order-4">
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
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-primary/20 order-1 md:order-1">
            <h3 className="text-lg font-bold mb-4 text-primary">希望のプラン *</h3>
            <div className="border rounded-lg border-[var(--muted)]">
              <button
                type="button"
                onClick={() => setPlansOpen(!plansOpen)}
                className="w-full p-3 text-sm flex items-center justify-between bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className={formData.selectedPlan ? "text-gray-900" : "text-gray-400"}>
                  {formData.selectedPlan || "プランを選択してください"}
                </span>
                <svg className={`w-5 h-5 transition-transform ${plansOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {plansOpen && (
                <div className="border-t border-[var(--muted)] max-h-96 overflow-y-auto">
                  {plans.map((plan, idx) => (
                    <button
                      key={plan.name}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, selectedPlan: plan.name }));
                        setPlansOpen(false);
                      }}
                      className={`w-full text-left p-4 hover:bg-primary/5 transition-colors ${idx !== plans.length - 1 ? 'border-b border-gray-100' : ''} ${
                        formData.selectedPlan === plan.name ? 'bg-primary/5' : ''
                      }`}
                    >
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
                        {plan.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-1">
                            <span className="text-primary">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, selectedPlan: "相談" }));
                      setPlansOpen(false);
                    }}
                    className={`w-full text-left p-4 hover:bg-primary/5 transition-colors ${
                      formData.selectedPlan === "相談" ? 'bg-primary/5' : ''
                    }`}
                  >
                    <p className="text-sm font-semibold">最適なプランを一緒に検討させていただきます</p>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* オンライン面談希望日時 */}
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-primary/20 order-2 md:order-2">
            <h3 className="text-lg font-bold mb-4 text-primary">オンライン面談希望日時</h3>
            <div className="space-y-4">
              {/* 第1希望 */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold mb-2">第1希望 *</label>
                  <input
                    type="date"
                    name="meeting1Date"
                    value={formData.meeting1Date}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">時間</label>
                  <div className="border rounded-lg border-[var(--muted)]">
                    <button
                      type="button"
                      onClick={() => setMeeting1TimeOpen(!meeting1TimeOpen)}
                      className="w-full p-3 text-sm flex items-center justify-between bg-white rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className={formData.meeting1Time ? "text-gray-900" : "text-gray-400"}>
                        {formData.meeting1Time || "時間を選択"}
                      </span>
                      <svg className={`w-5 h-5 transition-transform ${meeting1TimeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {meeting1TimeOpen && (
                      <div className="border-t border-[var(--muted)] max-h-48 overflow-y-auto">
                        {Array.from({ length: 9 }, (_, i) => i + 10).map((hour) => (
                          <button
                            key={hour}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, meeting1Time: `${hour}:00` }));
                              setMeeting1TimeOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/5 transition-colors ${
                              formData.meeting1Time === `${hour}:00` ? 'bg-primary/5 font-semibold' : ''
                            }`}
                          >
                            {hour}:00
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 第2希望 */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold mb-2">第2希望</label>
                  <input
                    type="date"
                    name="meeting2Date"
                    value={formData.meeting2Date}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">時間</label>
                  <div className="border rounded-lg border-[var(--muted)]">
                    <button
                      type="button"
                      onClick={() => setMeeting2TimeOpen(!meeting2TimeOpen)}
                      className="w-full p-3 text-sm flex items-center justify-between bg-white rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className={formData.meeting2Time ? "text-gray-900" : "text-gray-400"}>
                        {formData.meeting2Time || "時間を選択"}
                      </span>
                      <svg className={`w-5 h-5 transition-transform ${meeting2TimeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {meeting2TimeOpen && (
                      <div className="border-t border-[var(--muted)] max-h-48 overflow-y-auto">
                        {Array.from({ length: 9 }, (_, i) => i + 10).map((hour) => (
                          <button
                            key={hour}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, meeting2Time: `${hour}:00` }));
                              setMeeting2TimeOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/5 transition-colors ${
                              formData.meeting2Time === `${hour}:00` ? 'bg-primary/5 font-semibold' : ''
                            }`}
                          >
                            {hour}:00
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 第3希望 */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold mb-2">第3希望</label>
                  <input
                    type="date"
                    name="meeting3Date"
                    value={formData.meeting3Date}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 text-sm border-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">時間</label>
                  <div className="border rounded-lg border-[var(--muted)]">
                    <button
                      type="button"
                      onClick={() => setMeeting3TimeOpen(!meeting3TimeOpen)}
                      className="w-full p-3 text-sm flex items-center justify-between bg-white rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className={formData.meeting3Time ? "text-gray-900" : "text-gray-400"}>
                        {formData.meeting3Time || "時間を選択"}
                      </span>
                      <svg className={`w-5 h-5 transition-transform ${meeting3TimeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {meeting3TimeOpen && (
                      <div className="border-t border-[var(--muted)] max-h-48 overflow-y-auto">
                        {Array.from({ length: 9 }, (_, i) => i + 10).map((hour) => (
                          <button
                            key={hour}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, meeting3Time: `${hour}:00` }));
                              setMeeting3TimeOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/5 transition-colors ${
                              formData.meeting3Time === `${hour}:00` ? 'bg-primary/5 font-semibold' : ''
                            }`}
                          >
                            {hour}:00
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* プライバシーポリシー */}
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-primary/20 order-5 md:order-5">
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
            className="order-6 md:order-6 w-full bg-primary text-white font-bold py-5 rounded-xl hover:bg-primary-hover transition-colors text-lg min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
