import { UseCase } from "../types/use-cases";

// เนื้อหาจริงจาก https://www.openclawthailand.com/use-cases
export const USE_CASES: UseCase[] = [
  {
    id: "code-review-assistant",
    slug: "code-review-assistant",
    title: "Code Review Assistant",
    description:
      "ใช้ OpenClaw ช่วย review code อัตโนมัติ ตรวจจับ bugs, security issues และแนะนำ best practices",
    category: "Developer Productivity",
    tags: ["code-review", "GitHub"],
    featured: true,
  },
  {
    id: "auto-content-writer",
    slug: "auto-content-writer",
    title: "Auto Content Writer",
    description:
      "ให้ OpenClaw ช่วยเขียนบทความ, social media posts, email campaigns ในภาษาไทยและอังกฤษ",
    category: "Content Creation",
    tags: ["content writing"],
    featured: true,
  },
  {
    id: "email-automation",
    slug: "email-automation",
    title: "Email Automation",
    description:
      "ตั้งค่า OpenClaw ให้ตอบอีเมล, จัดหมวดหมู่, และสรุปอีเมลสำคัญให้ทุกเช้า",
    category: "Business Automation",
    tags: ["email", "gmail"],
  },
  {
    id: "cicd-pipeline-monitor",
    slug: "cicd-pipeline-monitor",
    title: "CI/CD Pipeline Monitor",
    description:
      "ให้ OpenClaw คอยตรวจสอบ build status, แจ้งเตือนเมื่อ deploy ล้มเหลว และช่วย debug",
    category: "DevOps & CI/CD",
    tags: ["ci-cd", "deploy"],
    featured: true,
  },
  {
    id: "seo-content-optimizer",
    slug: "seo-content-optimizer",
    title: "SEO Content Optimizer",
    description:
      "วิเคราะห์และปรับปรุงคอนเทนต์ให้ติดอันดับ Google ด้วย OpenClaw skills สำหรับ SEO",
    category: "Marketing & SEO",
    tags: ["seo", "content"],
  },
  {
    id: "customer-support-bot",
    slug: "customer-support-bot",
    title: "Customer Support Bot",
    description:
      "สร้างระบบตอบคำถามลูกค้าอัตโนมัติผ่าน Slack, Discord หรือ LINE ด้วย OpenClaw",
    category: "Customer Support",
    tags: ["support", "chatbot"],
  },
  {
    id: "release-note-generator",
    slug: "release-note-generator",
    title: "Release Note Generator",
    description:
      "สรุป PRs, commits และ issues ที่ปิดไปแล้วให้เป็น release notes พร้อม publish ลง GitHub หรือ Notion",
    category: "Developer Productivity",
    tags: ["release-notes", "github"],
  },
  {
    id: "incident-response-assistant",
    slug: "incident-response-assistant",
    title: "Incident Response Assistant",
    description:
      "ช่วยสรุป incident, วิเคราะห์ logs, รัน runbook และแจ้งทีมแบบ real-time เมื่อระบบมีปัญหา",
    category: "DevOps & CI/CD",
    tags: ["incident", "logs"],
  },
  {
    id: "lead-intake-automation",
    slug: "lead-intake-automation",
    title: "Lead Intake Automation",
    description:
      "รับ lead จากฟอร์ม, จัดหมวดหมู่, enrich ข้อมูล และส่งต่อเข้า CRM หรือ Slack โดยอัตโนมัติ",
    category: "Business Automation",
    tags: ["lead", "crm"],
  },
  {
    id: "social-campaign-planner",
    slug: "social-campaign-planner",
    title: "Social Campaign Planner",
    description:
      "วางแผนคอนเทนต์รายสัปดาห์ สร้าง caption หลายเวอร์ชัน และเตรียมโพสต์สำหรับหลายแพลตฟอร์ม",
    category: "Content Creation",
    tags: ["campaign", "social"],
  },
  {
    id: "line-support-router",
    slug: "line-support-router",
    title: "LINE Support Router",
    description:
      "รับข้อความจาก LINE, แยกประเภทคำถาม, ตอบคำถามทั่วไป และส่งต่อเคสสำคัญไปยังทีมที่เกี่ยวข้อง",
    category: "Customer Support",
    tags: ["line", "support"],
  },
  {
    id: "pr-description-generator",
    slug: "pr-description-generator",
    title: "PR Description Generator",
    description:
      "สร้าง Pull Request description อัตโนมัติจาก git diff พร้อมสรุป changes, impact และ checklist",
    category: "Developer Productivity",
    tags: ["github", "pr"],
  },
  {
    id: "meeting-notes-to-blog",
    slug: "meeting-notes-to-blog",
    title: "Meeting Notes → Blog Post",
    description:
      "แปลง meeting transcript หรือ voice memo ให้เป็นบทความ blog, recap หรือ internal summary พร้อมเผยแพร่",
    category: "Content Creation",
    tags: ["transcript", "blog"],
  },
  {
    id: "invoice-receipt-organizer",
    slug: "invoice-receipt-organizer",
    title: "Invoice & Receipt Organizer",
    description:
      "จัดเก็บและจัดหมวดหมู่ใบเสร็จ ใบแจ้งหนี้ อัตโนมัติ พร้อมสรุปรายจ่ายรายเดือนเข้า Sheets",
    category: "Business Automation",
    tags: ["invoice", "accounting"],
  },
  {
    id: "social-listening-trend-monitor",
    slug: "social-listening-trend-monitor",
    title: "Social Listening & Trend Monitor",
    description:
      "ดักจับเทรนด์และ mention จาก Twitter/X, Reddit, Pantip แล้วสรุปเป็น insight รายวันส่งเข้า Slack",
    category: "Marketing & SEO",
    tags: ["social-listening", "trend"],
  },
  {
    id: "cloud-cost-optimizer",
    slug: "cloud-cost-optimizer",
    title: "Cloud Cost Optimizer",
    description:
      "วิเคราะห์ cloud spending จาก AWS/GCP/Azure หา resources ที่ใช้เกิน และแนะนำวิธีลดต้นทุน",
    category: "DevOps & CI/CD",
    tags: ["cloud", "cost"],
  },
  {
    id: "ticket-triage-assistant",
    slug: "ticket-triage-assistant",
    title: "Ticket Triage Assistant",
    description:
      "จัดลำดับความสำคัญ support tickets อัตโนมัติ ดูจากเนื้อหา ประเภทลูกค้า และ SLA แล้ว assign ให้ทีมที่ถูกต้อง",
    category: "Customer Support",
    tags: ["ticket", "triage"],
  },
  {
    id: "daily-standup-reporter",
    slug: "daily-standup-reporter",
    title: "Daily Standup Reporter",
    description:
      "สรุปสิ่งที่ทำเมื่อวานจาก git commits และ Jira อัตโนมัติ แล้วส่ง standup update เข้า Slack ทุกเช้า",
    category: "Developer Productivity",
    tags: ["standup", "daily"],
  },
  {
    id: "weekly-report-generator",
    slug: "weekly-report-generator",
    title: "Weekly Report Generator",
    description:
      "รวบรวมข้อมูลจากหลายแหล่ง สรุปเป็นรายงานประจำสัปดาห์ พร้อมกราฟและ highlights ส่งให้หัวหน้าทุกวันศุกร์",
    category: "Business Automation",
    tags: ["report", "weekly"],
  },
  {
    id: "dependency-update-bot",
    slug: "dependency-update-bot",
    title: "Dependency Update Bot",
    description:
      "ตรวจสอบ dependencies ที่ outdated หรือมี vulnerability อัตโนมัติ สร้าง PR อัปเดตพร้อม changelog",
    category: "Developer Productivity",
    tags: ["dependencies", "security"],
  },
  {
    id: "content-repurposer",
    slug: "content-repurposer",
    title: "Content Repurposer",
    description:
      "แปลง content ชิ้นเดียวให้เป็นหลายรูปแบบ — blog → thread, video script → carousel, podcast → summary",
    category: "Content Creation",
    tags: ["repurpose", "content"],
  },
  {
    id: "competitor-price-tracker",
    slug: "competitor-price-tracker",
    title: "Competitor Price Tracker",
    description:
      "ติดตามราคาและ feature ของคู่แข่งอัตโนมัติ แจ้งเตือนเมื่อมีการเปลี่ยนแปลง พร้อมสรุป comparison",
    category: "Marketing & SEO",
    tags: ["competitor", "pricing"],
  },
  {
    id: "timesheet-auto-filler",
    slug: "timesheet-auto-filler",
    title: "Timesheet Auto-Filler",
    description:
      "กรอก timesheet อัตโนมัติจาก calendar events, git commits และ Jira tasks แทนการกรอกมือทุกสัปดาห์",
    category: "Business Automation",
    tags: ["timesheet", "time-tracking"],
  },
  {
    id: "database-backup-monitor",
    slug: "database-backup-monitor",
    title: "Database Backup Monitor",
    description:
      "ตรวจสอบสถานะ backup ของ database ทุกวัน แจ้งเตือนทันทีเมื่อ backup ล้มเหลวหรือมีขนาดผิดปกติ",
    category: "DevOps & CI/CD",
    tags: ["database", "backup"],
  },
  {
    id: "changelog-email-sender",
    slug: "changelog-email-sender",
    title: "Changelog Email Sender",
    description:
      "สร้างอีเมล changelog สรุปฟีเจอร์ใหม่ส่งให้ลูกค้าอัตโนมัติทุกครั้งที่ release เวอร์ชันใหม่",
    category: "Marketing & SEO",
    tags: ["changelog", "email"],
  },
  {
    id: "ssl-domain-expiry-checker",
    slug: "ssl-domain-expiry-checker",
    title: "SSL & Domain Expiry Checker",
    description:
      "ตรวจสอบวันหมดอายุ SSL cert และ domain ของทุกเว็บอัตโนมัติ แจ้งเตือนล่วงหน้า 30 วัน",
    category: "DevOps & CI/CD",
    tags: ["ssl", "domain"],
  },
  {
    id: "faq-auto-updater",
    slug: "faq-auto-updater",
    title: "FAQ Auto-Updater",
    description:
      "วิเคราะห์คำถามซ้ำจาก support tickets แล้วสร้างหรืออัปเดต FAQ อัตโนมัติให้ทันสมัยอยู่เสมอ",
    category: "Customer Support",
    tags: ["faq", "knowledge-base"],
  },
  {
    id: "onboarding-email-drip",
    slug: "onboarding-email-drip",
    title: "Onboarding Email Drip",
    description:
      "ส่ง email series แนะนำฟีเจอร์ไปหา user ใหม่อัตโนมัติตามพฤติกรรมการใช้งานจริง",
    category: "Marketing & SEO",
    tags: ["onboarding", "email"],
  },
  {
    id: "contract-renewal-tracker",
    slug: "contract-renewal-tracker",
    title: "Contract Renewal Tracker",
    description:
      "ติดตามสัญญาและ subscription ที่ใกล้หมดอายุ แจ้งเตือนทีมขายล่วงหน้าให้ต่อสัญญาทันเวลา",
    category: "Business Automation",
    tags: ["contract", "renewal"],
  },
  {
    id: "api-health-dashboard",
    slug: "api-health-dashboard",
    title: "API Health Dashboard",
    description:
      "Ping API endpoints ทุก 5 นาที ตรวจ response time, status code แจ้งเตือนทันทีเมื่อ downtime",
    category: "DevOps & CI/CD",
    tags: ["api", "uptime"],
  },
];

export const USE_CASE_CATEGORIES = Array.from(
  new Set(USE_CASES.map((u) => u.category)),
);
