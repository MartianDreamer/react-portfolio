import { createContext, useState } from "react";
import { LeftNavigator } from "./components/left/LeftNavigator";
import { RightContainer } from "./components/right/RightContainer";
import { Theme } from "./constants";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const css = {
    fontFamily: "JetBrains Mono",
    fontSize: "1em",
    padding: "0px",
    margin: "0px",
    display: "flex",
    color: theme.textColor,
    transition: "color 2s",
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={css} className="App">
        <LeftNavigator />
        <RightContainer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
