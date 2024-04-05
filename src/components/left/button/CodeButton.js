import { useContext } from "react";
import { ThemeContext } from "../../../App";
import { Theme } from "../../../theme";
import "./button.css"

export function CodeButton() {
  const icon = "\ue796";

  const { theme } = useContext(ThemeContext);

  const css = {
    color: Theme.switch(theme).textColor,
    backgroundColor: theme.buttonColor,
    textDecoration: "none",
    marginRight: "10px",
  };

  return (
    <a
      className="nf button"
      href="https://github.com/MartianDreamer/react-portfolio"
      style={css}
    >
      {icon}
    </a>
  );
}
