// Based on [tiny-invariant](https://www.npmjs.com/package/tiny-invariant)
import { logError } from "./logger";

const PREFIX = "Invariant failed";

export class InvariantError extends Error {
  constructor(args: any) {
    super(args);
    this.name = "InvariantError";
    logError({ error: args, log: this.name });
  }
}
Object.defineProperty(InvariantError.prototype, "toJSON", {
  value: function () {
    return { invariant: this.message };
  },
  configurable: true,
  writable: true,
});

export type AnyError = Error | InvariantError;

export function invariant(
  condition: any,
  message?: string | (() => string),
  loggable?: any,
): asserts condition {
  if (condition) {
    return;
  }

  const provided = typeof message === "function" ? message() : message;

  const value = provided ? `${PREFIX}: ${provided}, got: ${condition}` : PREFIX;
  console.error({
    unexpected: loggable,
    json: JSON.stringify(loggable, null, 2),
  });
  throw new InvariantError(value);
}
