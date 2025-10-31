import { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "translator-pipeline",
    title: "Translator & Summarizer Pipeline",
    description:
      "Reddit (PRAW) → summarize → translate → TTS audio using Hugging Face + OpenAI; automated, multi-language.",
    tags: ["Python", "NLP", "Hugging Face", "OpenAI"],
    repo: "https://github.com/Round-potato/Translator",
  },
  {
    slug: "howse",
    title: "Howse.life",
    description:
      "Next.js + Tailwind recipe assistant powered by Gemini API; deployed on Vercel.",
    tags: ["Next.js", "Tailwind", "Gemini API"],
    href: "https://howse-recipes-2.vercel.app",
  },
  {
    slug: "mini-gpt",
    title: "Mini-GPT",
    description:
      "From-scratch bigram/GPT experiment in Colab; tokenization + scaling behavior.",
    tags: ["PyTorch", "ML"],
    repo: "https://colab.research.google.com/drive/1cX3SARXY2DMULHv_ZGKXac75I-wbDtnE?usp=sharing",
  },
  {
    slug: "chrome-paragraph",
    title: "ChatGPT Paragraph Extension",
    description:
      "Chrome extension to generate paragraph suggestions via OpenAI API.",
    tags: ["JavaScript", "Chrome API"],
    repo: "https://github.com/Round-potato/gpt3-writer-extension-starter",
  },
];




