# planmd09: Audit Form（無料コード健診）

**バージョン**: v1.0
**最終更新**: 2025-01-23
**依存**: `tokens.md`, API仕様
**優先度**: P0

---

## 1. 機能名

Audit Form - 無料コード健診フォームページ（`/audit`）

---

## 2. 目的

1. **リード獲得** - 技術スタック・困りごとを収集
2. **安心感の提供** - NDA/最小権限などセキュリティ情報を明示
3. **送信後の導線設計** - モーダル → トップorプラン詳細

---

## 3. 対象ユーザーとユースケース

### ペルソナ
- **試したいCTO** - まず無料で相談したい
- **セキュリティ懸念のあるPM** - データ扱いを事前確認
- **具体的課題を持つエンジニア** - バグ修正などスポット依頼

### ユースケース
1. Hero CTA → `/audit` 遷移 → フォーム記入 → 送信
2. モバイルでアクセス → 右カラムの安心カードで信頼性確認
3. 送信後 → モーダル確認 → プラン詳細へ遷移

---

## 4. UI/ワイヤーフレーム

### レイアウト（2カラム）
```
+------------------------------------------+
| 無料コード健診                            |
| GitHub連携は不要。URLと課題の概要だけでもOK |
+------------------------------------------+
| [左: フォーム]      | [右: 安心カード]    |
| - GitHub URL(任意)  | ┌───────────────┐  |
| - 技術スタック(必須) | │ 提出後の流れ   │  |
| - 困りごと(必須)    | └───────────────┘  |
| - 希望プラン(必須)  | ┌───────────────┐  |
| [送信して仮受付]    | │ データの扱い   │  |
|                    | └───────────────┘  |
+------------------------------------------+
```

### レスポンシブ
- **モバイル**: 縦積み（フォーム → カード）
- **デスクトップ**: 2カラム（50/50）

### モーダル（送信後）
```
+------------------------------+
| 受付しました                  |
| 1–2営業日内にご連絡します。    |
| [トップへ戻る] [プランを見る]  |
+------------------------------+
```

---

## 5. コピー

### ページタイトル
```
無料コード健診
```

### サブコピー
```
GitHub連携は不要。URLと課題の概要だけでもOKです。
```

### フォームフィールド

#### GitHub URL（任意）
- ラベル: `GitHub URL（任意）`
- プレースホルダ: `https://github.com/org/repo`

#### 技術スタック（必須）
- ラベル: `技術スタック`
- プレースホルダ: `例：Next.js / TypeScript / FastAPI など`

#### 困りごと（必須・選択式）
- ラベル: `困りごと`
- 選択肢:
  - `バグ修正`
  - `小機能の追加`
  - `テスト追加/CI整備`
  - `パフォーマンス改善`
  - `その他`

#### 希望プラン（必須・選択式）
- ラベル: `希望プラン`
- 選択肢:
  - `Starter ¥30,000（5枚/48h/非同期）` → **「5件」に修正**
  - `Standard ¥120,000（20枚/24h/週1）` → **「20件」に修正**
  - `Pro ¥300,000（60枚/当日/優先）` → **「60件」に修正**

### 安心カード

#### カード1: 提出後の流れ
```
提出後の流れ

1. 1–2営業日内にご連絡
2. 必要なら再現手順を確認
3. 最初の変更1件を優先対応
```

#### カード2: データの扱い
```
データの扱い

✓ NDA対応
✓ 私有Runner
✓ 最小権限
✓ 監査ログ対応
```

### モーダルコピー
```
受付しました

1–2営業日内にご連絡します。必要に応じて追加情報（再現手順など）をお伺いします。

[トップへ戻る] [プランを見る]
```

---

## 6. スタイリング

### フォーム
```css
.audit-form {
  background: white;
  padding: 2rem; /* p-8 */
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-sm);
}

.audit-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.audit-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: var(--shadow-focus);
}
```

### 安心カード
```css
.safety-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-2xl);
  background: white;
  padding: 1.5rem;
}

.safety-card h3 {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.safety-card ul li {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.safety-card .checkmark {
  color: var(--primary);
}
```

---

## 7. データ構造

### フォーム送信データ
```typescript
interface AuditFormData {
  github_url?: string;       // 任意
  stack: string;             // 必須
  issue: string;             // 必須（選択式）
  plan: string;              // 必須（選択式）
  submitted_at: string;      // ISO 8601
}
```

---

## 8. API仕様

### エンドポイント
```
POST /api/audit
```

### リクエスト
```json
{
  "github_url": "https://github.com/org/repo",
  "stack": "Next.js / TypeScript",
  "issue": "バグ修正",
  "plan": "Starter ¥30,000（5件/48h/非同期）"
}
```

### レスポンス（成功）
```json
{
  "success": true,
  "message": "受付しました",
  "id": "audit_1234567890"
}
```

### レスポンス（エラー）
```json
{
  "success": false,
  "error": "技術スタックは必須です"
}
```

### エラーハンドリング
- **400 Bad Request**: バリデーションエラー → フォーム下にエラーメッセージ表示
- **500 Server Error**: リトライUI表示（「もう一度送信」ボタン）
- **タイムアウト**: 10秒でタイムアウト → 「時間がかかっています。もう一度お試しください」

---

## 9. 実装タスク

- [ ] `/api/audit` エンドポイント作成（Next.js Route Handler）
- [ ] フォームバリデーション実装（必須フィールド）
- [ ] 送信成功時のモーダル表示
- [ ] エラー時のリトライUI実装
- [ ] 「枚」→「件」に修正（希望プランの選択肢）
- [ ] 右カラムに安心カード2枚配置
- [ ] data-cta属性付与（`audit_submit`）
- [ ] 禁止用語チェック

---

## 10. テスト要件

### ユニットテスト
```typescript
// validateAuditForm.test.ts
describe('validateAuditForm', () => {
  it('requires stack field', () => {
    const result = validateAuditForm({ stack: '', issue: 'バグ修正', plan: 'Starter' });
    expect(result.isValid).toBe(false);
    expect(result.errors.stack).toBe('技術スタックは必須です');
  });

  it('accepts optional github_url', () => {
    const result = validateAuditForm({ stack: 'Next.js', issue: 'バグ修正', plan: 'Starter' });
    expect(result.isValid).toBe(true);
  });
});
```

### E2Eテスト
```typescript
// audit.spec.ts
test('submits audit form successfully', async ({ page }) => {
  await page.goto('/audit');

  await page.fill('input[name="stack"]', 'Next.js / TypeScript');
  await page.selectOption('select[name="issue"]', 'バグ修正');
  await page.selectOption('select[name="plan"]', 'Starter ¥30,000（5件/48h/非同期）');

  await page.click('[data-cta="audit_submit"]');

  await expect(page.locator('text=受付しました')).toBeVisible();
});

test('shows error on empty stack field', async ({ page }) => {
  await page.goto('/audit');
  await page.click('[data-cta="audit_submit"]');

  await expect(page.locator('text=技術スタックは必須です')).toBeVisible();
});

test('retries on API failure', async ({ page }) => {
  await page.route('/api/audit', route => route.abort());
  await page.goto('/audit');

  await page.fill('input[name="stack"]', 'Next.js');
  await page.selectOption('select[name="issue"]', 'バグ修正');
  await page.selectOption('select[name="plan"]', 'Starter');
  await page.click('[data-cta="audit_submit"]');

  await expect(page.locator('text=もう一度送信')).toBeVisible();
});
```

---

## 11. リスク・エッジケース

### API失敗時のデータ損失
**リスク**: 送信失敗時にフォーム内容が消える
**対策**:
- localStorage に一時保存
- エラー時も入力内容維持

### 「枚」の残存
**リスク**: 希望プラン選択肢に「枚」が残っている
**対策**:
```bash
grep -r "枚" app/audit/page.tsx
# 全て「件」に置換
```

### CSRF攻撃
**リスク**: CSRF トークンなしで悪意ある送信
**対策**:
- Next.js の CSRF 保護機能利用
- または reCAPTCHA v3 導入（P2）

### スパム送信
**リスク**: ボット大量送信
**対策**:
- レート制限（同一IP: 5回/時）
- Honeypot フィールド（非表示input）

---

## 12. 受け入れ基準

- [ ] フォームが正しく表示される（4フィールド）
- [ ] 必須フィールド（stack/issue/plan）のバリデーション動作
- [ ] 送信成功時にモーダルが表示される
- [ ] 「枚」→「件」に修正済み（希望プラン選択肢）
- [ ] 右カラムに安心カード2枚が表示される
- [ ] `/api/audit` が正常に動作（200 OK）
- [ ] エラー時にリトライUIが表示される
- [ ] data-cta属性が付与されている（audit_submit）
- [ ] 禁止用語チェック：`grep -r "PR\|枚" app/audit/page.tsx` で0件
- [ ] E2Eテストが全てパス（送信成功/失敗/リトライ）

---

## 13. API実装例

```typescript
// app/api/audit/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface AuditRequest {
  github_url?: string;
  stack: string;
  issue: string;
  plan: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: AuditRequest = await req.json();

    // バリデーション
    if (!data.stack || !data.issue || !data.plan) {
      return NextResponse.json(
        { success: false, error: '必須フィールドが不足しています' },
        { status: 400 }
      );
    }

    // TODO: データベース保存 or メール送信
    console.log('Audit form submitted:', data);

    return NextResponse.json({
      success: true,
      message: '受付しました',
      id: `audit_${Date.now()}`
    });
  } catch (error) {
    console.error('Audit API error:', error);
    return NextResponse.json(
      { success: false, error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
```

---

**次のステップ**: 受け入れ基準を満たしたら、全planmdの完了確認とCLAUDE.md更新に進んでください。
