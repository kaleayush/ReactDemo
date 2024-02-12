import "./App.css";
import AddTodo from "./Components/AddTodo";
import { Provider } from "react-redux";
import { store } from "./App/store";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Learn about redux toolKit</h1>
        <AddTodo />
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
