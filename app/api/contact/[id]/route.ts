import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { requireAuth } from '@/lib/auth/middleware';

/**
 * 個別お問い合わせデータのCRUD API
 *
 * セキュリティ:
 * - 全エンドポイントで認証が必須
 * - 管理者のみアクセス可能
 * - 個人情報を含むため厳重に保護
 */

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 認証チェック
  const authError = await requireAuth(request);
  if (authError) return authError;

  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { error: 'IDが指定されていません' },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from('contacts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'データの削除に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 認証チェック
  const authError = await requireAuth(request);
  if (authError) return authError;

  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { error: 'IDが指定されていません' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('contacts')
      .select('*')
      .eq('id', id)
      .single();

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
