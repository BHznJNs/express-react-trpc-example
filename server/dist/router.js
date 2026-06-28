"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const server_1 = require("@trpc/server");
const zod_1 = require("zod");
const t = server_1.initTRPC.create();
const publicProcedure = t.procedure;
const router = t.router;
exports.appRouter = router({
    greeting: publicProcedure
        .input(zod_1.z
        .object({
        name: zod_1.z.string().nullish(),
    })
        .nullish())
        .query(({ input }) => {
        return {
            text: `hello ${input?.name ?? 'world'}`,
        };
    }),
});
