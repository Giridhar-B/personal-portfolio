import { useState } from "react";
import content from "../../data/content";
import { Play, X, ChevronRight } from "lucide-react";

const ProjectVideos = ({ setTab }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div style={{ marginTop: "42px" }}>

      {/* Heading */}
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "400",
          color: "#1a0dab",
          marginBottom: "18px",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
      >
        Videos
      </h2>

      {/* Videos */}
      <div>
        {content.videos.map((video, index) => {
          const isLast = index === content.videos.length - 1;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "16px",
                paddingBottom: isLast ? "0px" : "20px",
                marginBottom: isLast ? "0px" : "20px",
                borderBottom: isLast ? "none" : "1px solid #e8eaed",
                alignItems: "flex-start"
              }}
            >

              {/* Video Preview */}
              <div
                onClick={() => setSelectedVideo(video.video)}
                style={{
                  position: "relative",
                  width: "132px",
                  height: "74px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#000",
                  cursor: "pointer"
                }}
              >
                <video
                  muted
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                >
                  <source src={video.video} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.15)"
                  }}
                />

                {/* Play Button */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pointerEvents: "none"
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.72)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Play
                      size={16}
                      fill="white"
                      color="white"
                      style={{
                        marginLeft: "2px"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>

                {/* Title */}
                <p
                  onClick={() => setSelectedVideo(video.video)}
                  style={{
                    fontSize: "16px",
                    color: "#1a0dab",
                    margin: "0 0 5px 0",
                    lineHeight: "1.4",
                    fontWeight: "400",
                    cursor: "pointer"
                  }}
                >
                  {video.title}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4d5156",
                    lineHeight: "1.6",
                    margin: 0,
                    maxWidth: "420px"
                  }}
                >
                  {video.description}
                </p>

              </div>
            </div>
          );
        })}

        {/* More Videos */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "28px",
            marginBottom: "8px"
          }}
        >

          {/* Left Line */}
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "#dadce0"
            }}
          />

          {/* Button */}
          <div
            onClick={() => setTab("Projects")}
            style={{
              margin: "0 14px",
              padding: "9px 18px",
              border: "1px solid #dadce0",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#1a0dab",
              cursor: "pointer",
              background: "#fff",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f8f9fa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
            }}
          >
            View all
            <ChevronRight size={16} />
          </div>

          {/* Right Line */}
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "#dadce0"
            }}
          />
        </div>

      </div>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.82)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px"
          }}
        >

          {/* Close Button */}
          <button
            onClick={() => setSelectedVideo(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.12)",
              border: "none",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <X size={20} color="white" />
          </button>

          {/* Video */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90%",
              maxWidth: "950px"
            }}
          >
            <video
              controls
              autoPlay
              style={{
                width: "100%",
                borderRadius: "14px",
                background: "#000"
              }}
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectVideos;