import content from "../../data/content";

import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const KnowledgePanel = ({ setTab }) => {
  const topSkills = content.skills
    ? content.skills.flatMap((group) => group.items).slice(0, 10)
    : [];

  const goToSkills = () => {
    setTab?.("Skills");
  };

  const goToContact = () => {
    setTab?.("Contact");

    setTimeout(() => {
      const el = document.getElementById("contact-message-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const primaryProfiles = [
    {
      label: "LinkedIn",
      icon: <FaLinkedin size={14} />,
      url: content.contact?.linkedin,
    },
    {
      label: "GitHub",
      icon: <FaGithub size={14} />,
      url: content.contact?.github,
    },
    {
      label: "LeetCode",
      icon: <SiLeetcode size={14} />,
      url: content.contact?.leetcode,
    },
  ];

  const sectionTitle = {
    fontSize: "14px",
    fontWeight: 500,
    color: "#1a0dab",
    textTransform: "uppercase",
  };

  return (
    <aside
      style={{
        width: "372px",
        background: "#fff",
        border: "1px solid #dadce0",
        borderRadius: "18px",
        overflow: "hidden",
        fontFamily:
          "Arial, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        boxShadow: "0 1px 3px rgba(60,64,67,.10)",
        alignSelf: "flex-start",
      }}
    >
      {/* HERO IMAGE */}
      <div style={{ position: "relative", height: "210px" }}>
        <img
          src={content.photo}
          alt={content.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,.58), rgba(0,0,0,.08))",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "18px",
            left: "18px",
            color: "#fff",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 500 }}>
            {content.name}
          </h1>
          <div style={{ fontSize: "14px", opacity: 0.95 }}>
            {content.title}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "20px" }}>
        {/* SPECIALIZATION */}
        <div style={{ fontSize: "14px", marginBottom: "16px" }}>
          Backend Engineering · Distributed Systems · Full-Stack Development · Applied Machine Learning
        </div>

        {/* EDUCATION */}
        <div style={{ marginBottom: "28px", cursor: "pointer" }}>
          <div style={sectionTitle}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >Education</div>

          <div style={{ marginTop: "10px", fontSize: "14px" }}>
            Master of Computer Applications — VIT
          </div>

          <div style={{ fontSize: "14px", marginTop: "6px" }}>
            Bachelor of Computer Applications — Bishop Heber College
          </div>
        </div>

        {/* PROFILES */}
        <div style={{ marginBottom: "28px", cursor: "pointer" }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}        
        >
          <div style={sectionTitle}>Profiles</div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
            {primaryProfiles.map(
              (item, i) =>
                item.url && (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 12px",
                      borderRadius: "999px",
                      border: "1px solid #dadce0",
                      textDecoration: "none",
                      color: "#1f1f1f",
                      fontSize: "13px",
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                )
            )}
          </div>
        </div>

        {/* SKILLS */}
        <div style={{ marginBottom: "28px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{...sectionTitle, cursor: "pointer"}}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}            
            >Skills</div>

            <button
              onClick={goToSkills}
              style={{
                border: "none",
                background: "none",
                color: "#1a73e8",
                cursor: "pointer",
                fontSize: "12.5px",
              }}
              onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}    
            >
              Show more
            </button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
            {topSkills.map((skill, i) => (
              <div
                key={i}
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  background: "#f1f3f4",
                  borderRadius: "999px",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <div style={{...sectionTitle, cursor: "pointer"}}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}    
          >Contact</div>

          <div style={{ marginTop: "10px" }}>
            <a
              href={`mailto:${content.contact?.email}`}
              style={{
                color: "#000000",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {content.contact?.email}
            </a>

            {/* NEW CTA */}
            <div>
              <button
                onClick={goToContact}
                style={{
                  marginTop: "10px",
                  background: "none",
                  border: "none",
                  color: "#1a73e8",
                  cursor: "pointer",
                  fontSize: "14px",
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}    
              >
                Send me a message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default KnowledgePanel;