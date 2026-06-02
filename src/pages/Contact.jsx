import content from "../data/content";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageWrapper from "../components/common/PageWrapper";

import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

import useMediaQuery from "../hooks/useMediaQuery";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");

  const isMobile = useMediaQuery("(max-width: 768px)");

  const copyEmail = () => {
    navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const chipStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    height: isMobile ? "40px" : "38px",
    padding: isMobile ? "0 14px" : "0 16px",
    borderRadius: "999px",
    border: "1px solid #d0d7de",
    background: "linear-gradient(180deg, #ffffff, #f6f8fa)",
    color: "#1f2328",
    fontSize: isMobile ? "13px" : "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.25s ease",
    textDecoration: "none",
    fontFamily: "Arial, sans-serif",
  };

  const hoverIn = (e) => {
    e.currentTarget.style.background = "#1a73e8";
    e.currentTarget.style.color = "#fff";
    e.currentTarget.style.borderColor = "#1a73e8";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(26,115,232,0.25)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(180deg, #ffffff, #f6f8fa)";
    e.currentTarget.style.color = "#1f2328";
    e.currentTarget.style.borderColor = "#d0d7de";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  const inputStyle = {
    width: "100%",
    height: "50px",
    padding: "0 14px",
    marginBottom: "14px",
    border: "1px solid #d0d7de",
    borderRadius: "10px",
    fontSize: isMobile ? "14px" : "15px",
    outline: "none",
    boxSizing: "border-box",
    color: "#111827",
    backgroundColor: "#fff",
    transition: "all 0.2s ease",
    fontFamily: "Arial, sans-serif",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_yhnyjho",
        "template_8jgvyxg",
        e.target,
        "tRpqPreN5HeN9SmXB"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <PageWrapper>
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "20px auto 0",
          marginTop: "-20px",
          padding: isMobile ? "0 12px" : "0",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* HEADER */}
        <h2
          style={{
            fontSize: isMobile ? "20px" : "22px",
            fontWeight: "400",
            color: "#1a0dab",
            marginBottom: "8px",
            marginTop: 0,
            cursor: "pointer",
            fontFamily: "Arial, sans-serif",
          }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
          Contact
        </h2>

        <p
          style={{
            fontSize: isMobile ? "14px" : "15px",
            fontFamily: "Arial, sans-serif",
            color: "#475569",
            marginBottom: "30px",
            maxWidth: "720px",
            lineHeight: "1.7",
          }}
        >
          Feel free to reach out for opportunities, collaborations,
          freelance work, or technical discussions.
        </p>

        {/* CONTACT BLOCK */}
        <div style={{ marginBottom: "36px" }}>
          {/* EMAIL */}
          <div style={{ marginBottom: "22px" }}>
            <div
              style={{
                fontSize: "14px",
                color: "#1a0dab",
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: 500,
              }}
            >
              <FiMail /> Email
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", }}>
              <span style={{ fontSize: "15px", color: "#111827" }}>
                {content.contact.email}
              </span>

              <button
                style={chipStyle}
                onClick={copyEmail}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* PROFILES */}
          <div style={{ marginBottom: "22px" }}>
            <div
              style={{
                fontSize: "13px",
                color: "#64748b",
                marginTop: "20px",
                marginBottom: "15px",
                fontWeight: 500,
              }}
            >
              Profiles
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                style={chipStyle}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href={content.contact.github}
                target="_blank"
                rel="noreferrer"
                style={chipStyle}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={content.contact.leetcode}
                target="_blank"
                rel="noreferrer"
                style={chipStyle}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              >
                <SiLeetcode /> LeetCode
              </a>

              <a
                href={content.contact.codeforces}
                target="_blank"
                rel="noreferrer"
                style={chipStyle}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              >
                <SiCodeforces /> Codeforces
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <div
              style={{
                fontSize: "14px",
                color: "#1a0dab",
                marginTop: "30px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: 500,
              }}
            >
              <FiMapPin /> Location
            </div>

            <div
              style={{
                fontSize: isMobile ? "14px" : "15px",
                color: "#111827",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {content.contact.location}
            </div>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={sendEmail}>
          <h3
            style={{
              fontSize: isMobile ? "20px" : "22px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 500,
              color: "#1a0dab",
              marginBottom: "16px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Send a message
          </h3>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#1a73e8";
              e.target.style.boxShadow = "0 0 0 4px rgba(26,115,232,0.15)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#d0d7de";
              e.target.style.boxShadow = "none";
            }}
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#1a73e8";
              e.target.style.boxShadow = "0 0 0 4px rgba(26,115,232,0.15)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#d0d7de";
              e.target.style.boxShadow = "none";
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            style={{
              ...inputStyle,
              height: "140px",
              padding: "12px 14px",
              resize: "vertical",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#1a73e8";
              e.target.style.boxShadow = "0 0 0 4px rgba(26,115,232,0.15)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#d0d7de";
              e.target.style.boxShadow = "none";
            }}
          />

          <button
            type="submit"
            style={chipStyle}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <FiSend /> Send Message
          </button>

          {status && (
            <p
              style={{
                marginTop: "14px",
                fontSize: "14px",
                color: "#475569",
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </PageWrapper>
  );
};

export default Contact;