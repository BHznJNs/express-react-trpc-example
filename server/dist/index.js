"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@trpc/server/adapters/express");
const cors_1 = __importDefault(require("cors"));
const express_2 = __importDefault(require("express"));
const router_1 = require("./router");
const app = (0, express_2.default)();
app.use((0, cors_1.default)());
app.use('/trpc', (0, express_1.createExpressMiddleware)({
    router: router_1.appRouter,
    createContext() {
        console.log('context 3');
        return {};
    },
}));
app.listen(2022, () => {
    console.log('tRPC server listening on http://localhost:2022/trpc');
});
