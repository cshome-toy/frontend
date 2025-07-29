import { authBackground, authContainer, authContainerWrapper, authLogo } from '@/shared/styles/authLayout.css';
import { container } from '@/shared/styles/container.css';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authLayout')({
  component: () => (
    <div className={container}>
      <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
        <img src='images/image-auth.svg' alt='auth-image' className={authBackground} />
        <img src='icons/icon-logowithtext.svg' alt='logo' className={authLogo} />
        <div className={authContainerWrapper}>
          <div className={authContainer}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  ),
});
