import { Server } from "socket.io";
import { appServer } from "./server";
export const io = new Server(appServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("client connected: ", socket.id);
});
