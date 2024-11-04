import type { PinoLogger } from "hono-pino";

import { serveStatic } from "@hono/node-server/serve-static";
import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";

import { logger } from "@/middlewares/pino-logger.js";

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
};

const app = new OpenAPIHono<AppBindings>();

app.use("*", serveStatic({ root: "./static" }));
app.use(logger());

app.get("/", (c) => {
  c.var.logger.info("Hello Hono!");
  return c.text("Hello Hono!");
});

app.notFound(notFound);
app.onError(onError);

export default app;
