# 🧠 AI-Consistent Project Setup Guide
> เอกสารนี้ต้องทำให้ครบก่อน prompt AI ทุกครั้ง — เพื่อให้ output เหมือนกันทุก session

---

## ทำไมต้องมีขั้นตอนเหล่านี้?

AI ไม่มี memory ระหว่าง session — ทุกครั้งที่ prompt ใหม่ มันเริ่มจาก zero
ถ้าไม่มี context ที่ครบ AI จะ "เดา" ทุกอย่างตั้งแต่ library, pattern, ไปจนถึง naming convention
ผลลัพธ์คือ โค้ดที่ไม่เหมือนกันทุกครั้ง แม้จะใช้ prompt เดียวกัน

**วิธีแก้คือการ "inject context" ก่อน prompt เสมอ**

---

## Phase 1 — Init Project จาก Official Source

### 1.1 สร้าง Next.js Project
```bash
npx create-next-app@latest my-project \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

**ทำไม?**
- `--typescript` → บังคับ type-safe ทุก file, AI จะ gen โค้ดที่ match types จริง
- `--app` → ใช้ App Router (Next.js 14+), ถ้าไม่ระบุ AI อาจ gen แบบ Pages Router
- `--import-alias "@/*"` → ป้องกัน AI ใช้ relative import `../../../` มั่วๆ
- Official template → โครงสร้างเริ่มต้นถูกต้อง ไม่ต้องแก้ทีหลัง

### 1.2 ติดตั้ง Core Dependencies ทันที
```bash
# State & Data
npm install zustand @tanstack/react-query

# Validation
npm install zod

# UI Utilities  
npm install clsx tailwind-merge class-variance-authority

# Icons
npm install lucide-react

# Supabase (ถ้าใช้)
npm install @supabase/supabase-js @supabase/ssr
```

**ทำไม?**
Lock library เหล่านี้ก่อน — เพราะ AI จะ gen โค้ดตาม dependency ที่มีใน `package.json`
ถ้าไม่ติดตั้ง AI อาจเลือก axios แทน fetch, หรือใช้ redux แทน zustand

---

## Phase 2 — Apply Agent Skills

### 2.1 Init @dan/agent-skills
```bash
npx @dan/agent-skills init
```

**ทำไม?**
Agent Skills inject `.agent/` folder ที่มี SKILL.md ไว้ใน repo
AI จะอ่านไฟล์เหล่านี้ก่อน gen โค้ด → รู้ว่าต้องสร้าง file/folder อะไร ตรงไหน
ป้องกัน AI วาง component ผิด folder หรือ gen function ที่ขัดกับ project structure

### 2.2 สร้าง `.agent/CONTEXT.md` (สำคัญมาก)
```markdown
# Project Context

## Tech Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + CVA
- State: Zustand
- Data Fetching: TanStack Query
- Validation: Zod
- Database: Supabase (PostgreSQL)
- Auth: Supabase Auth

## Folder Structure
src/
├── app/          # Next.js App Router pages
├── components/
│   ├── ui/       # Reusable primitive components
│   └── features/ # Feature-specific components
├── hooks/        # Custom React hooks
├── lib/          # Utilities, helpers, configs
├── stores/       # Zustand stores
└── types/        # TypeScript type definitions

## Naming Conventions
- Components: PascalCase (UserCard.tsx)
- Hooks: camelCase prefix use (useUserData.ts)
- Stores: camelCase suffix Store (userStore.ts)
- Utils: camelCase (formatDate.ts)
- Folders: kebab-case (user-profile/)

## Rules (ห้าม AI ทำ)
- ❌ ห้ามใช้ default export ใน hooks และ utils
- ❌ ห้ามใช้ any type
- ❌ ห้ามใช้ relative import เกิน 2 levels
- ❌ ห้ามสร้าง inline style ใน JSX
- ❌ ห้าม fetch โดยตรงใน component — ต้องผ่าน custom hook เสมอ
```

---

## Phase 3 — Generate Design System

### 3.1 Init UI/UX Pro Max Skill
```bash
npx uipro init --ai all   # All assistants
```

**ทำไม?**
ป้องกัน AI เขียน CSS มั่วๆ หรือใช้สีไม่ตรง palette
Design Spec ที่ generate ออกมาจะบอก AI ว่า:
- สีหลัก, สีรอง, สีสถานะ (success/error/warning) คืออะไร
- Typography scale ที่ใช้ (font, size, weight, line-height)
- Spacing system (4px base grid)
- Border radius, shadow ที่ใช้ใน project นี้

### 3.2 สร้าง `design-system.md` ใน `.agent/`
หลังจาก `uipro init` ให้ copy output มาไว้ที่ `.agent/design-system.md`
เพื่อให้ AI อ่านได้ทุก session

---

## Phase 4 — Lock Configuration Files

### 4.1 สร้าง `.env.example`
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=
```

**ทำไม?**
AI จะ gen code ที่ใช้ env variable ตามที่มีใน `.env.example`
ถ้าไม่มี AI จะตั้งชื่อ variable เองทุกครั้ง เช่น `SUPABASE_KEY` vs `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4.2 ตั้ง TypeScript Strict Mode
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

**ทำไม?**
Strict mode บังคับให้ AI gen โค้ดที่ handle null/undefined เสมอ
ป้องกัน bug แบบ `Cannot read properties of undefined`

### 4.3 ตั้ง ESLint + Prettier
```bash
npm install -D prettier eslint-config-prettier
```

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

**ทำไม?**
ถ้าไม่ lock format ไว้ AI จะเขียนบางครั้ง semicolon บางครั้งไม่มี
Codebase จะดูไม่เหมือนกันแม้จะเขียน logic เดียวกัน

---

## Phase 5 — Database Schema First (ถ้าใช้ Supabase)

### 5.1 Generate TypeScript Types ทันทีหลัง Schema พร้อม
```bash
supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/database.types.ts
```

**ทำไม?**
นี่คือขั้นตอนที่คนมักข้ามแต่สำคัญที่สุด
ถ้าไม่มี generated types — AI จะเดา schema ทุกครั้ง
`user.name` หรือ `user.full_name`? `created_at` หรือ `createdAt`?
เมื่อมีไฟล์นี้แล้ว AI จะ autocomplete ตาม type จริงจาก database

### 5.2 สร้าง Supabase Client อย่างถูกต้อง
```
src/lib/supabase/
├── client.ts      # Browser client (use client)
├── server.ts      # Server client (use server)
└── middleware.ts  # Auth middleware
```

ทำทีเดียวตั้งแต่แรก ไม่ให้ AI สร้างซ้ำหลายที่

---

## Phase 6 — API Contract (ถ้ามี API Routes)

### 6.1 สร้าง `API_SPEC.md`
```markdown
# API Specification

## Auth
- POST /api/auth/login
- POST /api/auth/logout

## Users
- GET /api/users → { data: User[], count: number }
- GET /api/users/:id → { data: User }
- PATCH /api/users/:id → { data: User }

## Response Format (ทุก endpoint ต้องตาม format นี้)
{
  data: T | null,
  error: string | null,
  count?: number
}
```

**ทำไม?**
ถ้าไม่มี spec นี้ AI จะสร้าง response format ต่างกันทุก endpoint
บาง endpoint return `{ user: ... }` บาง endpoint return `{ data: ... }`
แก้ยากมากเมื่อ project ใหญ่ขึ้น

---

## Phase 7 — Git Convention

### 7.1 ตั้ง Commit Message Format
```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

```
# Conventional Commits Format
feat: เพิ่ม feature ใหม่
fix: แก้ bug
chore: งาน maintenance (deps, config)
docs: แก้ documentation
style: แก้ format (ไม่กระทบ logic)
refactor: refactor โค้ด
test: เพิ่ม/แก้ test
```

**ทำไม?**
เมื่อให้ AI gen commit message จะได้ consistent format
และ git log อ่านง่ายขึ้นมาก

---

## ✅ Pre-Prompt Checklist

ก่อนจะ prompt AI ให้ทำอะไรใหม่ใน project ให้เช็คทุกข้อ:

### Setup (ทำครั้งเดียว)
- [ ] `npx create-next-app@latest` ด้วย flags ที่ถูกต้อง
- [ ] ติดตั้ง core dependencies ครบ
- [ ] `npx @dan/agent-skills init` แล้ว
- [ ] `uipro init --ai all` แล้ว
- [ ] `.agent/CONTEXT.md` เขียนครบ (stack, folder, naming, rules)
- [ ] `.agent/design-system.md` มีแล้ว
- [ ] `.env.example` ครบทุก key
- [ ] `tsconfig.json` strict mode เปิด
- [ ] `.prettierrc` และ ESLint config ตั้งแล้ว
- [ ] Supabase types generated แล้ว (ถ้าใช้)
- [ ] `API_SPEC.md` เขียนแล้ว (ถ้ามี API)

### ก่อนทุก Prompt
- [ ] บอก AI ให้อ่าน `.agent/CONTEXT.md` ก่อนเสมอ
- [ ] ระบุ component/feature ที่ต้องการชัดเจน
- [ ] ระบุ folder ที่จะวางไฟล์
- [ ] ระบุ dependency ที่ต้องใช้ (อย่าให้ AI เลือกเอง)
- [ ] ถ้า gen UI → บอกให้อ่าน `.agent/design-system.md` ด้วย

---

## Prompt Template มาตรฐาน

```
อ่าน `.agent/CONTEXT.md` และ `.agent/design-system.md` ก่อน

TASK: [สร้าง / แก้ / refactor]
TARGET: [ชื่อ component / hook / function]
LOCATION: src/components/features/[folder]/
INPUTS: [props หรือ parameters ที่รับ]
BEHAVIOR: [logic ที่ต้องการ]
CONSTRAINTS:
  - ใช้ [library ที่ระบุ] เท่านั้น
  - ห้ามใช้ [สิ่งที่ไม่ต้องการ]
  - ต้อง export แบบ named export
OUTPUT: TypeScript + Tailwind CSS
```

---

*อัปเดตล่าสุด: 2025 | สร้างโดย @dan/agent-skills workflow*
