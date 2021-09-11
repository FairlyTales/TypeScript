import React, { useRef } from "react";

import "./NewTodo.css";

interface NewTodoProps {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const input = textInputRef.current!.value;
    props.addTodo(input);

    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
