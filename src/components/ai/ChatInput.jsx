import { ArrowUp } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

const ChatInput = ({
  input = "",
  setInput = () => {},
  onSend = () => {},
  loading = false,
}) => {
  const safeInput = typeof input === "string" ? input : "";

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (safeInput.trim() && !loading) {
        onSend();
      }
    }
  };

  const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  };

  const wrapperStyle = {
    width: "100%",
    maxWidth: "760px",
  };

  const inputBoxStyle = {
    display: "flex",
    alignItems: "flex-end",
    gap: "10px",
    padding: "12px 14px",
    borderRadius: "999px",
    border: "1px solid #e0e3e7",
    background: "#f8f9fa",
    transition: "all 0.2s ease",
  };

  const textareaStyle = {
    flex: 1,
    resize: "none",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "16px",
    color: "#202124",
    lineHeight: "1.6",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    height: "36px",
    width: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "1px solid #e0e3e7",
    background: safeInput.trim() && !loading ? "#1a73e8" : "#dadce0",
    color: "#fff",
    cursor: safeInput.trim() && !loading ? "pointer" : "not-allowed",
    transition: "all 0.2s ease",
  };

  const helperTextStyle = {
    textAlign: "center",
    fontSize: "15px",
    color: "#5f6368",
    marginTop: "8px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <div
          style={inputBoxStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#d2e3fc";
            e.currentTarget.style.background = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#e0e3e7";
            e.currentTarget.style.background = "#f8f9fa";
          }}
        >
          <TextareaAutosize
            minRows={1}
            maxRows={6}
            value={safeInput}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about Giridhar..."
            style={textareaStyle}
          />

          <button
            onClick={() => {
              if (safeInput.trim() && !loading) onSend();
            }}
            disabled={loading || !safeInput.trim()}
            style={buttonStyle}
            onMouseEnter={(e) => {
              if (safeInput.trim() && !loading) {
                e.currentTarget.style.background = "#1557b0";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                safeInput.trim() && !loading ? "#1a73e8" : "#dadce0";
            }}
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div style={helperTextStyle}>
          Ask about projects, skills, experience, education, and more.
        </div>
      </div>
    </div>
  );
};

export default ChatInput;