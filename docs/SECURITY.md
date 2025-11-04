# セキュリティガイド

このドキュメントでは、プロジェクトのセキュリティ実装と運用ガイドラインを説明します。

## 📋 目次

1. [実装済みセキュリティ対策](#実装済みセキュリティ対策)
2. [環境変数の管理](#環境変数の管理)
3. [API認証](#api認証)
4. [Rate Limiting](#rate-limiting)
5. [入力バリデーション](#入力バリデーション)
6. [データベースセキュリティ](#データベースセキュリティ)
7. [今後の改善計画](#今後の改善計画)
8. [インシデント対応](#インシデント対応)

---

## 実装済みセキュリティ対策

### ✅ 完了した対策

| 対策 | 状態 | 説明 |
|------|------|------|
| 環境変数化 | ✅ | 認証情報のハードコード削除 |
| 認証ミドルウェア | ✅ | 管理画面APIの保護 |
| 入力バリデーション | ✅ | Zodによる型安全なバリデーション |
| Rate Limiting | ✅ | スパム・DDoS対策 |
| エラーサニタイズ | ✅ | 情報漏洩防止 |
| RLS設定ガイド | ✅ | データベースレベルの保護 |

---

## 環境変数の管理

### 必須の環境変数

```bash
# Admin Authentication
ADMIN_PASSWORD=your_secure_password_here

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ey...
SUPABASE_SERVICE_ROLE_KEY=ey...

# Email
RESEND_API_KEY=re_...
ADMIN_EMAIL=admin@example.com
FROM_EMAIL=noreply@example.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 🔒 セキュリティルール

#### ❌ **絶対にやってはいけないこと**

1. **環境変数をGitにコミット**
   ```bash
   # .gitignore に必ず含める
   .env.local
   .env.production
   ```

2. **クライアントサイドにSERVICE_ROLE_KEYを露出**
   ```typescript
   // ❌ 絶対にNG
   const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL,
     process.env.SUPABASE_SERVICE_ROLE_KEY // クライアントで使用不可
   );
   ```

3. **弱いパスワードの使用**
   ```bash
   # ❌NG
   ADMIN_PASSWORD=123456
   ADMIN_PASSWORD=password

   # ✅OK
   ADMIN_PASSWORD=Xy7$mK2#pL9@wN4&qR8!
   ```

#### ✅ **推奨される運用**

1. **本番環境では必ず強力なパスワード**
   - 最低16文字
   - 大小英数字+記号を含む
   - パスワード生成ツールを使用

2. **環境ごとに異なる認証情報**
   - 開発環境
   - ステージング環境
   - 本番環境

3. **定期的なローテーション**
   - パスワードは3ヶ月ごとに変更
   - APIキーは半年ごとに再生成

---

## API認証

### 認証フロー

```
クライアント
    ↓ パスワード送信
/api/admin/auth (POST)
    ↓ 検証成功
レスポンス { success: true }
    ↓
管理画面にアクセス（Bearerトークン付き）
    ↓
/api/contact/[id] (GET/DELETE)
    ↓ requireAuth() で検証
データ取得/削除
```

### 使用方法

#### 1. ログイン

```typescript
const response = await fetch('/api/admin/auth', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ password: 'your-password' }),
});

const { success } = await response.json();
```

#### 2. 認証済みAPIの呼び出し

```typescript
const response = await fetch('/api/contact/123', {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${password}`,
  },
});
```

### 認証エンドポイント一覧

| エンドポイント | 認証 | 説明 |
|---------------|------|------|
| POST /api/contact | 不要 | お問い合わせ投稿（公開） |
| GET /api/contact | 必須 | 一覧取得（管理画面） |
| GET /api/contact/[id] | 必須 | 個別取得（管理画面） |
| DELETE /api/contact/[id] | 必須 | 削除（管理画面） |

---

## Rate Limiting

### 設定

| エンドポイント | 制限 | ウィンドウ |
|---------------|------|-----------|
| POST /api/contact | 5回 | 1時間 |
| POST /api/admin/auth | 10回 | 1分 |

### カスタマイズ

```typescript
import { rateLimit, getClientIdentifier } from '@/lib/rate-limit';

// 例: 1分間に10回まで
const clientId = getClientIdentifier(request);
const error = rateLimit(clientId, 10, 60 * 1000);
if (error) return error;
```

### 注意事項

- **現在の実装**: メモリベース（サーバー再起動でリセット）
- **本番推奨**: Redis等の永続化ストレージ
- **複数サーバー**: 現在は単一インスタンスのみ対応

---

## 入力バリデーション

### Zodスキーマ

すべてのユーザー入力は検証されます：

```typescript
import { validateContactForm } from '@/lib/validations/contact';

const validation = validateContactForm(data);
if (!validation.success) {
  // バリデーションエラー
  console.error(validation.errors);
}
```

### 検証項目

- メールアドレスの形式
- 文字列の長さ制限
- 必須項目のチェック
- 日付形式の検証
- 電話番号の形式

---

## データベースセキュリティ

### Supabase RLS（Row Level Security）

**設定方法**: `database/migrations/001_enable_rls.sql` を実行

#### ポリシー

1. **誰でもINSERT可能**
   - お問い合わせフォームからの投稿

2. **service_roleのみ全操作可能**
   - 管理画面からの閲覧・削除

#### テスト

```sql
-- anonロールでSELECT（失敗するべき）
SET ROLE anon;
SELECT * FROM contacts; -- Error

-- service_roleでSELECT（成功するべき）
SET ROLE service_role;
SELECT * FROM contacts; -- Success
```

---

## 今後の改善計画

### Priority 1 (Critical)

- [ ] **JWT/セッションベースの認証**
  - 現在: パスワード直接送信
  - 改善: トークンベース認証

- [ ] **HTTPS強制**
  - 本番環境で必須
  - middleware.tsで強制リダイレクト

### Priority 2 (High)

- [ ] **CSRF対策**
  - POST/PUT/DELETEリクエストの保護

- [ ] **CORS設定**
  - 許可されたオリジンのみアクセス可能

- [ ] **Redis Rate Limiting**
  - 複数サーバー対応
  - 永続化

### Priority 3 (Medium)

- [ ] **監査ログ**
  - 全API操作の記録
  - 誰が・いつ・何をしたか追跡

- [ ] **アラート設定**
  - 不正アクセス検知
  - 異常なRate Limit超過

---

## インシデント対応

### 🚨 セキュリティインシデントが発生した場合

#### 1. 即座に実行

```bash
# 1. 環境変数を全て変更
ADMIN_PASSWORD=<new-strong-password>

# 2. Supabase APIキーをローテーション
# Supabaseダッシュボード → Settings → API → Reset

# 3. Resend APIキーを再生成
# Resendダッシュボード → API Keys → Regenerate
```

#### 2. 影響範囲の確認

```sql
-- 不正なアクセスログを確認
SELECT * FROM contacts
WHERE created_at > '2025-11-03'
ORDER BY created_at DESC;
```

#### 3. 報告

- チームに通知
- 必要に応じて顧客に連絡
- インシデントレポート作成

---

## 参考リンク

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Supabase Security Best Practices](https://supabase.com/docs/guides/auth/row-level-security)
- [Next.js Security Headers](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)

---

**最終更新**: 2025-11-03
**担当者**: Development Team
