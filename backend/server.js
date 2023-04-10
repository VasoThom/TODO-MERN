import express from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
