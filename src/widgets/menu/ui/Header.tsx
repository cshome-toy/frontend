import { header, headerContent } from '@/widgets/menu/styles';

export default function Header() {
  return (
    <div className={header}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '20px', height: '20px', backgroundColor: 'red' }} />
        <span>cshome</span>
        <div className={headerContent}>
          <img src='/icons/icon-message.svg' alt='message' />
          <img src='/icons/icon-help.svg' alt='help' width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
