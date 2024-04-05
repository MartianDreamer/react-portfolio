import { useContext } from "react";
import { ThemeContext } from "../../../App";
import { FoldContext } from "../RightContainer";
import "./content.css";

export function ContentContainer({
  children,
  title = "Tab",
  containerStyle,
  contentStyle,
}) {
  const { theme } = useContext(ThemeContext);
  const { unfoldTab, setUnfoldTab } = useContext(FoldContext);

  const containerCss = {
    ...containerStyle,
    backgroundColor: theme.color3,
    flexGrow: unfoldTab === title ? "1" : "0",
  };

  const contentCss = {
    ...contentStyle,
    backgroundColor: theme.color2,
    marginTop: unfoldTab === title ? "10px" : "0px",
    padding: unfoldTab === title ? "5px" : "0px",
    transform: unfoldTab === title ? "scale(1, 1)" : "scale(0, 0)",
  };

  const onclick = () => {
    setUnfoldTab(title);
  };

  return (
    <div className="content-container" style={containerCss} onClick={onclick}>
      <span className="tab-title">{title}</span>
      <div className="content" style={contentCss}>
        {children}
      </div>
    </div>
  );
}
