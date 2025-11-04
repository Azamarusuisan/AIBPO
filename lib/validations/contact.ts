import { z } from 'zod';

/**
 * お問い合わせフォームのバリデーションスキーマ
 *
 * セキュリティと品質保証:
 * - メールアドレスの形式チェック
 * - 電話番号の形式チェック
 * - 文字列の長さ制限
 * - XSS対策（不正なスクリプトを含む入力を拒否）
 * - 必須項目のチェック
 */

export const contactFormSchema = z.object({
  // 会社情報
  companyName: z
    .string()
    .min(1, '会社名は必須です')
    .max(200, '会社名は200文字以内で入力してください')
    .trim(),

  companySize: z
    .string()
    .min(1, '会社規模は必須です')
    .max(50, '会社規模は50文字以内で入力してください'),

  // 担当者情報
  name: z
    .string()
    .min(1, 'お名前は必須です')
    .max(100, 'お名前は100文字以内で入力してください')
    .trim(),

  email: z
    .string()
    .email('有効なメールアドレスを入力してください')
    .max(255, 'メールアドレスは255文字以内で入力してください')
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .regex(
      /^[0-9\-\+\(\)\s]+$/,
      '電話番号は数字、ハイフン、括弧、プラス記号のみ使用できます'
    )
    .min(10, '電話番号は10文字以上で入力してください')
    .max(20, '電話番号は20文字以内で入力してください')
    .optional()
    .or(z.literal('')),

  authority: z
    .string()
    .min(1, '決裁権限は必須です')
    .max(50, '決裁権限は50文字以内で入力してください'),

  // お問い合わせ内容
  content: z
    .string()
    .min(1, 'お問い合わせ内容は必須です')
    .max(5000, 'お問い合わせ内容は5000文字以内で入力してください')
    .trim(),

  selectedPlan: z
    .string()
    .min(1, 'プランの選択は必須です')
    .max(50, 'プラン名は50文字以内で入力してください'),

  // 面談希望日時（必須）
  meeting1Date: z
    .string()
    .min(1, '第1希望日は必須です')
    .regex(/^\d{4}-\d{2}-\d{2}$/, '日付は YYYY-MM-DD 形式で入力してください'),

  meeting1Time: z
    .string()
    .min(1, '第1希望時間は必須です')
    .max(50, '時間は50文字以内で入力してください'),

  // 面談希望日時（任意）
  meeting2Date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, '日付は YYYY-MM-DD 形式で入力してください')
    .optional()
    .or(z.literal('')),

  meeting2Time: z
    .string()
    .max(50, '時間は50文字以内で入力してください')
    .optional()
    .or(z.literal('')),

  meeting3Date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, '日付は YYYY-MM-DD 形式で入力してください')
    .optional()
    .or(z.literal('')),

  meeting3Time: z
    .string()
    .max(50, '時間は50文字以内で入力してください')
    .optional()
    .or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * バリデーションヘルパー関数
 *
 * @param data 検証するデータ
 * @returns 成功時は { success: true, data }, 失敗時は { success: false, errors }
 */
export function validateContactForm(data: unknown) {
  const result = contactFormSchema.safeParse(data);

  if (result.success) {
    return {
      success: true as const,
      data: result.data,
    };
  }

  return {
    success: false as const,
    errors: result.error.flatten().fieldErrors,
  };
}
