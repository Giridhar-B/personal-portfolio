import PageWrapper from "../components/common/PageWrapper";
import useMediaQuery from "../hooks/useMediaQuery";

const Resume = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: isMobile ? "40px" : "36px",
    padding: isMobile ? "0 14px" : "0 16px",
    borderRadius: "18px",
    border: "1px solid #dadce0",
    backgroundColor: "#fff",
    color: "#3c4043",
    fontSize: isMobile ? "13px" : "14px",
    fontWeight: 500,
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "Arial, sans-serif",
    transition: "all 0.25s ease",
    boxShadow: "none",
  };

  const handleButtonHover = (e) => {
    e.currentTarget.style.backgroundColor = "#1a73e8";
    e.currentTarget.style.color = "#ffffff";
    e.currentTarget.style.borderColor = "#1a73e8";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow =
      "0 10px 20px rgba(26,115,232,0.25)";
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#ffffff";
    e.currentTarget.style.color = "#3c4043";
    e.currentTarget.style.borderColor = "#dadce0";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <PageWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            padding: isMobile ? "0 12px" : "0",
            boxSizing: "border-box",
          }}
        >
          {/* PAGE TITLE */}
          <h2
            style={{
              fontSize: isMobile ? "20px" : "22px",
              fontWeight: "400",
              color: "#1a0dab",
              marginBottom: "18px",
              marginTop: 0,
              cursor: "pointer",
              fontFamily: "Arial, sans-serif",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            Resume
          </h2>

          {/* ACTION BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              style={buttonStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Download PDF
            </a>
          </div>

          {/* PDF VIEWER */}
          <div
            style={{
              border: "1px solid #dadce0",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <iframe
              src="/resume.pdf"
              title="Resume"
              width="100%"
              height={isMobile ? "600px" : "780px"}
              style={{
                border: "none",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;