import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Todos = mongoose.model("TODO", Schema);
export default Todos;
