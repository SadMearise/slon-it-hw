const createLogger = () => {
  const logs = [];

  return {
    log: (message) => {
      logs.push(message);
    },
    getLogs: () => {
      return [...logs];
    }
  }
}
