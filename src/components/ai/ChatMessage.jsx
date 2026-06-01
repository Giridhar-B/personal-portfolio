import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  // USER MESSAGE (THOUGHT STYLE)
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
            background: "#f1f3f4", // Google “thought/input” style
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

  // AI MESSAGE (CLEAN FLOW STYLE)
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
              <p style={{ marginBottom: "12px" }}>{children}</p>
            ),
            li: ({ children }) => (
              <li style={{ marginBottom: "6px" }}>{children}</li>
            ),
            strong: ({ children }) => (
              <strong style={{ fontWeight: 600 }}>{children}</strong>
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