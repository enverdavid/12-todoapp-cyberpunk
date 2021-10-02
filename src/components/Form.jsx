import React from "react";

const Form = (
  { inputTextHandler, 
    inputState, 
    submitTodoHandler, 
    setStatus, 
    statusHandler,
    filteredTodos
  }) => {
  return (
    <form className="flex justify-center w-full bg-cyberpunk_dark-blue mb-10">
      <input 
        type="text" 
        placeholder="Write a task..."
        onChange={inputTextHandler}
        value={inputState}
        className="w-6/12 bg-cyberpunk_light_blue text-white p-2 pl-2 outline-none" 
      />
      <button 
        className="w-2/12 bg-cyberpunk_green"
        onClick={submitTodoHandler}
        >
          +
      </button>
          <select 
            name=""  
            id="" 
            className="bg-cyberpunk_green ml-4 pl-2 w-4/12"
            onChange={statusHandler}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
          </select>
    </form>
  );
};

export { Form };
