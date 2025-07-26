import { createFileRoute } from '@tanstack/react-router';
import { CHANNEL_LIST } from '@/shared/mock/server';

export const Route = createFileRoute('/_homeLayout/$serverTitle/board/$boardId')({
  component: () => {
    const { serverTitle, boardId } = Route.useParams();

    const board = CHANNEL_LIST[serverTitle]?.board.items.find(
      (b) => b.id === boardId
    );
    const title = board?.title ?? '게시판';

    return (
      <div>
        <h2># {title}</h2>
        <p>게시판 ID: {boardId}</p>
      </div>
    );
  },
});
