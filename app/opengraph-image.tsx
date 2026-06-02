import { ImageResponse } from 'next/og';

export const alt = 'Aphiwat On-at — Software Developer Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #f7f7fa, #DBEAFE, #f7f7fa)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#121212',
            textAlign: 'center',
            marginBottom: 24,
            letterSpacing: '-0.05em',
          }}
        >
          Aphiwat On-at
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#2D7FF9',
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          Software Developer Portfolio
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#64748b',
            textAlign: 'center',
            marginTop: 48,
          }}
        >
          KMUTNB • Next.js • React • Full-Stack
        </div>
      </div>
    ),
    { ...size }
  );
}
