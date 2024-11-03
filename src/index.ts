import { serve } from "@hono/node-server";

import app from "./app.js";

// eslint-disable-next-line node/no-process-env
const port = Number(process.env.PORT) || 3000;
// eslint-disable-next-line no-console
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
