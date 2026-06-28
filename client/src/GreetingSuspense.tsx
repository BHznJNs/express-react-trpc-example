import { QueryErrorResetBoundary, useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from './utils/trpc';
import { Button } from './components/ui/button';

function GreetingContent() {
  const { data } = useSuspenseQuery(trpc.greeting.queryOptions({ name: 'tRPC user' }));
  return <div>{data?.text}</div>;
}

function GreetingFallback() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-5 w-48" />
    </div>
  );
}

function GreetingErrorFallback({ error, resetErrorBoundary }: {
  error: unknown;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="text-red-600">
      <p className="mb-2">Error occurs: </p>
      <Button onClick={resetErrorBoundary}>Retry</Button>
    </div>
  );
}

export function GreetingSuspense() {
  return (
    <QueryErrorResetBoundary>
      {({reset}) => (
        <ErrorBoundary onReset={reset} FallbackComponent={GreetingErrorFallback}>
          <Suspense fallback={<GreetingFallback />}>
            <GreetingContent />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
