# データベース設定

## Supabase RLS（Row Level Security）の設定

### 概要

Row Level Security (RLS) は、PostgreSQLの機能で、データベースレベルでアクセス制御を行います。
アプリケーションコードのバグがあっても、データベース層で保護されます。

### 設定手順

1. **Supabaseダッシュボードにアクセス**
   - https://supabase.com/dashboard
   - プロジェクトを選択

2. **SQL Editorを開く**
   - 左メニューから「SQL Editor」をクリック
   - 「New query」をクリック

3. **マイグレーションファイルを実行**
   - `database/migrations/001_enable_rls.sql` の内容をコピー
   - SQL Editorにペースト
   - 「Run」ボタンをクリック

4. **確認**
   - エラーが出ないことを確認
   - 確認クエリで設定を検証

### RLSポリシーの内容

| テーブル | 操作 | 対象ロール | 説明 |
|---------|-----|-----------|------|
| contacts | INSERT | public (anon) | 誰でもお問い合わせを投稿可能 |
| contacts | SELECT | service_role | 管理者のみ閲覧可能 |
| contacts | UPDATE | service_role | 管理者のみ更新可能 |
| contacts | DELETE | service_role | 管理者のみ削除可能 |

### セキュリティのベストプラクティス

#### ✅ 良い例

```typescript
// サーバーサイドでservice_roleを使用
import { supabaseAdmin } from '@/lib/supabase/server';

export async function GET() {
  const { data } = await supabaseAdmin
    .from('contacts')
    .select('*'); // ✅ service_roleなので成功
  return data;
}
```

#### ❌ 悪い例

```typescript
// クライアントサイドでanon keyを使用
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(ANON_KEY);

const { data } = await supabase
  .from('contacts')
  .select('*'); // ❌ RLSによりブロックされる
```

### トラブルシューティング

#### エラー: "new row violates row-level security policy"

**原因**: RLSポリシーにより操作がブロックされた

**解決策**:
1. service_role keyを使用しているか確認
2. ポリシーが正しく設定されているか確認
3. Supabaseダッシュボードで直接確認

#### テストコマンド

```sql
-- anonロールでテスト（失敗するはず）
SET ROLE anon;
SELECT * FROM contacts; -- エラーになるべき
RESET ROLE;

-- service_roleでテスト（成功するはず）
SET ROLE service_role;
SELECT * FROM contacts; -- 成功するべき
RESET ROLE;
```

### 参考リンク

- [Supabase RLS公式ドキュメント](https://supabase.com/docs/guides/auth/row-level-security)
- [PostgreSQL RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
