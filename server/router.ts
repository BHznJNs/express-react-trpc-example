import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

const publicProcedure = t.procedure;
const router = t.router;

export const appRouter = router({
  greeting: publicProcedure
    .input(
      z
        .object({
          name: z.string().nullish(),
        })
        .nullish(),
    )
    .query(({ input }) => {
      return {
        text: `hello ${input?.name ?? 'world'}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
