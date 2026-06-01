import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import content from "../data/content";
import PageWrapper from "../components/common/PageWrapper";

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const media = content.media;

  // GOOGLE-STYLE MIXED MEDIA FEED
  const mediaFeed = [
    ...(media?.certificates || []).map((img) => ({
      type: "image",
      src: img,
    })),

    ...(media?.urlShort || []).map((img) => ({
      type: "image",
      src: img,
    })),

    ...(media?.recommendationSystem || []).map((img) => ({
      type: "image",
      src: img,
    })),

    ...(media?.videos || []).map((video) => ({
      type: "video",
      src: video.video,
      title: video.title,
    })),
  ];

  return (
    <PageWrapper>
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          paddingBottom: "60px",
        }}
      >
        {/* GOOGLE IMAGES STYLE FEED */}
        <div className="google-images-grid">
          {mediaFeed.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              onClick={() =>
                item.type === "image"
                  ? setSelectedImage(item.src)
                  : setSelectedVideo(item.src)
              }
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                cursor: "pointer",
                marginBottom: "16px",
                breakInside: "avoid",
                background: "#f1f3f4",
              }}
            >
              {/* IMAGE */}
              {item.type === "image" && (
                <>
                  <img
                    src={item.src}
                    alt="Project"
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                      borderRadius: "20px",
                      transition: "transform 0.35s ease",
                    }}
                  />

                  {/* hover overlay */}
                  <div
                    className="image-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.22), transparent)",
                      opacity: 0,
                      transition: "0.25s ease",
                    }}
                  />
                </>
              )}

              {/* VIDEO */}
              {item.type === "video" && (
                <>
                  <video
                    muted
                    playsInline
                    preload="metadata"
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>

                  {/* dark overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.24)",
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
                    }}
                  >
                    <div
                      style={{
                        width: "62px",
                        height: "62px",
                        borderRadius: "50%",
                        background: "rgba(0,0,0,0.72)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <Play
                        size={26}
                        fill="white"
                        color="white"
                        style={{ marginLeft: "3px" }}
                      />
                    </div>
                  </div>

                  {/* video title */}
                  <div
                    style={{
                      position: "absolute",
                      left: "16px",
                      right: "16px",
                      bottom: "16px",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.title}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* IMAGE MODAL */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.94)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "24px",
            }}
          >
            {/* close */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(8px)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <X size={22} color="white" />
            </button>

            <img
              src={selectedImage}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "92%",
                maxHeight: "92vh",
                objectFit: "contain",
                borderRadius: "18px",
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
              background: "rgba(0,0,0,0.94)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "24px",
            }}
          >
            {/* close */}
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(8px)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <X size={22} color="white" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "92%",
                maxWidth: "1100px",
              }}
            >
              <video
                controls
                autoPlay
                style={{
                  width: "100%",
                  borderRadius: "18px",
                  background: "#000",
                }}
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        )}

        {/* RESPONSIVE GOOGLE GRID */}
        <style>
          {`
            .google-images-grid {
              column-count: 4;
              column-gap: 16px;
            }

            .google-images-grid img:hover,
            .google-images-grid video:hover {
              transform: scale(1.03);
            }

            .google-images-grid > div:hover .image-overlay {
              opacity: 1 !important;
            }

            @media (max-width: 1200px) {
              .google-images-grid {
                column-count: 3;
              }
            }

            @media (max-width: 768px) {
              .google-images-grid {
                column-count: 2;
              }
            }

            @media (max-width: 480px) {
              .google-images-grid {
                column-count: 1;
              }
            }
          `}
        </style>
      </div>
    </PageWrapper>
  );
};

export default Images;