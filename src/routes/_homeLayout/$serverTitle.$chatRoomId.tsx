import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_homeLayout/$serverTitle/$chatRoomId')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {Route.useParams().serverTitle} {Route.useParams().chatRoomId}
    </div>
  );
}
