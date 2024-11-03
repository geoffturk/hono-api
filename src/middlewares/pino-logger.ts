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
    pino: pino.default(pretty({
      colorize: true,
    }) as pino.DestinationStream),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  },
  );
}
