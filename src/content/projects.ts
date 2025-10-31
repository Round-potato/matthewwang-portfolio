import { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "translator-pipeline",
    title: "Translator & Summarizer Pipeline",
    description:
      "Reddit (PRAW) → summarize → translate → TTS audio using Hugging Face + OpenAI; automated, multi-language.",
    tags: ["Python", "NLP", "Hugging Face", "OpenAI"],
    repo: "https://github.com/.../translator",
  },
  {
    slug: "howse",
    title: "Howse.life",
    description:
      "Next.js + Tailwind recipe assistant powered by Gemini API; deployed on Vercel.",
    tags: ["Next.js", "Tailwind", "Gemini API"],
    href: "https://howse.life",
  },
  {
    slug: "mini-gpt",
    title: "Mini-GPT",
    description:
      "From-scratch bigram/GPT experiment in Colab; tokenization + scaling behavior.",
    tags: ["PyTorch", "ML"],
    repo: "https://github.com/.../mini-gpt",
  },
  {
    slug: "chrome-paragraph",
    title: "ChatGPT Paragraph Extension",
    description:
      "Chrome extension to generate paragraph suggestions via OpenAI API.",
    tags: ["JavaScript", "Chrome API"],
    repo: "https://github.com/.../extension",
  },
];




