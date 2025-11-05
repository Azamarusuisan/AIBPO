# Render本番環境セットアップ・確認手順

**最終更新**: 2025年11月5日

---

## 🎯 最優先タスク

### 1. ADMIN_EMAIL の変更

**現在の値**: `team@zettai.co.jp`
**変更後の値**: `contact@zettai.co.jp`

#### 手順

1. **Renderダッシュボードにアクセス**
   ```
   https://dashboard.render.com/
   ```

2. **プロジェクトを選択**
   - プロジェクト名: AIBPO
   - GitHub連携: https://github.com/Azamarusuisan/AIBPO.git

3. **環境変数を変更**
   - 左メニュー → **Environment**
   - **Environment Variables** セクションを開く
   - `ADMIN_EMAIL` を探す
   - `team@zettai.co.jp` → `contact@zettai.co.jp` に変更
   - **Save Changes** をクリック

4. **自動再デプロイ**
   - 保存すると自動的に再デプロイが開始されます
   - **Events** タブで進行状況を確認
   - 完了まで約2-5分

5. **動作確認**
   - 本番サイトの `/contact` ページにアクセス
   - テスト送信を実行
   - `contact@zettai.co.jp` にメールが届くか確認

---

## 📋 全環境変数チェックリスト

以下の環境変数がRenderに正しく設定されているか確認してください：

### 必須環境変数

| 変数名 | 説明 | 開発環境の値 | 本番環境での確認 |
|--------|------|-------------|----------------|
| `NEXT_PUBLIC_SITE_URL` | サイトURL | `http://localhost:3000` | Renderのドメイン（例: `https://aibpo.onrender.com`） |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase URL | `https://cpecyhdqspkcdorozlwo.supabase.co` | ✅ 同じ値を使用 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase匿名キー | （設定済み） | ✅ 同じ値を使用 |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabaseサービスロールキー | （設定済み） | ✅ 同じ値を使用 |
| `RESEND_API_KEY` | Resend APIキー | `re_CJ7cC78T_...` | ✅ 同じ値を使用 |
| **`ADMIN_EMAIL`** | **管理者メール** | `contact@zettai.co.jp` | ⚠️ **変更必要** |
| `FROM_EMAIL` | 送信元メール | `noreply@dev-bpo.com` | ⚠️ 本番用に変更推奨 |
| `ADMIN_PASSWORD` | 管理画面パスワード | `dev-password-...` | ⚠️ 強力なパスワードに変更 |

---

## 🔐 セキュリティチェック

### 1. Supabase接続の確認

**目的**: データベースとの接続が正常に動作しているか確認

#### 確認方法

1. **Supabaseダッシュボードにアクセス**
   ```
   https://supabase.com/dashboard/project/cpecyhdqspkcdorozlwo
   ```

2. **RLSポリシーの確認**
   - Table Editor → `contacts` テーブル
   - Policies タブを開く
   - 以下のポリシーが有効か確認：
     - `誰でもINSERT可能` (INSERT for public)
     - `service_roleのみ全操作可能` (ALL for service_role)

3. **API経由でテスト**
   ```bash
   # 本番環境のAPIエンドポイントにアクセス
   curl https://your-app.onrender.com/api/contact/stats
   ```
   - 正常に統計データが返ってくればOK

---

### 2. Resend（メール送信）の確認

**目的**: メール送信機能が正常に動作しているか確認

#### 確認方法

1. **Resendダッシュボードにアクセス**
   ```
   https://resend.com/emails
   ```

2. **APIキーの確認**
   - Settings → API Keys
   - 使用中のAPIキー: `re_CJ7cC78T_...`
   - ステータスが **Active** であることを確認

3. **送信履歴の確認**
   - Emails タブ
   - 最近の送信履歴を確認
   - エラーがないか確認

4. **テスト送信**
   - 本番サイトの `/contact` からテスト送信
   - 以下の2通のメールが送信されるはず：
     - `contact@zettai.co.jp` 宛て（管理者通知）
     - ユーザー宛て（自動返信）

---

## 🧪 動作確認手順

### 1. お問い合わせフォームのテスト

1. **本番サイトにアクセス**
   ```
   https://your-app.onrender.com/contact
   ```

2. **フォームに入力**
   - 会社名: テスト株式会社
   - 企業規模: 10-50名
   - 担当者名: テスト 太郎
   - メールアドレス: test@example.com
   - 電話番号: 03-1234-5678
   - 決裁権限: あり
   - 相談内容: テスト送信です
   - 希望プラン: Standard
   - 面談希望日: （適当に選択）

3. **送信後の確認**
   - [ ] フォーム送信が成功する
   - [ ] `contact@zettai.co.jp` にメールが届く
   - [ ] `test@example.com` に自動返信メールが届く
   - [ ] Supabaseの `contacts` テーブルにデータが保存される

---

### 2. 管理画面の確認

1. **管理画面にアクセス**
   ```
   https://your-app.onrender.com/admin/contacts
   ```

2. **認証**
   - パスワード: `ADMIN_PASSWORD` の値を入力

3. **データ確認**
   - [ ] テスト送信したデータが表示される
   - [ ] 詳細モーダルが開く
   - [ ] メール送信ボタンが動作する

4. **統計ダッシュボード**
   ```
   https://your-app.onrender.com/admin/stats
   ```
   - [ ] KPIカードが表示される
   - [ ] グラフが表示される
   - [ ] 最新お問い合わせが表示される

---

## 🚨 トラブルシューティング

### メールが届かない場合

**確認項目:**
1. Renderの `ADMIN_EMAIL` が正しく設定されているか
2. Resendの APIキーが有効か
3. スパムフォルダを確認
4. Resendダッシュボードでエラーログを確認

**デバッグ方法:**
```bash
# Renderのログを確認
# Render Dashboard → Logs タブ
```

---

### Supabase接続エラーの場合

**確認項目:**
1. `SUPABASE_SERVICE_ROLE_KEY` が正しく設定されているか
2. Supabaseプロジェクトが稼働中か
3. RLSポリシーが正しく設定されているか

**デバッグ方法:**
```bash
# Supabaseダッシュボードで直接確認
# https://supabase.com/dashboard/project/cpecyhdqspkcdorozlwo
# SQL Editor → SELECT * FROM contacts LIMIT 10;
```

---

### ビルドエラーの場合

**確認項目:**
1. `npm run build` がローカルで成功するか
2. TypeScriptエラーがないか
3. ESLintエラーがないか

**デバッグ方法:**
```bash
# ローカルでビルドテスト
cd /Users/zettai1st/Desktop/bpoパッケージ
npm run build
```

---

## 📊 本番環境の監視

### 1. Renderのモニタリング

- **Metrics** タブ
  - CPU使用率
  - メモリ使用率
  - リクエスト数

### 2. Supabaseのモニタリング

- **Database** タブ
  - 接続数
  - クエリパフォーマンス

### 3. Resendのモニタリング

- **Analytics** タブ
  - 送信成功率
  - バウンス率

---

## ✅ デプロイ前チェックリスト

- [ ] 全環境変数が正しく設定されている
- [ ] `ADMIN_EMAIL` が `contact@zettai.co.jp` になっている
- [ ] `ADMIN_PASSWORD` が強力なパスワードに変更されている
- [ ] `npm run build` がローカルで成功する
- [ ] 画像ファイルがすべて配置されている（ai-assistant-1〜4.jpg）
- [ ] Supabase接続テストが成功する
- [ ] Resendメール送信テストが成功する

---

## 🔗 関連リンク

- **Renderダッシュボード**: https://dashboard.render.com/
- **Supabaseダッシュボード**: https://supabase.com/dashboard/project/cpecyhdqspkcdorozlwo
- **Resendダッシュボード**: https://resend.com/
- **GitHubリポジトリ**: https://github.com/Azamarusuisan/AIBPO.git

---

## 📝 変更履歴

| 日付 | 変更内容 | 担当 |
|------|---------|------|
| 2025-11-05 | 初版作成、ADMIN_EMAIL変更手順追加 | Claude Code |

---

**次のアクション**: Renderダッシュボードで `ADMIN_EMAIL` を変更してください！
