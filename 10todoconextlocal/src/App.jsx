import { useEffect, useState } from "react";
import { useTodo, TodoContext, TodoProvider } from "./Context/index";
import { TodoForm, TodoList } from "./Component/index";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos, "todos array");
  const addTodo = (todo) => {
    setTodos((pretodos) => [{ id: Date.now(), ...todo }, ...pretodos]);
    console.log(todos, "addtodos console");
  };

  const updateTodo = (id, todo) => {
    setTodos((preTodo) =>
      preTodo.map((item) => (item.id === id ? todo : item))
    );
  };
  const deleteTodo = (id) => {
    setTodos((preTodo) => preTodo.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos((preTodo) =>
      preTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.compeleted } : todo
      )
    );
  };


  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem("todos"));
    if (getTodo && getTodo.length > 0) {
      setTodos(getTodo);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              <TodoForm />
            </h1>
            <div className="mb-4">{/* Todo form goes here */}</div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoList todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
