# SIT Hero (IT Hero) — Modular Web Prototype

โฟลเดอร์นี้แยกสัดส่วนโค้ดออกจากไฟล์ `IT Hero Prototype.html` เดิมอย่างชัดเจน เพื่อให้สามารถปรับแต่ง **Animation**, **UI/UX**, และ **ข้อมูลหลักสูตร SIT KMUTT (ปี 1–4)** ได้สะดวกโดยไม่ปนกัน

## โครงสร้างโฟลเดอร์ (Project Architecture)

```text
it-hero-app/
├── index.html                        # ไฟล์หลัก เปิดในเบราว์เซอร์ได้ทันที (หรือรันผ่าน Live Server)
├── assets/
│   └── logo.png                      # โลโก้ SIT Hero ของจริง
├── styles/
│   ├── variables.css                 # สีแบรนด์, ฟอนต์, และตัวแปรความเร็ว/จังหวะ Animation (--ease-*, --dur-*)
│   ├── base.css                      # โครงสร้างพื้นฐาน, Typography (.t-h1, .t-h2, .t-h3), Scrollbar
│   └── animations.css                # 🎬 ไฟล์รวม Keyframes, Transitions, Stagger & Micro-interactions
└── src/
    ├── data/
    │   ├── curriculum.js             # 📚 ข้อมูลหลักสูตร SIT KMUTT ปี 1–4 (Core, GenEd, และ 9 สายอาชีพ)
    │   ├── community.js              # 💬 ข้อมูลกระทู้ตั้งต้นและ Tags แนะนำ
    │   ├── knowledge.js              # 📂 ข้อมูลชีทสรุปวิชา SIT และเนื้อหาจำลองในหน้า Preview
    │   ├── autobot.js                # 🤖 คำถามยอดฮิตและคำตอบอัตโนมัติของ Autobot
    │   └── profile.js                # 👤 ข้อมูลโปรไฟล์ผู้ใช้เริ่มต้น
    ├── utils/
    │   ├── helpers.js                # ฟังก์ชันช่วยเหลือ, ปุ่มมาตรฐาน, และระบบเซฟลง localStorage
    │   └── icons.js                  # ชุดไอคอน SVG ทั้งหมดของระบบ
    ├── components/
    │   ├── common/
    │   │   ├── UI.js                 # Avatar, ProfessorAvatar (อาจารย์จิ๋วหลิว), Tag, CourseBadge, Select
    │   │   ├── Modal.js              # Modal, ModalHeader, Confirm Dialog
    │   │   └── Navbar.js             # แถบเมนูนำทางด้านบนพร้อมโลโก้
    │   └── pages/
    │       ├── Home.js               # 1) หน้า Introduction
    │       ├── UserModal.js          # หน้าต่าง User Info & Edit Profile
    │       ├── CourseGuide.js        # 2) หน้า Course Guide (พร้อม Professor Jiewliew & Filter วิชาศึกษาทั่วไป)
    │       ├── Community.js          # 3) หน้า Community
    │       ├── Knowledge.js          # 4) หน้า Knowledge Vault
    │       └── Autobot.js            # 5) หน้า Autobot
    └── App.js                        # Root App, Router & เฟรมจำลองหน้าจอ Desktop 1440 / Mobile 390
```

## แนวทางการทำ Animation เพิ่มเติม

1. **แก้ความเร็วหรือ Easing Curve ทั้งเว็บ:** เปิดไฟล์ `styles/variables.css` แล้วปรับค่า `--ease-out-expo`, `--ease-spring`, `--dur-fast`, `--dur-normal`
2. **เพิ่ม Keyframes หรือเปลี่ยนเอฟเฟกต์การ์ด:** เปิดไฟล์ `styles/animations.css` ซึ่งมีคลาสพร้อมใช้งานแล้ว ได้แก่:
   - `.anim-page`: แอนิเมชันตอนสลับหน้า
   - `.anim-fade-up` + `.stagger-1` ถึง `.stagger-6`: แอนิเมชันการ์ดลอยขึ้นมาเรียงลำดับกัน
   - `.anim-modal-panel`: แอนิเมชันเด้งแบบ Spring ตอนเปิด Modal
   - `.anim-float`: แอนิเมชันลอยตัวนุ่มๆ (ใช้กับโลโก้และคาแรกเตอร์อาจารย์จิ๋วหลิว)
   - `.hover-lift`: เอฟเฟกต์ยกการ์ดขึ้นเมื่อเอาเมาส์ชี้
   - `.btn-press`: เอฟเฟกต์ยุบตัวเล็กน้อยเมื่อกดปุ่ม
3. **แก้ไขข้อมูลรายวิชา:** เปิดไฟล์ `src/data/curriculum.js` เพื่อเพิ่มหรือปรับแก้รายวิชาในแต่ละปี/เทอม หรือเพิ่มวิชาเลือกในแต่ละสายอาชีพได้ทันที

