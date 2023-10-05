type LogErrorProps = {
  error: Error | unknown;
  log?: string;
  returnedValue?: unknown;
};

export const logError = ({
  error,
  log,
  returnedValue = null,
}: LogErrorProps) => {
  const message = log ? `ERROR - ${log}` : "ERROR";

  console.error(message, error);

  return returnedValue;
};
