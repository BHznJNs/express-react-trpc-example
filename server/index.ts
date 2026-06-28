import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { appRouter } from './router';

export type { AppRouter } from './router';

const app = express();

app.use(cors());

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext() {
      console.log('context 3');
      return {};
    },
  }),
);

app.listen(2022, () => {
  console.log('tRPC server listening on http://localhost:2022/trpc');
});