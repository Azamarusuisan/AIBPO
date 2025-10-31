"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Contact = {
  id: number;
  company_name: string;
  company_size: string;
  name: string;
  email: string;
  phone: string | null;
  authority: string;
  content: string;
  selected_plan: string;
  meeting1_date: string;
  meeting1_time: string;
  meeting2_date: string | null;
  meeting2_time: string | null;
  meeting3_date: string | null;
  meeting3_time: string | null;
  created_at: string;
};

export default function ContactsAdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 認証チェック
    const auth = sessionStorage.getItem("admin_auth");
    if (auth !== "true") {
      router.push("/admin/login");
      return;
    }
    setIsAuthenticated(true);
    fetchContacts();
  }, [router]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contact');
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'データの取得に失敗しました');
      }

      setContacts(result.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isAuthenticated || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-red-200">
          <h2 className="text-xl font-bold text-red-600 mb-4">エラー</h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={fetchContacts}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">お問い合わせ管理</h1>
            <div className="flex items-center gap-3">
              <Link
                href="/admin/stats"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                統計
              </Link>
              <Link
                href="/admin/dev"
                className="px-4 py-2 bg-gray-800 text-green-400 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 border border-green-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Dev
              </Link>
              <button
                onClick={fetchContacts}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                更新
              </button>
            </div>
          </div>
          <p className="text-gray-600">
            全 <span className="font-bold text-primary">{contacts.length}</span> 件のお問い合わせ
          </p>
        </div>

        {contacts.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">お問い合わせがありません</h3>
            <p className="text-gray-500">まだお問い合わせが届いていません</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-primary/30 transition-all cursor-pointer"
                onClick={() => setSelectedContact(contact)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{contact.company_name}</h3>
                    <p className="text-sm text-gray-600">{contact.company_size}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {contact.selected_plan}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">担当者</p>
                    <p className="text-base font-semibold text-gray-900">{contact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">メール</p>
                    <p className="text-base text-gray-900">{contact.email}</p>
                  </div>
                  {contact.phone && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">電話番号</p>
                      <p className="text-base text-gray-900">{contact.phone}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-500 mb-1">決裁権限</p>
                    <p className="text-base text-gray-900">{contact.authority}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">相談内容</p>
                  <p className="text-base text-gray-700 bg-gray-50 p-3 rounded-lg">
                    {contact.content}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-2">面談希望日時</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="bg-green-50 p-2 rounded border border-green-200">
                      <p className="text-xs text-green-600 mb-1">第1希望</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {contact.meeting1_date} {contact.meeting1_time || ''}
                      </p>
                    </div>
                    {contact.meeting2_date && (
                      <div className="bg-blue-50 p-2 rounded border border-blue-200">
                        <p className="text-xs text-blue-600 mb-1">第2希望</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {contact.meeting2_date} {contact.meeting2_time || ''}
                        </p>
                      </div>
                    )}
                    {contact.meeting3_date && (
                      <div className="bg-purple-50 p-2 rounded border border-purple-200">
                        <p className="text-xs text-purple-600 mb-1">第3希望</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {contact.meeting3_date} {contact.meeting3_time || ''}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    受付日時: {formatDate(contact.created_at)}
                  </p>
                  <button className="text-primary hover:underline text-sm font-semibold">
                    詳細を見る →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* モーダル（詳細表示） */}
      {selectedContact && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedContact(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">お問い合わせ詳細</h2>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">会社名</p>
                  <p className="text-base font-semibold">{selectedContact.company_name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">企業規模</p>
                  <p className="text-base font-semibold">{selectedContact.company_size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">担当者名</p>
                  <p className="text-base font-semibold">{selectedContact.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">メール</p>
                  <p className="text-base">{selectedContact.email}</p>
                </div>
                {selectedContact.phone && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">電話番号</p>
                    <p className="text-base">{selectedContact.phone}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500 mb-1">決裁権限</p>
                  <p className="text-base">{selectedContact.authority}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500 mb-1">希望プラン</p>
                  <p className="text-base font-semibold text-primary">{selectedContact.selected_plan}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">相談内容</p>
                <p className="text-base bg-gray-50 p-4 rounded-lg whitespace-pre-wrap">{selectedContact.content}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">面談希望日時</p>
                <div className="space-y-2">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="text-sm text-green-600 mb-1">第1希望</p>
                    <p className="font-semibold">
                      {selectedContact.meeting1_date} {selectedContact.meeting1_time || ''}
                    </p>
                  </div>
                  {selectedContact.meeting2_date && (
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <p className="text-sm text-blue-600 mb-1">第2希望</p>
                      <p className="font-semibold">
                        {selectedContact.meeting2_date} {selectedContact.meeting2_time || ''}
                      </p>
                    </div>
                  )}
                  {selectedContact.meeting3_date && (
                    <div className="bg-purple-50 p-3 rounded border border-purple-200">
                      <p className="text-sm text-purple-600 mb-1">第3希望</p>
                      <p className="font-semibold">
                        {selectedContact.meeting3_date} {selectedContact.meeting3_time || ''}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500">
                  受付日時: {formatDate(selectedContact.created_at)}
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`mailto:${selectedContact.email}`}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors text-center"
              >
                メールを送信
              </a>
              <button
                onClick={() => setSelectedContact(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
