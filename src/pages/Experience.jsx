import content from "../data/content";
import PageWrapper from "../components/common/PageWrapper";
import ReactMarkdown from "react-markdown";

const Experience = () => {
  return (
    <PageWrapper>
      {/* GLOBAL CENTERING CONTAINER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* FIXED CONTENT COLUMN (same system as All.jsx) */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            marginTop: "-1px",
            transform: "translateX(-18.5px)"
          }}
        >
          {/* PAGE TITLE */}
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "400",
              color: "#1a0dab",
              marginBottom: "20px",
              marginTop: 0,
              cursor: "pointer"
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Experience
          </h2>

          {/* EXPERIENCE LIST */}
          {content.experience.map((exp, i) => (
            <div
              key={i}
              style={{
                marginTop: "26px",
                paddingBottom: "22px",
                borderBottom:
                  i === content.experience.length - 1
                    ? "none"
                    : "1px solid #e8eaed",
              }}
            >
              {/* Role + Company */}
              <h3
                style={{
                  color: "#1a0dab",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "4px",
                  cursor: "pointer",
                  marginTop: 0,
                }}
              >
                {exp.role} — {exp.company}
              </h3>

              {/* Duration */}
              <p
                style={{
                  fontSize: "13px",
                  color: "#5f6368",
                  marginBottom: "10px",
                  marginTop: 0,
                }}
              >
                {exp.timeline || exp.duration}
              </p>

              {/* Description */}
              {exp.content && (
                <div
                  style={{
                    fontSize: "14px",
                    color: "#4d5156",
                    lineHeight: "1.6",
                    marginBottom: "12px",
                  }}
                >
                  <ReactMarkdown>{exp.content}</ReactMarkdown>
                </div>
              )}

              {/* Bullet Points */}
              {exp.points && (
                <ul style={{ paddingLeft: "18px", marginBottom: "10px" }}>
                  {exp.points.map((point, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "14px",
                        color: "#4d5156",
                        marginBottom: "6px",
                      }}
                    >
                      <ReactMarkdown>{point}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              )}

              {/* Certificate */}
              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      marginTop: "10px",
                      padding: "9px 18px",
                      borderRadius: "999px",
                      border: "1px solid #dadce0",
                      background: "#fff",
                      color: "#1a0dab",
                      fontSize: "14px",
                      cursor: "pointer",
                      fontWeight: "500",
                      transition: "0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#f8f9fa";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#fff";
                    }}
                  >
                    View Certificate →
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;