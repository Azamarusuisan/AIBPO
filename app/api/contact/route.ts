import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // データをSupabaseに保存
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .insert([
        {
          company_name: body.companyName,
          company_size: body.companySize,
          name: body.name,
          email: body.email,
          phone: body.phone,
          authority: body.authority,
          content: body.content,
          selected_plan: body.selectedPlan,
          meeting1_date: body.meeting1Date,
          meeting1_time: body.meeting1Time,
          meeting2_date: body.meeting2Date || null,
          meeting2_time: body.meeting2Time || null,
          meeting3_date: body.meeting3Date || null,
          meeting3_time: body.meeting3Time || null,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'データの保存に失敗しました', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: 'データの取得に失敗しました', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
