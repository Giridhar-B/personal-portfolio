import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

import { buildSystemPrompt } from "./ai/aiPrompt.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const systemPrompt = buildSystemPrompt();

    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
${systemPrompt}

User Question:
${userMessage}
                `,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(
      "Gemini Response:",
      JSON.stringify(geminiResponse.data, null, 2)
    );

    const aiText =
      geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiText) {
      return res.status(500).json({
        error: "No response generated from Gemini",
      });
    }

    res.json({
      response: aiText,
    });
  } catch (err) {
    console.error(
      "Gemini API Error:",
      err.response?.data || err.message
    );

    res.status(500).json({
      error: "AI request failed",
    });
  }
});

app.get("/", (req, res) => {
  res.send("AI Server Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});