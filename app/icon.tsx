import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: 'linear-gradient(135deg, #1B2A49 0%, #2A3F6B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00FF85',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: '2px solid #00FF85',
          boxShadow: '0 0 10px rgba(0, 255, 133, 0.3)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1px',
          }}
        >
          <span style={{ fontSize: '14px', lineHeight: '1' }}>NIKO</span>
          <span style={{ fontSize: '10px', lineHeight: '1', color: '#EDEDED' }}>
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
