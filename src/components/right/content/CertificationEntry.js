import { useContext } from "react";
import { ThemeContext } from "../../../App";
import "./entry.css";

export function CertificationEntry({ data }) {
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
        {data.name}
        {data.org && ` - ${data.org}`}
      </p>
      {data.issuedAt && <p>Issued at {data.issuedAt}</p>}
      {data.credentialId && <p>Credential ID {data.credentialId}</p>}
      {data.image && (
          <img
            style={{ width: "500px" }}
            src={process.env.PUBLIC_URL + data.image}
            alt=""
          ></img>
      )}
    </div>
  );
}
