import UserContextProvider from "./Context/UserContextProvider";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
function App() {
  return (
    <UserContextProvider>
      
      <h1 className="bg-gray-400">this is App Component</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
