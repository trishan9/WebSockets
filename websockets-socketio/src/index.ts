import http from "http";
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { Server } from "socket.io";

import config from "./config";
import router from "./modules/v1/main.router";

const app: Express = express();
const server = http.createServer(app);
const io = new Server(server);

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));
app.use(cors());
app.use(helmet());

app.use(express.json());

app.get("/", (_req, res, _next) => {
  return res.sendFile(path.join(publicPath, "index.html"));
});

app.use("/api/v1", router);

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    io.emit("message", data);
  });
});

server.listen(config.app.port, () =>
  console.log(`Listening on port ${config.app.port}`),
);

export default server;
