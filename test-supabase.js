// Supabase接続テスト
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// .env.localを読み込む
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    envVars[match[1]] = match[2];
  }
});

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envVars.SUPABASE_SERVICE_ROLE_KEY;

console.log('🔍 Supabase接続テスト開始...\n');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 環境変数が設定されていません');
  console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl);
  console.log('SUPABASE_SERVICE_ROLE_KEY:', supabaseKey ? '設定済み' : '未設定');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function testConnection() {
  try {
    // 1. テーブル存在確認
    console.log('📊 contactsテーブルをチェック中...');
    const { data, error, count } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('❌ エラー:', error.message);
      return false;
    }

    console.log('✅ contactsテーブルが存在します');
    console.log(`📝 現在のレコード数: ${count}件\n`);

    // 2. テストデータ挿入
    console.log('📝 テストデータを挿入中...');
    const testData = {
      company_name: 'テスト株式会社',
      company_size: '10-50名',
      name: 'テスト太郎',
      email: 'test@example.com',
      phone: '090-1234-5678',
      authority: '決裁権あり',
      content: 'Supabase接続テスト用のデータです',
      selected_plan: 'Standard',
      meeting1_date: '2025-11-01',
      meeting1_time: '14:00',
      meeting2_date: null,
      meeting2_time: null,
      meeting3_date: null,
      meeting3_time: null
    };

    const { data: insertedData, error: insertError } = await supabase
      .from('contacts')
      .insert([testData])
      .select();

    if (insertError) {
      console.error('❌ 挿入エラー:', insertError.message);
      return false;
    }

    console.log('✅ テストデータ挿入成功！');
    console.log('挿入されたID:', insertedData[0].id);

    // 3. データ読み取り
    console.log('\n📖 データ読み取り中...');
    const { data: contacts, error: selectError } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (selectError) {
      console.error('❌ 読み取りエラー:', selectError.message);
      return false;
    }

    console.log('✅ データ読み取り成功！');
    console.log('最新レコード:', JSON.stringify(contacts[0], null, 2));

    // 4. テストデータ削除
    console.log('\n🗑️  テストデータを削除中...');
    const { error: deleteError } = await supabase
      .from('contacts')
      .delete()
      .eq('id', insertedData[0].id);

    if (deleteError) {
      console.error('❌ 削除エラー:', deleteError.message);
      return false;
    }

    console.log('✅ テストデータ削除成功！');

    console.log('\n🎉 すべてのテストが完了しました！');
    console.log('✅ Supabase接続は正常です\n');

    return true;
  } catch (err) {
    console.error('❌ 予期しないエラー:', err);
    return false;
  }
}

testConnection().then(success => {
  process.exit(success ? 0 : 1);
});
