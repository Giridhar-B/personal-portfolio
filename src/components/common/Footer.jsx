import content from "../../data/content";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMediaQuery";

const Footer = () => {
  const year = new Date().getFullYear();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const socialStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: isMobile ? "13px" : "14px",
    color: "#5f6368",
    textDecoration: "none",
    transition: "all 0.2s ease",
    fontFamily: "Arial, sans-serif",
    width: "fit-content",
  };

  return (
    <footer
      style={{
        width: "100%",
        marginTop: isMobile ? "50px" : "70px",
        background: "#f8f9fa",
        borderTop: "1px solid #e6e8eb",
        fontFamily: "Arial, sans-serif",
      }}
    >
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "30px 16px 24px" : "42px 20px 28px",
        display: "grid",

        gridTemplateColumns: isMobile
          ? "1fr 1fr"
          : "1.4fr 1fr 1fr",

        gap: isMobile ? "24px" : "28px",

        textAlign: isMobile ? "left" : "left",
      }}
    >
          {/* LEFT */}
          <div
            style={{
              gridColumn: isMobile ? "1 / -1" : "auto",
              textAlign: isMobile ? "center" : "left",
            }}
          >
          <div
            style={{
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "600",
              color: "#202124",
              marginBottom: "8px",
              letterSpacing: "-0.2px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#1a73e8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#202124";
            }}
          >
            {content.name || "Portfolio"}
          </div>

          <div
            style={{
              fontSize: isMobile ? "13px" : "14px",
              color: "#5f6368",
              lineHeight: "1.6",
            }}
          >
            Full Stack Developer • Machine Learning Engineer
          </div>

          <div
            style={{
              marginTop: "12px",
              fontSize: isMobile ? "13px" : "14px",
              color: "#80868b",
              lineHeight: "1.6",
              maxWidth: isMobile ? "100%" : "400px",
            }}
          >
            Building scalable systems with React, Node.js, and AI-driven
            applications.
          </div>
        </div>

        {/* CENTER */}
        <div>
          <div
            style={{
              fontSize: isMobile ? "13px" : "14px",
              fontWeight: "600",
              color: "#5f6368",
              marginBottom: "14px",
              letterSpacing: "0.05em",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Navigation
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              ["AI Mode", "/aimode"],
              ["Home", "/"],
              ["Images", "/images"],
              ["Experience", "/experience"],
              ["Projects", "/projects"],
              ["Resume", "/resume"],
              ["Skills", "/skills"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <a
                key={label}
                href={path}
                style={{
                  color: "#5f6368",
                  textDecoration: "none",
                  fontSize: isMobile ? "14px" : "15px",
                  fontFamily: "Arial, sans-serif",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#1a73e8";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#5f6368";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
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
              alignItems: "flex-start",
            }}
          >
            <a
              href={content.contact.github}
              target="_blank"
              rel="noreferrer"
              style={socialStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#1a73e8";
                e.currentTarget.style.transform = "translateX(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#5f6368";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href={content.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              style={socialStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#1a73e8";
                e.currentTarget.style.transform = "translateX(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#5f6368";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            <a
              href={`mailto:${content.contact.email}`}
              style={socialStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#1a73e8";
                e.currentTarget.style.transform = "translateX(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#5f6368";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <FaEnvelope size={16} />
              Email
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          borderTop: "1px solid #e6e8eb",
          padding: isMobile ? "14px 16px" : "16px 20px",
          textAlign: "center",
          fontSize: isMobile ? "12px" : "13px",
          color: "#80868b",
          background: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        © {year} {content.name || "Portfolio"} — Built with React & Modern UI
      </div>
    </footer>
  );
};

export default Footer;