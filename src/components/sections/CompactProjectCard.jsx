import ReactMarkdown from "react-markdown";

const CompactProjectCard = ({ project, setTab }) => {
  const handleClick = () => {
    setTab?.("Projects");

    setTimeout(() => {
      const el = document.getElementById(project.slug);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      {/* TITLE */}
      <h3
        onClick={handleClick}
        style={{
          fontSize: "18px",
          fontWeight: "400",
          color: "#1a0dab",
          margin: "0 0 6px 0",
          cursor: "pointer",
          lineHeight: "1.3",
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
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#1a0dab",
              textDecoration: "none",
              fontSize: "16px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            GitHub
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#1a0dab",
              textDecoration: "none",
              fontSize: "16px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Live
          </a>
        )}
      </div>

      {/* DESCRIPTION */}
      {project.description && (
        <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#4d5156" }}>
          <ReactMarkdown>{project.intro}</ReactMarkdown>
        </div>
      )}

      {/* TAGS */}
      {project.tags && (
        <p style={{ fontSize: "13px", color: "#70757a" }}>
          {project.tags.join(" • ")}
        </p>
      )}
    </div>
  );
};

export default CompactProjectCard;