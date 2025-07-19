import { container } from '@/shared/styles/container.css';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return <div className={container}>home</div>;
}
