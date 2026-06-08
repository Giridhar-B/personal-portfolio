import axios from "axios";
import { buildSystemPrompt } from "../server/ai/aiPrompt.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const systemPrompt = buildSystemPrompt();

    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
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

    const aiText =
      geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.status(200).json({
      response: aiText || "No response generated",
    });
  } catch (err) {
    console.error(
        "Gemini Error:",
        err.response?.data || err.message || err
    );

    return res.status(500).json({
        error: err.response?.data || err.message,
    });
    }
}