# Supabase セットアップ完了 ✅

BPOサイトのSupabase連携が完了しました。

## 📋 実装内容

### 1. データベース構造

**contactsテーブル**
- お問い合わせフォームのデータを保存
- フィールド: 会社名、企業規模、担当者名、メール、電話、決裁権限、相談内容、希望プラン、面談希望日時
- インデックス: created_at, email, company_name
- Row Level Security (RLS): 有効

### 2. API エンドポイント

#### `/api/contact` (既存 - 更新なし)
- **POST**: お問い合わせデータを保存
- **GET**: すべてのお問い合わせを取得

#### `/api/contact/stats` (新規作成)
- **GET**: お問い合わせの集計データを取得
  - 総数
  - プラン別集計
  - 企業規模別集計
  - 決裁権限別集計
  - 日別・週別・月別推移
  - 最新5件のお問い合わせ

### 3. 管理画面

#### `/admin/contacts`
- お問い合わせ一覧表示
- 詳細モーダル
- メール送信機能
- **新機能**: 統計ページへのナビゲーション追加

#### `/admin/stats` (新規作成)
- KPIカード (総数、今月、今週、平均対応時間)
- プラン別内訳 (プログレスバー)
- 企業規模別内訳 (プログレスバー)
- 決裁権限別内訳 (プログレスバー)
- 月別推移グラフ (棒グラフ)
- 最新お問い合わせテーブル

---

## 🚀 使い方

### 開発サーバーの起動

\`\`\`bash
npm run dev
\`\`\`

### アクセスURL

- **トップページ**: http://localhost:3000
- **お問い合わせ一覧**: http://localhost:3000/admin/contacts
- **統計ダッシュボード**: http://localhost:3000/admin/stats

---

## 🔧 環境変数

\`.env.local\` に以下が設定されています：

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://cpecyhdqspkcdorozlwo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[設定済み]
SUPABASE_SERVICE_ROLE_KEY=[設定済み]
\`\`\`

⚠️ **セキュリティ注意**: \`SUPABASE_SERVICE_ROLE_KEY\` は秘密鍵です。Gitにコミットしないでください。

---

## 📊 テストデータ

### テストデータの挿入

\`\`\`bash
node seed-data.js
\`\`\`

- 30件のランダムなお問い合わせデータを生成
- 過去90日間に分散して挿入
- プラン、企業規模、決裁権限がバランスよく分布

### テストデータの削除

Supabaseダッシュボードで以下のSQLを実行：

\`\`\`sql
DELETE FROM contacts;
\`\`\`

---

## 🧪 接続テスト

### Supabase接続テスト

\`\`\`bash
node test-supabase.js
\`\`\`

以下をテスト：
- テーブル存在確認
- データ挿入
- データ読み取り
- データ削除

すべて成功すれば接続OK！

---

## 📂 ファイル構成

\`\`\`
/lib/supabase
  - client.ts          # クライアント側Supabaseクライアント
  - server.ts          # サーバー側Supabaseクライアント (管理者権限)

/app/api/contact
  - route.ts           # お問い合わせCRUD API
  - stats/route.ts     # 集計API (新規)

/app/admin
  - contacts/page.tsx  # お問い合わせ一覧 (ナビゲーション追加)
  - stats/page.tsx     # 統計ダッシュボード (新規)

/supabase
  - schema.sql         # データベーススキーマ定義

test-supabase.js       # 接続テストスクリプト
seed-data.js           # テストデータ挿入スクリプト
\`\`\`

---

## 🔒 セキュリティ設定

### Row Level Security (RLS)

現在の設定：
- **SELECT**: すべてのユーザーが読み取り可能
- **INSERT**: すべてのユーザーが挿入可能

**本番環境では以下に変更推奨**：

\`\`\`sql
-- 既存のポリシーを削除
DROP POLICY "Enable read access for all users" ON contacts;
DROP POLICY "Enable insert access for all users" ON contacts;

-- 認証済みユーザーのみアクセス可能に変更
CREATE POLICY "Enable read for authenticated users only" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users only" ON contacts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
\`\`\`

### 管理画面の保護

現在、\`/admin/*\` ページは認証なしでアクセス可能です。

**本番環境では認証を追加してください**：
1. Supabase Auth を使用
2. Next.js Middleware で保護
3. 環境変数で管理者リストを管理

---

## 📈 今後の拡張案

### 1. リアルタイム更新
Supabase Realtime を使ってお問い合わせが来たら自動更新

\`\`\`typescript
const channel = supabase
  .channel('contacts')
  .on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'contacts' },
    (payload) => {
      console.log('新しいお問い合わせ:', payload.new)
      // UIを更新
    }
  )
  .subscribe()
\`\`\`

### 2. ステータス管理
お問い合わせのステータスを追加（未対応 / 対応中 / 完了）

\`\`\`sql
ALTER TABLE contacts ADD COLUMN status TEXT DEFAULT '未対応';
\`\`\`

### 3. メール通知
お問い合わせが来たら管理者にメール送信 (Resend使用)

### 4. エクスポート機能
CSVダウンロード機能を追加

### 5. 認証機能
管理画面にログイン機能を追加

---

## 🐛 トラブルシューティング

### 接続エラーが出る

1. \`.env.local\` の認証情報を確認
2. Supabaseプロジェクトが稼働中か確認
3. \`npm run dev\` を再起動

### データが表示されない

1. Supabaseダッシュボードでテーブルを確認
2. \`node seed-data.js\` でテストデータを挿入
3. ブラウザのコンソールでエラーを確認

### APIエラー

1. \`/api/contact/stats\` にアクセスして JSON を確認
2. \`lib/supabase/server.ts\` の認証情報を確認
3. Supabaseのログを確認

---

## 📚 参考リンク

- [Supabaseダッシュボード](https://supabase.com/dashboard/project/cpecyhdqspkcdorozlwo)
- [Supabase公式ドキュメント](https://supabase.com/docs)
- [Next.js + Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

---

## ✅ チェックリスト

- [x] Supabaseプロジェクト作成
- [x] 環境変数設定
- [x] データベーススキーマ適用
- [x] 接続テスト成功
- [x] お問い合わせCRUD API実装
- [x] 集計API実装
- [x] お問い合わせ一覧ページ
- [x] 統計ダッシュボードページ
- [x] テストデータ挿入
- [ ] 本番デプロイ前にセキュリティ設定を強化
- [ ] 管理画面に認証を追加

---

**作成日**: 2025年10月31日
**Supabaseプロジェクト**: bpo-site (cpecyhdqspkcdorozlwo)
