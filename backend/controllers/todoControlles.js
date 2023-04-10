import { response } from "express";
import Todos from "../models/todoSchema.js";

export const getAllTodos = async (req, res) => {
  const todos = await Todos.find();
  res.json(todos);
};

export const createTodos = async (req, res) => {
  const { text } = req.body;
  const todo = await Todos.create({ text }).then((todo) => {
    console.log("Created todo successfully");
    res.json("created Successfully");

    console.log(todo);
  });
  res.json(todo);
};

export const updateTodos = async (req, res) => {
  const { _id, text } = req.body;

  const updateTodo = await Todos.findByIdAndUpdate(_id, { text })
    .then(() => {
      console.log("Updated todo successfully");
      res.json("updated Successfully");
    })
    .catch((err) => {
      console.log(err);
    });

  res.json(updateTodo);
};

export const deletedTodos = async (req, res) => {
  const { _id } = req.body;

  const removeTodo = await Todos.findByIdAndDelete(_id)
    .then(() => {
      console.log("deleted todo successfully");
      res.json("deleted Successfully");
    })

    .catch((err) => {
      console.log(err);
    });

  res.json(removeTodo);
};
