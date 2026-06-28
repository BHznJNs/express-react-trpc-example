import { QueryClientProvider } from '@tanstack/react-query';
import { Greeting } from './Greeting';
import { GreetingSuspense } from './GreetingSuspense';
import { queryClient } from './utils/trpc';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Greeting />
      <GreetingSuspense />
    </QueryClientProvider>
  );
}
