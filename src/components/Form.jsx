import React from "react";

const Form = ({inputTextHandler, inputState, submitTodoHandler, todos, setTodos}) => {
  return (
    <form className="flex justify-center w-full bg-black mb-10">
      <input 
        type="text" 
        className="w-6/12" 
        onChange={inputTextHandler}
        value={inputState}
      />
      <button 
        className="w-2/12 bg-green-300"
        onClick={submitTodoHandler}
        >
          +
      </button>
      
          <select name="" id="" className="bg-yellow-300 w-4/12">
              <option value="">All</option>
              <option value="">Completed</option>
              <option value="">Uncompleted</option>
          </select>
      
    </form>
  );
};

export { Form };
