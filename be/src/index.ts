require("dotenv").config();
import express from "express";
import OpenAI from "openai";
import { BASE_PROMPT, getSystemPrompt } from "./prompts";
import { basePrompt as nodeBasePrompt } from "./defaults/node";
import { basePrompt as reactBasePrompt } from "./defaults/react";
import cors from "cors";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.OPENAI_API_KEY!,
});
const app = express();
app.use(cors());
app.use(express.json());

async function main() {
  const completion = await openai.chat.completions.create({
    temperature: 0,
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();
