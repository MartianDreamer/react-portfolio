export default function ExperienceEntry({ data }) {
  return (
    <div className="experience-entry">
      <img src={process.env.PUBLIC_URL + data.logo} alt="" style={{ marginRight: "20px" }} />
      <span>{data.company}</span>
    </div>
  );
}
