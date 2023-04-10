import Router from "express";
import {
  createTodos,
  deletedTodos,
  getAllTodos,
  updateTodos,
} from "../controllers/todoControlles.js";
// import * as todos from "../controllers/todos.js";
const router = Router();

router.get("/", getAllTodos);
router.post("/create", createTodos);
router.put("/update", updateTodos);
router.delete("/delete", deletedTodos);

export default router;
