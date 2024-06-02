import type _fastify from "fastify";
import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@zutina/api";

export const trpc = createTRPCReact<AppRouter>();

// const sas = {
//   config() {
//     return {
//       queryClientConfig: {
//         defaultOptions: {
//           queries: {
//             refetchOnWindowFocus: false,
//           },
//         },
//       },
//       transformer: SuperJSON,
//       links: [
//         loggerLink({
//           enabled: (op) =>
//             env.NODE_ENV === "development" ||
//             (op.direction === "down" && op.result instanceof Error),
//         }),
//         httpBatchLink({
//           url: getBaseUrl() + "/api/trpc",
//         }),
//       ],
//     };
//   },
//   ssr: false,
// };

const getBaseUrl = () => {
  return process.env.INFORMER_API_URL ?? "http://localhost:5000";
};
