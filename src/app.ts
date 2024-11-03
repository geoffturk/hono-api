import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";

import { logger } from "@/middlewares/pino-logger.js";

const app = new OpenAPIHono();
app.use(logger());

app.get("/", (c) => {
  c.var.logger.info("Hello Hono!");
  return c.text("Hello Hono!");
});

app.notFound(notFound);
app.onError(onError);

export default app;
