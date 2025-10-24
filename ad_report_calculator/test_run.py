#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
テスト実行スクリプト
Test run script for advertising report calculator

サンプルCSVファイルを使用して動作確認を行います。
"""

from ad_report_calculator import AdReportCalculator
from datetime import datetime
from pathlib import Path


def main():
    print("=" * 70)
    print("広告レポート自動計算ツール - テスト実行")
    print("Advertising Report Calculator - Test Run")
    print("=" * 70)
    print()

    # サンプルファイルの存在確認
    google_sample = "google_ads_sample.csv"
    meta_sample = "meta_ads_sample.csv"

    if not Path(google_sample).exists() or not Path(meta_sample).exists():
        print("✗ エラー: サンプルファイルが見つかりません")
        print("  以下のファイルが必要です:")
        print(f"  - {google_sample}")
        print(f"  - {meta_sample}")
        return

    # 計算機を初期化
    print("1. 設定ファイルを読み込み中...")
    calculator = AdReportCalculator(config_path="config.yaml")
    print()

    # CSVを読み込み
    print("2. サンプルCSVファイルを読み込み中...")
    calculator.import_csv(
        google_path=google_sample,
        meta_path=meta_sample,
        business_name="事業者A"  # config.yamlに定義された事業者名
    )
    print()

    # キャンペーン別に集計・計算
    print("3. キャンペーン別に集計・税計算・手数料計算中...")
    calculator.aggregate_campaigns()
    print()

    # 結果をプレビュー
    print("4. 計算結果をプレビュー:")
    print("-" * 70)
    if calculator.results:
        import pandas as pd
        results_df = pd.DataFrame(calculator.results)

        # 最初の3件を表示
        print(results_df.head(3).to_string(index=False))

        if len(results_df) > 3:
            print(f"... 他 {len(results_df) - 3} 件")

        print()
        print("【プラットフォーム別集計】")
        summary = results_df.groupby('プラットフォーム').agg({
            '広告費用': 'sum',
            '代理店手数料': 'sum',
            '税額': 'sum',
            '合計金額': 'sum'
        })
        print(summary.to_string())
    print()

    # Excelに出力
    print("5. Excelファイルに出力中...")
    output_file = f"test_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"
    calculator.export_excel(output_path=output_file)
    print()

    # 完了メッセージ
    print("=" * 70)
    print("✓ テスト実行が完了しました!")
    print(f"✓ 出力ファイル: {output_file}")
    print()
    print("次のステップ:")
    print("  1. 出力されたExcelファイルを開いて内容を確認")
    print("  2. 'CHECKS' シートで差異チェック結果を確認")
    print("  3. config.yaml を実際の設定に変更")
    print("  4. 実際のCSVファイルで ad_report_calculator.py を実行")
    print("=" * 70)


if __name__ == "__main__":
    main()
