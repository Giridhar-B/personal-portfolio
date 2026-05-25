import content from "../data/content";
import PageWrapper from "../components/common/PageWrapper";

const AboutMe = () => {
  return (
    <PageWrapper>
    <div style={{ paddingLeft: "140px", maxWidth: "700px" }}>
      <h2>{content.name}</h2>

      <p style={{ fontSize: "14px", color: "#4d5156" }}>
        {content.about}
      </p>

      <h3 style={{ marginTop: "20px" }}>Education</h3>
      {content.education.map((edu, i) => (
        <p key={i}>
          {edu.institute} — {edu.degree} ({edu.duration})
        </p>
      ))}

      <h3 style={{ marginTop: "20px" }}>Skills</h3>
      <p>{content.skills.join(", ")}</p>

      <h3 style={{ marginTop: "20px" }}>Specialization</h3>
      <p>{content.specialization}</p>
    </div>
    </PageWrapper>
  );
};

export default AboutMe;