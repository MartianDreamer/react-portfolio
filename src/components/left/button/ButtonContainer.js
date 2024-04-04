import { ChangeThemeButton } from "./ChangeThemeButton";
import { CodeButton } from "./CodeButton";
import "./button.css"

export function ButtonContainer({ children }) {
  return (
    <div className="button-container">
      <CodeButton></CodeButton>
      <ChangeThemeButton></ChangeThemeButton>
      {children}
    </div>
  );
}
