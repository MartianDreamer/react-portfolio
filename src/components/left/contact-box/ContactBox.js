import { useContext } from "react";
import "./contact-box.css";
import { ThemeContext } from "../../../App";

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
      <div id="avatar-frame">
        <img src="assets/avatar.jpg" alt="" style={{ width: "280px" }} />
      </div>
      <div id="my-name">Sang Xuan Nguyen</div>
      <p className="contact-info">
        <span className="nf">{icons.mail}</span> nguyenxuansang9494@gmail.com
      </p>
      <p className="contact-info">
        <span className="nf">{icons.phone}</span> +84985470552
      </p>
      <p className="contact-info">
        <span className="nf">{icons.skype}</span> live:.cid.87083f88f9300889
      </p>
      <p className="contact-info">
        <a href="https://www.linkedin.com/in/nguyenxuansang9494">
          <span className="nf">{icons.linkedin}</span>{" "}
          linkedin.com/in/nguyenxuansang9494
        </a>
      </p>
      <p className="contact-info">
        <a href="https://github.com/martiandreamer">
          <span className="nf">{icons.github}</span> github.com/martiandreamer
        </a>
      </p>
      <div className="left-section">Summary</div>
      <div className="left-content">
        I have three years of experience with Java and good knowledge of Spring
        Framework, Jakarta EE, Kafka, Git, Docker, Terraform and Azure. I am
        confident, ambitious and willing to learn new thing and to face new
        challenges.
      </div>
      <div className="left-section">Skills</div>
      <div className="left-content">
        Java • Data Structures • Algorithm • Spring Framework • Terraform • Git
        • Microsoft Azure • Jakarta EE • Microsoft SQL Server • Apache Kafka
      </div>
    </div>
  );
}
