require("dotenv").config();
import express from "express";
import OpenAI from "openai";
import cors from "cors";
import { BASE_PROMPT } from "./prompts";
import { getSystemPrompt } from "./prompts";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

async function main() {
  const userMessage = "Write a code for todo application";
  const systemPrompt = getSystemPrompt();
  const fullPrompt = `${BASE_PROMPT}\n${systemPrompt}\nUser Message: ${userMessage}`;

  const completion = await openai.chat.completions.create({
    model: "qwen/qwen3-30b-a3b:free",
    messages: [
      {
        role: "user",
        content: fullPrompt,
      },
    ],
    temperature: 0,
  });
  console.log(completion.choices[0].message.content);
}

main();
