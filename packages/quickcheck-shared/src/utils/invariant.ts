// Based on [tiny-invariant](https://www.npmjs.com/package/tiny-invariant)

const PREFIX = "Invariant failed";

export function invariant(
  condition: any,
  message?: string | (() => string),
  expected?: unknown,
): asserts condition {
  if (condition) {
    return;
  }

  const provided = typeof message === "function" ? message() : message;

  const value = provided 
    ? `${PREFIX}: ${provided}, condition: ${String(condition)}, expected: ${String(expected)}` 
    : PREFIX;
    
  throw new Error(value);
}
