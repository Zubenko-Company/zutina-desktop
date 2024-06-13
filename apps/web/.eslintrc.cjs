import baseConfig, { restrictEnvAccess } from "@zutina/eslint-config/base";
import reactConfig from "@zutina/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...restrictEnvAccess,
];
