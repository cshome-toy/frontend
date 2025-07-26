
import { createFileRoute } from '@tanstack/react-router';
import ChatRoom from '@/widgets/menu/ui/chatRoom';

export const Route = createFileRoute(
  '/_homeLayout/$serverTitle/chat/$chatRoomId'
)({
  component: () => {
    const { serverTitle, chatRoomId } = Route.useParams();
    return <ChatRoom serverTitle={serverTitle} chatRoomId={chatRoomId} />;
  },
});
