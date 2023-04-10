import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose;
mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected via mongoose DB..."))
  .catch((err) => console.log(err));
