import React from "react";

const TodoItem = ({todo, setTodos, todos }) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
      setTodos(todos.map((el) => {
          if (el.id === todo.id) {
              return {...el, completed: !el.completed}
          }
          return el
      }))
  }

  return (
    <div className="flex justify-between bg-cyberpunk_light_blue text-white mb-3">
      <li 
        className={`m-2 ${todo.completed ? "line-through text-gray-600" : ""}`}>{todo.text}</li>
      <div className="flex ">
        <button 
            onClick={completeHandler} 
            className={`px-4 ${ todo.completed ? "bg-cyberpunk_green text-black" : "bg-cyberpunk_green" }`} >
                {todo.completed ? "✓" : "✓"}
        </button>
        <button onClick={deleteHandler} className="bg-cyberpunk_pink px-4">X</button>
      </div>
    </div>
  );
};

export { TodoItem };
