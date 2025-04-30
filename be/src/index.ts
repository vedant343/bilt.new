require("dotenv").config();
import express from "express";
import OpenAI from "openai";
import cors from "cors";
import { BASE_PROMPT } from "./prompts";
import { getSystemPrompt } from "./prompts";
import { basePrompt as nodeBasePrompt } from "./defaults/node";
import { basePrompt as reactBasePrompt } from "./defaults/react";
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/template", async (req, res) => {
  const prompt = req.body.prompt;
  const response = await openai.chat.completions.create({
    model: "qwen/qwen3-30b-a3b:free",
    max_tokens: 200,
    messages: [
      {
        role: "system",
        content:
          "Return either node or react based on what do you think this project should be. Only return a single word either 'node' or 'react'. Do not return anything extra",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0,
  });
  const answer = response.choices[0].message.content;
  if (answer == "react") {
    res.json({
      prompts: [
        BASE_PROMPT,
        `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
      ],
      uiPrompts: [reactBasePrompt],
    });
    return;
  }

  if (answer === "node") {
    res.json({
      prompts: [
        `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
      ],
      uiPrompts: [nodeBasePrompt],
    });
    return;
  }

  res.status(403).json({ message: "You cant access this" });
  return;
});

app.post("/chat", async (req, res) => {
  const messages = req.body.messages;
  const response = await openai.chat.completions.create({
    model: "qwen/qwen3-30b-a3b:free",
    messages,
    temperature: 0,
    system: getSystemPrompt(),
  });
});

app.listen(3000);

// async function main() {
//   const userMessage = "Write a code for todo application";
//   const systemPrompt = getSystemPrompt();
//   const fullPrompt = `${BASE_PROMPT}\n${systemPrompt}\nUser Message: ${userMessage}`;

//   const completion = await openai.chat.completions.create({
//     model: "qwen/qwen3-30b-a3b:free",
//     messages: [
//       {
//         role: "user",
//         content: fullPrompt,
//       },
//     ],
//     temperature: 0,
//   });
//   console.log(completion.choices[0].message.content);
// }

// main();
