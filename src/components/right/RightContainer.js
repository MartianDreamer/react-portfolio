import { createContext, useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { ContentContainer } from "./content/ContentContainer";
import { certifications, education, experience } from "../../resume";
import ExperienceEntry from "./content/ExperienceEntry";
import { EducationEntry } from "./content/EducationEntry";
import { CertificationEntry } from "./content/CertificationEntry";

export const FoldContext = createContext();

export function RightContainer() {
  const { theme } = useContext(ThemeContext);
  const experienceTabTitle = "Experience";
  const educationTabTitle = "Education & Certifications";
  const othersTabTitle = "Others";
  const [unfoldTab, setUnfoldTab] = useState(experienceTabTitle);
  const css = {
    minHeight: "100vh",
    flexGrow: "1",
    margin: "0px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.color1,
    transition: "background-color 2s",
  };

  return (
    <div style={css}>
      <FoldContext.Provider value={{ unfoldTab, setUnfoldTab }}>
        <ContentContainer
          title={experienceTabTitle}
          containerStyle={{ margin: "10px 10px 5px 10px" }}
          contentStyle={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            gridTemplateRows: "fit-content(100%)",
          }}
          unfold={true}
        >
          {experience.map((e, i) => (
            <ExperienceEntry key={i} data={e}></ExperienceEntry>
          ))}
        </ContentContainer>
        <ContentContainer
          title={educationTabTitle}
          containerStyle={{ margin: "0px 10px 5px 10px" }}
        >
          <div style={{ display: "flex", margin: "5px" }}>
            {education.map((e, i) => (
              <EducationEntry key={i} data={e}></EducationEntry>
            ))}
          </div>
          <div style={{ display: "flex", margin: "5px" }}>
            {certifications.map((e, i) => (
              <CertificationEntry key={i} data={e}></CertificationEntry>
            ))}
          </div>
        </ContentContainer>
        <ContentContainer
          title={othersTabTitle}
          containerStyle={{ margin: "0px 10px 5px 10px" }}
        ></ContentContainer>
      </FoldContext.Provider>
    </div>
  );
}
