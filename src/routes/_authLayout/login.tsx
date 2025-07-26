import { LoginContainer } from '@/widgets/login/ui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authLayout/login')({
  component: LoginComponent,
});

function LoginComponent() {
  return <LoginContainer />;
}
