import _ from "lodash";

const TodoList = ({ listTodo }) => {
  const newTodo = _.clone(listTodo);
  newTodo.push("hello world");
  return (
    <ul>
      {newTodo.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
