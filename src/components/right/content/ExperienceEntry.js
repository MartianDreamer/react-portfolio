export default function ExperienceEntry({ data }) {
  return (
    <div className="experience-entry">
      <img src={data.logo} alt="" style={{marginRight: "20px"}} /><span>{data.company}</span>
    </div>
  );
}
