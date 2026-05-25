import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const initialQuestions = [
  {
    question: "Who is Giridhar?",
    answer:
      "Giridhar is a Software Engineer and MCA graduate from VIT Chennai focused on backend engineering, full-stack development, and intelligent recommendation systems with internship experience building enterprise REST API integrations and automation workflows."
  },
  {
    question: "What technologies does Giridhar work with?",
    answer:
      "Giridhar works with Java, Python, JavaScript, React.js, Node.js, FastAPI, MongoDB, PostgreSQL, Redis, Docker, PyTorch, and Graph Neural Networks for building scalable web and machine learning applications."
  },
  {
    question: "What projects has Giridhar built?",
    answer:
      "Projects include a GNN-based Movie Recommendation System using LightGCN, GestoSense for sign language recognition using ST-GCN, a production-ready URL Shortener with real-time analytics and Redis caching, and an Amazon-inspired full-stack e-commerce application."
  },
  {
    question: "Is Giridhar available for work?",
    answer:
      "Yes. Giridhar is actively seeking Software Engineer and Software Development Engineer opportunities in backend, full-stack, and AI/ML engineering roles."
  }
];

const additionalQuestions = [
  {
    question: "What makes Giridhar different?",
    answer:
      "Hands-on experience building multiple Graph Neural Network-based applications combining recommendation systems, computer vision, and deep learning, along with real-world full-stack deployment experience."
  },
  {
    question: "Has Giridhar worked with backend systems?",
    answer:
      "Yes. Experience includes building REST APIs, Redis caching systems, analytics dashboards, authentication systems, rate limiting, and scalable backend services using Node.js, Express.js, and FastAPI."
  },
  {
    question: "What frontend technologies does Giridhar use?",
    answer:
      "React.js, JavaScript, Vite, Framer Motion, responsive UI development, REST API integration, and component-based frontend architecture for scalable web applications."
  },
  {
    question: "Has Giridhar worked with real-world integrations?",
    answer:
      "Yes. During the internship at 3i Infotech Limited, Giridhar integrated Zabbix monitoring alerts with ManageEngine ServiceDesk Plus using JavaScript and REST APIs to automate incident ticket creation and alert-processing workflows."
  }
];

const PeopleAlsoAsk = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const allQuestions = showMore
    ? [...initialQuestions, ...additionalQuestions]
    : initialQuestions;

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);

    if (!showMore) {
      setShowMore(true);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Heading */}
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "400",
          color: "#202124",
          marginBottom: "14px"
        }}
      >
        People also ask
      </h2>

      {/* Questions */}
        <div>
        {allQuestions.map((item, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #dadce0"
            }}
          >
            {/* Question Row */}
            <div
              onClick={() => toggleQuestion(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                cursor: "pointer",
                gap: "20px"
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  color: "#202124",
                  fontWeight: "400",
                  lineHeight: "1"
                }}
              >
                {item.question}
              </p>

              <ChevronDown
                size={18}
                strokeWidth={1.8}
                color="#5f6368"
                style={{
                  transform:
                    openIndex === index
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  minWidth: "18px"
                }}
              />
            </div>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    overflow: "hidden"
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "18px"
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "#4d5156",
                        lineHeight: "1.8"
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleAlsoAsk;