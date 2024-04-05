import { useContext } from "react";
import "./contact-box.css";
import { ThemeContext } from "../../../App";
import { personalInformation } from "../../../resume";

export function ContactBox() {
  const { theme } = useContext(ThemeContext);

  const css = {
    backgroundColor: theme.color2,
  };

  const icons = {
    mail: "\uf42f",
    phone: "\udb80\udd1c",
    skype: "\udb81\udcaf",
    linkedin: "\udb80\udf3b",
    github: "\udb80\udea4",
  };

  return (
    <div id="contact-box" style={css}>
      <div id="picture-frame">
        <img src={process.env.PUBLIC_URL + personalInformation.picture} alt="" style={{ width: "280px" }} />
      </div>
      <div id="my-name">{personalInformation.name}</div>
      <p className="contact-info">
        <span className="nf">{icons.mail}</span> {personalInformation.mail}
      </p>
      <p className="contact-info">
        <span className="nf">{icons.phone}</span> {personalInformation.phone}
      </p>
      <p className="contact-info">
        <span className="nf">{icons.skype}</span> {personalInformation.skype}
      </p>
      <p className="contact-info">
        <a href="https://www.linkedin.com/in/nguyenxuansang9494">
          <span className="nf">{icons.linkedin}</span>{" "}
          {personalInformation.linkedin}
        </a>
      </p>
      <p className="contact-info">
        <a href="https://github.com/martiandreamer">
          <span className="nf">{icons.github}</span>{" "}
          {personalInformation.github}
        </a>
      </p>
      <div className="left-section">Summary</div>
      <div className="left-content">{personalInformation.sumary}</div>
      <div className="left-section">Skills</div>
      <div className="left-content">{personalInformation.skills}</div>
    </div>
  );
}
