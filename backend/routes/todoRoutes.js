import Router from "express";
// import * as todos from "../controllers/todos.js";
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from get" });
});

export default router;
