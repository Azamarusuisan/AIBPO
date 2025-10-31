"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Stats = {
  total: number;
  planStats: Record<string, number>;
  companySizeStats: Record<string, number>;
  authorityStats: Record<string, number>;
  dailyStats: { date: string; count: number }[];
  weeklyStats: { week: string; count: number }[];
  monthlyStats: { month: string; count: number }[];
  avgResponseTime: string;
  recentContacts: {
    id: number;
    company_name: string;
    name: string;
    selected_plan: string;
    created_at: string;
  }[];
};

export default function StatsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
    fetchStats();
  }, [router]);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/contact/stats');
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'データの取得に失敗しました');
      }

      setStats(result.stats);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">統計データを読み込み中...</p>
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
            onClick={fetchStats}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">統計ダッシュボード</h1>
              <p className="text-gray-600">お問い合わせデータの集計と分析</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/contacts"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                お問い合わせ一覧
              </Link>
              <Link
                href="/admin/dev"
                className="px-4 py-2 bg-gray-800 text-green-400 rounded-lg hover:bg-gray-700 transition-colors border border-green-500"
              >
                🛠️ Dev Console
              </Link>
              <button
                onClick={fetchStats}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                更新
              </button>
            </div>
          </div>
        </div>

        {/* KPIカード */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary">
            <p className="text-sm text-gray-600 mb-1">総お問い合わせ数</p>
            <p className="text-4xl font-bold text-primary">{stats.total}</p>
            <p className="text-xs text-gray-500 mt-2">全期間</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <p className="text-sm text-gray-600 mb-1">今月の件数</p>
            <p className="text-4xl font-bold text-green-600">
              {stats.monthlyStats[stats.monthlyStats.length - 1]?.count || 0}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {stats.monthlyStats[stats.monthlyStats.length - 1]?.month}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <p className="text-sm text-gray-600 mb-1">今週の件数</p>
            <p className="text-4xl font-bold text-blue-600">
              {stats.weeklyStats[stats.weeklyStats.length - 1]?.count || 0}
            </p>
            <p className="text-xs text-gray-500 mt-2">最新週</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <p className="text-sm text-gray-600 mb-1">平均対応時間</p>
            <p className="text-2xl font-bold text-purple-600">{stats.avgResponseTime}</p>
            <p className="text-xs text-gray-500 mt-2">目標: 24時間以内</p>
          </div>
        </div>

        {/* グラフエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* プラン別 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">プラン別内訳</h2>
            <div className="space-y-3">
              {Object.entries(stats.planStats).map(([plan, count]) => {
                const percentage = ((count / stats.total) * 100).toFixed(1);
                return (
                  <div key={plan}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-700">{plan}</span>
                      <span className="text-sm text-gray-600">{count}件 ({percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 企業規模別 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">企業規模別内訳</h2>
            <div className="space-y-3">
              {Object.entries(stats.companySizeStats).map(([size, count]) => {
                const percentage = ((count / stats.total) * 100).toFixed(1);
                return (
                  <div key={size}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-700">{size}</span>
                      <span className="text-sm text-gray-600">{count}件 ({percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 決裁権限別 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">決裁権限別内訳</h2>
            <div className="space-y-3">
              {Object.entries(stats.authorityStats).map(([authority, count]) => {
                const percentage = ((count / stats.total) * 100).toFixed(1);
                return (
                  <div key={authority}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-700">{authority}</span>
                      <span className="text-sm text-gray-600">{count}件 ({percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 月別推移 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">月別推移（直近12ヶ月）</h2>
            <div className="h-64 flex items-end justify-between gap-1">
              {stats.monthlyStats.slice(-12).map(({ month, count }) => {
                const maxCount = Math.max(...stats.monthlyStats.map(s => s.count), 1);
                const heightPercentage = (count / maxCount) * 100;
                return (
                  <div key={month} className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-purple-500 rounded-t transition-all hover:bg-purple-600 relative"
                         style={{ height: `${heightPercentage}%`, minHeight: count > 0 ? '20px' : '0' }}>
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                        {count}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 rotate-45 origin-left">{month.slice(5)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 最新お問い合わせ */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">最新のお問い合わせ</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">会社名</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">担当者</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">プラン</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">受付日時</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentContacts.map((contact) => (
                  <tr key={contact.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">#{contact.id}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-gray-900">{contact.company_name}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{contact.name}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {contact.selected_plan}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(contact.created_at).toLocaleString('ja-JP')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/admin/contacts"
              className="text-primary hover:underline font-semibold"
            >
              すべて見る →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
