import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function GET() {
  try {
    // 全件取得
    const { data: contacts, error } = await supabaseAdmin
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: 'データの取得に失敗しました', details: error.message },
        { status: 500 }
      );
    }

    // 統計情報を計算
    const stats = calculateStats(contacts || []);

    return NextResponse.json({ stats }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}

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

function calculateStats(contacts: Contact[]) {
  // 総数
  const total = contacts.length;

  // プラン別集計
  const planStats = contacts.reduce((acc, contact) => {
    acc[contact.selected_plan] = (acc[contact.selected_plan] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 企業規模別集計
  const companySizeStats = contacts.reduce((acc, contact) => {
    acc[contact.company_size] = (acc[contact.company_size] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 決裁権限別集計
  const authorityStats = contacts.reduce((acc, contact) => {
    acc[contact.authority] = (acc[contact.authority] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 日別集計（最近30日）
  const dailyStats = getDailyStats(contacts, 30);

  // 週別集計（最近12週）
  const weeklyStats = getWeeklyStats(contacts, 12);

  // 月別集計（最近12ヶ月）
  const monthlyStats = getMonthlyStats(contacts, 12);

  // 平均レスポンス時間（ダミー - 実装時に計算）
  const avgResponseTime = '24時間以内';

  // 最新のお問い合わせ5件
  const recentContacts = contacts.slice(0, 5).map(contact => ({
    id: contact.id,
    company_name: contact.company_name,
    name: contact.name,
    selected_plan: contact.selected_plan,
    created_at: contact.created_at
  }));

  return {
    total,
    planStats,
    companySizeStats,
    authorityStats,
    dailyStats,
    weeklyStats,
    monthlyStats,
    avgResponseTime,
    recentContacts
  };
}

function getDailyStats(contacts: Contact[], days: number) {
  const result: Record<string, number> = {};
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];
    result[dateKey] = 0;
  }

  contacts.forEach(contact => {
    const dateKey = contact.created_at.split('T')[0];
    if (dateKey in result) {
      result[dateKey]++;
    }
  });

  return Object.entries(result)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, count]) => ({ date, count }));
}

function getWeeklyStats(contacts: Contact[], weeks: number) {
  const result: Record<string, number> = {};
  const today = new Date();

  for (let i = 0; i < weeks; i++) {
    const weekStart = new Date(today);
    weekStart.setDate(weekStart.getDate() - (weekStart.getDay() + 7 * i));
    const weekKey = weekStart.toISOString().split('T')[0];
    result[weekKey] = 0;
  }

  contacts.forEach(contact => {
    const date = new Date(contact.created_at);
    const weekStart = new Date(date);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    const weekKey = weekStart.toISOString().split('T')[0];

    if (weekKey in result) {
      result[weekKey]++;
    }
  });

  return Object.entries(result)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([week, count]) => ({ week, count }));
}

function getMonthlyStats(contacts: Contact[], months: number) {
  const result: Record<string, number> = {};
  const today = new Date();

  for (let i = 0; i < months; i++) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    result[monthKey] = 0;
  }

  contacts.forEach(contact => {
    const date = new Date(contact.created_at);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

    if (monthKey in result) {
      result[monthKey]++;
    }
  });

  return Object.entries(result)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([month, count]) => ({ month, count }));
}
