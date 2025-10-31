import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'スポットエンジニア | 月3万円から、AI人材をスポットでお届け';
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
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '24px',
            lineHeight: 1.2,
          }}
        >
          スポットエンジニア
        </div>

        {/* サブタイトル */}
        <div
          style={{
            fontSize: '36px',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          月3万円から、AI人材をスポットでお届け
        </div>

        {/* KPI表示 */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#2563eb',
              padding: '16px 32px',
              borderRadius: '12px',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            初回応答24h以内
          </div>
          <div
            style={{
              background: '#2563eb',
              padding: '16px 32px',
              borderRadius: '12px',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            当日着手（Pro）
          </div>
          <div
            style={{
              background: '#2563eb',
              padding: '16px 32px',
              borderRadius: '12px',
              color: 'white',
              fontSize: '24px',
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
