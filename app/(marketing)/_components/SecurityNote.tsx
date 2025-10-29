export default function SecurityNote() {
  return (
    <section className="section" id="security" style={{ backgroundColor: 'var(--background-alt)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
          セキュリティ & データ管理
        </h2>

        <div className="rounded-xl bg-white border border-primary/20 p-6">
          <p className="text-[var(--text-2)] leading-relaxed">
            <strong className="text-primary">NDA対応：</strong>秘密保持契約を締結し、機密情報を厳格に管理します。
            <br />
            <strong className="text-primary">私有Runner：</strong>お客様専用の実行環境でビルド・テストを実施。外部への情報流出を防ぎます。
            <br />
            <strong className="text-primary">最小権限：</strong>必要最小限のアクセス権のみを付与し、不要な権限は持ちません。
            <br />
            <strong className="text-primary">監査ログ：</strong>すべての操作を記録し、トレーサビリティを確保します。
          </p>
          <p className="mt-4 text-sm text-[var(--text-2)]">
            ※ 機密データを外部AIの学習に使用することはありません。
          </p>
        </div>
      </div>
    </section>
  );
}
