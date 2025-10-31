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
  meeting1_time: string | null;
  meeting2_date: string | null;
  meeting2_time: string | null;
  meeting3_date: string | null;
  meeting3_time: string | null;
  created_at: string;
};

type ViewMode = 'table' | 'json' | 'cards';

export default function DevPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
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
      setLoading(true);
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

  const deleteContact = async (id: number) => {
    if (!confirm(`ID: ${id} のデータを削除しますか？この操作は取り消せません。`)) {
      return;
    }

    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('削除に失敗しました');
      }

      alert('削除しました');
      fetchContacts();
      setDeleteConfirm(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : '削除エラー');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('クリップボードにコピーしました');
  };

  const filteredContacts = contacts.filter(contact => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      contact.company_name.toLowerCase().includes(query) ||
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      contact.content.toLowerCase().includes(query) ||
      contact.id.toString().includes(query)
    );
  });

  if (!isAuthenticated || loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-400 font-mono">Loading database...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-red-900/30 border-2 border-red-500 p-8 rounded-lg">
          <h2 className="text-xl font-bold text-red-400 mb-4">❌ Error</h2>
          <p className="text-gray-300 font-mono">{error}</p>
          <button
            onClick={fetchContacts}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* ヘッダー */}
        <div className="bg-gray-800 rounded-lg border border-green-500 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-green-400 font-mono mb-2">
                🛠️ Developer Console
              </h1>
              <p className="text-gray-400 font-mono text-sm">
                Database: <span className="text-green-400">contacts</span> |
                Records: <span className="text-green-400">{contacts.length}</span> |
                Filtered: <span className="text-green-400">{filteredContacts.length}</span>
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/contacts"
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors font-mono text-sm"
              >
                ← Contacts
              </Link>
              <Link
                href="/admin/stats"
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors font-mono text-sm"
              >
                📊 Stats
              </Link>
              <button
                onClick={fetchContacts}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-mono text-sm"
              >
                ♻️ Reload
              </button>
            </div>
          </div>

          {/* ツールバー */}
          <div className="flex flex-wrap items-center gap-3">
            {/* 検索 */}
            <input
              type="text"
              placeholder="🔍 Search (ID, company, name, email, content)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-[300px] px-4 py-2 bg-gray-900 border border-gray-700 rounded text-gray-100 font-mono text-sm focus:border-green-500 focus:outline-none"
            />

            {/* 表示モード切り替え */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                  viewMode === 'table'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                📋 Table
              </button>
              <button
                onClick={() => setViewMode('json')}
                className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                  viewMode === 'json'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                📄 JSON
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                  viewMode === 'cards'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                🃏 Cards
              </button>
            </div>

            {/* JSON全体コピー */}
            <button
              onClick={() => copyToClipboard(JSON.stringify(filteredContacts, null, 2))}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-mono text-sm"
            >
              📋 Copy All
            </button>
          </div>
        </div>

        {/* データなし */}
        {filteredContacts.length === 0 && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 text-center">
            <p className="text-2xl text-gray-500 font-mono">
              {searchQuery ? '🔍 No results found' : '📭 No data in database'}
            </p>
          </div>
        )}

        {/* テーブルビュー */}
        {viewMode === 'table' && filteredContacts.length > 0 && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-green-400">ID</th>
                  <th className="px-4 py-3 text-left text-green-400">company_name</th>
                  <th className="px-4 py-3 text-left text-green-400">company_size</th>
                  <th className="px-4 py-3 text-left text-green-400">name</th>
                  <th className="px-4 py-3 text-left text-green-400">email</th>
                  <th className="px-4 py-3 text-left text-green-400">phone</th>
                  <th className="px-4 py-3 text-left text-green-400">authority</th>
                  <th className="px-4 py-3 text-left text-green-400">content</th>
                  <th className="px-4 py-3 text-left text-green-400">selected_plan</th>
                  <th className="px-4 py-3 text-left text-green-400">meeting1_date</th>
                  <th className="px-4 py-3 text-left text-green-400">meeting1_time</th>
                  <th className="px-4 py-3 text-left text-green-400">meeting2_date</th>
                  <th className="px-4 py-3 text-left text-green-400">meeting2_time</th>
                  <th className="px-4 py-3 text-left text-green-400">meeting3_date</th>
                  <th className="px-4 py-3 text-left text-green-400">meeting3_time</th>
                  <th className="px-4 py-3 text-left text-green-400">created_at</th>
                  <th className="px-4 py-3 text-left text-green-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact) => (
                  <tr key={contact.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="px-4 py-3 text-yellow-400">{contact.id}</td>
                    <td className="px-4 py-3 text-blue-400">{contact.company_name}</td>
                    <td className="px-4 py-3 text-gray-300">{contact.company_size}</td>
                    <td className="px-4 py-3 text-gray-300">{contact.name}</td>
                    <td className="px-4 py-3 text-cyan-400">{contact.email}</td>
                    <td className="px-4 py-3 text-gray-400">{contact.phone || 'null'}</td>
                    <td className="px-4 py-3 text-gray-300">{contact.authority}</td>
                    <td className="px-4 py-3 text-gray-300 max-w-xs truncate">{contact.content}</td>
                    <td className="px-4 py-3 text-purple-400">{contact.selected_plan}</td>
                    <td className="px-4 py-3 text-gray-300">{contact.meeting1_date}</td>
                    <td className="px-4 py-3 text-gray-400">{contact.meeting1_time || 'null'}</td>
                    <td className="px-4 py-3 text-gray-400">{contact.meeting2_date || 'null'}</td>
                    <td className="px-4 py-3 text-gray-400">{contact.meeting2_time || 'null'}</td>
                    <td className="px-4 py-3 text-gray-400">{contact.meeting3_date || 'null'}</td>
                    <td className="px-4 py-3 text-gray-400">{contact.meeting3_time || 'null'}</td>
                    <td className="px-4 py-3 text-green-400">{new Date(contact.created_at).toISOString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedContact(contact)}
                          className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
                        >
                          View
                        </button>
                        <button
                          onClick={() => copyToClipboard(JSON.stringify(contact, null, 2))}
                          className="px-2 py-1 bg-gray-600 text-white rounded text-xs hover:bg-gray-700"
                        >
                          Copy
                        </button>
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* JSONビュー */}
        {viewMode === 'json' && filteredContacts.length > 0 && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">
              {JSON.stringify(filteredContacts, null, 2)}
            </pre>
          </div>
        )}

        {/* カードビュー */}
        {viewMode === 'cards' && filteredContacts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-yellow-400 font-mono text-lg font-bold">ID: {contact.id}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedContact(contact)}
                      className="text-blue-400 hover:text-blue-300"
                      title="View JSON"
                    >
                      📄
                    </button>
                    <button
                      onClick={() => copyToClipboard(JSON.stringify(contact, null, 2))}
                      className="text-gray-400 hover:text-gray-300"
                      title="Copy JSON"
                    >
                      📋
                    </button>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="text-red-400 hover:text-red-300"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                <div className="space-y-2 text-sm font-mono">
                  <div>
                    <span className="text-gray-500">company_name:</span>{' '}
                    <span className="text-blue-400">{contact.company_name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">name:</span>{' '}
                    <span className="text-gray-300">{contact.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">email:</span>{' '}
                    <span className="text-cyan-400">{contact.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">plan:</span>{' '}
                    <span className="text-purple-400">{contact.selected_plan}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">created_at:</span>{' '}
                    <span className="text-green-400">{new Date(contact.created_at).toLocaleString('ja-JP')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* JSONモーダル */}
        {selectedContact && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedContact(null)}
          >
            <div
              className="bg-gray-800 border-2 border-green-500 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-green-400 font-mono">
                  Record ID: {selectedContact.id}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(selectedContact, null, 2))}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-mono text-sm"
                  >
                    📋 Copy JSON
                  </button>
                  <button
                    onClick={() => setSelectedContact(null)}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 font-mono text-sm"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>

              <pre className="bg-gray-900 border border-gray-700 rounded p-4 text-sm text-green-400 font-mono overflow-x-auto">
                {JSON.stringify(selectedContact, null, 2)}
              </pre>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    deleteContact(selectedContact.id);
                    setSelectedContact(null);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-mono text-sm"
                >
                  🗑️ Delete Record
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
