import { createContext, useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { ContentContainer } from "./content/ContentContainer";

export const FoldContext = createContext();

export function RightContainer() {
  const { theme } = useContext(ThemeContext);
  const experienceTabTitle = "Experience";
  const educationTabTitle = "Education";
  const cerfiticationsTabTitle = "Certifications";
  const othersTabTitle = "Others";
  const [unfoldTab, setUnfoldTab] = useState(experienceTabTitle);
  const css = {
    minHeight: "100vh",
    flexGrow: "1",
    margin: "0px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.color3,
    transition: "background-color 2s",
  };

  return (
    <div style={css}>
      <FoldContext.Provider value={{ unfoldTab, setUnfoldTab }}>
        <ContentContainer
          title={experienceTabTitle}
          style={{ margin: "10px 10px 5px 10px" }}
          unfold={true}
        ></ContentContainer>
        <ContentContainer
          title={educationTabTitle}
          style={{ margin: "0px 10px 5px 10px" }}
        ></ContentContainer>
        <ContentContainer
          title={cerfiticationsTabTitle}
          style={{ margin: "0px 10px 5px 10px" }}
        ></ContentContainer>
        <ContentContainer
          title={othersTabTitle}
          style={{ margin: "0px 10px 5px 10px" }}
        ></ContentContainer>
      </FoldContext.Provider>
    </div>
  );
}
