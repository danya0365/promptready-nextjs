<div align="center">
  <h1>PromptReady</h1>
  <p><strong>Tips & Tricks for AI Agent Skills & Prompts</strong></p>
  <p>ชุดเครื่องมือครบวงจรสำหรับนักพัฒนาที่ต้องการใช้ AI Coding Assistant ให้เต็มประสิทธิภาพ</p>

  <p>
    <a href="#features">Features</a> ·
    <a href="#tech-stack">Tech Stack</a> ·
    <a href="#architecture">Architecture</a> ·
    <a href="#getting-started">Getting Started</a> ·
    <a href="#project-structure">Project Structure</a> ·
    <a href="#contributing">Contributing</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
  </p>
</div>

---

## Concept

**PromptReady** คือเว็บไซต์สำหรับขายและนำเสนอ **ชุดเครื่องมือ (Toolkit)** ที่ช่วยให้นักพัฒนาซอฟต์แวร์ใช้งาน AI Coding Assistant ได้อย่างมีประสิทธิภาพสูงสุด

### ปัญหาที่แก้

นักพัฒนาจำนวนมากใช้ AI IDE อย่าง Cursor, Windsurf, Claude Code แต่กลับได้ผลลัพธ์ที่ **ไม่สม่ำเสมอ** — โค้ดที่ได้ไม่ตรง architecture, ไม่เป็นไปตาม convention, หรือต้องแก้ไขซ้ำแล้วซ้ำเล่าในทุก session

### วิธีแก้

PromptReady รวบรวมและจัดเรียง **Agent Skills, Prompt Templates, Workflow Patterns** ที่ผ่านการทดสอบจริงจากหลายร้อยโปรเจค — พร้อมวาง (drop-in) ให้ AI Agent ทำงานตามกฎของคุณทันที

### สิ่งที่ได้

| สิ่งที่ได้              | รายละเอียด                                                             |
| ----------------------- | ---------------------------------------------------------------------- |
| **Agent Skill Library** | 50+ ไฟล์ skill สำหรับ Cursor, Windsurf, Claude Code ฯลฯ                |
| **Prompt Templates**    | 200+ prompt จัดตาม use-case: debug, refactor, architecture, testing    |
| **Workflow Patterns**   | ขั้นตอนสำเร็จรูปสำหรับงานทั่วไป: API, auth, DB schema                  |
| **Project Blueprints**  | โปรเจคตั้งต้นพร้อม AGENTS.md, rules, memory config                     |
| **IDE Configurations**  | ค่าตั้งที่ optimize แล้วสำหรับ AI IDE ทุกตัว                           |
| **Architecture Guides** | คู่มือ Clean Architecture, SOLID, Atomic Design ที่ agent ทำตามได้จริง |

### Business Model

จ่ายครั้งเดียว ใช้ได้ตลอดชีพ — ไม่มี subscription

| Plan        | ราคา | สำหรับ                                              |
| ----------- | ---- | --------------------------------------------------- |
| **Starter** | ฟรี  | ทดลองใช้ 10 prompts + 3 skills                      |
| **Pro**     | $29  | นักพัฒนาที่จริงจัง — ได้ทุกอย่าง + lifetime updates |
| **Team**    | $79  | ทีมสูงสุด 10 คน + shared library + onboarding call  |

---

## Features

- **Landing Page** — Hero section พร้อม animated code preview, bento grid features, social proof
- **Glassmorphism Design System** — ระบบ design token ครบวงจร รองรับ light/dark mode
- **Responsive** — รองรับทุกขนาดหน้าจอตั้งแต่ 375px ถึง 1440px+
- **Smooth Animations** — Float, fade-in, pulse-glow, bounce, shimmer
- **Shared Layout** — Header + Footer ใช้ร่วมกันทุกหน้าผ่าน `MainLayout`
- **SEO-Optimized** — Server Components เป็นหลัก, metadata config ครบ

---

## Tech Stack

| Layer          | Technology                                                                             |
| -------------- | -------------------------------------------------------------------------------------- |
| **Framework**  | [Next.js 16](https://nextjs.org/) (App Router)                                         |
| **UI Library** | [React 19](https://react.dev/)                                                         |
| **Language**   | [TypeScript 5](https://www.typescriptlang.org/)                                        |
| **Styling**    | [Tailwind CSS 4](https://tailwindcss.com/) + Custom Design Tokens                      |
| **Icons**      | [Lucide React](https://lucide.dev/)                                                    |
| **Font**       | [Noto Sans Thai](https://fonts.google.com/noto/specimen/Noto+Sans+Thai) (Google Fonts) |
| **Linting**    | ESLint 9 + eslint-config-next                                                          |

---

## Architecture

โปรเจคนี้ใช้ **Clean Architecture** ร่วมกับ **Atomic Design** สำหรับ component structure:

```
src/
├── domin/                          # Domain Layer
│   ├── data/                       #   Static data / mock repositories
│   └── types/                      #   TypeScript interfaces & types
│
└── presentation/                   # Presentation Layer
    └── components/
        ├── layouts/                #   Shared layout (Header, Footer, MainLayout)
        ├── landing/                #   Landing page feature
        │   ├── atoms/              #     SectionHeading, GlassCard, Button
        │   └── organisms/          #     HeroSection, FeaturesSection, PricingSection, ...
        └── setup-guide/            #   Setup guide feature
```

### Key Patterns

- **Shared Layout** — `Header` + `Footer` อยู่ใน `layouts/` ถูกใช้ผ่าน `MainLayout` ใน `app/layout.tsx` ทุกหน้าได้ Header/Footer อัตโนมัติ
- **Atomic Design** — แยก component ตาม atoms → molecules → organisms
- **Server Components First** — ใช้ `"use client"` เฉพาะ component ที่ต้องการ interactivity (Header, FAQ)
- **Props-Driven** — `Header` รับ `navLinks`, `ctaLabel`, `ctaHref` เพื่อ reuse ข้ามหน้าได้

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm**, **yarn**, **pnpm**, หรือ **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/danya0365/promptready-nextjs.git
cd promptready-nextjs

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) เพื่อดูผลลัพธ์

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
promptready-nextjs/
├── app/                            # Next.js App Router
│   ├── layout.tsx                  #   Root layout (font, metadata, MainLayout)
│   ├── page.tsx                    #   Landing page (/)
│   └── setup-guide/               #   Setup guide page (/setup-guide)
│
├── src/                            # Source code (Clean Architecture)
│   ├── domin/                      #   Domain layer
│   └── presentation/               #   Presentation layer
│       └── components/
│           ├── layouts/            #     Header, Footer, MainLayout (shared)
│           ├── landing/            #     Landing page components
│           └── setup-guide/        #     Setup guide components
│
├── public/
│   └── styles/                     # Global CSS modules
│       ├── index.css               #   Entry point
│       ├── theme.css               #   Design tokens + dark mode
│       ├── base.css                #   Base element styles
│       ├── animations.css          #   Keyframes + animation utilities
│       └── components.css          #   Glass, cards, chat UI, etc.
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## Design System

โปรเจคมีระบบ design token ของตัวเองผ่าน Tailwind CSS v4 `@theme`:

| Token                | Light               | Dark               |
| -------------------- | ------------------- | ------------------ |
| `--color-primary`    | `hsl(250 80% 65%)`  | เหมือนกัน          |
| `--color-secondary`  | `hsl(210 80% 70%)`  | เหมือนกัน          |
| `--color-accent`     | `hsl(330 80% 70%)`  | เหมือนกัน          |
| `--color-background` | `hsl(240 100% 98%)` | `hsl(240 20% 8%)`  |
| `--color-surface`    | `hsl(240 60% 96%)`  | `hsl(240 22% 16%)` |

### Utility Classes

| Class                 | ใช้ทำอะไร                                            |
| --------------------- | ---------------------------------------------------- |
| `.glass`              | Glassmorphism card (backdrop-blur + border + shadow) |
| `.gradient-text`      | ข้อความไล่สี primary gradient                        |
| `.btn-game`           | ปุ่ม CTA หลัก (gradient + shadow + hover lift)       |
| `.card-hover`         | Hover effect สำหรับ card (translateY + shadow)       |
| `.animate-float`      | ลอยขึ้นลง (infinite)                                 |
| `.animate-fade-in`    | Fade in จากล่าง                                      |
| `.animate-pulse-glow` | เรืองแสงเป็นจังหวะ                                   |

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is private and not licensed for public distribution.

---

<div align="center">
  <p><strong>Built with AI, for AI-powered developers.</strong></p>
</div>
