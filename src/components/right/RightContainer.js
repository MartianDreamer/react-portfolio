import { createContext, useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { ContentContainer } from "./content/ContentContainer";
import { experience } from "../../data";
import ExperienceEntry from "./content/ExperienceEntry";

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
    backgroundColor: theme.color1,
    transition: "background-color 2s",
  };

  return (
    <div style={css}>
      <FoldContext.Provider value={{ unfoldTab, setUnfoldTab }}>
        <ContentContainer
          title={experienceTabTitle}
          containerStyle={{ margin: "10px 10px 5px 10px" }}
          contentStyle={{ display: "grid", gridTemplateColumns: "50% 50%" }}
          unfold={true}
        >
          {experience.map((e) => (
            <ExperienceEntry data={e}></ExperienceEntry>
          ))}
        </ContentContainer>
        <ContentContainer
          title={educationTabTitle}
          containerStyle={{ margin: "0px 10px 5px 10px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit
          orci, porttitor non mauris nec, gravida aliquam lectus. In a nisi id
          eros imperdiet tincidunt. Pellentesque condimentum odio ac aliquam
          sollicitudin. Sed quis tempus lorem, quis venenatis nibh. Mauris sed
          vulputate ante. Donec posuere leo odio, in gravida augue laoreet ut.
          Ut ullamcorper vehicula venenatis. Ut tempor ex ac enim convallis, eu
          venenatis tortor bibendum. Nulla at rutrum nisi. Nulla ex purus,
          condimentum et fermentum at, pellentesque ac est. Ut consequat
          facilisis congue. Cras varius justo sit amet eros dignissim, non
          blandit eros maximus. Praesent placerat elementum finibus. Fusce
          facilisis augue eu nunc ullamcorper, ornare tempus ligula rutrum.
        </ContentContainer>
        <ContentContainer
          title={cerfiticationsTabTitle}
          containerStyle={{ margin: "0px 10px 5px 10px" }}
        ></ContentContainer>
        <ContentContainer
          title={othersTabTitle}
          containerStyle={{ margin: "0px 10px 5px 10px" }}
        ></ContentContainer>
      </FoldContext.Provider>
    </div>
  );
}
