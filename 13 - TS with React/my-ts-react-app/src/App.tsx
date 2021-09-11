import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import TodoModel from "./TodoModel";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Math.random().toString(),
      text,
    };
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const delTodo = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((el) => el.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList items={todos} delTodo={delTodo} />
    </div>
  );
};

export default App;
