/* ==========================================================================
   SIT Hero (IT Hero) — Community Seed Posts & Suggested Tags
   ========================================================================== */

window.ITHeroData = window.ITHeroData || {};

window.ITHeroData.SUGGEST_TAGS = [
  "INT101",
  "INT120",
  "INT140",
  "INT141",
  "INT150",
  "INT241",
  "Programming",
  "UX/UI",
  "Database",
  "CareerTrack",
  "ExamPrep",
  "Internship"
];

window.ITHeroData.SEED_POSTS = [
  {
    id: "p1",
    author: "Napat K.",
    mins: 120,
    likes: 24,
    liked: false,
    title: "ปี 1 เทอม 1 วิชา INT101 Discrete Math ควรฝึกทำโจทย์เรื่องไหนเป็นพิเศษครับ?",
    body: "กำลังเตรียมตัวสอบมิดเทอมวิชา INT101 ครับ เห็นมีทั้ง Propositional Logic, Truth Table, การพิสูจน์ และเรื่องเซต รุ่นพี่มีเทคนิคการจำสมมูลตรรกศาสตร์ (Logical Equivalences) หรือแหล่งโจทย์แนะนำไหมครับ",
    tags: ["INT101", "ExamPrep"],
    comments: [
      {
        id: "c1",
        author: "Pimchanok T.",
        mins: 95,
        likes: 9,
        liked: false,
        text: "แนะนำให้เข้าใจกฎ De Morgan's Law กับ Implication (p → q สมมูลกับ ¬p ∨ q) ให้แม่นเลยค่ะ ออกสอบทุกปี แล้วลองโหลดชีทสรุปในหน้า Knowledge Vault ของเว็บนี้มาอ่านควบคู่กันได้เลย!",
        replies: [
          {
            id: "r1",
            author: "Napat K.",
            mins: 70,
            likes: 3,
            liked: false,
            text: "ขอบคุณมากครับพี่ กดเซฟชีท INT101 เก็บไว้ในโฟลเดอร์เรียบร้อยแล้วครับ"
          }
        ]
      },
      {
        id: "c2",
        author: "Kittipong S.",
        mins: 45,
        likes: 5,
        liked: false,
        text: "อย่าลืมซ้อมเขียนตารางค่าความจริงแบบ 3 ตัวแปร (8 แถว) ให้คล่องมือด้วยนะ ตอนเข้าห้องสอบจะได้ไม่เสียเวลาเช็กเครื่องหมาย",
        replies: []
      }
    ]
  },
  {
    id: "p2",
    author: "Nina S.",
    mins: 340,
    likes: 35,
    liked: true,
    title: "รีวิวการเลือกสาย Frontend Developer vs UX/UI Designer ตอนขึ้นปี 2 เทอม 2",
    body: "สำหรับน้องๆ ที่กำลังลังเลระหว่างสาย Frontend (INT250 / INT251) กับสาย UX/UI (INT220 / INT221) ถ้าชอบทั้งการออกแบบใน Figma และชอบเขียนโค้ดทำ Web Animation ลื่นๆ แนะนำให้ลงสาย Frontend หรือ Full-Stack แล้วอ่านชีท UX เสริมได้เลย ใครสนใจสายไหนมาคุยกันได้นะ!",
    tags: ["CareerTrack", "UX/UI", "INT150"],
    comments: [
      {
        id: "c3",
        author: "Tanawat R.",
        mins: 280,
        likes: 7,
        liked: false,
        text: "เห็นด้วยเลยครับ พอเข้าใจทั้ง UX/UI จาก INT120 แล้วมาต่อยอด CSS Framework ใน INT250 ทำให้ขึ้นหน้าเว็บจริงได้ไวและสวยขึ้นมาก",
        replies: []
      }
    ]
  },
  {
    id: "p3",
    author: "Sorawee M.",
    mins: 600,
    likes: 19,
    liked: false,
    title: "เตรียมตัวเรียน INT132 Linux & Shell Scripting กับ INT141 Basic Programming ยังไงดี",
    body: "เทอมหน้าจะขึ้นปี 1 เทอม 2 แล้วครับ ใช้โน้ตบุ๊ก Windows ควรลง WSL2 ไว้ฝึกใช้คำสั่ง Linux ล่วงหน้าเลยไหมครับ แล้ววิชา INT141 เน้นฝึกเขียนโค้ดแนวไหนเป็นหลัก?",
    tags: ["INT141", "Programming"],
    comments: [
      {
        id: "c4",
        author: "Arisa P.",
        mins: 510,
        likes: 6,
        liked: false,
        text: "ลง WSL2 (Ubuntu) เตรียมไว้เลยสะดวกมากค่ะ ส่วน INT141 แนะนำให้ทบทวนวิธีคิดแยกย่อยปัญหาจาก INT140 แล้วหัดเขียนเงื่อนไข ลูป กับฟังก์ชันทุกสัปดาห์จะตามทันสบายๆ เลย",
        replies: []
      }
    ]
  },
  {
    id: "p4",
    author: "Chayapol W.",
    mins: 1440,
    likes: 42,
    liked: false,
    title: "รวมเช็กลิสต์เตรียมพอร์ตยื่นฝึกงาน / สหกิจศึกษา (INT509) สาย Software & Data",
    body: "สรุปจากที่ได้เข้าฟังวิชาเตรียมความพร้อมวิชาชีพ INT115 ครับ: 1) ทำโปรเจกต์ในวิชา Integrated Project (INT504) และ Capstone (INT505/INT506) ให้ขึ้น README บน GitHub สวยๆ 2) ฝึกโจทย์ SQL (INT190/INT290) และ Data Structures (INT241) 3) เตรียมเล่าบทบาทของเราในทีมให้ชัดเจน",
    tags: ["Internship", "CareerTrack", "INT241", "Database"],
    comments: []
  }
];

