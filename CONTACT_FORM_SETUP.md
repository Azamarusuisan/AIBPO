# お問い合わせフォーム セットアップガイド

このドキュメントでは、お問い合わせフォームを実際に動作させるための手順を説明します。

## 📚 学べること

このセットアップを通じて以下のスキルが身につきます:

- **Next.js API Routes**: バックエンドAPIの基礎
- **環境変数管理**: セキュアな設定の扱い方
- **メール送信API**: Resendを使った実装
- **TypeScript**: 型安全なAPI実装
- **エラーハンドリング**: 実務で使える例外処理

## 🚀 セットアップ手順

### 1. 必要なパッケージのインストール

```bash
# lucide-react (アイコンライブラリ) をインストール
npm install lucide-react --legacy-peer-deps

# または
pnpm add lucide-react
```

### 2. Resendアカウントの作成（メール送信機能を使う場合）

1. [Resend](https://resend.com/)にアクセス
2. 「Sign Up」をクリックしてアカウント作成
3. メールアドレスで認証

**無料プラン**: 月3,000通まで無料(個人の勉強には十分!)

### 3. API Keyの取得

1. Resendにログイン後、[API Keys](https://resend.com/api-keys)ページへ
2. 「Create API Key」をクリック
3. 名前を入力(例: `bpo-package-dev`)
4. 「Full Access」を選択
5. 生成されたAPIキーをコピー(後で見れないので注意!)

### 4. 環境変数の設定

プロジェクトルートに`.env.local`ファイルを作成:

```bash
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx  # ここに取得したAPIキーを貼り付け

# お問い合わせを受信するメールアドレス
RECIPIENT_EMAIL=contact@your-company.com  # 自分のメールアドレスに変更
```

### 5. API Routeの作成（現在は未実装）

**注意**: 現在、API Routeは実装されていません。フロントエンドのみの実装となっています。

メール送信機能を追加する場合は、以下のファイルを作成してください:

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ここにResend APIを使ったメール送信処理を実装

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    );
  }
}
```

### 6. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000/contact を開いてフォームを確認。

## 📁 実装ファイルの説明

### `/app/(marketing)/_components/Contact.tsx`
**フロントエンド** - フォームのUI・ロジック

現在の実装:
- ✅ フォームバリデーション
- ✅ ローディング状態管理
- ✅ 成功/エラーメッセージ表示
- ✅ lucide-reactアイコン
- ⚠️ API連携（シミュレーションのみ）

**学べるポイント**:
- Reactのフォーム処理
- useState/useEffectフック
- TypeScriptの型安全性
- UI状態管理(idle, loading, success, error)
- バリデーションロジック

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    setStatus("error");
    return;
  }

  setLoading(true);

  try {
    // 現在はシミュレーション（2秒待機）
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 実際のAPI呼び出し例:
    // const response = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    setStatus("success");
    setFormData({ ... }); // フォームリセット
  } catch (error) {
    setStatus("error");
  } finally {
    setLoading(false);
  }
};
```

## 🔧 カスタマイズ方法

### 1. 会社メールアドレスの変更

`Contact.tsx`の5行目:

```typescript
const COMPANY_EMAIL = "contact@your-company.com"; // ← ここを変更
```

### 2. フォーム項目のカスタマイズ

不要な項目を削除する例:

```typescript
// 企業規模の選択を削除したい場合
// 該当の<div>ブロックを削除

// 面談希望日時を削除したい場合
// 該当のセクションを削除
```

項目を追加する場合:

```typescript
// 1. formDataに追加
const [formData, setFormData] = useState({
  // ... 既存の項目
  newField: "", // 新しい項目
});

// 2. バリデーションに追加
const validateForm = () => {
  // ...
  if (!formData.newField) {
    setErrorMessage("新しい項目を入力してください");
    return false;
  }
  // ...
};

// 3. JSXに追加
<input
  type="text"
  name="newField"
  value={formData.newField}
  onChange={handleChange}
  // ...
/>
```

### 3. メールデザインのカスタマイズ

API Routeを実装する場合、HTMLメールテンプレートをカスタマイズ可能。
React Emailを使うとさらに高度なデザインも可能:

```bash
npm install @react-email/components
```

### 4. 自動返信メールの追加

API Route内でお客様にも確認メールを送る:

```typescript
// お客様への自動返信
await resend.emails.send({
  from: 'Your Company <noreply@yourdomain.com>',
  to: [email], // お客様のメールアドレス
  subject: 'お問い合わせを受け付けました',
  html: `<p>${name}様、お問い合わせありがとうございます...</p>`,
});
```

## 🎨 デザインシステム

### 使用しているTailwindクラス

- **カラー**:
  - `bg-primary` / `text-primary` - メインカラー（ターコイズブルー）
  - `bg-primary-hover` - ホバー時のメインカラー
  - `border-primary/20` - 透明度20%のボーダー

- **スペーシング**:
  - `space-y-4` / `space-y-6` - 垂直方向の間隔
  - `gap-2` / `gap-3` / `gap-4` - Flexboxのギャップ

- **状態メッセージ**:
  - 成功: `bg-green-50 border-green-200 text-green-900`
  - エラー: `bg-red-50 border-red-200 text-red-900`

### lucide-reactアイコン

```typescript
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// 送信ボタン
<Send className="w-5 h-5" />

// ローディング（回転アニメーション）
<Loader2 className="w-5 h-5 animate-spin" />

// 成功アイコン
<CheckCircle2 className="w-5 h-5 text-green-600" />

// エラーアイコン
<AlertCircle className="w-5 h-5 text-red-600" />
```

## 📋 転用チェックリスト

他のプロジェクトに転用する場合:

- [ ] `Contact.tsx` をコピー
- [ ] `lucide-react` をインストール
- [ ] Tailwind CSS が設定済みか確認
- [ ] カラーパレット（primary, primary-hover）を設定
- [ ] `COMPANY_EMAIL` を自社のメールアドレスに変更
- [ ] 不要なフォーム項目を削除（任意）
- [ ] API Routeを実装（メール送信が必要な場合）
- [ ] 環境変数（`.env.local`）を設定
- [ ] テスト送信

## ⚠️ 注意事項

### セキュリティ

- `.env.local`は**絶対にGitにコミットしない**
- APIキーは**絶対に公開しない**
- `.gitignore`で`.env*.local`が除外されているか確認

### 本番環境

Vercelにデプロイする場合:
1. Vercelのダッシュボードで環境変数を設定
2. `RESEND_API_KEY`と`RECIPIENT_EMAIL`を追加
3. デプロイ

### レート制限

- Resend無料プラン: 月3,000通
- スパム対策として、必要に応じてreCAPTCHAの追加を検討

## 📚 さらに学びたい場合

- [Next.js API Routes公式ドキュメント](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Resend公式ドキュメント](https://resend.com/docs)
- [React Email](https://react.email/) - 美しいメールテンプレート
- [Zod](https://zod.dev/) - バリデーションライブラリ(より堅牢な実装)
- [lucide-react](https://lucide.dev/) - アイコンライブラリ

## 🐛 トラブルシューティング

### lucide-reactのインストールエラー

```bash
# 依存関係の競合が発生した場合
npm install lucide-react --legacy-peer-deps
```

### フォームが送信されない

1. ブラウザのコンソールでエラーメッセージを確認
2. バリデーションエラーが表示されているか確認
3. 必須項目（*マーク）が全て入力されているか確認

### メールが届かない（API実装後）

1. `.env.local`のAPIキーが正しいか確認
2. 開発サーバーを再起動したか確認
3. Resendのダッシュボードでログを確認
4. スパムフォルダをチェック

### APIエラーが出る

1. ブラウザのコンソールでエラーメッセージを確認
2. ターミナルのサーバーログを確認
3. `RESEND_API_KEY`が設定されているか確認

```bash
# 環境変数が読み込まれているか確認（Mac/Linux）
echo $RESEND_API_KEY
```

## 💡 現在の実装状態

- ✅ フロントエンドフォームUI
- ✅ バリデーション
- ✅ ローディング状態
- ✅ 成功/エラーメッセージ
- ⚠️ API Route（未実装）
- ⚠️ メール送信機能（未実装）

**実際にメールを送信するには、API Routeの実装が必要です。**

---

**作成日**: 2025年10月24日
**バージョン**: 1.0
**プロジェクト**: BPOパッケージランディングページ
