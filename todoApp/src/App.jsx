import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../../counter/src/App";

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "workout",
      description: "go to gym everyday",
      status: false,
    },
  ]);

  function addTodo() {
    let newArr = [...todos];

    newArr.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description"),
      status: "true",
    });
    setTodos(newArr);
  }

  return (
    <>
      <input id="title" type="text" placeholder="write todos" />
      <input id="description" type="text" placeholder="write description" />
      <br />
      <button onClick={addTodo}>Add to-do</button>
      <br />
      {todos.map((todo) => (
        <Todo
          title={"Akshay"}
          description={"Akshay ladne"}
          status={true}
        ></Todo>
      ))}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h1>{props.status ? "Task is done" : "Task is not done"}</h1>
    </div>
  );
}
