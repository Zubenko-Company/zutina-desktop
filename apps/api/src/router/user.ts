import { z } from "zod";

import { publicProcedure } from "../trpc";

export const userRouter = {
  //   login: publicProcedure.input(z.object({ login: z.string(), password: z.string() })).query(({ ctx }) => {
  //     return ctx.db.Images.find();
  //   }),
  register: publicProcedure
    .input(z.object({ login: z.string(), password: z.string() }))
    .mutation(({ ctx, input }) => {
      ctx.db.User.insert({ name: input.login, password: input.password });
      return "me"; //todo
    }),
};
