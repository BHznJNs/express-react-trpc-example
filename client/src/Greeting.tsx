import { useQuery } from '@tanstack/react-query';
import { trpc } from './utils/trpc';

export function Greeting() {
  const { data, isLoading, error} = useQuery(trpc.greeting.queryOptions({ name: 'tRPC user' }));

  if (isLoading) {
    return "Loading...";
  }

  if (error !== null) {
    return "Error: " + JSON.stringify(error);
  }

  return <div>{data?.text}</div>;
}
