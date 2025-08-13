import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #1B2A49 0%, #2A3F6B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00FF85',
          fontWeight: 'bold',
          borderRadius: '24px',
          border: '4px solid #00FF85',
          boxShadow: '0 0 30px rgba(0, 255, 133, 0.3)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '48px', lineHeight: '1' }}>NIKO</span>
          <span style={{ fontSize: '32px', lineHeight: '1', color: '#EDEDED' }}>
            3D
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
