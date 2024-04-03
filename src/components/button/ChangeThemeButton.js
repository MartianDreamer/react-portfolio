import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { Theme } from "../../constants";
import { button } from "./css";

export function ChangeThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [icon, setIcon] = useState(theme.themeIcon);

  const css = {
    ...button,
    color: Theme.switch(theme).textColor,
    backgroundColor: theme.buttonColor,
  };

  const changeTheme = () => {
    const oppositeTheme = Theme.switch(theme);
    setTheme(oppositeTheme);
    setIcon(oppositeTheme.themeIcon);
  };

  return (
    <div className="nf" style={css} onClick={changeTheme}>
      {icon}
    </div>
  );
}
