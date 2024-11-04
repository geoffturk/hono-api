import createApp from "@/lib/create-app.js";

const app = createApp();

app.get("/", (c) => {
  c.var.logger.info("Hello Hono!");
  return c.text("Hello Hono!");
});

export default app;
