-- お問い合わせテーブル
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  company_size TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  authority TEXT NOT NULL,
  content TEXT NOT NULL,
  selected_plan TEXT NOT NULL,
  meeting1_date TEXT NOT NULL,
  meeting1_time TEXT,
  meeting2_date TEXT,
  meeting2_time TEXT,
  meeting3_date TEXT,
  meeting3_time TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- インデックスを作成（検索性能向上）
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_company_name ON contacts(company_name);

-- Row Level Security (RLS) を有効化
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 管理者のみがアクセスできるポリシー（必要に応じて調整）
-- 注意: service_role キーを使用する場合、RLSは自動的にバイパスされます
CREATE POLICY "Enable read access for all users" ON contacts
  FOR SELECT USING (true);

CREATE POLICY "Enable insert access for all users" ON contacts
  FOR INSERT WITH CHECK (true);
