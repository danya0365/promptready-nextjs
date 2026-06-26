<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

# Project Overview

**PromptReady** คือเว็บไซต์ (Next.js) สำหรับขาย/นำเสนอ **Toolkit** ที่ช่วยให้นักพัฒนาใช้ AI Coding Assistant (Cursor, Windsurf, Claude Code ฯลฯ) ได้เต็มประสิทธิภาพ — รวบรวม Agent Skills, Prompt Templates, Workflow Patterns, Project Blueprints, IDE Configs และ Architecture Guides ที่พร้อมวาง drop-in. โมเดลธุรกิจจ่ายครั้งเดียวใช้ตลอดชีพ (Starter ฟรี, Pro $29, Team $79).

**Tech stack:** Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS 4 · zustand · lucide-react · next-themes. Design แบบ glassmorphism + design tokens รองรับ light/dark mode.

**Architecture:** Clean Architecture แบ่ง layer ใน `src/`:

- `domin/` — types + static data (หมายเหตุ: สะกด "domin" ไม่ใช่ "domain")
- `application/` — repository interfaces
- `infrastructure/` — repository implementations (เช่น static data sources)
- `presentation/` — components, presenters, layouts

หน้าเพจอยู่ใน `app/` (github-trends, llm-directory, local-ai, tricks, ai-workflows, ai-resources, setup-guide, guides ฯลฯ) ข้อมูลส่วนใหญ่เป็น static data ใน `src/domin/data/`.

---

# AI Behavioral Guidelines

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
