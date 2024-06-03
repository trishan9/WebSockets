import http from "http";
import express, { Express } from "express";
import { WebSocketServer } from "ws";

import config from "./config";

const app: Express = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("User connected!");
  ws.on("message", (data) => {
    console.log(data);
    ws.send("Hello World");
  });
});

app.get("/health", (req, res) => {
  return res.json({
    message: "I am healthy!",
  });
});

server.listen(config.app.port, () =>
  console.log(`Listening on port ${config.app.port}`),
);
