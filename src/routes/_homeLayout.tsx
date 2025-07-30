import { PATH } from '@/shared/constants';
import { fetchLoginStatus } from '@/shared/utils';
import { container, mainContent } from '@/shared/styles/container.css';
import { ChannelSelector, Header, SideBar, UserInfo } from '@/widgets/menu/ui';
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_homeLayout')({
  beforeLoad: () => {
    const isAuthenticated = fetchLoginStatus();
    if (!isAuthenticated) {
      throw redirect({
        to: PATH.LOGIN,
      });
    }
  },
  component: () => (
    <div className={container}>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative', display: 'flex' }}>
          <SideBar />
          <ChannelSelector />
          <UserInfo />
        </div>
        <div className={mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  ),
});
