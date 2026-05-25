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
};

const Resume = () => {
  return (
    <PageWrapper>
      {/* GLOBAL ALIGNMENT WRAPPER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* UNIFIED CONTENT COLUMN */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            marginTop: "0px",
            transform: "translateX(-10.5px)"
          }}
        >
          {/* HEADING */}
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "400",
              color: "#1a0dab",
              marginBottom: "18px",
              marginTop: 0,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Resume
          </h2>

          {/* BUTTONS */}
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

          {/* PDF CONTAINER */}
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
    </PageWrapper>
  );
};

export default Resume;