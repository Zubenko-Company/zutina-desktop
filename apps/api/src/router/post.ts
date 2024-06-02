import { z } from "zod";

import { publicProcedure } from "../trpc";

export const imagesRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.Images.find();
  }),

  add: publicProcedure
    .input(z.object({ name: z.string(), base64: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.Images.insert({ base64: input.base64, name: input.name });
    }),
};
