import content from "../data/content";
import PeopleAlsoAsk from "../components/sections/PeopleAlsoAsk";
import CompactProjectCard from "../components/sections/CompactProjectCard";
import KnowledgePanel from "../components/sections/KnowledgePanel";
import PageWrapper from "../components/common/PageWrapper";
import ProjectVideos from "../components/sections/ProjectVideos";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useMediaQuery from "../hooks/useMediaQuery";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const All = () => {
  const navigate = useNavigate();

  const experience = content?.experience?.[0];

  const relatedSearches = [
    {
      label: `${content.name}'s Projects`,
      path: "/projects",
    },
    {
      label: `${content.name}'s Experience`,
      path: "/experience",
    },
    {
      label: `${content.name}'s Resume`,
      path: "/resume",
    },
    {
      label: `Contact ${content.name}`,
      path: "/contact",
    },
  ];

const isMobile = useMediaQuery("(max-width: 768px)");

  const relatedChipStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "14px 18px",
    borderRadius: "999px",
    border: "1px solid #e0e3e7",
    background: "#f8f9fa",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontSize: "15px",
    color: "#202124",
    fontWeight: 400,
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
  };

  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PageWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "-20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: isMobile ? "24px" : "40px",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "1100px",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "nowrap",
          }}
        >


          {/* LEFT COLUMN */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              width: "100%",
              order: isMobile ? 2 : 1,
            }}
          >

            {/* FEATURED */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.3 }}
              style={{ marginBottom: "42px" }}
            >
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "#1a0dab",
                  cursor: "pointer",
                  marginBottom: "10px",
                  fontFamily: "Arial, sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                {content.name}
              </h2>

              <div
                style={{
                  fontSize: "14px",
                  color: "#4d5156",
                  lineHeight: "1.5",
                  marginTop: "10px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <ReactMarkdown>{content.about}</ReactMarkdown>
              </div>
            </motion.div>

            {/* EXPERIENCE */}
            {experience && (
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.1 }}
                style={{ marginBottom: "42px" }}
              >
                <h2
                  onClick={() => navigateTo("/experience")}
                  style={{
                    fontSize: "22px",
                    fontWeight: "400",
                    color: "#1a0dab",
                    marginBottom: "12px",
                    cursor: "pointer",
                    width: "fit-content",
                    fontFamily: "Arial, sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  Work Experience
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    margin: 0,
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  <span style={{ color: "#1a0dab", fontWeight: 500 }}>
                    {experience.role}
                  </span>{" "}
                  —{" "}
                  <span style={{ color: "#1a0dab", fontWeight: 500 }}>
                    {experience.company}
                  </span>
                </p>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#5f6368",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {experience.timeline}
                </p>

                <div
                  style={{
                    fontSize: "14px",
                    color: "#4d5156",
                    lineHeight: "1.5",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  <ReactMarkdown>{experience.content}</ReactMarkdown>
                </div>
              </motion.div>
            )}

            {/* PEOPLE ALSO ASK */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
              style={{ marginBottom: "42px" }}
            >
              <PeopleAlsoAsk />
            </motion.div>

            {/* PROJECTS */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              style={{ marginBottom: "42px" }}
            >
              <h2
                onClick={() => navigateTo("/projects")}
                style={{
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "#1a0dab",
                  marginBottom: "18px",
                  cursor: "pointer",
                  width: "fit-content",
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

              {content.projects?.map((project, index) => (
                <motion.div key={index} variants={item}>
                  <div id={`project-${project.id}`}>
                    <CompactProjectCard project={project} />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* VIDEOS */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              style={{ marginBottom: "42px" }}
            >
              <ProjectVideos />
            </motion.div>

            {/* RELATED SEARCHES */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.25 }}
            >
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "#202124",
                  marginBottom: "22px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Related searches
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",                  
                  gap: "14px",
                }}
              >
                {relatedSearches.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => navigateTo(item.path)}
                    style={relatedChipStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#eef3fd";
                      e.currentTarget.style.borderColor = "#d2e3fc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f8f9fa";
                      e.currentTarget.style.borderColor = "#e0e3e7";
                    }}
                  >
                    <Search size={17} color="#5f6368" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            style={{
              width: isMobile ? "100%" : "400px",
              maxWidth: isMobile ? "100%" : "400px",
              flexShrink: 0,
              order: isMobile ? 1 : 2,
              position: "static",

              alignSelf: "flex-start",

              marginLeft: isMobile ? "0px" : "20px",
            }}
          >
            <KnowledgePanel />
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default All;