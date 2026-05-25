// import content from "../data/content";
// import PeopleAlsoAsk from "../components/sections/PeopleAlsoAsk";
// import CompactProjectCard from "../components/sections/CompactProjectCard";
// import KnowledgePanel from "../components/sections/KnowledgePanel";
// import PageWrapper from "../components/common/PageWrapper";
// import { motion } from "framer-motion";
// import ProjectVideos from "../components/sections/ProjectVideos";
// import ReactMarkdown from "react-markdown";
// import { Search } from "lucide-react";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 10 },
//   show: { opacity: 1, y: 0 },
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// };

// const All = ({ setTab }) => {
//   const relatedSearches = [
//     {
//       label: `${content.name}'s Projects`,
//       tab: "Projects",
//     },
//     {
//       label: `${content.name}'s Experience`,
//       tab: "Experience",
//     },
//     {
//       label: `${content.name}'s Resume`,
//       tab: "Resume",
//     },
//     {
//       label: `Contact ${content.name}`,
//       tab: "Contact",
//     },
//   ];

//   const relatedChipStyle = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     width: "100%",
//     padding: "14px 18px",
//     borderRadius: "999px",
//     border: "1px solid #e0e3e7",
//     background: "#f8f9fa",
//     cursor: "pointer",
//     transition: "all 0.25s ease",
//     fontSize: "15px",
//     color: "#202124",
//     fontWeight: 400,
//     boxSizing: "border-box",
//   };

//   const navigateToTab = (tab) => {
//     setTab(tab);

//     window.scrollTo({
//       top: 0,
//       behavior: "auto",
//     });
//   };

//   return (
//     <PageWrapper>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           width: "100%",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             gap: "60px",
//             alignItems: "flex-start",
//             width: "100%",
//             maxWidth: "1100px",
//             transform: "translateX(-10px)",
//           }}
//         >
//           {/* LEFT COLUMN */}
//           <div style={{ flex: 1, minWidth: 0 }}>
//             {/* FEATURED */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               animate="show"
//               transition={{ duration: 0.4 }}
//               style={{ marginBottom: "42px" }}
//             >
//               <h2
//                 style={{
//                   fontSize: "22px",
//                   fontWeight: "400",
//                   color: "#1a0dab",
//                   marginTop: 0,
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.textDecoration = "underline")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.textDecoration = "none")
//                 }
//               >
//                 {content.name}
//               </h2>

//               <div
//                 style={{
//                   fontSize: "14px",
//                   color: "#4d5156",
//                   lineHeight: "1.7",
//                   marginTop: "10px",
//                 }}
//               >
//                 <ReactMarkdown>{content.about}</ReactMarkdown>
//               </div>
//             </motion.div>

//             {/* EXPERIENCE */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               animate="show"
//               transition={{ delay: 0.1 }}
//               style={{ marginBottom: "42px" }}
//             >
//               <h2
//                 onClick={() => navigateToTab("Experience")}
//                 style={{
//                   fontSize: "22px",
//                   fontWeight: "400",
//                   color: "#1a0dab",
//                   marginTop: 0,
//                   marginBottom: "12px",
//                   cursor: "pointer",
//                   width: "fit-content",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.textDecoration = "underline")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.textDecoration = "none")
//                 }
//               >
//                 Work Experience
//               </h2>

//               <div style={{ marginTop: "10px" }}>
//                 <p style={{ fontSize: "16px", margin: 0 }}>
//                   <span style={{ color: "#1a0dab", fontWeight: 500 }}>
//                     {content.experience[0].role}
//                   </span>{" "}
//                   —{" "}
//                   <span style={{ color: "#1a0dab", fontWeight: 500 }}>
//                     {content.experience[0].company}
//                   </span>
//                 </p>

//                 <p style={{ fontSize: "13px", color: "#5f6368" }}>
//                   {content.experience[0].timeline}
//                 </p>

//                 <div style={{ fontSize: "14px", color: "#4d5156" }}>
//                   <ReactMarkdown>
//                     {content.experience[0].content}
//                   </ReactMarkdown>
//                 </div>
//               </div>
//             </motion.div>

//             {/* PEOPLE ALSO ASK */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               animate="show"
//               transition={{ delay: 0.2 }}
//               style={{ marginBottom: "42px" }}
//             >
//               <PeopleAlsoAsk />
//             </motion.div>

//             {/* PROJECTS */}
//             <motion.div variants={container} initial="hidden" animate="show">
//               <h2
//                 style={{
//                   fontSize: "22px",
//                   fontWeight: "500",
//                   color: "#1a0dab",
//                   marginBottom: "18px",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.textDecoration = "underline")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.textDecoration = "none")
//                 }
//               >
//                 Projects
//               </h2>

//               {content.projects?.map((project, index) => (
//                 <motion.div key={index} variants={item}>
//                   <div id={`project-${project.id}`}>
//                     <CompactProjectCard project={project} setTab={setTab} />
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* VIDEOS */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               animate="show"
//               transition={{ delay: 0.3 }}
//               style={{ marginTop: "42px" }}
//             >
//               <ProjectVideos setTab={setTab} />
//             </motion.div>

//             {/* RELATED SEARCHES */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               animate="show"
//               transition={{ delay: 0.4 }}
//               style={{ marginTop: "52px" }}
//             >
//               <h2
//                 style={{
//                   fontSize: "22px",
//                   fontWeight: "400",
//                   color: "#202124",
//                   marginBottom: "22px",
//                 }}
//               >
//                 Related searches
//               </h2>

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr",
//                   gap: "14px",
//                 }}
//               >
//                 {relatedSearches.map((item, index) => (
//                   <div
//                     key={index}
//                     onClick={() => navigateToTab(item.tab)}
//                     style={relatedChipStyle}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = "#eef3fd";
//                       e.currentTarget.style.borderColor = "#d2e3fc";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = "#f8f9fa";
//                       e.currentTarget.style.borderColor = "#e0e3e7";
//                     }}
//                   >
//                     <Search size={17} color="#5f6368" />
//                     <span>{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             animate="show"
//             transition={{ delay: 0.3 }}
//             style={{
//               flexShrink: 0,
//               alignSelf: "flex-start",
//             }}
//           >
//             <KnowledgePanel setTab={setTab} />
//           </motion.div>
//         </div>
//       </div>
//     </PageWrapper>
//   );
// };

// export default All;




import content from "../data/content";
import PeopleAlsoAsk from "../components/sections/PeopleAlsoAsk";
import CompactProjectCard from "../components/sections/CompactProjectCard";
import KnowledgePanel from "../components/sections/KnowledgePanel";
import PageWrapper from "../components/common/PageWrapper";
import { motion } from "framer-motion";
import ProjectVideos from "../components/sections/ProjectVideos";
import ReactMarkdown from "react-markdown";
import { Search } from "lucide-react";

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

const All = ({ setTab }) => {
  const experience = content?.experience?.[0];

  const relatedSearches = [
    {
      label: `${content.name}'s Projects`,
      tab: "Projects",
    },
    {
      label: `${content.name}'s Experience`,
      tab: "Experience",
    },
    {
      label: `${content.name}'s Resume`,
      tab: "Resume",
    },
    {
      label: `Contact ${content.name}`,
      tab: "Contact",
    },
  ];

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
  };

  const navigateToTab = (tab) => {
    setTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "-20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "1100px",
            transform: "translateX(-10px)",
          }}
        >
          {/* LEFT COLUMN */}
          <div style={{ flex: 1, minWidth: 0 }}>
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
                  lineHeight: "1.7",
                  marginTop: "10px",
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
                  onClick={() => navigateToTab("Experience")}
                  style={{
                    fontSize: "22px",
                    fontWeight: "400",
                    color: "#1a0dab",
                    marginBottom: "12px",
                    cursor: "pointer",
                    width: "fit-content",
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

                <p style={{ fontSize: "16px", margin: 0 }}>
                  <span style={{ color: "#1a0dab", fontWeight: 500 }}>
                    {experience.role}
                  </span>{" "}
                  —{" "}
                  <span style={{ color: "#1a0dab", fontWeight: 500 }}>
                    {experience.company}
                  </span>
                </p>

                <p style={{ fontSize: "13px", color: "#5f6368" }}>
                  {experience.timeline}
                </p>

                <div style={{ fontSize: "14px", color: "#4d5156" }}>
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
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#1a0dab",
                  marginBottom: "18px",
                  cursor: "pointer",
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
                    <CompactProjectCard project={project} setTab={setTab} />
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
              <ProjectVideos setTab={setTab} />
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
                }}
              >
                Related searches
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                {relatedSearches.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => navigateToTab(item.tab)}
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
              flexShrink: 0,
              width: "320px",
              position: "sticky",
              top: "24px",
              alignSelf: "flex-start",
            }}
          >
            <KnowledgePanel setTab={setTab} />
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default All;