import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  greeting: publicProcedure
    .input(
      z
        .object({
          name: z.string().nullish(),
        })
        .nullish(),
    )
    .output(
      z.
        object({
          text: z.string()
        })
    )
    .query(({ input }) => {
      return new Promise((res, rej) => {
        // rej(new Error("example error"))
        setTimeout(() => {
          res({
            text: `hello ${input?.name ?? 'world'}`,
          })
        }, 5000)
      })
    }),
});

export type AppRouter = typeof appRouter;
