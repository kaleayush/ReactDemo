import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    const dom = document.querySelector("html").classList;
    dom.remove("light", "dark");
    dom.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn/>
          </div>
            <Card/>
          <div className="w-full max-w-sm mx-auto">{/* card */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
