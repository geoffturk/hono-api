import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

import { createRouter } from "@/lib/create-app.js";

const router = createRouter()
  .openapi(
    createRoute({
      method: "get",
      path: "/",
      responses: {
        [HttpStatusCodes.OK]: jsonContent(
          createMessageObjectSchema("Hono API doc example message"),
          "Hono API doc description",
        ),
      },
    }),
    (c) => {
      return c.json({
        message: "Hono API Index message",
      }, HttpStatusCodes.OK);
    },
  );

export default router;
