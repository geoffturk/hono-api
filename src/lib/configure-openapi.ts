import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types.js";

import packageJson from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJson.version,
      title: "Hono API",
    },
  });

  app.get(
    "/reference",
    apiReference({
      theme: "kepler",
      layout: "classic",
      spec: {
        url: "/doc",
      },
    }),
  );
}
