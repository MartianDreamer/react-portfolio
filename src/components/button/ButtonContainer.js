import { ChangeThemeButton } from "./ChangeThemeButton";
import { CodeButton } from "./CodeButton";

export function ButtonContainer({ children }) {
  const css = {
    display: "flex",
    justifyContent: "end",
    marginTop: "20px",
    paddingRight: "20px",
  };

  return (
    <div style={css}>
      <CodeButton></CodeButton>
      <ChangeThemeButton></ChangeThemeButton>
      {children}
    </div>
  );
}
