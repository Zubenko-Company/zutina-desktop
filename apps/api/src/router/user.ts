import bcrypt from "bcrypt";
import { z } from "zod";

import { publicProcedure } from "../trpc";

export const userRouter = {
  login: publicProcedure
    .input(z.object({ login: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const [user, count] = await ctx.db.User.findAndCount({
        where: { name: input.login },
      });

      if (count === 0) {
        throw Error("User does not exist");
      }

      if (!(await bcrypt.compare(input.password, user[0]?.password!))) {
        throw Error("Invalid password");
      }

      return "success";
    }),
  register: publicProcedure
    .input(z.object({ login: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const [, count] = await ctx.db.User.findAndCount({
        where: { name: input.login },
      });

      if (count > 0) {
        throw Error(`User ${input.login} allready exist`);
      }

      await ctx.db.User.insert({
        name: input.login,
        password: await bcrypt.hash(input.password, 10),
      });

      ctx.res.status(201);
      return {};
    }),
};
