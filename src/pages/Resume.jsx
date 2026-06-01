import PageWrapper from "../components/common/PageWrapper";

const buttonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "36px",
  padding: "0 16px",
  borderRadius: "18px",
  border: "1px solid #dadce0",
  backgroundColor: "#fff",
  color: "#3c4043",
  fontSize: "14px",
  fontWeight: 500,
  textDecoration: "none",
  transition: "all 0.2s ease",
  cursor: "pointer",
  fontFamily: "Arial, sans-serif",
};

const Resume = () => {
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
            display: "flex",
            gap: "60px",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "1100px",
          }}
        >
          {/* LEFT COLUMN (same alignment as All.jsx) */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
            }}
          >
            {/* PAGE TITLE */}
            <h2
              style={{
                fontSize: "22px",
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f1f3f4";
                  e.currentTarget.style.borderColor = "#c6c6c6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.borderColor = "#dadce0";
                }}
              >
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f1f3f4";
                  e.currentTarget.style.borderColor = "#c6c6c6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.borderColor = "#dadce0";
                }}
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
                height="780px"
                style={{
                  border: "none",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;