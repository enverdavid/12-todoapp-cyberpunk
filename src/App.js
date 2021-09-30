import { Form } from "./components/Form";
import { useState } from "react";
import { TodoList } from "./components/TodoList";


function App() {

  const [inputState, setInputState] = useState("");
  const [todos, setTodos] = useState([]);

  const inputTextHandler = (e) => {
      setInputState(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputState, completed: false, id: todos.length > 0 ? todos.length : 0}
    ]);
    console.log(todos)
    setInputState("")
  }

  return (
    <div className="w-full h-screen bg-light_brown flex justify-center items-center flex-wrap">
      {/* <h3 className="">Valor del Input: {inputState}</h3> */}
      <div className="flex flex-col h-1/2 justify-center items-center bg-medium_brown w-full overflow-hidden px-4">      
        <Form 
          inputTextHandler={inputTextHandler} 
          setInputState={setInputState} 
          inputState={inputState}
          submitTodoHandler={submitTodoHandler}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList 
            todos={todos}
            setTodos={setTodos}
        />
      </div>
      
        
    </div>
  );
}

export default App;
