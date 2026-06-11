import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ChatMessage = ({ message }) => {
  const navigate = useNavigate();

  const isUser = message.role === "user";

  const hoverIn = (e) => {
    e.currentTarget.style.background = "#1a73e8";
    e.currentTarget.style.color = "#fff";
    e.currentTarget.style.borderColor = "#1a73e8";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow =
      "0 10px 20px rgba(26,115,232,0.25)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(180deg, #ffffff, #f6f8fa)";
    e.currentTarget.style.color = "#1f2328";
    e.currentTarget.style.borderColor = "#d0d7de";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  // USER MESSAGE
  if (isUser) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "14px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "70%",
            background: "#f1f3f4",
            border: "1px solid #e0e3e7",
            color: "#202124",
            padding: "10px 14px",
            borderRadius: "18px",
            fontSize: "16px",
            lineHeight: "1.6",
            wordBreak: "break-word",
          }}
        >
          {message.text}
        </div>
      </motion.div>
    );
  }

  // AI SERVICE UNAVAILABLE
  if (message.type === "service_unavailable") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "26px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            color: "#202124",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          <p style={{ marginBottom: "12px" }}>
            <strong>
              🤖 AI Assistant Temporarily Unavailable
            </strong>
          </p>

          <p style={{ marginBottom: "12px" }}>
            The AI service is currently unavailable or has
            reached its usage limit.
          </p>

          <p style={{ marginBottom: "16px" }}>
            You can still explore my projects,
            experience, and skills, or contact me
            directly for opportunities and
            collaborations.
          </p>

          <button
            onClick={() => navigate("/contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background:
                "linear-gradient(180deg, #ffffff, #f6f8fa)",
              border: "1px solid #d0d7de",
              borderRadius: "999px",
              padding: "10px 16px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#1f2328",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            Contact Me →
          </button>
        </div>
      </motion.div>
    );
  }

  // NORMAL AI MESSAGE
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "26px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          fontSize: "16px",
          lineHeight: "1.8",
          color: "#202124",
        }}
      >
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p style={{ marginBottom: "12px" }}>
                {children}
              </p>
            ),
            li: ({ children }) => (
              <li style={{ marginBottom: "6px" }}>
                {children}
              </li>
            ),
            strong: ({ children }) => (
              <strong style={{ fontWeight: 600 }}>
                {children}
              </strong>
            ),
          }}
        >
          {message.text}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default ChatMessage;