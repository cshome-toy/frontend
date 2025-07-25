import { RegisterContainer } from '@/widgets/register/ui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authLayout/register')({
  component: RouteComponent,
});

function RouteComponent() {
  return <RegisterContainer />;
}
