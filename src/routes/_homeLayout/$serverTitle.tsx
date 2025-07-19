import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_homeLayout/$serverTitle')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={{ color: 'white' }}>
      <div>{Route.useParams().serverTitle}</div>
      <Outlet />
    </div>
  );
}
