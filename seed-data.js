// テストデータ挿入スクリプト
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

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// テストデータ生成
const plans = ['Lite', 'Standard', 'Premium', 'Enterprise'];
const companySizes = ['1-10名', '10-50名', '50-100名', '100名以上'];
const authorities = ['決裁権あり', '稟議が必要', '情報収集段階'];
const companyNames = [
  'テック株式会社',
  'イノベーション合同会社',
  'デジタルソリューションズ',
  'クリエイティブワークス',
  'ビジネスハブ株式会社',
  'スマートシステムズ',
  'アドバンステクノロジー',
  'フューチャーデザイン',
  'グローバルIT',
  'エンタープライズサービス'
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomDate(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
  return date.toISOString();
}

async function seedData() {
  console.log('🌱 テストデータを挿入中...\n');

  const testData = [];

  // 90日分のランダムなデータを生成（30件）
  for (let i = 0; i < 30; i++) {
    const plan = getRandomItem(plans);
    testData.push({
      company_name: getRandomItem(companyNames),
      company_size: getRandomItem(companySizes),
      name: `担当者${i + 1}`,
      email: `contact${i + 1}@example.com`,
      phone: `090-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
      authority: getRandomItem(authorities),
      content: `お問い合わせ内容のサンプルテキストです。${plan}プランについて詳しく知りたいです。`,
      selected_plan: plan,
      meeting1_date: '2025-11-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'),
      meeting1_time: `${String(Math.floor(Math.random() * 9) + 9).padStart(2, '0')}:00`,
      meeting2_date: Math.random() > 0.3 ? '2025-11-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0') : null,
      meeting2_time: Math.random() > 0.3 ? `${String(Math.floor(Math.random() * 9) + 9).padStart(2, '0')}:00` : null,
      meeting3_date: Math.random() > 0.5 ? '2025-11-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0') : null,
      meeting3_time: Math.random() > 0.5 ? `${String(Math.floor(Math.random() * 9) + 9).padStart(2, '0')}:00` : null,
      created_at: getRandomDate(90)
    });
  }

  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert(testData)
      .select();

    if (error) {
      console.error('❌ エラー:', error.message);
      return false;
    }

    console.log(`✅ ${data.length}件のテストデータを挿入しました！\n`);

    // 統計情報を表示
    console.log('📊 挿入されたデータの統計:');
    console.log('  - Lite:', testData.filter(d => d.selected_plan === 'Lite').length, '件');
    console.log('  - Standard:', testData.filter(d => d.selected_plan === 'Standard').length, '件');
    console.log('  - Premium:', testData.filter(d => d.selected_plan === 'Premium').length, '件');
    console.log('  - Enterprise:', testData.filter(d => d.selected_plan === 'Enterprise').length, '件\n');

    console.log('🎉 データ挿入完了！');
    console.log('📍 以下のURLで確認できます:');
    console.log('   - お問い合わせ一覧: http://localhost:3000/admin/contacts');
    console.log('   - 統計ダッシュボード: http://localhost:3000/admin/stats\n');

    return true;
  } catch (err) {
    console.error('❌ 予期しないエラー:', err);
    return false;
  }
}

seedData().then(success => {
  process.exit(success ? 0 : 1);
});
