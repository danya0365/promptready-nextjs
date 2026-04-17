import { Trick } from "../types/tricks";

export const TRICKS: Trick[] = (
  [
    {
      id: "claude-code-gemma-4",
      slug: "run-claude-code-with-gemma-4-free",
      title: "How to run Claude Code with Gemma 4 completely free",
      description:
        "Run Claude Code locally using Google's Gemma 4. No subscriptions, no API keys, 100% private.",
      category: "Local AI",
      tags: ["Claude", "Gemma 4", "Ollama", "Free", "Coding"],
      difficulty: "Beginner",
      minHardware: "8GB RAM (16GB Recommended)",
      createdAt: "2026-04-08",
      steps: [
        {
          title: "Step 1: Install Ollama (The Engine)",
          blocks: [
            {
              type: "text",
              content: "Ollama is what runs AI models locally on your machine.",
            },
            {
              type: "platforms",
              content: [
                {
                  os: "macOS",
                  description:
                    "Go to ollama.com/download, click download for Mac, and install like any normal app.",
                },
                {
                  os: "Windows",
                  description:
                    "Go to ollama.com/download, click download and run the installer.",
                },
                {
                  os: "Linux",
                  command: "curl -fsSL ollama.com/install.sh | sh",
                  description: "Run this command in your terminal.",
                },
              ],
            },
            {
              type: "text",
              content: "After installing, verify the installation by running:",
            },
            {
              type: "code",
              content: "ollama --version",
              language: "bash",
            },
          ],
        },
        {
          title: "Step 2: Download Gemma 4",
          blocks: [
            {
              type: "text",
              content: "Pick the model size based on your machine's RAM:",
            },
            {
              type: "note",
              content:
                "• 8GB RAM: ollama pull gemma4:e2b\n• 16GB RAM: ollama pull gemma4:e4b (Recommended)\n• 32GB+ RAM: ollama pull gemma4:26b",
            },
            {
              type: "warning",
              content:
                "These are large downloads (7GB - 18GB). Ensure you have a stable connection and enough disk space.",
            },
            {
              type: "code",
              content: "ollama pull gemma4:e4b",
              language: "bash",
            },
            {
              type: "text",
              content: "Verify your downloaded models with:",
            },
            {
              type: "code",
              content: "ollama list",
              language: "bash",
            },
          ],
        },
        {
          title: "Step 3: Install Claude Code Extension",
          blocks: [
            {
              type: "text",
              content:
                "Claude Code is your interface for interacting with the AI.",
            },
            {
              type: "text",
              content:
                "1. Open VS Code.\n2. Press `Ctrl + Shift + X` (or Cmd+Shift+X on Mac).\n3. Search for 'Claude Code' by Anthropic and install it.\n4. You will see a ⚡ icon in your sidebar.",
            },
          ],
        },
        {
          title: "Step 4: Connect Claude Code to Ollama",
          blocks: [
            {
              type: "note",
              content:
                "We're redirecting Claude to your local machine to keep everything 100% private.",
            },
            {
              type: "text",
              content:
                "1. Press `Ctrl + Shift + P` (Cmd+Shift+P on Mac).\n2. Search: 'Open User Settings (JSON)'.\n3. Paste this config inside the JSON file:",
            },
            {
              type: "code",
              content: `"claude-code.env": {
  "ANTHROPIC_BASE_URL": "http://localhost:11434",
  "ANTHROPIC_API_KEY": "",
  "ANTHROPIC_AUTH_TOKEN": "ollama"
}`,
              language: "json",
            },
          ],
        },
        {
          title: "Step 5: Run Everything",
          blocks: [
            {
              type: "text",
              content: "Now you're ready to start prompting!",
            },
            {
              type: "code",
              content: "ollama serve",
              language: "bash",
            },
            {
              type: "success",
              content:
                "Everything is connected! Open the Claude Code sidebar (⚡), type your model name (e.g., `gemma4:e4b`), and start coding.",
            },
          ],
        },
      ],
      commonIssues: [
        {
          issue: "Unable to connect / Connection Refused",
          solution: "Ensure 'ollama serve' is running in a terminal window.",
        },
        {
          issue: "Asked to sign in or API error",
          solution:
            "Double-check your JSON configuration in Step 4 for syntax errors.",
        },
        {
          issue: "Very slow responses",
          solution:
            "Your model might be too large for your RAM. Try 'gemma4:e2b'.",
        },
      ],
      author: {
        name: "Usama Akram",
        url: "https://www.facebook.com/u.akram110",
      },
      sourceUrl: "https://www.facebook.com/share/p/1GFJLA6hxs/",
    },
    {
      id: "openclaw-gemma-4",
      slug: "run-openclaw-with-gemma-4-private-ai",
      title: "Run OpenClaw with Gemma 4: Your Private AI Agent",
      description:
        "Launch your own private AI agent using OpenClaw and Google's Gemma 4. No cloud, no subscription, your data never leaves your device.",
      category: "Local AI",
      tags: ["OpenClaw", "Gemma 4", "Ollama", "Free", "Privacy", "Agent"],
      difficulty: "Beginner",
      minHardware: "16GB RAM (32GB Recommended)",
      createdAt: "2026-04-17",
      steps: [
        {
          title: "Step 1: Install Ollama",
          blocks: [
            {
              type: "text",
              content:
                "Ollama is the engine that runs AI models locally on your machine. Go to ollama.com/download and install it. Takes about 2 minutes.",
            },
            {
              type: "platforms",
              content: [
                {
                  os: "macOS",
                  description:
                    "Download from ollama.com/download and install like any normal app.",
                },
                {
                  os: "Windows",
                  description:
                    "Download from ollama.com/download and run the installer.",
                },
                {
                  os: "Linux",
                  command: "curl -fsSL ollama.com/install.sh | sh",
                  description: "Run this command in your terminal.",
                },
              ],
            },
            {
              type: "code",
              content: "ollama --version",
              language: "bash",
            },
          ],
        },
        {
          title: "Step 2: Download Gemma 4 (Optional)",
          blocks: [
            {
              type: "text",
              content:
                "Download Gemma 4 26B A4B directly to your device. This step is optional because Step 3 can handle it automatically.",
            },
            {
              type: "code",
              content: "ollama pull gemma4:26b",
              language: "bash",
            },
            {
              type: "note",
              content:
                "Model size: ~18GB download. Ensure stable internet connection.",
            },
          ],
        },
        {
          title: "Step 3: Launch OpenClaw With Gemma 4",
          blocks: [
            {
              type: "text",
              content:
                "Run this single command. OpenClaw installs itself and launches with Gemma 4 as the backend automatically.",
            },
            {
              type: "code",
              content: "ollama launch openclaw --model gemma4:26b",
              language: "bash",
            },
            {
              type: "success",
              content:
                "Your own private AI is now live on your laptop! No cloud, no subscription, complete privacy.",
            },
          ],
        },
      ],
      commonIssues: [
        {
          issue: "OpenClaw command not found",
          solution:
            "Ensure Ollama is installed correctly and the command 'ollama' is in your PATH. Restart your terminal after installation.",
        },
        {
          issue: "Model not found error",
          solution:
            "Run 'ollama pull gemma4:26b' manually first, or check available models with 'ollama list'.",
        },
        {
          issue: "Out of memory / very slow",
          solution:
            "Gemma 4 26B requires 32GB RAM. For 16GB systems, try smaller models first like 'gemma4:4b' or 'gemma4:12b'.",
        },
        {
          issue: "Port already in use",
          solution:
            "Another Ollama instance is running. Kill existing processes with 'pkill ollama' or restart your machine.",
        },
      ],
      author: {
        name: "Thedigitalkinggg",
        url: "https://www.facebook.com/share/p/18e9WC18CR/",
      },
      sourceUrl: "https://www.facebook.com/share/p/18e9WC18CR/",
    },
  ] as Trick[]
).sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
);

export function getTrickBySlug(slug: string): Trick | undefined {
  return TRICKS.find((trick) => trick.slug === slug);
}

export const TRICK_CATEGORIES = Array.from(
  new Set(TRICKS.map((trick) => trick.category)),
);
