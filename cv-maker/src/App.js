import Input from "./components/Input";
import Overview from "./components/Overview";
import { useState } from "react";

function App() {

  const [nextId, setId] = useState(0)

  const [todoList, setTodoList] = useState([])

  const submitTask = (taskName) => {
    setTodoList(
      [
        ...todoList,
        {id: nextId , name: taskName}

      ]);
      setId(nextId + 1)
  }

  const deleteItem = (id) => {
    
    const arr = todoList.filter((item) => item.id !== id);
        
    setTodoList(arr)
  }

  return (
    <div>
      <h1> Task Overview </h1>
      <Input submitTask={submitTask}/>
      <Overview todoList={todoList} click={deleteItem}/>
    </div>
  );
}

export default App;
