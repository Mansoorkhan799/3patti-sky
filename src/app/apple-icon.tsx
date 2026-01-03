import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppleIcon() {
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
          borderRadius: '22%',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: '-2px',
              marginBottom: '-8px',
            }}
          >
            3P
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              marginTop: '-12px',
            }}
          >
            Sky
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

