import content from "../data/content";
import PageWrapper from "../components/common/PageWrapper";

const formatText = (text) => {
  return {
    __html: text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
  };
};

const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  height: "36px",
  padding: "0 14px",
  borderRadius: "999px",
  border: "1px solid #d0d7de",
  background: "linear-gradient(180deg, #ffffff, #f6f8fa)",
  color: "#1f2328",
  textDecoration: "none",
  fontSize: "13px",
  fontFamily: "Arial, sans-serif",
  transition: "all 0.25s ease",
};

const handleLinkHover = (e) => {
  e.currentTarget.style.background = "#1a73e8";
  e.currentTarget.style.color = "#ffffff";
  e.currentTarget.style.borderColor = "#1a73e8";
  e.currentTarget.style.transform = "translateY(-2px)";
  e.currentTarget.style.boxShadow =
    "0 10px 20px rgba(26,115,232,0.25)";
};

const handleLinkLeave = (e) => {
  e.currentTarget.style.background =
    "linear-gradient(180deg, #ffffff, #f6f8fa)";
  e.currentTarget.style.color = "#1f2328";
  e.currentTarget.style.borderColor = "#d0d7de";
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "none";
};

const Projects = () => {
  return (
    <PageWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "1100px",
          }}
        >
          {/* LEFT COLUMN (same alignment as All.jsx) */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
            }}
          >
            {/* PAGE TITLE */}
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "400",
                color: "#1a0dab",
                marginBottom: "24px",
                marginTop: 0,
                cursor: "pointer",
                fontFamily: "Arial, sans-serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
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
                        fontFamily: "Arial, sans-serif",
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
                      fontFamily: "Arial, sans-serif",
                    }}
                    dangerouslySetInnerHTML={formatText(
                      project.description
                    )}
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
                            fontFamily: "Arial, sans-serif",
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
                        fontFamily: "Arial, sans-serif",
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
              <p
                style={{
                  color: "#5f6368",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                No projects available.
              </p>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;