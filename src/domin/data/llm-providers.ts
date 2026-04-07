export type ProviderType = "provider" | "inference";
export type Country = "us" | "eu" | "cn" | "uk";

export interface LLMProvider {
  id: string;
  name: string;
  type: ProviderType;
  country: Country;
  flag: string;
  models: string[];
  featuredModels: string[];
  limits: string[];
  note?: string;
  apiUrl: string;
  docsUrl?: string;
  openAICompatible: boolean;
  tags: string[];
  highlight?: string;
  baseUrl: string;
  envVar: string;
  defaultModel: string;
  setupSteps: string[];
}

export const PROVIDERS: LLMProvider[] = [
  // ─── Provider APIs ───────────────────────────────────────
  {
    id: "google-gemini",
    name: "Google Gemini",
    type: "provider",
    country: "us",
    flag: "🇺🇸",
    models: [
      "Gemini 2.5 Pro",
      "Gemini 2.0 Flash",
      "Gemini 1.5 Flash-Lite",
      "Gemma 3",
      "+4 more",
    ],
    featuredModels: ["Gemini 2.5 Pro", "Flash", "Flash-Lite"],
    limits: ["5–15 RPM", "100–1K RPD"],
    note: "Free tier ไม่รองรับ EU / UK / Switzerland",
    apiUrl: "https://aistudio.google.com/app/apikey",
    docsUrl: "https://ai.google.dev/gemini-api/docs",
    openAICompatible: true,
    tags: ["vision", "multimodal", "thinking"],
    highlight: "Gemini 2.5 Pro ฟรี",
    baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai/",
    envVar: "GEMINI_API_KEY",
    defaultModel: "gemini-2.5-flash",
    setupSteps: [
      "ไปที่ Google AI Studio (aistudio.google.com/app/apikey)",
      "ลงชื่อเข้าใช้ด้วย Google Account",
      'คลิก "Create API Key" แล้วเลือกหรือสร้าง Google Cloud Project',
      "คัดลอก API Key ที่ได้",
    ],
  },
  {
    id: "mistral",
    name: "Mistral AI",
    type: "provider",
    country: "eu",
    flag: "🇪🇺",
    models: [
      "Mistral Large 3",
      "Mistral Small 3.1",
      "Ministral 8B",
      "Codestral Mamba",
      "+2 more",
    ],
    featuredModels: ["Mistral Large 3", "Small 3.1", "Ministral 8B"],
    limits: ["1 req/s", "1B tok/mo"],
    apiUrl: "https://console.mistral.ai/api-keys",
    docsUrl: "https://docs.mistral.ai",
    openAICompatible: true,
    tags: ["coding", "european", "function-calling"],
    highlight: "1B tokens/เดือน",
    baseUrl: "https://api.mistral.ai/v1/",
    envVar: "MISTRAL_API_KEY",
    defaultModel: "mistral-small-latest",
    setupSteps: [
      "ไปที่ Mistral Console (console.mistral.ai/api-keys)",
      "สร้างบัญชีหรือลงชื่อเข้าใช้",
      "ไปที่ API Keys แล้วสร้าง key ใหม่",
      "คัดลอก API Key ที่ได้",
    ],
  },
  {
    id: "cohere",
    name: "Cohere",
    type: "provider",
    country: "us",
    flag: "🇺🇸",
    models: [
      "Command A",
      "Command R+",
      "Command R",
      "Aya Expanse 32B",
      "Aya Expanse 8B",
      "+7 more",
    ],
    featuredModels: ["Command A", "Command R+", "Aya Expanse 32B"],
    limits: ["20 RPM", "1K req/mo"],
    apiUrl: "https://dashboard.cohere.com/api-keys",
    docsUrl: "https://docs.cohere.com",
    openAICompatible: false,
    tags: ["rag", "embeddings", "reranking"],
    highlight: "RAG + Embeddings ฟรี",
    baseUrl: "https://api.cohere.com/v2/",
    envVar: "CO_API_KEY",
    defaultModel: "command-a-03-2025",
    setupSteps: [
      "ไปที่ Cohere Dashboard (dashboard.cohere.com/api-keys)",
      "สร้างบัญชีหรือลงชื่อเข้าใช้",
      "ไปที่ API Keys แล้วสร้าง trial key",
      "คัดลอก API Key ที่ได้",
    ],
  },
  {
    id: "zhipu",
    name: "Zhipu AI",
    type: "provider",
    country: "cn",
    flag: "🇨🇳",
    models: ["GLM-4.7-Flash", "GLM-4.5-Flash", "GLM-4.6V-Flash"],
    featuredModels: ["GLM-4.7-Flash", "GLM-4.5-Flash"],
    limits: ["ไม่ระบุ"],
    apiUrl: "https://open.bigmodel.cn/usercenter/apikeys",
    docsUrl: "https://open.bigmodel.cn/dev/api",
    openAICompatible: true,
    tags: ["vision", "chinese", "fast"],
    highlight: "Flash models จากจีน",
    baseUrl: "https://open.bigmodel.cn/api/paas/v4/",
    envVar: "ZHIPU_API_KEY",
    defaultModel: "glm-4-flash",
    setupSteps: [
      "ไปที่ Zhipu AI (open.bigmodel.cn/usercenter/apikeys)",
      "สมัครบัญชี (อาจต้องใช้เบอร์โทรจีน)",
      "ไปที่ API Keys แล้วสร้าง key ใหม่",
      "คัดลอก API Key ที่ได้",
    ],
  },

  // ─── Inference Providers ─────────────────────────────────
  {
    id: "groq",
    name: "Groq",
    type: "inference",
    country: "us",
    flag: "🇺🇸",
    models: [
      "Llama 3.3 70B",
      "Llama 4 Scout",
      "Kimi K2",
      "DeepSeek R1",
      "Gemma 3",
      "+15 more",
    ],
    featuredModels: ["Llama 3.3 70B", "Llama 4 Scout", "Kimi K2"],
    limits: ["30 RPM", "1K RPD", "14,400 RPD (Llama 3.1 8B)"],
    note: "14,400 RPD เฉพาะ Llama 3.1 8B Instant เท่านั้น",
    apiUrl: "https://console.groq.com/keys",
    docsUrl: "https://console.groq.com/docs",
    openAICompatible: true,
    tags: ["fast", "llama", "low-latency"],
    highlight: "Inference เร็วที่สุด",
    baseUrl: "https://api.groq.com/openai/v1/",
    envVar: "GROQ_API_KEY",
    defaultModel: "llama-3.3-70b-versatile",
    setupSteps: [
      "ไปที่ Groq Console (console.groq.com/keys)",
      "สร้างบัญชีหรือลงชื่อเข้าใช้",
      'คลิก "Create API Key"',
      "ตั้งชื่อแล้วคัดลอก key",
    ],
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    type: "inference",
    country: "us",
    flag: "🇺🇸",
    models: [
      "DeepSeek R1",
      "Llama 3.3 70B",
      "GPT-OSS-120B",
      "Qwen3 235B",
      "+29 more",
    ],
    featuredModels: ["DeepSeek R1", "Llama 3.3 70B", "GPT-OSS-120B"],
    limits: ["20 RPM", "50 RPD (ฟรี)", "1K RPD (เติม $10+)"],
    note: "เติมเงิน $10 ครั้งเดียว ได้ 1K RPD ตลอดชีพ + มี Free Model Router",
    apiUrl: "https://openrouter.ai/keys",
    docsUrl: "https://openrouter.ai/docs",
    openAICompatible: true,
    tags: ["aggregator", "routing", "fallback"],
    highlight: "30+ โมเดลฟรีในที่เดียว",
    baseUrl: "https://openrouter.ai/api/v1/",
    envVar: "OPENROUTER_API_KEY",
    defaultModel: "deepseek/deepseek-r1:free",
    setupSteps: [
      "ไปที่ OpenRouter Keys (openrouter.ai/keys)",
      "สร้างบัญชีหรือลงชื่อเข้าใช้",
      'คลิก "Create Key"',
      "คัดลอก key ที่ได้",
    ],
  },
  {
    id: "cerebras",
    name: "Cerebras",
    type: "inference",
    country: "us",
    flag: "🇺🇸",
    models: ["Llama 3.3 70B", "Qwen3 235B", "GPT-OSS-120B", "+3 more"],
    featuredModels: ["Llama 3.3 70B", "Qwen3 235B"],
    limits: ["30 RPM", "14,400 RPD"],
    apiUrl: "https://cloud.cerebras.ai/",
    docsUrl: "https://inference-docs.cerebras.ai",
    openAICompatible: true,
    tags: ["fast", "wafer-scale", "high-rpm"],
    highlight: "14,400 RPD สูงมาก",
    baseUrl: "https://api.cerebras.ai/v1/",
    envVar: "CEREBRAS_API_KEY",
    defaultModel: "llama-3.3-70b",
    setupSteps: [
      "ไปที่ Cerebras Cloud (cloud.cerebras.ai)",
      "สร้างบัญชีหรือลงชื่อเข้าใช้",
      "ไปที่ API Keys แล้วสร้าง key ใหม่",
      "คัดลอก API Key ที่ได้",
    ],
  },
  {
    id: "cloudflare",
    name: "Cloudflare Workers AI",
    type: "inference",
    country: "us",
    flag: "🇺🇸",
    models: ["Llama 3.3 70B", "Qwen QwQ 32B", "Mistral 7B", "+47 more"],
    featuredModels: ["Llama 3.3 70B", "Qwen QwQ 32B"],
    limits: ["10K neurons/day"],
    apiUrl: "https://dash.cloudflare.com/profile/api-tokens",
    docsUrl: "https://developers.cloudflare.com/workers-ai",
    openAICompatible: true,
    tags: ["edge", "serverless", "50-models"],
    highlight: "50+ โมเดล บน Edge",
    baseUrl:
      "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/ai/v1/",
    envVar: "CLOUDFLARE_API_TOKEN",
    defaultModel: "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
    setupSteps: [
      "ไปที่ Cloudflare Dashboard (dash.cloudflare.com/profile/api-tokens)",
      "ลงชื่อเข้าใช้หรือสร้างบัญชี Cloudflare",
      'สร้าง API Token ที่มี permission "Workers AI"',
      "จดบันทึก Account ID จาก sidebar",
      "คัดลอกทั้ง Token และ Account ID",
    ],
  },
  {
    id: "github-models",
    name: "GitHub Models",
    type: "inference",
    country: "us",
    flag: "🇺🇸",
    models: ["GPT-4o", "Llama 3.3 70B", "DeepSeek-R1", "Phi-4", "+more"],
    featuredModels: ["GPT-4o", "Llama 3.3 70B", "DeepSeek-R1"],
    limits: ["10–15 RPM", "50–150 RPD"],
    apiUrl: "https://github.com/marketplace/models",
    docsUrl: "https://docs.github.com/en/github-models",
    openAICompatible: true,
    tags: ["gpt4o", "openai", "microsoft"],
    highlight: "ใช้ GPT-4o ฟรีได้",
    baseUrl: "https://models.inference.ai.azure.com/",
    envVar: "GITHUB_TOKEN",
    defaultModel: "gpt-4o",
    setupSteps: [
      "ไปที่ GitHub Models Marketplace (github.com/marketplace/models)",
      "ลงชื่อเข้าใช้ด้วย GitHub Account",
      'เลือกโมเดลแล้วคลิก "Get API key" หรือไปที่ Settings > Developer settings > Personal access tokens',
      'สร้าง fine-grained token ที่มี "Models" permission',
      "คัดลอก Token ที่ได้",
    ],
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    type: "inference",
    country: "us",
    flag: "🇺🇸",
    models: [
      "Llama 3.3 70B",
      "Qwen2.5 72B",
      "Mistral 7B",
      "DeepSeek Coder",
      "+many more",
    ],
    featuredModels: ["Llama 3.3 70B", "Qwen2.5 72B", "Mistral 7B"],
    limits: ["$0.10/เดือน (free credits)"],
    apiUrl: "https://huggingface.co/settings/tokens",
    docsUrl: "https://huggingface.co/docs/api-inference",
    openAICompatible: true,
    tags: ["open-source", "community", "thousands-of-models"],
    highlight: "เข้าถึงโมเดลนับพัน",
    baseUrl: "https://router.huggingface.co/v1/",
    envVar: "HF_TOKEN",
    defaultModel: "meta-llama/Llama-3.3-70B-Instruct",
    setupSteps: [
      "ไปที่ Hugging Face Tokens (huggingface.co/settings/tokens)",
      "สร้างบัญชีหรือลงชื่อเข้าใช้",
      'สร้าง access token ที่มี permission "Make calls to Inference Providers"',
      "คัดลอก Token ที่ได้",
    ],
  },
  {
    id: "nvidia-nim",
    name: "NVIDIA NIM",
    type: "inference",
    country: "us",
    flag: "🇺🇸",
    models: ["Llama 3.3 70B", "Mistral Large", "Qwen3 235B", "Phi-4", "+more"],
    featuredModels: ["Llama 3.3 70B", "Qwen3 235B", "Mistral Large"],
    limits: ["40 RPM"],
    apiUrl: "https://build.nvidia.com/explore/discover",
    docsUrl: "https://docs.api.nvidia.com",
    openAICompatible: true,
    tags: ["gpu", "nvidia", "enterprise"],
    highlight: "GPU-optimized inference",
    baseUrl: "https://integrate.api.nvidia.com/v1/",
    envVar: "NVIDIA_API_KEY",
    defaultModel: "meta/llama-3.3-70b-instruct",
    setupSteps: [
      "ไปที่ NVIDIA NIM (build.nvidia.com/explore/discover)",
      "สร้างบัญชี NVIDIA หรือลงชื่อเข้าใช้",
      'เลือกโมเดลแล้วคลิก "Get API Key"',
      "คัดลอก API Key ที่ได้",
    ],
  },
  {
    id: "siliconflow",
    name: "SiliconFlow",
    type: "inference",
    country: "cn",
    flag: "🇨🇳",
    models: [
      "Qwen3-8B",
      "DeepSeek-R1-Distill-Qwen-7B",
      "GLM-4.1V-9B-Thinking",
      "+10 more",
    ],
    featuredModels: ["Qwen3-8B", "DeepSeek-R1-Distill", "GLM-4.1V"],
    limits: ["1K RPM", "50K TPM"],
    apiUrl: "https://cloud.siliconflow.cn/account/ak",
    docsUrl: "https://docs.siliconflow.cn",
    openAICompatible: true,
    tags: ["high-throughput", "chinese", "qwen"],
    highlight: "1K RPM สูงสุด",
    baseUrl: "https://api.siliconflow.cn/v1/",
    envVar: "SILICONFLOW_API_KEY",
    defaultModel: "Qwen/Qwen3-8B",
    setupSteps: [
      "ไปที่ SiliconFlow (cloud.siliconflow.cn/account/ak)",
      "สร้างบัญชีหรือลงชื่อเข้าใช้",
      "ไปที่ API Keys แล้วสร้าง key ใหม่",
      "คัดลอก API Key ที่ได้",
    ],
  },
  {
    id: "kluster",
    name: "Kluster AI",
    type: "inference",
    country: "us",
    flag: "🇺🇸",
    models: ["DeepSeek-R1", "Llama 4 Maverick", "Qwen3-235B", "+2 more"],
    featuredModels: ["DeepSeek-R1", "Llama 4 Maverick", "Qwen3-235B"],
    limits: ["ไม่ระบุ"],
    apiUrl: "https://platform.kluster.ai/apikeys",
    openAICompatible: true,
    tags: ["deepseek", "llama4", "qwen"],
    highlight: "DeepSeek R1 ฟรี",
    baseUrl: "https://api.kluster.ai/v1/",
    envVar: "KLUSTER_API_KEY",
    defaultModel: "deepseek-ai/DeepSeek-R1",
    setupSteps: [
      "ไปที่ Kluster AI (platform.kluster.ai/apikeys)",
      "สร้างบัญชีหรือลงชื่อเข้าใช้",
      "สร้าง API Key ใหม่",
      "คัดลอก API Key ที่ได้",
    ],
  },
  {
    id: "llm7",
    name: "LLM7.io",
    type: "inference",
    country: "uk",
    flag: "🇬🇧",
    models: ["DeepSeek R1", "Gemini Flash-Lite", "Qwen2.5 Coder", "+27 more"],
    featuredModels: ["DeepSeek R1", "Qwen2.5 Coder"],
    limits: ["30 RPM (120 RPM มี token)"],
    apiUrl: "https://token.llm7.io",
    openAICompatible: true,
    tags: ["uk", "coder", "deepseek"],
    highlight: "30 โมเดล จาก UK",
    baseUrl: "https://api.llm7.io/v1/",
    envVar: "LLM7_API_KEY",
    defaultModel: "deepseek-r1",
    setupSteps: [
      "ไปที่ LLM7.io (token.llm7.io)",
      "สร้าง Token (ไม่จำเป็นสำหรับ basic tier)",
      "คัดลอก Token ที่ได้ (ถ้ามี)",
    ],
  },
  {
    id: "ollama-cloud",
    name: "Ollama Cloud",
    type: "inference",
    country: "us",
    flag: "🇺🇸",
    models: ["DeepSeek-V3.2", "Qwen3.5", "Kimi-K2.5", "+17 more"],
    featuredModels: ["DeepSeek-V3.2", "Qwen3.5", "Kimi-K2.5"],
    limits: ["light usage", "reset ทุก 5 ชม. / 7 วัน"],
    note: "วัดด้วย GPU time ไม่ใช่ tokens — ไม่ compatible กับ OpenAI SDK",
    apiUrl: "https://ollama.com/settings/keys",
    docsUrl: "https://docs.ollama.com/cloud",
    openAICompatible: false,
    tags: ["ollama", "gpu-time", "self-host"],
    highlight: "จาก Ollama ใช้คู่ local ได้",
    baseUrl: "https://api.ollama.com/",
    envVar: "OLLAMA_API_KEY",
    defaultModel: "deepseek-v3.2",
    setupSteps: [
      "ไปที่ Ollama (ollama.com/settings/keys)",
      "สร้างบัญชีหรือลงชื่อเข้าใช้",
      "ไปที่ Settings > API Keys",
      "คัดลอก API Key ที่ได้",
    ],
  },
];

export const PROVIDER_TYPES = [
  { value: "all", label: "ทั้งหมด" },
  { value: "provider", label: "Provider API" },
  { value: "inference", label: "Inference" },
] as const;

export const COUNTRIES = [
  { value: "us", label: "🇺🇸 US", flag: "🇺🇸" },
  { value: "eu", label: "🇪🇺 EU", flag: "🇪🇺" },
  { value: "cn", label: "🇨🇳 CN", flag: "🇨🇳" },
  { value: "uk", label: "🇬🇧 UK", flag: "🇬🇧" },
] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getProviderById(id: string): LLMProvider | undefined {
  return PROVIDERS.find((p) => p.id === id);
}

export function generatePythonExample(p: LLMProvider): string {
  return `from openai import OpenAI

client = OpenAI(
    api_key="YOUR_${p.envVar}",
    base_url="${p.baseUrl}"
)

response = client.chat.completions.create(
    model="${p.defaultModel}",
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)`;
}

export function generateTSExample(p: LLMProvider): string {
  return `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.${p.envVar},
  baseURL: "${p.baseUrl}",
});

const response = await client.chat.completions.create({
  model: "${p.defaultModel}",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(response.choices[0].message.content);`;
}

export function generateEnvExample(p: LLMProvider): string {
  return `export ${p.envVar}="your-key-here"`;
}

export const SELECTION_GUIDE = [
  {
    priority: "Rate limits สูงสุด",
    picks: "Groq, Cerebras (30 RPM, 14.4K RPD)",
  },
  {
    priority: "โมเดลเยอะสุด",
    picks: "Cloudflare Workers AI (49+), OpenRouter (32+)",
  },
  {
    priority: "โมเดล Proprietary",
    picks: "Google Gemini (2.5 Pro), GitHub Models (GPT-4o)",
  },
  { priority: "Inference เร็วสุด", picks: "Groq, Cerebras" },
  { priority: "Token budget สูงสุด", picks: "Mistral AI (1B tokens/เดือน)" },
  { priority: "Provider ยุโรป", picks: "Mistral AI (EU), LLM7.io (UK)" },
  { priority: "ไม่ต้องสมัคร", picks: "LLM7.io (basic tier ไม่ต้องมี token)" },
] as const;
