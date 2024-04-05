import { ThemeContext } from "../../../App";
import { useContext } from "react";
import "./entry.css"

export function EducationEntry({ data }) {
  const { theme } = useContext(ThemeContext);

  const entryCss = {
    border: `solid ${theme.color1} 3px`,
    width: "fit-content",
  };

  return (
    <div className="bordered-entry" style={entryCss}>
      <p className="bordered-entry-title">
        <img
          src={process.env.PUBLIC_URL + data.logo}
          alt=""
          style={{ marginRight: "10px", width: "30px" }}
        />
        {data.school}
      </p>
      <p>{data.major}</p>
      <p>
        {data.from} - {data.to}
      </p>
    </div>
  );
}
