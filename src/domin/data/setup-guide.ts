import type { ChecklistGroup, Phase } from '../types/setup-guide'

export const PHASES: Phase[] = [
  {
    id: 'phase1',
    num: '01',
    title: 'Init Project from Official Source',
    subtitle: 'Start with the correct structure from day one',
    colorKey: 'phase1',
    steps: [
      {
        label: '1.1',
        title: 'Create Next.js Project',
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
        label: '1.2',
        title: 'Install Core Dependencies Immediately',
        code: `# State & Data
npm install zustand @tanstack/react-query

# Validation
npm install zod

# UI Utilities
npm install clsx tailwind-merge class-variance-authority

# Icons
npm install lucide-react

# Supabase (if using)
npm install @supabase/supabase-js @supabase/ssr`,
        whyNote:
          'AI generates code based on what is in package.json. Without locking these first, AI may choose axios over fetch, or redux over zustand — making code inconsistent across sessions.',
      },
    ],
  },
  {
    id: 'phase2',
    num: '02',
    title: 'Apply Agent Skills',
    subtitle: 'Inject project structure so AI knows before it writes',
    colorKey: 'phase2',
    steps: [
      {
        label: '2.1',
        title: 'Init @dan/agent-skills',
        code: 'npx @dan/agent-skills init',
        whyNote:
          'Creates a .agent/ folder with SKILL.md in your repo. AI reads these files before generating code — it knows which files go where, preventing components from landing in the wrong folder.',
      },
      {
        label: '2.2',
        title: 'Create .agent/CONTEXT.md (Critical)',
        code: `# .agent/CONTEXT.md

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
          { type: 'deny', text: 'No default exports in hooks and utils' },
          { type: 'deny', text: 'No any type' },
          { type: 'deny', text: 'No fetch directly in component — must go through custom hook' },
          { type: 'deny', text: 'No inline styles in JSX' },
          { type: 'allow', text: 'Always use named exports' },
          { type: 'allow', text: 'Always specify return type in functions' },
        ],
      },
    ],
  },
  {
    id: 'phase3',
    num: '03',
    title: 'Generate Design System',
    subtitle: 'Prevent AI from writing random CSS that breaks your palette',
    colorKey: 'phase3',
    steps: [
      {
        label: '3.1',
        title: 'Init UI/UX Pro Max Skill',
        code: 'npx uipro init --ai all   # All assistants',
        whyNote:
          'The generated Design Spec tells AI: primary/secondary/status colors, typography scale, 4px spacing grid, border radius, and shadows — so every UI component matches the same system.',
      },
      {
        label: '3.2',
        title: 'Save Design Spec to .agent/',
        code: `# copy output here
.agent/design-system.md

# Every time you gen UI, tell AI:
"Read .agent/design-system.md first"`,
        whyNote: 'Keeping it in .agent/ makes it discoverable for all AI tools in your workflow.',
      },
    ],
  },
  {
    id: 'phase4',
    num: '04',
    title: 'Lock Configuration Files',
    subtitle: 'Format, types, env — never let AI guess these',
    colorKey: 'phase4',
    steps: [
      {
        label: '4.1',
        title: 'Create .env.example',
        code: `# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=`,
        whyNote:
          'AI generates env variable names based on .env.example. Without it, AI invents names every time: SUPABASE_KEY vs NEXT_PUBLIC_SUPABASE_ANON_KEY — inconsistent across files.',
      },
      {
        label: '4.2',
        title: 'TypeScript Strict Mode',
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
        label: '4.3',
        title: 'Prettier + ESLint',
        code: `// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}`,
        whyNote:
          'Without locked formatting, AI sometimes uses semicolons and sometimes does not. Code looks different even when the logic is the same.',
      },
    ],
  },
  {
    id: 'phase5',
    num: '05',
    title: 'Database Schema First',
    subtitle: 'Let AI read real types — no guessing',
    colorKey: 'phase5',
    steps: [
      {
        label: '5.1',
        title: 'Generate TypeScript Types from Supabase',
        code: `supabase gen types typescript \\
  --project-id YOUR_PROJECT_ID \\
  > src/types/database.types.ts`,
        whyNote:
          'This is the most skipped but most important step. Without generated types, AI guesses field names every time: user.name or user.full_name? created_at or createdAt?',
      },
      {
        label: '5.2',
        title: 'Create Supabase Client Structure',
        code: `src/lib/supabase/
├── client.ts      # Browser client (use client)
├── server.ts      # Server client (use server)
└── middleware.ts  # Auth middleware`,
        whyNote:
          'Do this once up front. Prevents AI from creating Supabase clients in multiple places with different patterns.',
      },
    ],
  },
  {
    id: 'phase6',
    num: '06',
    title: 'API Contract',
    subtitle: 'Lock response format so every endpoint looks the same',
    colorKey: 'phase6',
    steps: [
      {
        label: 'Create API_SPEC.md',
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
          'Without this spec, AI creates different response shapes per endpoint: some return { user: ... }, others { data: ... }. Extremely hard to fix when the project grows.',
      },
    ],
  },
  {
    id: 'phase7',
    num: '07',
    title: 'Git Convention',
    subtitle: 'Consistent commit messages when AI generates them',
    colorKey: 'phase7',
    steps: [
      {
        label: 'Conventional Commits',
        code: `# Format
feat:     add new feature
fix:      fix a bug
chore:    maintenance (deps, config)
docs:     update documentation
style:    formatting (no logic change)
refactor: refactor code
test:     add / update tests`,
        whyNote:
          'When AI generates commit messages, you get a consistent format. Git log becomes readable and you can auto-generate changelogs.',
      },
    ],
  },
]

export const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    title: 'One-time Setup',
    items: [
      { id: 'c1', label: 'Created Next.js with correct flags (typescript, app, import-alias)' },
      { id: 'c2', label: 'Installed core dependencies (zustand, zod, CVA, lucide)' },
      { id: 'c3', label: 'Ran npx @dan/agent-skills init' },
      { id: 'c4', label: 'Ran uipro init --ai all' },
      { id: 'c5', label: 'Wrote .agent/CONTEXT.md (stack, folder, naming, rules)' },
      { id: 'c6', label: 'Have .agent/design-system.md ready' },
      { id: 'c7', label: 'Created .env.example with all keys' },
      { id: 'c8', label: 'Enabled TypeScript strict mode in tsconfig.json' },
      { id: 'c9', label: 'Set up .prettierrc and ESLint config' },
      { id: 'c10', label: 'Generated Supabase types (if using Supabase)' },
      { id: 'c11', label: 'Wrote API_SPEC.md (if using API routes)' },
    ],
  },
  {
    title: 'Before Every Prompt',
    items: [
      { id: 'c12', label: 'Tell AI to read .agent/CONTEXT.md first' },
      { id: 'c13', label: 'Specify the component/feature clearly' },
      { id: 'c14', label: 'Specify the target folder for the file' },
      { id: 'c15', label: 'Specify which dependency to use (do not let AI choose)' },
    ],
  },
]

export const PROMPT_TEMPLATE = `Read \`.agent/CONTEXT.md\` and \`.agent/design-system.md\` first

TASK: [create / fix / refactor]
TARGET: [component / hook / function name]
LOCATION: src/components/features/[folder]/
INPUTS: [props or parameters]
BEHAVIOR: [logic description]
CONSTRAINTS:
  - Use [specific library] only
  - Do not use [unwanted thing]
  - Must use named export
OUTPUT: TypeScript + Tailwind CSS`

export const PHASE_COLORS: Record<string, string> = {
  phase1: '#6ee7b7',
  phase2: '#818cf8',
  phase3: '#f472b6',
  phase4: '#fbbf24',
  phase5: '#38bdf8',
  phase6: '#fb923c',
  phase7: '#a78bfa',
}
