import express from "express";
import "./lib/mongoose.js";
import dotenv from "dotenv";
dotenv.config();
import todoRouter from "./routes/todoRoutes.js";

const server = express();
const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use("/", todoRouter);
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
