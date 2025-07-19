import { SERVER_LIST } from '@/shared/mock';
import { header, headerContent, headerImage } from '@/widgets/menu/styles';
import { useLocation } from '@tanstack/react-router';

export default function Header() {
  const current = useLocation().pathname;
  const title = current.split('/')[1];
  const image = SERVER_LIST.find((server) => server.title === title)?.image;

  return (
    <div className={header}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img className={headerImage} src={image || '/icons/icon-logo.svg'} alt='server' />
        <span>{title || 'Discord'}</span>
        <div className={headerContent}>
          <img src='/icons/icon-message.svg' alt='message' />
          <img src='/icons/icon-help.svg' alt='help' width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
