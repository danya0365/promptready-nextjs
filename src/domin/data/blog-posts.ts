import { BlogPost } from "@/src/application/repositories/IBlogPostRepository";

// เนื้อหาจริงจาก https://www.openclawthailand.com/blog
// หมายเหตุ: excerpt/เนื้อหาสรุปดึงจากหน้า blog จริง ส่วน coverImage เป็น placeholder
// (เว็บต้นทางไม่ได้เปิดเผย URL รูปปก) — เปลี่ยนเป็นรูปจริงได้ที่ฟิลด์ coverImage
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "openclaw-2026-6-9-codex-openai-gateway",
    title:
      "OpenClaw 2026.6.9: Codex และเส้นทาง OpenAI, ระบบปลั๊กอิน, เสถียรภาพของ Gateway ดีขึ้นชัดเจน",
    excerpt:
      "Stable release 2026.6.9 ที่เน้น Codex และเส้นทาง OpenAI และ ระบบปลั๊กอิน พร้อมผลกระทบที่จับต้องได้",
    content:
      "Stable release 2026.6.9 ที่เน้น Codex และเส้นทาง OpenAI และ ระบบปลั๊กอิน พร้อมผลกระทบที่จับต้องได้\n\nเวลาอ่านโดยประมาณ: 11 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/openclaw-2026-6-9/1200/675",
    date: "2026-06-21",
    tags: ["Release", "Codex", "Gateway"],
  },
  {
    slug: "workboard-skill-workshop-multi-agent",
    title:
      "ทดลองใช้ OpenClaw Workboard + Skill Workshop: จาก multi-agent สู่ skill ที่ตรวจสอบได้",
    excerpt:
      "Lab ภาษาไทยสำหรับแบ่งงาน Research-Verify-Write บน Workboard แล้วเปลี่ยนเป็น workflow ที่ตรวจสอบได้",
    content:
      "Lab ภาษาไทยสำหรับแบ่งงาน Research-Verify-Write บน Workboard แล้วเปลี่ยน workflow ให้กลายเป็น skill ที่ตรวจสอบได้\n\nเวลาอ่านโดยประมาณ: 10 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/workboard-skill-workshop/1200/675",
    date: "2026-06-10",
    tags: ["Tutorial", "Workboard", "Multi-Agent"],
  },
  {
    slug: "openclaw-2026-5-28-codex-openai-gateway",
    title:
      "OpenClaw 2026.5.28: Codex และเส้นทาง OpenAI, ระบบปลั๊กอิน, เสถียรภาพของ Gateway ดีขึ้นชัดเจน",
    excerpt:
      "Stable release ที่เน้น Codex และเส้นทาง OpenAI พร้อมการปรับปรุงระบบปลั๊กอิน",
    content:
      "Stable release ที่เน้น Codex และเส้นทาง OpenAI พร้อมการปรับปรุงระบบปลั๊กอินและเสถียรภาพของ Gateway\n\nเวลาอ่านโดยประมาณ: 13 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/openclaw-2026-5-28/1200/675",
    date: "2026-05-30",
    tags: ["Release", "Codex", "Gateway"],
  },
  {
    slug: "openclaw-2026-5-27-codex-openai-gateway",
    title:
      "OpenClaw 2026.5.27: Codex และเส้นทาง OpenAI, ระบบปลั๊กอิน, เสถียรภาพของ Gateway ดีขึ้นชัดเจน",
    excerpt:
      "Stable release ที่โฟกัสเรื่อง Codex, เส้นทาง OpenAI และระบบปลั๊กอิน",
    content:
      "Stable release ที่โฟกัสเรื่อง Codex, เส้นทาง OpenAI และระบบปลั๊กอิน\n\nเวลาอ่านโดยประมาณ: 12 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/openclaw-2026-5-27/1200/675",
    date: "2026-05-28",
    tags: ["Release", "Codex", "Gateway"],
  },
  {
    slug: "ai-security-openclaw",
    title:
      "🔐 ใช้งาน AI อย่างมั่นใจ! เจาะลึกมาตรฐานความปลอดภัยจาก OpenClaw",
    excerpt:
      "บทความครบถ้วนเกี่ยวกับความปลอดภัยในการใช้งาน AI ในสภาพแวดล้อมสาธารณะ",
    content:
      "บทความครบถ้วนเกี่ยวกับความปลอดภัยในการใช้งาน AI ในสภาพแวดล้อมสาธารณะ\n\nเวลาอ่านโดยประมาณ: 10 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/ai-security-openclaw/1200/675",
    date: "2026-05-02",
    tags: ["News", "Security"],
  },
  {
    slug: "agent-to-agent-resilience",
    title:
      "Agent-to-Agent Resilience: ออกแบบหลายเอเจนต์ยังไงไม่ให้ล่มทั้งระบบ",
    excerpt:
      "แนวทางเชิงเทคนิคสำหรับออกแบบสถาปัตยกรรม multi-agent ให้มีเสถียรภาพ ไม่ล่มทั้งระบบ",
    content:
      "แนวทางเชิงเทคนิคสำหรับออกแบบสถาปัตยกรรม multi-agent ให้มีเสถียรภาพ ไม่ล่มทั้งระบบ\n\nเวลาอ่านโดยประมาณ: 3 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/agent-to-agent-resilience/1200/675",
    date: "2026-04-21",
    tags: ["Tutorial", "Multi-Agent", "Resilience"],
  },
  {
    slug: "plugin-reliability-runbook",
    title: "Plugin Reliability Runbook: แก้ระบบพังหลังอัปเดตแบบทีมโปร",
    excerpt: "คู่มือฉบับครบสำหรับดูแลปลั๊กอินหลังการอัปเดต ไม่ให้ระบบพัง",
    content:
      "คู่มือฉบับครบสำหรับดูแลปลั๊กอินหลังการอัปเดต ไม่ให้ระบบพังแบบทีมโปร\n\nเวลาอ่านโดยประมาณ: 3 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/plugin-reliability-runbook/1200/675",
    date: "2026-04-21",
    tags: ["Tutorial", "Plugin", "Reliability"],
  },
  {
    slug: "openclaw-skill-playbook",
    title: "OpenClaw Skill Playbook: อัปเดตยังไงไม่ให้ระบบพัง",
    excerpt:
      "วิธีออกแบบ skill ระดับ production พร้อมสถานการณ์ failure จริงและวิธีรับมือ",
    content:
      "วิธีออกแบบ skill ระดับ production พร้อมสถานการณ์ failure จริงและวิธีรับมือ\n\nเวลาอ่านโดยประมาณ: 4 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/openclaw-skill-playbook/1200/675",
    date: "2026-04-21",
    tags: ["Tutorial", "Skill", "Production"],
  },
  {
    slug: "community-showcase-launched",
    title: "เปิดตัว Community Showcase — แชร์สิ่งที่คุณสร้างได้แล้ว",
    excerpt: "ฟีเจอร์ใหม่สำหรับแชร์โปรเจคของชุมชน OpenClaw",
    content:
      "เปิดตัว Community Showcase ฟีเจอร์ใหม่สำหรับให้ผู้ใช้แชร์โปรเจคที่สร้างด้วย OpenClaw\n\nเวลาอ่านโดยประมาณ: 1 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/community-showcase/1200/675",
    date: "2026-04-04",
    tags: ["Release", "Community"],
  },
  {
    slug: "welcome-openclaw-thailand",
    title: "ยินดีต้อนรับสู่ OpenClaw Thailand Community!",
    excerpt:
      "เว็บไซต์ OpenClaw Thailand เปิดตัวอย่างเป็นทางการแล้ว เป็นศูนย์กลางคู่มือภาษาไทย",
    content:
      "เว็บไซต์ OpenClaw Thailand เปิดตัวอย่างเป็นทางการแล้ว เป็นศูนย์กลางคู่มือภาษาไทยสำหรับผู้ใช้ OpenClaw\n\nเวลาอ่านโดยประมาณ: 1 นาที\n\nอ่านบทความเต็มได้ที่ openclawthailand.com/blog",
    coverImage: "https://picsum.photos/seed/welcome-openclaw-thailand/1200/675",
    date: "2026-03-30",
    tags: ["News", "Community"],
  },
];
