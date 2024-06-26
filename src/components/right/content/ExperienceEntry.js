import { useContext } from "react";
import { ThemeContext } from "../../../App";
import "./entry.css"

export default function ExperienceEntry({ data }) {
  const { theme } = useContext(ThemeContext);

  const entryCss = {
    border: `solid ${theme.color1} 3px`,
  };

  return (
    <div className="bordered-entry" style={entryCss}>
      <p className="bordered-entry-title">
        <img
          src={process.env.PUBLIC_URL + data.logo}
          alt=""
          style={{ marginRight: "10px", width: "30px" }}
        />
        {data.company} - {data.position}
      </p>
      <p>
        {data.from} - {data.to}
      </p>
      <p>{data.description}</p>
    </div>
  );
}
