import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '25%',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-1px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: '0.9',
          }}
        >
          <span style={{ fontSize: 16 }}>3P</span>
          <span style={{ fontSize: 14 }}>S</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

