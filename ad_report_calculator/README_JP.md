# 広告レポート自動計算ツール

Google Ads と Meta Ads の月次CSVレポートを自動で集計・計算し、税額・手数料を適用してExcelレポートを出力するPythonスクリプトです。

## 📋 機能

- ✅ Google Ads / Meta Ads のCSVファイル自動読み込み
- ✅ キャンペーン別の集計（インプレッション、クリック、費用、コンバージョン）
- ✅ 事業者別・媒体別の税率適用
- ✅ 代理店手数料計算（パーセンテージ or 固定額）
- ✅ プラットフォームダッシュボード値との差異チェック（%表示）
- ✅ Excel出力（4シート構成）
- ✅ 高精度計算（Decimal使用、丸め誤差なし）

## 🚀 クイックスタート

### 1. 必要なパッケージをインストール

```bash
pip install -r requirements.txt
```

### 2. 設定ファイルを編集

`config.yaml` を開き、以下を設定：

- **税率**: 事業者名・媒体別の税率
- **代理店手数料**: Google/Meta別の手数料（%または固定額）
- **ダッシュボード値**: 各プラットフォームの実績値（差異チェック用）
- **CSVカラム名**: お使いのCSVフォーマットに合わせて調整

### 3. CSVファイルを配置

以下のファイルを同じディレクトリに配置：

- `google_ads.csv` - Google AdsのCSVレポート
- `meta_ads.csv` - Meta AdsのCSVレポート

### 4. スクリプトを実行

```bash
python ad_report_calculator.py
```

### 5. 出力結果を確認

`advertising_report_YYYYMMDD_HHMMSS.xlsx` が生成されます。

## 📊 出力ファイル構成

Excelファイルには4つのシートが含まれます：

### 1. Campaign詳細
キャンペーンごとの詳細データ

| プラットフォーム | キャンペーン名 | インプレッション数 | クリック数 | 広告費用 | 代理店手数料 | 小計 | 税率 | 税額 | 合計金額 | コンバージョン数 |
|---|---|---|---|---|---|---|---|---|---|---|
| GOOGLE | ブランド認知 | 150,000 | 3,500 | 250,000 | 50,000 | 300,000 | 10.0% | 30,000 | 330,000 | 45 |

### 2. CHECKS
プラットフォームダッシュボード値との差異チェック

| プラットフォーム | CSV合計金額 | ダッシュボード値 | 差異 | 差異率(%) | ステータス |
|---|---|---|---|---|---|
| GOOGLE | 1,000,000 | 1,000,000 | 0 | 0.0% | ✓ OK |
| META | 800,000 | 805,000 | -5,000 | -0.62% | ✓ OK |

- **ステータス**: 差異率が2%以内なら「✓ OK」、超えると「⚠ 要確認」

### 3. プラットフォーム別サマリー
Google / Meta 別の合計値

### 4. メタデータ
レポート作成日時、事業者名、適用税率などの情報

## ⚙️ 設定ファイル詳細（config.yaml）

### 税率設定（tax_rules）

```yaml
tax_rules:
  - business_name: "事業者A"
    platform: "all"        # "google", "meta", または "all"
    tax_rate: 0.10         # 10%

  - business_name: "事業者B"
    platform: "google"
    tax_rate: 0.08         # 8%
```

- **business_name**: 事業者名（スクリプト実行時に指定）
- **platform**: 適用対象（"google" / "meta" / "all"）
- **tax_rate**: 税率（0.10 = 10%）

### 代理店手数料設定（agency_fees）

```yaml
agency_fees:
  google:
    fee_type: "percentage"  # "percentage" または "fixed"
    fee_value: 0.20         # 20%（または固定額の場合は金額）

  meta:
    fee_type: "fixed"
    fee_value: 50000        # 固定で5万円
```

- **fee_type**:
  - `"percentage"`: パーセンテージ計算（広告費用 × fee_value）
  - `"fixed"`: 固定額
- **fee_value**: 手数料の値

### ダッシュボード合計値（dashboard_totals）

```yaml
dashboard_totals:
  google:
    spend: 1000000  # Google Adsダッシュボードの広告費用合計

  meta:
    spend: 800000   # Meta Adsダッシュボードの広告費用合計
```

毎月、各プラットフォームのダッシュボードで確認した実績値を入力してください。
CSV集計値との差異が2%を超えると警告が表示されます。

### CSVカラムマッピング

お使いのCSVフォーマットに合わせてカラム名を調整：

```yaml
google_columns:
  campaign: "キャンペーン"
  impressions: "インプレッション数"
  clicks: "クリック数"
  spend: "費用"
  conversions: "コンバージョン数"

meta_columns:
  campaign: "キャンペーン名"
  impressions: "インプレッション"
  clicks: "リンククリック数"
  spend: "金額（消化金額）"
  conversions: "コンバージョン"
```

## 🧮 計算ロジック

### 1. キャンペーン別集計
同じキャンペーン名の行を合計します。

### 2. 代理店手数料計算
```
手数料 = 広告費用 × 手数料率（または固定額）
```

### 3. 税額計算
```
小計 = 広告費用 + 代理店手数料
税額 = 小計 × 税率
合計金額 = 小計 + 税額
```

### 4. 差異チェック
```
差異 = CSV合計金額 - ダッシュボード値
差異率(%) = (差異 / ダッシュボード値) × 100
```

差異率が `variance_threshold`（デフォルト2%）を超えると警告を表示します。

## 📝 使用例

### ケース1: 基本的な使用方法

```python
from ad_report_calculator import AdReportCalculator

# 初期化
calculator = AdReportCalculator(config_path="config.yaml")

# CSVを読み込み
calculator.import_csv(
    google_path="google_ads.csv",
    meta_path="meta_ads.csv",
    business_name="事業者A"
)

# 集計・計算
calculator.aggregate_campaigns()

# Excel出力
calculator.export_excel(output_path="report_202501.xlsx")
```

### ケース2: Google Adsのみ処理

```python
calculator.import_csv(
    google_path="google_ads.csv",
    meta_path=None,  # Metaは処理しない
    business_name="事業者B"
)
```

### ケース3: カスタム事業者名と税率

`config.yaml` に新しい事業者を追加：

```yaml
tax_rules:
  - business_name: "事業者C"
    platform: "google"
    tax_rate: 0.05  # 5%

  - business_name: "事業者C"
    platform: "meta"
    tax_rate: 0.10  # 10%
```

実行時に指定：

```python
calculator.import_csv(
    google_path="google_ads.csv",
    meta_path="meta_ads.csv",
    business_name="事業者C"
)
```

## 🔧 トラブルシューティング

### Q1. CSVファイルが読み込めない

**A:** 以下を確認してください：
- ファイル名が `google_ads.csv` / `meta_ads.csv` と一致しているか
- ファイルのエンコーディングがUTF-8か（ExcelからCSV保存する場合は「UTF-8 BOM付き」を選択）
- カラム名が `config.yaml` の設定と一致しているか

### Q2. 「カラムがありません」というエラー

**A:** `config.yaml` の `google_columns` / `meta_columns` セクションを、実際のCSVのカラム名に合わせて修正してください。

### Q3. 差異チェックで「⚠ 要確認」が出る

**A:** 以下の原因が考えられます：
- ダッシュボード値の入力ミス → `config.yaml` の `dashboard_totals` を確認
- CSVに含まれる期間が異なる → CSVとダッシュボードの期間を統一
- 為替レートの違い（外貨建ての場合） → 同じ為替レートで換算

### Q4. 税額計算が合わない

**A:** 計算式を確認：
```
小計 = 広告費用 + 代理店手数料
税額 = 小計 × 税率（端数は四捨五入）
```

スクリプトは `Decimal` 型を使用しているため、浮動小数点の丸め誤差はありません。

## 📂 ファイル構成

```
ad_report_calculator/
├── ad_report_calculator.py  # メインスクリプト
├── config.yaml               # 設定ファイル
├── requirements.txt          # 必要なパッケージ
├── README_JP.md              # このファイル
├── google_ads.csv            # Google AdsのCSV（ユーザーが配置）
├── meta_ads.csv              # Meta AdsのCSV（ユーザーが配置）
└── advertising_report_*.xlsx # 出力ファイル
```

## 🔄 ワークフロー例

### 毎月の運用フロー

1. **代理店からCSVを受領**
   - Google Ads → `google_ads.csv` として保存
   - Meta Ads → `meta_ads.csv` として保存

2. **ダッシュボード値を確認**
   - Google Ads管理画面で広告費用合計を確認
   - Meta Ads管理画面で広告費用合計を確認
   - `config.yaml` の `dashboard_totals` に入力

3. **スクリプトを実行**
   ```bash
   python ad_report_calculator.py
   ```

4. **出力結果を確認**
   - `CHECKS` シートで差異をチェック
   - 差異が2%以内なら問題なし
   - 差異が大きい場合は代理店に確認

5. **レポートを保存**
   - 出力されたExcelファイルを月次レポートとして保存

## 🛡️ データの正確性

このスクリプトは以下の工夫で計算精度を保証しています：

- **Decimal型使用**: 浮動小数点の丸め誤差を防ぐ
- **四捨五入**: 税額・手数料は小数第2位で四捨五入
- **差異チェック**: プラットフォーム合計値との照合機能

## 🎯 カスタマイズ

### 差異チェックの閾値を変更

`config.yaml`:
```yaml
variance_threshold: 0.05  # 5%に変更
```

### 出力シート名を英語に変更

`ad_report_calculator.py` の `export_excel` メソッド内：
```python
results_df.to_excel(writer, sheet_name='Campaign Details', index=False)
```

### 追加のカラムを集計

CSVに独自のカラムがある場合、`_process_platform` メソッドを修正して追加できます。

## 📞 サポート

質問や不具合報告は、開発者にお問い合わせください。

---

**作成日**: 2025-10-23
**バージョン**: 1.0.0
