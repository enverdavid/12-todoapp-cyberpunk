import { Form } from "./components/Form";
import { useState, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import logo from "./assets/icons/logo.png";

function App() {
  // State stuff
  const [inputState, setInputState] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONES when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();

    // Save to local
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const inputTextHandler = (e) => {
    setInputState(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputState, completed: false, id: Date.now() },
    ]);
    setInputState("");
  };

  const statusHandler = (ev) => {
    setStatus(ev.target.value);
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="w-full h-screen bg-cyberpunk_light_blue flex justify-center items-start flex-wrap">
      {/* <h3 className="">Valor del Input: {inputState}</h3> */}
      <div className="
        flex flex-col h-full
        justify-start bg-cyberpunk_dark_blue w-full overflow-hidden 
        px-4 md:px-20 xl:px-36">
      
        <img 
          src={logo} 
          alt="the principal logo" 
          className="w-2/3 mx-auto py-8"
        />

        <Form
          inputTextHandler={inputTextHandler}
          setInputState={setInputState}
          inputState={inputState}
          submitTodoHandler={submitTodoHandler}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          statusHandler={statusHandler}
        />
        <TodoList
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
