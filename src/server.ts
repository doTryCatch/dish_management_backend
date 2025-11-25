import express from "express";
import router from "./routes/router";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
export const appServer = createServer(app);

export const io = new Server(appServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
app.use("/api", router);

appServer.listen(PORT, () => {
  console.log("app is running at port: ", PORT);
});
