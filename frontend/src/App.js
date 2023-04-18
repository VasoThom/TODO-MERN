import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo.js";
import { getAll, addAtask, updateAtask, deleteAtask } from "./lib/api.js";

function App() {
  const [toDo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  const [update, setIsUpdating] = useState(false);
  const [id, setId] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    getAll(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setValue(text);
    setId(_id);
  };
  console.log(toDo);

  return (
    <div className="App">
      <h1> Todo App</h1>

      <div className="container">
        <input
          type="text"
          placeholder="Add  a task..."
          value={value}
          onChange={onChange}
        />
        <button
          className="button"
          onClick={
            update
              ? () => updateAtask(id, value, setValue, setTodo, setIsUpdating)
              : () => {
                  if (value.trim() !== "") {
                    addAtask(value, setValue, setTodo);
                  }
                }
          }
        >
          {update ? "Update" : "Add"}
        </button>
      </div>
      <div className="todos">
        {toDo.map((todo) => {
          return (
            <Todo
              key={todo._id}
              text={todo.text}
              updateMode={() => updateMode(todo._id, todo.text)}
              deleteMode={() => deleteAtask(todo._id, setTodo)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
