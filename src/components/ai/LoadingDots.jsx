const dotStyle = {
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#5f6368",
  animation: "bounce 1.2s infinite ease-in-out",
};

const LoadingDots = () => {
  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
              opacity: 0.5;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            background: "#f1f3f4",
            borderRadius: "24px",
            padding: "14px 18px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "6px",
              alignItems: "center",
            }}
          >
            <div style={{ ...dotStyle, animationDelay: "0s" }} />

            <div style={{ ...dotStyle, animationDelay: "0.2s" }} />

            <div style={{ ...dotStyle, animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingDots;