import { imagesRouter } from "./router/post";
import { userRouter } from "./router/user";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  images: createTRPCRouter({ ...imagesRouter }),
  user: createTRPCRouter({ ...userRouter }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
