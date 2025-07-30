import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_homeLayout/')({
  component: App,
});

function App() {
  return (
    <div style={{ color: 'white', display: 'grid', placeItems: 'center', height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
        <img src='/icons/icon-logo.svg' alt='logo' style={{ width: '300px', height: '300px' }} />
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>서버를 선택해주세요.</div>
      </div>
    </div>
  );
}
