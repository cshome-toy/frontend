import { useEffect } from 'react';

import { CHAT_LIST } from '@/shared/mock';
import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_homeLayout/$serverTitle')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { serverTitle } = Route.useParams();
  const chatRoomId = CHAT_LIST[serverTitle][0].id;

  useEffect(() => {
    navigate({ to: '/$serverTitle/chat/$chatRoomId', params: { serverTitle, chatRoomId } });
  }, [navigate, serverTitle]);

  return <Outlet />;
}
