import { useState, useRef, useEffect } from "react";
import axios from "axios";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import LoadingDots from "./LoadingDots";

const WELCOME_MESSAGES = [
  {
    role: "user",
    text: "Giridhar",
  },
  {
    role: "ai",
    text: `
**Giridhar B** is a Software Engineer focused on **backend engineering**, **full-stack development**, and **machine learning applications**.

He completed his **MCA** from **VIT Chennai** and worked as a **Software Developer Intern** at **3i Infotech Limited**, contributing to REST-based automation workflows and enterprise integrations.

**Core Technologies:** **Java**, **Python**, **JavaScript**, **React.js**, **Node.js**, **FastAPI**, **PostgreSQL**, **MongoDB**, **Redis**, and **Graph Neural Networks**.

**Featured Projects:** **GNN-Based Movie Recommendation System**, **URL Shortener**, and **GestoSense**.

**Career Focus:** Actively seeking **Software Engineer**, **Software Developer**, and **Software Development Engineer (SDE)** opportunities.
`,
  },
];

const AIMode = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = sessionStorage.getItem("aiMessages");

    return savedMessages
      ? JSON.parse(savedMessages)
      : WELCOME_MESSAGES;
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const latestMessageRef = useRef(null);

  useEffect(() => {
    sessionStorage.setItem(
      "aiMessages",
      JSON.stringify(messages)
    );
  }, [messages]);

  useEffect(() => {
    latestMessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [messages]);

  const sendMessage = async () => {
    const prompt = input.trim();

    if (!prompt || loading) return;

    const userMessage = {
      role: "user",
      text: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    setTimeout(() => {
      latestMessageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/chat",
        {
          message: prompt,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            res.data.response ||
            "No response received.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "850px",
          margin: "0 auto",
          paddingTop: "24px",
          paddingBottom: "180px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            ref={
              index === messages.length - 1
                ? latestMessageRef
                : null
            }
          >
            <ChatMessage message={message} />
          </div>
        ))}

        {loading && <LoadingDots />}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          background: "#ffffff",
          borderTop: "1px solid #e8eaed",
          padding: "16px 24px",
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <ChatInput
            input={input}
            setInput={setInput}
            onSend={sendMessage}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default AIMode;