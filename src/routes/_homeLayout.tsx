import { container, mainContent } from '@/shared/styles/container.css';
import { ChannelSelector, Header, SideBar, UserInfo } from '@/widgets/menu/ui';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_homeLayout')({
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
