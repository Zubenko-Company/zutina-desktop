import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import sensible from "@fastify/sensible";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";

import { config } from "./config/config";
import { env } from "./config/env";
import { appRouter } from "./root";
import { createTRPCContext } from "./trpc";

(() => {
  const app = fastify({
    logger: config[env.NODE_ENV].logger,
  })
    .register(sensible)
    .register(fastifyTRPCPlugin, {
      prefix: "/trpc",
      trpcOptions: { router: appRouter, createContext: createTRPCContext },
    })
    .register(cors, { origin: "*", credentials: true })
    .register(helmet);

  if (env.HOST) {
    app.listen(
      {
        port: env.PORT,
        host: env.HOST,
      },
      (err, _address) => {
        if (err) {
          app.log.error(err);
          process.exit(1);
        }
      },
    );
  } else {
    app.listen(
      {
        port: env.PORT,
      },
      (err, _address) => {
        if (err) {
          app.log.error(err);
          process.exit(1);
        }
      },
    );
  }
})();
