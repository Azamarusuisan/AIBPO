import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { resend, ADMIN_EMAIL, FROM_EMAIL } from '@/lib/email/resend';
import { getAdminNotificationHTML, getUserConfirmationHTML } from '@/lib/email/templates';
import { validateContactForm } from '@/lib/validations/contact';
import { rateLimit, getClientIdentifier } from '@/lib/rate-limit';

/**
 * お問い合わせAPI
 *
 * POST: 新規お問い合わせの作成（公開エンドポイント）
 *       - Rate Limiting: 1時間に5回まで
 *       - 入力バリデーション必須
 *
 * GET: お問い合わせ一覧の取得（認証必須）
 */

export async function POST(request: Request) {
  try {
    // Rate Limiting: スパム防止（1時間に5回まで）
    const clientId = getClientIdentifier(request);
    const rateLimitError = rateLimit(clientId, 5, 60 * 60 * 1000);
    if (rateLimitError) return rateLimitError;

    const body = await request.json();

    // バリデーション
    const validation = validateContactForm(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: '入力内容に誤りがあります',
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const validatedData = validation.data;

    // データをSupabaseに保存
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .insert([
        {
          company_name: validatedData.companyName,
          company_size: validatedData.companySize,
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          authority: validatedData.authority,
          content: validatedData.content,
          selected_plan: validatedData.selectedPlan,
          meeting1_date: validatedData.meeting1Date,
          meeting1_time: validatedData.meeting1Time,
          meeting2_date: validatedData.meeting2Date || null,
          meeting2_time: validatedData.meeting2Time || null,
          meeting3_date: validatedData.meeting3Date || null,
          meeting3_time: validatedData.meeting3Time || null,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'データの保存に失敗しました' },
        { status: 500 }
      );
    }

    // メール送信（エラーが出てもデータ保存は成功しているので続行）
    if (resend) {
      try {
        // 管理者への通知メール
        await resend.emails.send({
          from: FROM_EMAIL,
          to: ADMIN_EMAIL,
          subject: `【新規お問い合わせ】${body.companyName} 様（${body.selectedPlan}）`,
          html: getAdminNotificationHTML(body),
        });

        // ユーザーへの自動返信メール
        await resend.emails.send({
          from: FROM_EMAIL,
          to: body.email,
          subject: '【スポットエンジニア】お問い合わせありがとうございます',
          html: getUserConfirmationHTML(body),
        });

        console.log('Email notifications sent successfully');
      } catch (emailError) {
        console.error('Email sending failed (non-fatal):', emailError);
        // メール送信失敗はログに記録するが、エラーレスポンスは返さない
      }
    } else {
      console.warn('Resend not configured. Skipping email notifications.');
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

export async function GET(request: Request) {
  // 認証チェック（管理画面からの一覧取得は認証必須）
  const { requireAuth } = await import('@/lib/auth/middleware');
  const authError = await requireAuth(request);
  if (authError) return authError;

  try {
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'データの取得に失敗しました' },
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
