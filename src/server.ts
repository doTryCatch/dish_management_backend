import express from "express";
import router from "./routes/router";
import { createServer } from "http";
const app = express();
app.use(express.json());
export const appServer = createServer(app);
const PORT = process.env.PORT || 4000;
app.use("/api", router);
appServer.listen(PORT, () => {
  console.log("app is running at port: ", PORT);
});
