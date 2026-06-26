import { StartStep } from "../types/start-here";

// เนื้อหาจริงจาก https://www.openclawthailand.com/start-here
// เส้นทางเรียนรู้ "จาก 0 ถึงใช้งาน OpenClaw จริง" แบ่งเป็น 4 ขั้น
export const START_STEPS: StartStep[] = [
  {
    order: 1,
    title: "ทำความเข้าใจ OpenClaw",
    description:
      "เข้าใจว่า OpenClaw คืออะไร เหมาะกับใคร และต่างจากเครื่องมืออื่นอย่างไร — เปรียบเทียบ OpenClaw กับ Claude Code และ Cursor พร้อมภาพรวมความสามารถด้าน automation",
  },
  {
    order: 2,
    title: "ติดตั้งและตั้งค่า",
    description:
      "ติดตั้งบนเครื่องของคุณหรือ VPS พร้อมตั้งค่าเริ่มต้น — ครอบคลุมขั้นตอนติดตั้งบน macOS / Windows / Linux, การเลือกระหว่างรันแบบ Local กับ VPS และ checklist สำหรับวันแรก",
  },
  {
    order: 3,
    title: "เลือกโมเดล",
    description:
      "เลือกโมเดล AI ให้เหมาะกับงานและงบประมาณ — วิธีเลือกโมเดล, คำสั่งที่จำเป็นต้องรู้ และตัวเลือกการใช้งานแบบ cloud หรือ local",
  },
  {
    order: 4,
    title: "ลงมือใช้จริง",
    description:
      "นำ use case จริงมาใช้แบบทีละขั้น — สำรวจ use cases, ใช้งาน skills และสร้าง automated workflow ของคุณเอง",
  },
];

// FAQ ที่พบบ่อย (จากหน้า Start Here)
export const START_FAQ: { question: string; answer: string }[] = [
  {
    question: "ต้องเขียนโค้ดเป็นไหม?",
    answer: "ไม่จำเป็น OpenClaw สั่งงานด้วยภาษาธรรมชาติได้เลย",
  },
  {
    question: "มีค่าใช้จ่ายไหม?",
    answer:
      "ตัว OpenClaw เป็น open-source ค่าใช้จ่ายมีเฉพาะ API key ของโมเดล AI ที่คุณเลือกใช้",
  },
  {
    question: "รันบนเครื่องตัวเองได้ไหม?",
    answer: "ได้ รองรับการรันบนเครื่องตัวเอง รวมถึงตัวเลือก private LLM",
  },
  {
    question: "รองรับภาษาไทยไหม?",
    answer: "รองรับภาษาไทยเต็มรูปแบบ",
  },
];
