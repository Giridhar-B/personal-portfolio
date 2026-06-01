import content from "../../data/content";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        marginTop: "70px",
        background: "#f8f9fa",
        borderTop: "1px solid #e6e8eb",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "42px 20px 28px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: "28px",
        }}
      >
        {/* LEFT */}
        <div>
          <div
            style={{
              fontSize: "17px",
              fontWeight: "600",
              color: "#202124",
              marginBottom: "8px",
              letterSpacing: "-0.2px",
            }}
          >
            {content.name || "Portfolio"}
          </div>

          <div
            style={{
              fontSize: "13px",
              color: "#5f6368",
              lineHeight: "1.6",
            }}
          >
            Full Stack Developer • Machine Learning Engineer
          </div>

          <div
            style={{
              marginTop: "12px",
              fontSize: "12.5px",
              color: "#80868b",
              lineHeight: "1.5",
            }}
          >
            Building scalable systems with React, Node.js, and AI-driven applications.
          </div>
        </div>

        {/* CENTER */}
        <div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#5f6368",
              marginBottom: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Navigation
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "13.5px",
            }}
          >
            {[
              ["Home", "/"],
              ["Projects", "/projects"],
              ["Images", "/images"],
              ["Skills", "/skills"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <a
                key={label}
                href={path}
                style={{
                  color: "#5f6368",
                  textDecoration: "none",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1a73e8")}
                onMouseLeave={(e) => (e.target.style.color = "#5f6368")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#5f6368",
              marginBottom: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Connect
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href={content.github}
              target="_blank"
              rel="noreferrer"
              style={socialStyle}
            >
              <FaGithub size={16} /> GitHub
            </a>

            <a
              href={content.linkedin}
              target="_blank"
              rel="noreferrer"
              style={socialStyle}
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>

            <a href={`mailto:${content.email}`} style={socialStyle}>
              <FaEnvelope size={16} /> Email
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          borderTop: "1px solid #e6e8eb",
          padding: "16px 20px",
          textAlign: "center",
          fontSize: "12px",
          color: "#80868b",
          background: "#ffffff",
        }}
      >
        © {year} {content.name || "Portfolio"} — Built with React & Modern UI
      </div>
    </footer>
  );
};

const socialStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "13.5px",
  color: "#5f6368",
  textDecoration: "none",
  transition: "0.2s",
};

export default Footer;