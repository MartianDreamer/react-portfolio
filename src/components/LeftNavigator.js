import { useContext } from "react";
import { ThemeContext } from "../App";

export function LeftNavigator({ children }) {
  const { theme} = useContext(ThemeContext);

  const css = {
    minHeight: "100vh",
    width: "340px",
    marginRight: "2px",
    borderRadius: "5px",
    transition: "background-color 2s",
    backgroundColor: theme.color1,
  };

  return <div style={css}>{children}</div>;
}
