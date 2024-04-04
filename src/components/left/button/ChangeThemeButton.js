import { useContext, useState } from "react";
import { ThemeContext } from "../../../App";
import { Theme } from "../../../constants";
import "./button.css"

export function ChangeThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [icon, setIcon] = useState(theme.themeIcon);

  const css = {
    color: Theme.switch(theme).textColor,
    backgroundColor: theme.buttonColor,
  };

  const changeTheme = () => {
    const oppositeTheme = Theme.switch(theme);
    setTheme(oppositeTheme);
    setIcon(oppositeTheme.themeIcon);
  };

  return (
    <div className="nf button" style={css} onClick={changeTheme}>
      {icon}
    </div>
  );
}
