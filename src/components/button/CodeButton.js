import { useContext } from "react";
import { Theme } from "../../constants";
import { button } from "./css";
import { ThemeContext } from "../../App";

export function CodeButton() {
  const icon = "\ue796";

  const { theme } = useContext(ThemeContext);

  const css = {
    ...button,
    color: Theme.switch(theme).textColor,
    backgroundColor: theme.buttonColor,
    textDecoration: "none",
    marginRight: "10px",
  };

  return (
    <a
      className="nf"
      href="https://github.com/MartianDreamer/react-portfolio"
      style={css}
    >
      {icon}
    </a>
  );
}
