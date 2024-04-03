import { createContext, useState } from "react";
import { Theme } from "./constants";
import { LeftNavigator } from "./components/LeftNavigator";

export const ThemeContext = createContext();

function App() {
  const  [theme, setTheme] = useState(Theme.LIGHT);

  const css = {
    fontFamily: "JetBrains Mono",
    fontSize: "1em",
    padding: "0px",
    margin: "0px",
    display: "flex",
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={css} className="App">
        <LeftNavigator>Hello</LeftNavigator>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
