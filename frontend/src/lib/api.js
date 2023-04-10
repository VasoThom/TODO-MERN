import axios from "axios";

const baseUrl = "http://localhost:4050/api";

const getAll = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log(`data`, data);
    setTodo(data);
  });
};

// const getAll = async (setTodo) => {
//   const response = await fetch(baseUrl, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(setTodo),
//   });
//   const result = await response.json();
//   console.log("Success:", result);
// };

const addAtask = (text, setValue, setTodo) => {
  axios
    .post(`${baseUrl}/create`, { text })
    .then((data) => {
      console.log(data);
      setValue("");
      getAll(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateAtask = (toDoId, text, setTodo, setValue, setIsUpdating) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setValue("");
      setIsUpdating(false);
      getAll(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteAtask = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      //console.log(data);
      getAll(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAll, addAtask, updateAtask, deleteAtask };
