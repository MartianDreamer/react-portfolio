import { useContext } from "react";
import { ThemeContext } from "../../App";
import { ButtonContainer } from "./button/ButtonContainer";
import { ContactBox } from "./contact-box/ContactBox";

export function LeftNavigator() {
  const { theme } = useContext(ThemeContext);

  const css = {
    minHeight: "100vh",
    width: "340px",
    marginRight: "2px",
    borderRadius: "5px",
    transition: "background-color 2s",
    backgroundColor: theme.color1,
  };

  return (
    <div style={css}>
      <ContactBox />
      <ButtonContainer />
    </div>
  );
}
