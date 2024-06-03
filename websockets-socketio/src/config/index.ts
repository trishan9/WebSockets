import { CorsOptions } from "cors";

import { env } from "./env";

export default {
  app: {
    port: env.PORT,
    isProduction: env.NODE_ENV === "production",
  },
  cors: {
    origin: [
      "http://localhost:8000",
      "http://127.0.0.1:8000",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      env.CLIENT_BASE_URL,
    ],
    credentials: true,
  } as CorsOptions,
} as const;
