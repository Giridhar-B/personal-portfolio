import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import content from "../data/content";
import PageWrapper from "../components/common/PageWrapper";

const sectionTitleStyle = {
  fontSize: "24px",
  fontWeight: "500",
  color: "#202124",
  marginBottom: "18px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "14px",
};

const imageCardStyle = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "16px",
  cursor: "pointer",
  border: "1px solid #e0e3e7",
  background: "#fff",
};

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const media = content.media;

  return (
    <PageWrapper>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "50px",
        }}
      >
        {/* CERTIFICATES */}
        {media?.certificates?.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            {/* <h2 style={sectionTitleStyle}>Certificates</h2> */}

            <div style={gridStyle}>
              {media.certificates.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  style={imageCardStyle}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt="Certificate"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* URL SHORTENER */}
        {media?.urlShort?.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            {/* <h2 style={sectionTitleStyle}>URL Shortener</h2> */}

            <div style={gridStyle}>
              {media.urlShort.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  style={imageCardStyle}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt="URL Shortener"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* RECOMMENDATION SYSTEM */}
        {media?.recommendationSystem?.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            {/* <h2 style={sectionTitleStyle}>Recommendation System</h2> */}

            <div style={gridStyle}>
              {media.recommendationSystem.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  style={imageCardStyle}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt="Recommendation System"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {media?.videos?.length > 0 && (
          <div style={{ marginBottom: "30px" }}>
            {/* <h2 style={sectionTitleStyle}>Project Videos</h2> */}

            <div style={gridStyle}>
              {media.videos.map((video, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    ...imageCardStyle,
                    background: "#000",
                  }}
                  onClick={() => setSelectedVideo(video.video)}
                >
                  <video
                    muted
                    playsInline
                    preload="metadata"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  >
                    <source src={video.video} type="video/mp4" />
                  </video>

                  {/* overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.18)",
                    }}
                  />

                  {/* play button */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "rgba(0,0,0,0.72)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Play
                        size={20}
                        fill="white"
                        color="white"
                        style={{ marginLeft: "2px" }}
                      />
                    </div>
                  </div>

                  {/* title */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "12px",
                      right: "12px",
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: "500",
                      lineHeight: "1.4",
                    }}
                  >
                    {video.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* IMAGE MODAL */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.88)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "20px",
            }}
          >
            {/* close */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "22px",
                right: "22px",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.12)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <X size={20} color="white" />
            </button>

            <img
              src={selectedImage}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "92%",
                maxHeight: "92vh",
                borderRadius: "14px",
                objectFit: "contain",
              }}
            />
          </div>
        )}

        {/* VIDEO MODAL */}
        {selectedVideo && (
          <div
            onClick={() => setSelectedVideo(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.88)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "20px",
            }}
          >
            {/* close */}
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: "absolute",
                top: "22px",
                right: "22px",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.12)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <X size={20} color="white" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "92%",
                maxWidth: "1000px",
              }}
            >
              <video
                controls
                autoPlay
                style={{
                  width: "100%",
                  borderRadius: "14px",
                  background: "#000",
                }}
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Images;