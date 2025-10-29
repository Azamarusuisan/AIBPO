# クイックスタートガイド

## 🎯 3ステップで始める

### ステップ1: インストール

```bash
cd ad_report_calculator
pip install -r requirements.txt
```

### ステップ2: テスト実行

```bash
python test_run.py
```

これでサンプルデータを使った動作確認ができます。

### ステップ3: 実際のデータで実行

1. **CSVファイルを配置**
   - `google_ads.csv` (Google Adsのレポート)
   - `meta_ads.csv` (Meta Adsのレポート)

2. **config.yamlを編集**
   ```yaml
   # 税率を設定
   tax_rules:
     - business_name: "あなたの事業者名"
       platform: "all"
       tax_rate: 0.10  # 10%

   # 代理店手数料を設定
   agency_fees:
     google:
       fee_type: "percentage"
       fee_value: 0.20  # 20%
     meta:
       fee_type: "percentage"
       fee_value: 0.20  # 20%

   # ダッシュボード値を設定
   dashboard_totals:
     google:
       spend: 1000000  # 実際の値に変更
     meta:
       spend: 800000   # 実際の値に変更
   ```

3. **スクリプトを実行**
   ```bash
   python ad_report_calculator.py
   ```

4. **結果を確認**
   - `advertising_report_YYYYMMDD_HHMMSS.xlsx` が生成されます
   - `CHECKS` シートで差異をチェック

## 📊 出力されるExcelファイル

### Campaign詳細シート
全キャンペーンの詳細データ

### CHECKSシート
ダッシュボード値との差異チェック
- ✓ OK: 差異2%以内
- ⚠ 要確認: 差異2%超

### プラットフォーム別サマリーシート
Google/Meta別の合計値

### メタデータシート
レポート作成情報

## ⚙️ よく使う設定

### 固定手数料に変更

```yaml
agency_fees:
  google:
    fee_type: "fixed"
    fee_value: 50000  # 5万円固定
```

### 媒体別に税率を変える

```yaml
tax_rules:
  - business_name: "事業者A"
    platform: "google"
    tax_rate: 0.08  # Google: 8%

  - business_name: "事業者A"
    platform: "meta"
    tax_rate: 0.10  # Meta: 10%
```

### Google Adsだけ処理

`ad_report_calculator.py` の `main()` 関数を編集：

```python
calculator.import_csv(
    google_path="google_ads.csv",
    meta_path=None,  # Metaは処理しない
    business_name="事業者A"
)
```

## 🔧 CSVカラム名が違う場合

お使いのCSVのカラム名に合わせて `config.yaml` を修正：

```yaml
google_columns:
  campaign: "キャンペーン名"      # 実際のカラム名
  impressions: "表示回数"          # 実際のカラム名
  clicks: "クリック"                # 実際のカラム名
  spend: "コスト"                   # 実際のカラム名
  conversions: "CV数"              # 実際のカラム名
```

カラム名がわからない場合は、CSVをExcelで開いて1行目を確認してください。

## 📞 トラブル時のチェックリスト

- [ ] `requirements.txt` のパッケージをインストールしましたか？
- [ ] CSVファイルは UTF-8 エンコーディングですか？
- [ ] `config.yaml` のカラム名はCSVと一致していますか？
- [ ] `config.yaml` の `business_name` はスクリプトで指定したものと一致していますか？

詳細は `README_JP.md` を参照してください。

---

**何か問題があれば、開発者に連絡してください。**
