import content from "../data/content";
import PageWrapper from "../components/common/PageWrapper";

const Skills = () => {
  const skillGroups = content?.skills || [];

  const colorMap = {
    blue: "#1a73e8",
    green: "#188038",
    orange: "#f9ab00",
    red: "#d93025",
    purple: "#9334e6",
    gray: "#5f6368",
    brown: "#964B00",
  };

  const allSkills = skillGroups.flatMap((group) =>
    group.items.map((skill) => ({
      name: skill,
      color: colorMap[group.color] || "#1a73e8",
    }))
  );

  return (
    <PageWrapper>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          marginTop: "0px",
          transform: "translateX(-18.5px)"
        }}
      >

        {/* Heading (NOW MATCHES RESUME STYLE) */}
        <h2
          style={{
              fontSize: "22px",
              fontWeight: "400",
              color: "#1a0dab",
              marginBottom: "18px",
              marginTop: 0,
              cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
          Skills
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "#5f6368",
            marginBottom: "22px",
          }}
        >
          Technologies, frameworks and tools I work with
        </p>

        {/* Skills Container */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            perspective: "1000px",
          }}
        >
          {allSkills.map((skill, idx) => (
            <div
              key={idx}
              style={{
                padding: "16px 26px",
                borderRadius: "20px",

                background: `${skill.color}15`,
                color: skill.color,

                fontSize: "15px",
                fontWeight: "500",
                letterSpacing: "0.2px",

                border: `1px solid ${skill.color}22`,

                boxShadow:
                  "0 2px 5px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)",

                cursor: "default",

                transition:
                  "transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease",

                userSelect: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.04)";

                e.currentTarget.style.background = skill.color;
                e.currentTarget.style.color = "#ffffff";

                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0) scale(1)";

                e.currentTarget.style.background = `${skill.color}15`;
                e.currentTarget.style.color = skill.color;

                e.currentTarget.style.boxShadow =
                  "0 2px 5px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)";
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
