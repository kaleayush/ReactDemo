import { useState } from "react";
import { useTodo, TodoContext, TodoProvider } from "./Context/index";
import "./App.css";
import { data } from "autoprefixer";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((pretodos) => [{ id: Date.now, ...todo }, ...pretodos]);
  };

  const updateTodo = (id, todo) => {
    setTodos((preTodo) =>
      preTodo.map((item) => (item.id === id ? todo : item))
    );
  };
  const deleteTodo = (id) => {
    setTodos((preTodo) => preTodo.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">{/* Todo form goes here */}</div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
