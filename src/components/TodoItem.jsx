import React from "react";

const TodoItem = ({todo, setTodos, todos }) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="flex justify-between bg-white mb-2">
      <li className="bg-white m-1">{todo.text}</li>
      <div className="flex ">
        <button className="bg-green-300 px-4">Complete</button>
        <button onClick={deleteHandler} className="bg-red-300 px-4">Trash</button>
      </div>
    </div>
  );
};

export { TodoItem };
