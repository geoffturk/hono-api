import * as HttpStatusCodes from "stoker/http-status-codes";

import type { AppRouteHandler } from "@/lib/types.js";

import type { ListRoute } from "./tasks.routes.js";

export const list: AppRouteHandler<ListRoute> = (c) => {
  c.var.logger.info("Tasks list");
  return c.json([{
    name: "Task 1",
    done: false,
  }, {
    name: "Task 2",
    done: true,
  }, {
    name: "Task 3",
    done: false,
  }], HttpStatusCodes.OK);
};
