import TodoList from "../pure-function/TodoList";
import { useEffect, useState } from "react";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
const listTodo = ["Learn React", "Learn TypeScript", "Learn Redux"];

const Todo = () => {
  const time = useTime();
  const [state, setState] = useState([...listTodo]);

  return (
    <div>
      <h1>Todo List</h1>
      <p>{time.toLocaleTimeString()}</p>
      <TodoList listTodo={state} />
    </div>
  );
};

export default Todo;
