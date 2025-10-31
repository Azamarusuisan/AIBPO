type ContactData = {
  companyName: string;
  companySize: string;
  name: string;
  email: string;
  phone?: string;
  authority: string;
  content: string;
  selectedPlan: string;
  meeting1Date: string;
  meeting1Time?: string;
  meeting2Date?: string;
  meeting2Time?: string;
  meeting3Date?: string;
  meeting3Time?: string;
};

// 管理者への通知メール
export function getAdminNotificationHTML(data: ContactData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: bold; color: #1e293b; margin-bottom: 4px; }
    .value { color: #475569; }
    .plan-badge { display: inline-block; background: #2563eb; color: white; padding: 4px 12px; border-radius: 4px; font-size: 14px; }
    .meeting { background: white; padding: 12px; border-left: 4px solid #2563eb; margin-bottom: 8px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 新規お問い合わせ</h1>
      <p>スポットエンジニアに新しいお問い合わせが届きました</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">📌 希望プラン</div>
        <div class="value"><span class="plan-badge">${data.selectedPlan}</span></div>
      </div>

      <div class="field">
        <div class="label">🏢 会社名</div>
        <div class="value">${data.companyName}</div>
      </div>

      <div class="field">
        <div class="label">👥 企業規模</div>
        <div class="value">${data.companySize}</div>
      </div>

      <div class="field">
        <div class="label">👤 担当者名</div>
        <div class="value">${data.name}</div>
      </div>

      <div class="field">
        <div class="label">📧 メールアドレス</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>

      ${data.phone ? `
      <div class="field">
        <div class="label">📞 電話番号</div>
        <div class="value">${data.phone}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="label">🔑 決裁権限</div>
        <div class="value">${data.authority}</div>
      </div>

      <div class="field">
        <div class="label">💬 相談内容</div>
        <div class="value" style="white-space: pre-wrap; background: white; padding: 12px; border-radius: 4px;">${data.content}</div>
      </div>

      <div class="field">
        <div class="label">📅 面談希望日時</div>
        <div class="meeting">
          <strong>第1希望:</strong> ${data.meeting1Date} ${data.meeting1Time || '時間指定なし'}
        </div>
        ${data.meeting2Date ? `
        <div class="meeting">
          <strong>第2希望:</strong> ${data.meeting2Date} ${data.meeting2Time || '時間指定なし'}
        </div>
        ` : ''}
        ${data.meeting3Date ? `
        <div class="meeting">
          <strong>第3希望:</strong> ${data.meeting3Date} ${data.meeting3Time || '時間指定なし'}
        </div>
        ` : ''}
      </div>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">

      <p style="font-size: 14px; color: #64748b; text-align: center;">
        このメールは <a href="https://aibpo.onrender.com">aibpo.onrender.com</a> のお問い合わせフォームから送信されました
      </p>
    </div>
  </div>
</body>
</html>
`;
}

// ユーザーへの自動返信メール
export function getUserConfirmationHTML(data: ContactData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .highlight { background: white; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb; }
    .button { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 16px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ お問い合わせありがとうございます</h1>
      <p>スポットエンジニア</p>
    </div>
    <div class="content">
      <p>${data.name} 様</p>

      <p>この度は「スポットエンジニア」にお問い合わせいただき、誠にありがとうございます。</p>

      <div class="highlight">
        <strong>📋 受付内容</strong>
        <ul style="margin: 8px 0;">
          <li>希望プラン: <strong>${data.selectedPlan}</strong></li>
          <li>会社名: ${data.companyName}</li>
          <li>第1希望日時: ${data.meeting1Date} ${data.meeting1Time || ''}</li>
        </ul>
      </div>

      <p>担当者が内容を確認次第、<strong>24時間以内</strong>にご連絡させていただきます。</p>

      <p>なお、お急ぎの場合は以下よりお問い合わせください：</p>
      <p style="text-align: center;">
        <a href="mailto:contact@spot-engineer.com" class="button">📧 直接メールする</a>
      </p>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">

      <h3>次のステップ</h3>
      <ol>
        <li><strong>担当者からの連絡</strong> - 24時間以内にご返信</li>
        <li><strong>面談の調整</strong> - ご希望日時で調整</li>
        <li><strong>詳細ヒアリング</strong> - プロジェクトの詳細を確認</li>
        <li><strong>お見積もり提示</strong> - 最適なプランをご提案</li>
      </ol>

      <p>ご不明な点がございましたら、お気軽にお問い合わせください。</p>

      <p style="margin-top: 30px;">
        スポットエンジニア チーム<br>
        <a href="https://aibpo.onrender.com">aibpo.onrender.com</a>
      </p>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">

      <p style="font-size: 12px; color: #64748b;">
        このメールは自動送信されています。<br>
        返信される場合は contact@spot-engineer.com 宛にお願いいたします。
      </p>
    </div>
  </div>
</body>
</html>
`;
}
