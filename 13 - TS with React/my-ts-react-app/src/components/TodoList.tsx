import React from "react";

import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  delTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const items = props.items;

  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.delTodo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
