# 🛠️ Developer Console

Supabaseデータベースの生データを直接表示・操作できる開発者向けコンソール画面です。

---

## 📍 アクセス

**URL**: http://localhost:3000/admin/dev

---

## ✨ 機能一覧

### 1. **3つの表示モード**

#### 📋 テーブルビュー
- すべてのカラムをテーブル形式で表示
- カラムごとに色分け（ID: 黄色、メール: シアン、プラン: 紫など）
- 横スクロール対応
- 各行にアクションボタン（View / Copy / Delete）

#### 📄 JSONビュー
- データ全体をJSON形式で表示
- シンタックスハイライト（緑色のモノスペースフォント）
- コピー＆ペーストに最適

#### 🃏 カードビュー
- レコードをカード形式で表示
- グリッドレイアウト（1～3カラム）
- 主要な情報のみ表示
- 各カードにアクションボタン

---

### 2. **検索機能**

```
🔍 Search (ID, company, name, email, content)...
```

以下のフィールドを横断検索：
- ID
- 会社名 (company_name)
- 担当者名 (name)
- メールアドレス (email)
- 相談内容 (content)

**リアルタイム検索**: 入力すると即座にフィルタリング

---

### 3. **データ操作**

#### 📋 コピー機能
- **Copy All**: フィルタリング済みデータ全体をJSONでコピー
- **Copy**: 個別レコードをJSONでコピー
- クリップボードに自動コピー

#### 🗑️ 削除機能
- 個別レコードを削除
- 確認ダイアログ表示
- APIを通じて安全に削除

#### 📖 詳細表示
- レコードの全データをJSONモーダルで表示
- モーダル内でもコピー・削除可能

---

### 4. **統計情報**

ヘッダーに以下の情報を表示：

```
Database: contacts | Records: 30 | Filtered: 10
```

- **Database**: テーブル名
- **Records**: 総レコード数
- **Filtered**: 検索後のレコード数

---

## 🎨 デザイン

### ダークテーマ
- 背景: ダークグレー (#1f2937)
- アクセント: 緑色 (#10b981) - 開発者向けターミナル風
- テキスト: モノスペースフォント

### カラーコーディング

| データ型 | カラー | 用途 |
|---------|--------|------|
| 黄色 | #fbbf24 | ID |
| 青色 | #3b82f6 | 会社名 |
| シアン | #06b6d4 | メールアドレス |
| 紫色 | #a855f7 | プラン |
| 緑色 | #10b981 | 作成日時 |
| グレー | #9ca3af | その他・null値 |

---

## 🔧 使い方

### 基本操作

1. **データ閲覧**
   - ページを開くと自動でデータ読み込み
   - 表示モードを切り替えて確認

2. **検索**
   - 検索ボックスに文字を入力
   - リアルタイムでフィルタリング

3. **データコピー**
   - 「Copy All」で全データコピー
   - 各レコードの「Copy」ボタンで個別コピー

4. **データ削除**
   - 「Delete」ボタンをクリック
   - 確認ダイアログで「OK」
   - データがSupabaseから削除される

5. **詳細表示**
   - 「View」ボタンでJSONモーダルを表示
   - モーダル内でもコピー・削除可能

---

## 📊 テーブル構造

### contacts テーブル

| カラム名 | 型 | NULL | 説明 |
|---------|-----|------|------|
| id | BIGSERIAL | ✗ | 主キー |
| company_name | TEXT | ✗ | 会社名 |
| company_size | TEXT | ✗ | 企業規模 |
| name | TEXT | ✗ | 担当者名 |
| email | TEXT | ✗ | メールアドレス |
| phone | TEXT | ✓ | 電話番号 |
| authority | TEXT | ✗ | 決裁権限 |
| content | TEXT | ✗ | 相談内容 |
| selected_plan | TEXT | ✗ | 希望プラン |
| meeting1_date | TEXT | ✗ | 第1希望日 |
| meeting1_time | TEXT | ✓ | 第1希望時間 |
| meeting2_date | TEXT | ✓ | 第2希望日 |
| meeting2_time | TEXT | ✓ | 第2希望時間 |
| meeting3_date | TEXT | ✓ | 第3希望日 |
| meeting3_time | TEXT | ✓ | 第3希望時間 |
| created_at | TIMESTAMPTZ | ✗ | 作成日時 |

---

## 🚀 開発者向けTIPS

### JSON形式で一括取得

```bash
# curlでAPIから直接取得
curl http://localhost:3000/api/contact | jq .

# 特定のIDを取得
curl http://localhost:3000/api/contact/1 | jq .
```

### データのバックアップ

```bash
# すべてのデータをJSON形式で保存
curl http://localhost:3000/api/contact > backup.json
```

### データのインポート

```bash
# テストデータを挿入
node seed-data.js
```

### データの一括削除

Supabaseダッシュボードで以下のSQLを実行：

```sql
-- すべてのレコードを削除
DELETE FROM contacts;

-- 特定のIDを削除
DELETE FROM contacts WHERE id = 1;

-- 特定の条件で削除
DELETE FROM contacts WHERE created_at < '2025-10-01';
```

---

## 🔒 セキュリティ注意事項

### ⚠️ 本番環境での使用

**Developer Consoleは開発・テスト環境専用です。**

本番環境では以下の対策を実施してください：

1. **アクセス制限**
   ```typescript
   // middleware.ts で /admin/dev を保護
   if (pathname.startsWith('/admin/dev')) {
     // 開発環境のみ許可
     if (process.env.NODE_ENV !== 'development') {
       return NextResponse.redirect(new URL('/404', request.url));
     }
   }
   ```

2. **削除機能の無効化**
   ```typescript
   // 本番では削除ボタンを非表示
   {process.env.NODE_ENV === 'development' && (
     <button onClick={() => deleteContact(id)}>Delete</button>
   )}
   ```

3. **認証の追加**
   - Supabase Auth でログイン必須
   - 管理者権限チェック

4. **環境変数で制御**
   ```env
   # .env.production
   NEXT_PUBLIC_ENABLE_DEV_CONSOLE=false
   ```

---

## 🎯 ユースケース

### 開発中
- データベースの構造確認
- テストデータの確認・削除
- APIレスポンスの検証

### デバッグ
- 特定のレコードを検索
- データの整合性チェック
- 不要なデータの削除

### データ移行
- JSON形式でエクスポート
- データの一括確認

---

## 📚 関連ページ

- **お問い合わせ一覧**: http://localhost:3000/admin/contacts
- **統計ダッシュボード**: http://localhost:3000/admin/stats
- **Supabaseダッシュボード**: https://supabase.com/dashboard

---

## 🐛 トラブルシューティング

### データが表示されない

1. 開発サーバーが起動しているか確認
   ```bash
   npm run dev
   ```

2. Supabase接続を確認
   ```bash
   node test-supabase.js
   ```

3. ブラウザのコンソールでエラーを確認

### 削除できない

1. APIエンドポイントを確認
   ```bash
   curl -X DELETE http://localhost:3000/api/contact/1
   ```

2. Supabaseのポリシーを確認（RLS設定）

### 検索が動作しない

- ブラウザのJavaScriptコンソールを確認
- データがロードされているか確認
- 検索クエリの大文字・小文字を確認

---

**作成日**: 2025年10月31日
**バージョン**: 1.0.0
