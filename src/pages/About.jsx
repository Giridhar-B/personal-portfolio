import content from "../data/content";
import KnowledgePanel from "../components/sections/KnowledgePanel";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        paddingLeft: "140px",
        marginTop: "20px"
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ maxWidth: "600px" }}>
        <h2>About {content.name}</h2>

        <p style={{ fontSize: "14px", color: "#4d5156" }}>
          {content.about}
        </p>

        <h3 style={{ marginTop: "20px" }}>Career Focus</h3>
        <p style={{ fontSize: "14px", color: "#4d5156" }}>
          Focused on building scalable backend systems and machine learning applications,
          with a strong interest in Graph Neural Networks and real-world problem solving.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <KnowledgePanel />
    </div>
  );
};

export default About;