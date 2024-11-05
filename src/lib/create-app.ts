import { serveStatic } from "@hono/node-server/serve-static";
import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";

import { logger } from "@/middlewares/pino-logger.js";

import type { AppBindings } from "./types.js";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp() {
  const app = createRouter();
  app.use("*", serveStatic({ root: "./static" }));
  app.use(logger());

  app.notFound(notFound);
  app.onError(onError);
  return app;
}
