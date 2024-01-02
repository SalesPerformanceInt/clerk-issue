// Based on [tiny-invariant](https://www.npmjs.com/package/tiny-invariant)

const PREFIX = "Invariant failed";

export function invariant(
  condition: any,
  message?: string | (() => string),
  expected?: any,
): asserts condition {
  if (condition) {
    return;
  }
  const str = (obj: any) => JSON.stringify(obj);

  const provided = typeof message === "function" ? message() : message;

  const value = provided 
    ? `${PREFIX}: ${provided}, condition: ${str(condition)}, expected: ${str(expected)}` 
    : PREFIX;
    
  throw new Error(value);
}
