/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1)
 * 2. You want to create a new middleware or type of procedure (see Part 3)
 *
 * tl;dr - this is where all the tRPC server stuff is created and plugged in.
 * The pieces you will need to use are documented accordingly near the end
 */
import type { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import type _fastify from "fastify";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

import { createDatabaseConnection, Entities } from "./db/create";

const db = createDatabaseConnection({
  host: "127.0.0.1",
  port: 5432,
  password: "test",
  username: "test",
});

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */
export const createTRPCContext = async ({
  req,
  res,
}: CreateFastifyContextOptions) => {
  return {
    fastify: req.server,
    db: await db.then(() => Entities),
    req,
    res,
  };
};

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

/**
 * 2. INITIALIZATION
 *
 * This is where the trpc api is initialized, connecting the context and
 * transformer
 */
const t = initTRPC.context<Context>().create({
  transformer: superjson,
  // errorFormatter: ({ shape, error }) => ({
  //   ...shape,
  //   data: {
  //     ...shape.data,
  //     zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
  //   },
  // }),
});

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these
 * a lot in the /src/server/api/routers folder
 */

/**
 * This is how you create new routers and subrouters in your tRPC API
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthed) procedure
 *
 * This is the base piece you use to build new queries and mutations on your
 * tRPC API. It does not guarantee that a user querying is authorized, but you
 * can still access user session data if they are logged in
 */
export const publicProcedure = t.procedure;