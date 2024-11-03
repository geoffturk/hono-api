import type { PinoLogger } from "hono-pino";

import { pinoLogger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";

import env from "@/env.js";

declare module "hono" {
  interface ContextVariableMap {
    logger: PinoLogger;
  }
}

export function logger() {
  return pinoLogger({

    pino: pino.default({ level: env.LOG_LEVEL || "info" }, env.NODE_ENV === "production"
      ? undefined
      : pretty({
        colorize: true,
      }) as pino.DestinationStream),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  },
  );
}
