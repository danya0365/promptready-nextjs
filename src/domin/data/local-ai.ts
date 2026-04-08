import { LocalAITool } from "../types/local-ai";

export const LOCAL_AI_TOOLS: LocalAITool[] = [
  {
    id: "ollama",
    slug: "ollama",
    name: "Ollama",
    tagline: "Run Llama 3, Mistral, Gemma, and other models locally.",
    description: "Ollama is a lightweight, extensible framework for building and running language models on your local machine. It provides a simple CLI and a local API that is compatible with many tools.",
    iconName: "Terminal",
    downloadUrl: "https://ollama.com/download",
    websiteUrl: "https://ollama.com",
    platforms: ["macOS", "Windows", "Linux"],
    features: [
      "Simple CLI interface",
      "Local REST API (port 11434)",
      "Large model library (llama3, phi3, mistral, etc.)",
      "Automatic GPU acceleration",
    ],
    setupGuide: {
      steps: [
        {
          title: "Download & Install",
          description: "Go to ollama.com and download the installer for your OS. Run the installer and finish the setup.",
          code: "https://ollama.com/download",
        },
        {
          title: "Verify Installation",
          description: "Open your terminal and run the ollama command to see if it's working.",
          code: "ollama --version",
          language: "bash",
        },
        {
          title: "Run your first model",
          description: "Download and run the Llama 3 model directly from the CLI.",
          code: "ollama run llama3",
          language: "bash",
        },
      ],
    },
    usageGuide: {
      overview: "Ollama runs as a background service. You can interact with it via CLI or connect other apps to its local API.",
      examples: [
        {
          label: "List downloaded models",
          code: "ollama list",
          language: "bash",
        },
        {
          label: "Pull a specific model",
          code: "ollama pull gemma:2b",
          language: "bash",
        },
      ],
    },
  },
  {
    id: "lm-studio",
    slug: "lm-studio",
    name: "LM Studio",
    tagline: "Discover, download, and run local LLMs with a beautiful GUI.",
    description: "LM Studio is a powerful desktop application that allows you to easily find and run local models from Hugging Face. It features a full chat interface and a local server that mimics OpenAI's API.",
    iconName: "Layout",
    downloadUrl: "https://lmstudio.ai",
    websiteUrl: "https://lmstudio.ai",
    platforms: ["macOS", "Windows", "Linux"],
    features: [
      "Intuitive Chat UI",
      "Direct Hugging Face search",
      "Hardware configuration presets",
      "Local OpenAI-compatible server",
    ],
    setupGuide: {
      steps: [
        {
          title: "Download Installer",
          description: "Visit lmstudio.ai and download the version corresponding to your hardware (Intel, Apple Silicon, etc.).",
        },
        {
          title: "Search for a Model",
          description: "Open LM Studio and use the search icon on the left to find models. We recommend starting with 'Llama-3-8B-Instruct-GGUF'.",
        },
        {
          title: "Download & Load",
          description: "Select a quantization (4-bit or 8-bit usually works best) and click Download. Once done, go to the AI Chat tab and select the model at the top.",
        },
      ],
    },
    usageGuide: {
      overview: "You can use the built-in chat interface or enable the Local Server to use LM Studio as a backend for your own apps.",
      examples: [
        {
          label: "Local Server URL",
          code: "http://localhost:1234/v1",
          language: "text",
        },
      ],
    },
  },
  {
    id: "anything-llm",
    slug: "anything-llm",
    name: "AnythingLLM",
    tagline: "The all-in-one local AI stack for RAG and desktop use.",
    description: "AnythingLLM is a full-stack application that transforms documents into intelligent workspaces. It supports RAG (Retrieval Augmented Generation) out of the box and can connect to various local backends like Ollama and LM Studio.",
    iconName: "FileText",
    downloadUrl: "https://useanything.com/download",
    websiteUrl: "https://useanything.com",
    platforms: ["macOS", "Windows", "Linux"],
    features: [
      "Built-in RAG capabilities",
      "Multi-user support",
      "Workspace-based document management",
      "Supports various LLM backends",
    ],
    setupGuide: {
      steps: [
        {
          title: "Installation",
          description: "Download the executable from useanything.com and run the installation wizard.",
        },
        {
          title: "Choose Desktop mode",
          description: "On first launch, choose the Desktop version for local-only operation without needing a Docker setup.",
        },
        {
          title: "Select LLM Provider",
          description: "You can use the built-in provider or connect to your local Ollama instance in the settings.",
        },
      ],
    },
    usageGuide: {
      overview: "Upload your PDFs, text files, or URLs to a workspace, and AnythingLLM will index them for local chat with context.",
      examples: [
        {
          label: "Create Workspace",
          code: "Click '+' icon → Enter name → Select 'Create Workspace'",
          language: "text",
        },
      ],
    },
  },
  {
    id: "jan",
    slug: "jan",
    name: "Jan",
    tagline: "Open-source local AI with a clean, privacy-first interface.",
    description: "Jan is an open-source alternative to LM Studio, focusing on privacy and local execution. It provides a clean chat interface and makes it easy to manage your model library.",
    iconName: "ShieldCheck",
    downloadUrl: "https://jan.ai/download",
    websiteUrl: "https://jan.ai",
    platforms: ["macOS", "Windows", "Linux"],
    features: [
      "100% Open Source",
      "Privacy-first (no telemetry)",
      "Local API Support",
      "Extension system",
    ],
    setupGuide: {
      steps: [
        {
          title: "Download",
          description: "Get the latest release from jan.ai for your platform.",
        },
        {
          title: "Install Models",
          description: "Open the Hub tab inside Jan and download a recommended model like Mistral or Llama.",
        },
      ],
    },
    usageGuide: {
      overview: "Jan works immediately after downloading a model. You can adjust technical settings like temperature and system prompts per model.",
      examples: [
        {
          label: "Settings Location",
          code: "Settings (Gear icon) → Advanced → Local API Server",
          language: "text",
        },
      ],
    },
  },
  {
    id: "gpt4all",
    slug: "gpt4all",
    name: "GPT4All",
    tagline: "Optimized local LLMs for everyday hardware.",
    description: "GPT4All is an ecosystem of open-source chatbots that can run on consumer-grade CPUs. It requires no GPU to work efficiently and is designed to be as accessible as possible.",
    iconName: "Cpu",
    downloadUrl: "https://gpt4all.io",
    websiteUrl: "https://gpt4all.io",
    platforms: ["macOS", "Windows", "Linux"],
    features: [
      "CPU-only optimization",
      "Works on 8GB RAM laptops",
      "Local document chat",
      "Simple one-click installer",
    ],
    setupGuide: {
      steps: [
        {
          title: "Installer",
          description: "Download the installer from gpt4all.io and follow the prompts.",
        },
        {
          title: "Select Model",
          description: "Choose a model from the list provided in the app. GPT4All-L หรือ Hermes เป็นตัวเลือกที่ดีสำหรับความเร็ว",
        },
      ],
    },
    usageGuide: {
      overview: "GPT4All excels at running on hardware that doesn't have a high-end GPU. You can also point it to a folder on your computer to 'chat with your docs'.",
      examples: [
        {
          label: "Local Docs Tab",
          code: "Click 'LocalDocs' → 'Add' → Choose Folder",
          language: "text",
        },
      ],
    },
  },
];

export function getLocalAIToolBySlug(slug: string): LocalAITool | undefined {
  return LOCAL_AI_TOOLS.find((tool) => tool.slug === slug);
}
