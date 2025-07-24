import { createFileRoute } from '@tanstack/react-router';
import { CHANNEL_LIST } from '@/shared/mock/server';

export const Route = createFileRoute('/_homeLayout/$serverTitle/chat/$chatRoomId')({
  component: () => {
    const { serverTitle, chatRoomId } = Route.useParams();

    const channel = CHANNEL_LIST[serverTitle]?.chat.items.find(
      (c) => c.id === chatRoomId
    );
    const title = channel?.title ?? '채팅방';

    return (
      <div>
        <h2># {title}</h2>
        <p>채팅 ID: {chatRoomId}</p>
      </div>
    );
  },
});
