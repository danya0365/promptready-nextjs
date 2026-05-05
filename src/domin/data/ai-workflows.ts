import type {
  WorkflowChecklistGroup,
  WorkflowPhase,
} from "../types/ai-workflows";

export const WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "phase1",
    num: "01",
    title: "Init Project from Official Source",
    subtitle: "Start with the correct structure from day one",
    colorKey: "phase1",
    steps: [
      {
        label: "1.1",
        title: "Create Next.js Project",
        code: `npx create-next-app@latest my-project \\
  --typescript \\
  --tailwind \\
  --eslint \\
  --app \\
  --src-dir \\
  --import-alias "@/*"`,
        whyNote:
          '--app = App Router (Next.js 14+). Without it, AI may generate Pages Router code. --import-alias "@/*" prevents AI from using deep relative imports like ../../../. Official template = correct structure, no fixes needed later.',
      },
      {
        label: "1.2",
        title: "Install Core Dependencies Immediately",
        code: `# State & Validation
yarn add zustand zod dayjs

# UI & UX (Theme, Animation, Icons, Print)
yarn add next-themes react-spring lucide-react react-to-print

# Forms & Styles
yarn add react-hook-form clsx tailwind-merge

# Optional: Logic & Auth
yarn add @tanstack/react-query class-variance-authority @supabase/supabase-js @supabase/ssr`,
        whyNote:
          "AI generates code based on what is in package.json. By locking these libraries (State, Form, Animation, Theme, etc.) first, you ensure AI uses the correct patterns (zustand vs redux, react-hook-form vs state) consistently across every session.",
      },
    ],
  },
  {
    id: "phase2",
    num: "02",
    title: "Apply Agent Skills",
    subtitle: "Inject project structure so AI knows before it writes",
    colorKey: "phase2",
    steps: [
      {
        label: "2.1",
        title: "Init @dan/agent-patterns",
        code: "npx @dan/agent-patterns init",
        whyNote:
          "Creates a .agents/ folder with SKILL.md in your repo. AI reads these files before generating code — it knows which files go where, preventing components from landing in the wrong folder.",
      },
      {
        label: "2.2",
        title: "Create .agents/CONTEXT.md (Critical)",
        code: `# .agents/CONTEXT.md

## Tech Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + CVA
- State: Zustand
- Data Fetching: TanStack Query
- Validation: Zod
- Database: Supabase

## Folder Structure
src/
├── app/           # Next.js pages
├── components/
│   ├── ui/        # Reusable primitives
│   └── features/  # Feature-specific
├── hooks/         # Custom React hooks
├── lib/           # Utilities, configs
├── stores/        # Zustand stores
└── types/         # TypeScript types

## Naming Conventions
- Components: PascalCase
- Hooks: camelCase prefix "use"
- Stores: camelCase suffix "Store"
- Folders: kebab-case`,
        whyNote:
          'This file is AI\'s "memory". Tell AI to read this before every prompt — it keeps code consistent across every session.',
        rules: [
          { type: "deny", text: "No default exports in hooks and utils" },
          { type: "deny", text: "No any type" },
          {
            type: "deny",
            text: "No fetch directly in component — must go through custom hook",
          },
          { type: "deny", text: "No inline styles in JSX" },
          { type: "allow", text: "Always use named exports" },
          { type: "allow", text: "Always specify return type in functions" },
        ],
      },
      {
        label: "2.3",
        title: "Create AGENTS.md (Entry Point)",
        code: `# AGENTS.md

# Project Patterns & Skills
- **Agent Skills:** [./.agents/skills/](./.agents/skills/)
- **Instruction:** Before starting any work, you MUST check the \`.agents/skills/\` directory. If a relevant \`SKILL.md\` exists, you must follow it.`,
        whyNote:
          "AGENTS.md is the entry point for AI tools. By linking it to your skills folder, you ensure the AI discovers and uses your custom patterns automatically.",
      },
    ],
  },
  {
    id: "phase3",
    num: "03",
    title: "Generate Design System",
    subtitle: "Prevent AI from writing random CSS that breaks your palette",
    colorKey: "phase3",
    steps: [
      {
        label: "3.1",
        title: "Init UI/UX Pro Max Skill",
        code: "npx uipro init --ai all   # All assistants",
        whyNote:
          "The generated Design Spec tells AI: primary/secondary/status colors, typography scale, 4px spacing grid, border radius, and shadows — so every UI component matches the same system.",
      },
      {
        label: "3.2",
        title: "Save Design Spec to .agents/",
        code: `# copy output here
.agents/design-system.md

# Every time you gen UI, tell AI:
"Read .agents/design-system.md first"`,
        whyNote:
          "Keeping it in .agents/ makes it discoverable for all AI tools in your workflow.",
      },
    ],
  },
  {
    id: "phase4",
    num: "04",
    title: "Lock Configuration Files",
    subtitle: "Format, types, env — never let AI guess these",
    colorKey: "phase4",
    steps: [
      {
        label: "4.1",
        title: "Create .env.example",
        code: `# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=`,
        whyNote:
          "AI generates env variable names based on .env.example. Without it, AI invents names every time: SUPABASE_KEY vs NEXT_PUBLIC_SUPABASE_ANON_KEY — inconsistent across files.",
      },
      {
        label: "4.2",
        title: "TypeScript Strict Mode",
        code: `// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}`,
        whyNote:
          'Strict mode forces AI to generate code that always handles null/undefined — preventing "Cannot read properties of undefined" bugs.',
      },
      {
        label: "4.3",
        title: "Prettier + ESLint",
        code: `// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}`,
        whyNote:
          "Without locked formatting, AI sometimes uses semicolons and sometimes does not. Code looks different even when the logic is the same.",
      },
    ],
  },
  {
    id: "phase5",
    num: "05",
    title: "Database Schema First",
    subtitle: "Let AI read real types — no guessing",
    colorKey: "phase5",
    steps: [
      {
        label: "5.1",
        title: "Generate TypeScript Types from Supabase",
        code: `supabase gen types typescript \\
  --project-id YOUR_PROJECT_ID \\
  > src/types/database.types.ts`,
        whyNote:
          "This is the most skipped but most important step. Without generated types, AI guesses field names every time: user.name or user.full_name? created_at or createdAt?",
      },
      {
        label: "5.2",
        title: "Create Supabase Client Structure",
        code: `src/lib/supabase/
├── client.ts      # Browser client (use client)
├── server.ts      # Server client (use server)
└── middleware.ts  # Auth middleware`,
        whyNote:
          "Do this once up front. Prevents AI from creating Supabase clients in multiple places with different patterns.",
      },
    ],
  },
  {
    id: "phase6",
    num: "06",
    title: "API Contract",
    subtitle: "Lock response format so every endpoint looks the same",
    colorKey: "phase6",
    steps: [
      {
        label: "Create API_SPEC.md",
        code: `# API_SPEC.md

## Response Format (all endpoints must follow this)
{
  data: T | null,
  error: string | null,
  count?: number
}

## Endpoints
GET    /api/users       → { data: User[], count: number }
GET    /api/users/:id   → { data: User }
POST   /api/users       → { data: User }
PATCH  /api/users/:id   → { data: User }
DELETE /api/users/:id   → { data: null }`,
        whyNote:
          "Without this spec, AI creates different response shapes per endpoint: some return { user: ... }, others { data: ... }. Extremely hard to fix when the project grows.",
      },
    ],
  },
  {
    id: "phase7",
    num: "07",
    title: "Git Convention",
    subtitle: "Consistent commit messages when AI generates them",
    colorKey: "phase7",
    steps: [
      {
        label: "Conventional Commits",
        code: `# Format
feat:     add new feature
fix:      fix a bug
chore:    maintenance (deps, config)
docs:     update documentation
style:    formatting (no logic change)
refactor: refactor code
test:     add / update tests`,
        whyNote:
          "When AI generates commit messages, you get a consistent format. Git log becomes readable and you can auto-generate changelogs.",
      },
    ],
  },
  {
    id: "phase8",
    num: "08",
    title: "Initialize Project Blueprint",
    subtitle: "Define explicit AI instructions before generation",
    colorKey: "phase8",
    steps: [
      {
        label: "8.1",
        title: "Create INIT_PROJECT.md",
        code: `Please create a new file at:

.agents/INIT_PROJECT.md

Based on the template: .agents/skills/init-project/SKILL.md

IMPORTANT: You must ALWAYS ask for clarification and requirements via prompt before generating any content. Do NOT make assumptions or decide the project structure on your own.`,
        whyNote:
          "Force the AI to engage in a planning/asking phase before writing any project code, ensuring it follows the specific init-project skill guidelines without making assumptions.",
      },
    ],
  },
  {
    id: "phase9",
    num: "09",
    title: "AI Code Discipline",
    subtitle: "Lock AI behavior so it thinks before it codes",
    colorKey: "phase9",
    steps: [
      {
        label: "9.1",
        title: "Create AGENTS.md with Andrej Karpathy Rules",
        code: `# AGENTS.md

## AI Behavioral Guidelines

### 1. Think Before Coding
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First
- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

### 3. Surgical Changes
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

### 4. Goal-Driven Execution
- Transform tasks into verifiable goals:
  - "Add validation" → "Write tests for invalid inputs, then make them pass"
  - "Fix the bug" → "Write a test that reproduces it, then make it pass"
  - "Refactor X" → "Ensure tests pass before and after"
- For multi-step tasks, state a brief plan with verification checks.`,
        whyNote:
          "Without behavioral guidelines, AI tends to over-engineer, refactor unrelated code, and assume silently. These rules force the AI to think first, keep changes minimal, and verify outcomes — producing cleaner diffs and fewer rewrites.",
      },
    ],
  },
];

export const WORKFLOW_CHECKLIST_GROUPS: WorkflowChecklistGroup[] = [
  {
    title: "One-time Setup",
    items: [
      {
        id: "c1",
        label:
          "Created Next.js with correct flags (typescript, app, import-alias)",
      },
      {
        id: "c2",
        label:
          "Installed core dependencies (next-themes, hook-form, zustand, zod, etc.)",
      },
      { id: "c3", label: "Ran npx @dan/agent-patterns init" },
      { id: "c4", label: "Ran uipro init --ai all" },
      {
        id: "c5",
        label: "Wrote .agents/CONTEXT.md (stack, folder, naming, rules)",
      },
      { id: "c6", label: "Have .agents/design-system.md ready" },
      { id: "c16", label: "Created AGENTS.md for AI discovery" },
      { id: "c17", label: "Created .agents/INIT_PROJECT.md for bootstrapping" },
      { id: "c7", label: "Created .env.example with all keys" },
      { id: "c8", label: "Enabled TypeScript strict mode in tsconfig.json" },
      { id: "c9", label: "Set up .prettierrc and ESLint config" },
      { id: "c10", label: "Generated Supabase types (if using Supabase)" },
      { id: "c11", label: "Wrote API_SPEC.md (if using API routes)" },
      {
        id: "c18",
        label:
          "Created AGENTS.md with AI behavioral rules (Andrej Karpathy style)",
      },
    ],
  },
  {
    title: "Before Every Prompt",
    items: [
      { id: "c12", label: "Tell AI to read .agents/CONTEXT.md first" },
      { id: "c13", label: "Specify the component/feature clearly" },
      { id: "c14", label: "Specify the target folder for the file" },
      {
        id: "c15",
        label: "Specify which dependency to use (do not let AI choose)",
      },
    ],
  },
];

export const AI_PROMPT_TEMPLATE = `Read \`.agents/CONTEXT.md\` and \`.agents/design-system.md\` first

TASK: [create / fix / refactor]
TARGET: [component / hook / function name]
LOCATION: src/components/features/[folder]/
INPUTS: [props or parameters]
BEHAVIOR: [logic description]
CONSTRAINTS:
  - Use [specific library] only
  - Do not use [unwanted thing]
  - Must use named export
OUTPUT: TypeScript + Tailwind CSS`;

export const WORKFLOW_PHASE_COLORS: Record<
  string,
  { text: string; bg: string; border: string }
> = {
  phase1: {
    text: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
  },
  phase2: {
    text: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  phase3: {
    text: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  phase4: {
    text: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  phase5: {
    text: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  phase6: {
    text: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  phase7: {
    text: "text-primary-light",
    bg: "bg-primary-light/10",
    border: "border-primary-light/20",
  },
  phase8: {
    text: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  phase9: {
    text: "text-info",
    bg: "bg-info/10",
    border: "border-info/20",
  },
};
