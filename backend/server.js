import express from "express";
import "./lib/mongoose.js";
import dotenv from "dotenv";
dotenv.config();
import todoRouter from "./routes/todoRoutes.js";
import cors from "cors";

const server = express();
const PORT = process.env.PORT || 5000;
server.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

server.use(express.json());
server.use("/api", todoRouter);
server.use(cors());

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
