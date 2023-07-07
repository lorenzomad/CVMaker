import Input from "./components/Input";
import Overview from "./components/Overview";
import { useState } from "react";

function App() {

  let nextId = 0

  const [todoList, setTodoList] = useState([])

  const submitTask = (taskName) => {
    setTodoList(
      [
        ...todoList,
        {id: nextId++ , name: taskName}
      ]);
  }

  return (
    <div>
      <h1> Task Overview </h1>
      <Input submitTask={submitTask}/>
      <Overview todoList={todoList}/>
    </div>
  );
}

export default App;
