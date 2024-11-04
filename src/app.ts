import createApp from "@/lib/create-app.js";

import configureOpenAPI from "./lib/configure-openapi.js";

const app = createApp();

configureOpenAPI(app);

export default app;
