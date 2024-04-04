import { useContext, useState } from "react";
import { ThemeContext } from "../../../App";
import "./content.css";
import { FoldContext } from "../RightContainer";

export function ContentContainer({ children, title = "Tab", style }) {
  const { theme } = useContext(ThemeContext);
  const { unfoldTab, setUnfoldTab } = useContext(FoldContext);

  const css = {
    ...style,
    backgroundColor: theme.color2,
    flexGrow: unfoldTab === title ? "1" : "0",
  };

  const onclick = () => {
    setUnfoldTab(title);
  };

  return (
    <div className="content" style={css} onClick={onclick}>
      <span className="tab-title">{title}</span>
      {children}
    </div>
  );
}
