export const NotFound = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <span style={{ color: '#e57c5a', fontSize: '86px', fontWeight: 'bold' }}>404</span>
      <p style={{ fontSize: '20px' }}>Page Not Found</p>
    </div>
  );
};
