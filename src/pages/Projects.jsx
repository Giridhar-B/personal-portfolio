import content from "../data/content";
import PageWrapper from "../components/common/PageWrapper";

const formatText = (text) => {
  return {
    __html: text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
  };
};

const linkStyle = {
  color: "#006621",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "500",
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  padding: "6px 12px",
  borderRadius: "8px",
  background: "#f8f9fa",
  border: "1px solid #e0e0e0",
  transition: "all 0.2s ease",
  cursor: "pointer",
};

const handleLinkHover = (e) => {
  e.currentTarget.style.background = "#e8f0fe";
  e.currentTarget.style.borderColor = "#d2e3fc";
};

const handleLinkLeave = (e) => {
  e.currentTarget.style.background = "#f8f9fa";
  e.currentTarget.style.borderColor = "#e0e0e0";
};

const Projects = () => {
  return (
    <PageWrapper>
      {/* GLOBAL WRAPPER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* CONTENT CONTAINER */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            transform: "translateX(-10.5px)",
          }}
        >
          {/* PAGE TITLE */}
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "500",
              color: "#1a0dab",
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            Projects
          </h2>

          {/* PROJECT LIST */}
          {content.projects?.length > 0 ? (
            content.projects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                style={{
                  padding: "22px",
                  marginBottom: "22px",
                  border: "1px solid #e8eaed",
                  borderRadius: "16px",
                  background: "#fff",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  scrollMarginTop: "100px",

                  // smooth entry feel only (no hover shake)
                  transition: "box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 1px 2px rgba(0,0,0,0.04)";
                }}
              >
                {/* HEADER */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    flexWrap: "wrap",
                    marginBottom: "12px",
                  }}
                >
                  {/* TITLE */}
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#1a0dab",
                      margin: 0,
                      cursor: "pointer",
                      lineHeight: "1.3",
                      transition: "text-decoration 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* LINKS */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={linkStyle}
                        onMouseEnter={handleLinkHover}
                        onMouseLeave={handleLinkLeave}
                      >
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        style={linkStyle}
                        onMouseEnter={handleLinkHover}
                        onMouseLeave={handleLinkLeave}
                      >
                        Live
                      </a>
                    )}

                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noreferrer"
                        style={linkStyle}
                        onMouseEnter={handleLinkHover}
                        onMouseLeave={handleLinkLeave}
                      >
                        Video
                      </a>
                    )}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4d5156",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}
                  dangerouslySetInnerHTML={formatText(project.description)}
                />

                {/* TAGS */}
                {project.tags?.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: "12px",
                          padding: "6px 12px",
                          borderRadius: "999px",
                          background: "#f1f3f4",
                          color: "#3c4043",
                          border: "1px solid #e0e0e0",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* POINTS */}
                {project.points?.length > 0 && (
                  <ul
                    style={{
                      paddingLeft: "18px",
                      margin: 0,
                      color: "#4d5156",
                    }}
                  >
                    {project.points.map((point, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.7",
                          marginBottom: "8px",
                        }}
                        dangerouslySetInnerHTML={formatText(point)}
                      />
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p style={{ color: "#5f6368" }}>No projects available.</p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;