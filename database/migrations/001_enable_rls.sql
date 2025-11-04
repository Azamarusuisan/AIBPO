-- Supabase Row Level Security (RLS) ポリシー設定
--
-- このSQLをSupabaseダッシュボードのSQL Editorで実行してください
--
-- RLSとは:
-- データベースレベルでアクセス制御を行う仕組み
-- アプリケーションコードに依存せず、データを保護できる
--
-- 設定手順:
-- 1. Supabaseダッシュボード → SQL Editor
-- 2. このファイルの内容をコピー＆ペースト
-- 3. "Run" をクリック

-- ==============================================
-- 1. contactsテーブルのRLSを有効化
-- ==============================================

-- 既存のRLSを無効化（再実行時のため）
ALTER TABLE contacts DISABLE ROW LEVEL SECURITY;

-- 既存のポリシーを削除（再実行時のため）
DROP POLICY IF EXISTS "誰でもINSERT可能" ON contacts;
DROP POLICY IF EXISTS "service_roleのみ全操作可能" ON contacts;

-- RLSを有効化
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- ==============================================
-- 2. ポリシー設定
-- ==============================================

-- ポリシー1: 誰でもお問い合わせを作成できる（INSERT）
-- 理由: 公開フォームからの投稿を許可
CREATE POLICY "誰でもINSERT可能"
  ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

-- ポリシー2: service_roleのみ全操作可能（SELECT, UPDATE, DELETE）
-- 理由: 管理画面からの操作はservice_roleキーを使用
CREATE POLICY "service_roleのみ全操作可能"
  ON contacts
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ==============================================
-- 3. 確認クエリ
-- ==============================================

-- RLSが有効化されているか確認
SELECT tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'contacts';

-- 設定されたポリシーを確認
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'contacts';

-- ==============================================
-- 注意事項
-- ==============================================
--
-- 1. anon（匿名）ユーザー:
--    - INSERTのみ可能（お問い合わせ投稿）
--    - SELECT/UPDATE/DELETEは不可
--
-- 2. service_role:
--    - 全操作可能
--    - サーバーサイドコードでのみ使用
--    - ブラウザには絶対に露出しないこと
--
-- 3. テスト方法:
--    - anon keyでSELECTを実行 → エラーになることを確認
--    - service_role keyでSELECTを実行 → 成功することを確認
