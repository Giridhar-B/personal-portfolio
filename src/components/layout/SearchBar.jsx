import { useState, useRef } from "react";
import { motion } from "framer-motion";
import content from "../../data/content";
import useMediaQuery from "../../hooks/useMediaQuery";

const SearchBar = () => {
  const [value, setValue] = useState(content.name);
  const inputRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClear = () => {
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "stretch" : "center",
        padding: isMobile ? "10px 12px" : "10px 0 25px 40px",
        gap: isMobile ? "12px" : "35px",
      }}
    >
      {/* Google Logo */}
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google"
        style={{
          width: isMobile ? "80px" : "92px",
          height: isMobile ? "26px" : "30px",
          objectFit: "contain",
          cursor: "pointer",
          alignSelf: isMobile ? "center" : "auto",
        }}
      />

      {/* Search Bar */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          width: isMobile ? "100%" : "850px",
          maxWidth: "100%",
          height: "44px",
          display: "flex",
          alignItems: "center",
          border: "1px solid #dfe1e5",
          borderRadius: "24px",
          padding: "10px 18px",
          boxShadow: "0 1px 6px rgba(32,33,36,0.18)",
          background: "#fff",
          boxSizing: "border-box",
        }}
      >
        {/* Input */}
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: isMobile ? "14px" : "16px",
            background: "transparent",
            color: "#202124",
          }}
        />

        {/* Clear Button */}
        {value && (
          <span
            onClick={handleClear}
            style={{
              cursor: "pointer",
              color: "#70757a",
              fontSize: "18px",
              paddingLeft: "10px",
              flexShrink: 0,
            }}
          >
            ✕
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default SearchBar;