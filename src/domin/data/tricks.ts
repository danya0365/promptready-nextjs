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
    {
      id: "zero-brain-skill-creation",
      slug: "zero-brain-skill-creation-with-ai",
      title: "Zero-Brain Skill Creation with AI",
      description:
        "Let AI randomly pick one of its own skills, generate content, self-analyze, fix weaknesses, and output a brand-new skill—without you brainstorming anything. Your only job is reviewing the final result and deciding if it needs another loop.",
      category: "Coding",
      tags: ["AI", "Skill", "Meta-Prompting", "Automation", "Coding"],
      difficulty: "Advanced",
      createdAt: "2026-05-01",
      steps: [
        {
          title: "Step 1: Ask AI to Randomly Pick a Skill",
          blocks: [
            {
              type: "text",
              content:
                "Instead of thinking of a skill yourself, let the AI do the brainstorming. Prompt it to randomly select one skill it has, or pick from a hidden list.",
            },
            {
              type: "code",
              content:
                "Pick one skill you have at random (coding, writing, design, data analysis, etc.).\nTell me the skill name and a one-sentence description.\nDo not ask me what I want—just decide for me.",
              language: "markdown",
            },
            {
              type: "note",
              content:
                "If the AI keeps picking the same skill, add constraints like: 'Pick a skill I have never asked you to use before.'",
            },
          ],
        },
        {
          title: "Step 2: Generate Full Content for That Skill",
          blocks: [
            {
              type: "text",
              content:
                "Once the skill is chosen, instruct the AI to generate a complete piece of content (code, article, analysis, etc.) using that skill—without any further input from you.",
            },
            {
              type: "code",
              content:
                "Using the skill you just picked, generate a complete, real-world example.\nMake it production-ready, not a toy demo.\nAssume I am a senior developer reviewing your output.",
              language: "markdown",
            },
            {
              type: "warning",
              content:
                "If the output is too generic, add: 'Be specific. Use real names, real data, and real edge cases.'",
            },
          ],
        },
        {
          title: "Step 3: Self-Analyze Pros & Cons",
          blocks: [
            {
              type: "text",
              content:
                "Now let the AI wear a critic hat. Ask it to list the strengths and weaknesses of the content it just generated.",
            },
            {
              type: "code",
              content:
                "Analyze the content you just generated.\nList:\n1. Three strengths (what makes it good).\n2. Three weaknesses (what could break, confuse, or underperform).\n3. One hidden risk a senior reviewer would spot.",
              language: "markdown",
            },
            {
              type: "note",
              content:
                "If the AI is too easy on itself, add: 'Be brutally honest. Assume I will ship this to production tomorrow.'",
            },
          ],
        },
        {
          title: "Step 4: Fix the Weaknesses",
          blocks: [
            {
              type: "text",
              content:
                "Instruct the AI to rewrite the content, directly addressing every weakness it identified in the previous step.",
            },
            {
              type: "code",
              content:
                "Rewrite the content from Step 2, fixing every weakness you listed in Step 3.\nDo not just mention the fixes—apply them in the actual code/content.\nReturn the full, updated version.",
              language: "markdown",
            },
            {
              type: "success",
              content:
                "At this point you already have a better version than the first draft—without typing a single idea yourself.",
            },
          ],
        },
        {
          title: "Step 5: Extract a Reusable Skill from the Output",
          blocks: [
            {
              type: "text",
              content:
                "The final meta-step: ask the AI to inspect the fixed output, abstract the reusable patterns, and package them into a new skill description you can reuse later.",
            },
            {
              type: "code",
              content:
                "Review the final content you produced.\nExtract the core techniques, patterns, and rules into a reusable 'skill' definition.\nGive it a name, a one-line purpose, and a prompt template I can copy-paste later.",
              language: "markdown",
            },
            {
              type: "note",
              content:
                "This turns a one-off generation into a reusable asset in your personal skill library.",
            },
          ],
        },
        {
          title: "Step 6: Review & Iterate Until Satisfied",
          blocks: [
            {
              type: "text",
              content:
                "You are the final gatekeeper. Read the skill and the fixed content. If anything feels off, send it back into the loop starting from Step 3 (re-analyze and fix).",
            },
            {
              type: "code",
              content:
                "Feedback: [your brief critique, e.g. 'too verbose', 'missing error handling', 'not beginner-friendly']\n\nRe-analyze this content with the feedback above, fix it, and regenerate the skill definition.",
              language: "markdown",
            },
            {
              type: "success",
              content:
                "You only use your brain for quality control. The AI does all the creative and analytical work.",
            },
          ],
        },
      ],
      commonIssues: [
        {
          issue: "AI keeps picking the same skill or boring ones",
          solution:
            "Add constraints: 'Pick from a domain I have never used' or 'Pick a skill that combines two unrelated domains.'",
        },
        {
          issue: "Generated content is too broad or shallow",
          solution:
            "Add scope controls: 'Target this at a senior-level audience' or 'Include at least one real-world edge case and error handling.'",
        },
        {
          issue: "The loop never ends—AI keeps 'fixing' forever",
          solution:
            "Set a max iteration limit (e.g., 'Stop after 3 rounds unless I explicitly ask for more') and define 'done' criteria upfront.",
        },
      ],
      author: {
        name: "Marosdee Uma",
      },
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
