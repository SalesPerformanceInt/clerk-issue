const path = require("path");

export default {
  test: {
    server: {
      deps: {
        inline: ["@salesperformanceint/notification-service-js"],
      },
    },
    setupFiles: ["dotenv/config"],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
};
