import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { notFound, onError } from "stoker/middlewares";

import { logger } from "@/middlewares/pino-logger.js";

expand(config());

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
};

const app = new OpenAPIHono<AppBindings>();
app.use(logger());

app.get("/", (c) => {
  c.var.logger.info("Hello Hono!");
  return c.text("Hello Hono!");
});

app.notFound(notFound);
app.onError(onError);

export default app;
