import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'エンジニアがいなくても、AIがあれば開発できる | AI活用開発BPO';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* ロゴマーク風 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#2563eb',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            SE
          </div>
        </div>

        {/* メインタイトル */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '24px',
            lineHeight: 1.2,
          }}
        >
          エンジニアがいなくても、
          <br />
          AIがあれば、開発できる。
        </div>

        {/* サブタイトル */}
        <div
          style={{
            fontSize: '32px',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          AI活用で、従来の1/3の時間とコストで開発
        </div>

        {/* KPI表示 */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: '#2563eb',
              padding: '14px 28px',
              borderRadius: '12px',
              color: 'white',
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            AI活用で開発時間1/3
          </div>
          <div
            style={{
              background: '#2563eb',
              padding: '14px 28px',
              borderRadius: '12px',
              color: 'white',
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            デバッグ自動化
          </div>
          <div
            style={{
              background: '#2563eb',
              padding: '14px 28px',
              borderRadius: '12px',
              color: 'white',
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            月3万円〜
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            fontSize: '28px',
            color: '#64748b',
          }}
        >
          aibpo.onrender.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
