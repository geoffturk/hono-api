import type { PinoLogger } from "hono-pino";

import { pinoLogger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";

declare module "hono" {
  interface ContextVariableMap {
    logger: PinoLogger;
  }
}

export function logger() {
  return pinoLogger({
    // eslint-disable-next-line node/no-process-env
    pino: pino.default({ level: process.env.LOG_LEVEL || "info" }, process.env.NODE_ENV === "production"
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
