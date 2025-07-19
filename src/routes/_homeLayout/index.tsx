import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_homeLayout/')({
  component: App,
});

function App() {
  return <div>home</div>;
}
