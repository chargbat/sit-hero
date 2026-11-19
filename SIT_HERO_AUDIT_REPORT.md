# รายงานผลการตรวจสอบข้อมูลและแนวทางพัฒนาเว็บ SIT Hero (IT Hero)

> **วันที่ตรวจสอบ:** 18 พฤศจิกายน 2026  
> **แหล่งข้อมูลอ้างอิงทางการ:** คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (SIT KMUTT) — [sit.kmutt.ac.th/bsc/bsc-it-2](https://www.sit.kmutt.ac.th/bsc/bsc-it-2/)  
> **ไฟล์ต้นฉบับในโปรเจกต์ที่ตรวจสอบ:** `curriculum.js`, `autobot.js`, `knowledge.js`, `community.js`, `CourseGuide.js`

---

## 📌 สรุปผลการตรวจสอบสำคัญ (Executive Summary)

1. **ชั้นปีที่ 1 (เทอม 1 และ เทอม 2):**  
   - รายวิชาหมวด `INT` ถูกต้องเป็นส่วนใหญ่
   - มีจุดที่ต้องแก้ไขเรื่องสัดส่วนชั่วโมงบรรยาย-ปฏิบัติของ `INT120` และ `INT133`
   - วิชาหมวดศึกษาทั่วไปและภาษาอังกฤษ (`GEN` / `LNG`) สลับเทอม และมีรายวิชาที่ไม่มีในหลักสูตรจริง (`LNG221`)
2. **ชั้นปีที่ 2 ถึง ชั้นปีที่ 4:**  
   - **คลาดเคลื่อนจากหลักสูตรจริงอย่างมีนัยสำคัญ**
   - มีรหัสวิชากว่า 25–30 รายการที่ไม่มีในหลักสูตรทางการ (เช่น `INT201`, `INT205`, `INT300`, `INT339`, `INT415`, `GEN411`)
   - มีรหัสวิชาที่มีตัวตนจริงแต่ถูกนำมาใช้ผิดบทบาทอย่างอันตราย เช่น:
     - `INT222`: ในแอปใส่เป็นวิชาโครงงานบูรณาการ แต่ความจริงคือวิชา **UX/UI Measurement and Analysis** (วิชาโครงงานบูรณาการจริงคือ `INT504`)
     - `INT371`: ในแอปใส่เป็นวิชาสหกิจศึกษา แต่ความจริงคือวิชาเลือกสาย AI (วิชาฝึกงานจริงคือ `INT509`)
     - `INT241`: ในแอปวางไว้ปี 2 เทอม 1 แต่ในหลักสูตรทางการอยู่ **ปี 3 เทอม 2**
3. **วิชาเลือกตามสายอาชีพ (9 Tracks):**  
   - ในแอปกำหนดแบบจำลองไว้สายละ 1 วิชา (3 นก.) ต่อเทอม แต่ในหลักสูตรจริงแต่ละสายมีโครงสร้างวิชาและหน่วยกิตเฉพาะตัวตั้งแต่ 3 ถึง 8 วิชา (1, 2, และ 3 หน่วยกิต)

---

## 1. โครงสร้างหลักสูตรทางการ (128 หน่วยกิต)

| หมวดวิชา | จำนวนหน่วยกิต | คำอธิบาย |
| :--- | :---: | :--- |
| **1. หมวดวิชาศึกษาทั่วไป** | **27** | กลุ่มวิชาการดำเนินชีวิต คุณธรรม การคิด ความงาม นวัตกรรม (5 × 3 = 15 นก.) + ภาษาและการสื่อสาร (LNG 12 นก.) |
| **2. หมวดวิชาเฉพาะ** | **95** | • วิชาพื้นฐานทาง IT (บังคับ): 60 นก.<br>• วิชาเชิงลึกทาง IT (บังคับเลือกตามสาย + เลือก): 21 นก.<br>• การทำโครงงานและประสบการณ์การทำงาน: 14 นก. |
| **3. หมวดวิชาเลือกเสรี** | **6** | Free Elective I (เทอม 3/1) และ Free Elective II (เทอม 3/2) |
| **รวมตลอดหลักสูตร** | **128** | ค่าเล่าเรียนเฉลี่ยภาคการศึกษาละ 45,100 บาท (17 หน่วยกิต) |

---

## 2. แผนการศึกษาแกนกลางทางการ (ปี 1 – ปี 4)

| ภาคเรียน | นก. | รายวิชาทางการของ SIT KMUTT |
| :--- | :---: | :--- |
| **ปี 1/1** | 17 | `INT100` Design Thinking (1)<br>`INT101` Discrete Mathematics (3)<br>`INT110` Business Thinking (1)<br>`INT120` UX/UI Design Fundamentals `3 (2.5-1-6)`<br>`INT130` Computing Platform Basics (1)<br>`INT140` Computational Thinking (3)<br>`INT143` Software Process Fundamentals (1)<br>`INT180` Data Literacy (1)<br>`GEN121` Learning and Problem Solving Skills (3) |
| **ปี 1/2** | 17 | `INT131` Computing Platform Principles (1)<br>`INT132` Linux Fundamentals and Shell Scripting (1)<br>`INT133` Computer Networks `3 (2-2-5)`<br>`INT135` Basic Security (1)<br>`INT141` Basic Programming (3)<br>`INT142` Software Development Tools (1)<br>`INT150` Web Technology (3)<br>`INT190` Basic SQL (1)<br>`LNG220` Academic English (3) |
| **ปี 2/1** | 17 | `INT134` System Deployment (2)<br>`INT144` Agile Software Development I (1)<br>`INT151` Basic Frontend Development (3)<br>`INT161` Basic Backend Development (3)<br>`INT182` Data Science and AI Fundamentals (3)<br>`INT191` Relational Database Concepts and Design (2)<br>`INT504` Integrated Project (2)<br>`LNG202` Basic Reading for Science and Technology (1) |
| **ปี 2/2** | 19* | `INT102` Statistics for Information Technology `2 (2-0-4)`<br>`INT111` Business Information Systems (3)<br>`INT185` Basic Data Visualization (1)<br>`GEN231` Miracle of Thinking (3)<br>`LNG304` Meetings and Discussions (1)<br>+ **รายวิชาตามสายอาชีพ (Career Track)** |
| **ปี 3/1** | 18* | `INT105` Information Technology Seminar (1)<br>`INT136` Cyber Security (2)<br>`INT145` Software Analysis and Design (2)<br>`GEN111` Man and Ethics of Living (3)<br>`LNG308` Technical Report Writing (1)<br>`XXX xxx` Free Elective I (3)<br>+ **รายวิชาตามสายอาชีพ (Career Track)** |
| **ปี 3/2** | 19* | `INT116` Legal and Ethical Issues in IT (1)<br>`INT146` Software Testing (1)<br>`INT189` Data Governance (1)<br>`INT505/INT507` Capstone Project I หรือ Research Project I (1)<br>`GEN351` Modern Management and Leadership (3)<br>`LNG320` Content-Based Language Learning (3)<br>`XXX xxx` Free Elective II (3)<br>+ **รายวิชาตามสายอาชีพ (Career Track)** |
| **ปี 4/1** | 15 | `INT115` IT Professional Practices (2)<br>`INT147` Agile Software Development II (2)<br>`INT506/INT508` Capstone Project II หรือ Research Project II `5 (0-10-10)`<br>`GEN241` Beauty of Life (3)<br>`LNG332` Business English (3) |
| **ปี 4/2** | 6 | `INT509` Experiential Learning (สหกิจศึกษา / ฝึกงานเต็มเวลา 6 หน่วยกิต) |

---

## 3. ตารางเปรียบเทียบจุดผิดพลาดในแอปพลิเคชัน

### 3.1 จุดคลาดเคลื่อนในชั้นปีที่ 1
| รหัสวิชา | ในแอป SIT Hero | ตามหลักสูตรทางการ SIT | ผลกระทบ |
| :--- | :--- | :--- | :--- |
| `INT120` | `3 (2-2-5)` | `3 (2.5-1-6)` | ชั่วโมงปฏิบัติในแอปเกินจริง |
| `INT133` | `3 (2.5-1-6)` | `3 (2-2-5)` | สัดส่วนชั่วโมงคลาดเคลื่อน |
| `LNG220` | อยู่ปี 1 เทอม 1 | อยู่**ปี 1 เทอม 2** | ปี 1/1 ไม่มีวิชาภาษาอังกฤษในแผนปกติ |
| `GEN111` | อยู่ปี 1 เทอม 2 | อยู่**ปี 3 เทอม 1** | วางผิดชั้นปี |
| `LNG221` | ระบุเป็น Workplace English ปี 1/2 | **ไม่มีวิชานี้ในหลักสูตร** | ส่งผลให้หน่วยกิตปี 1 ผิดเป็น 20 นก. |

### 3.2 รหัสวิชาที่มีตัวตนจริงแต่ความหมายในแอปผิด
| รหัสวิชา | ในแอป SIT Hero | หลักสูตรจริงของ SIT | ข้อควรระวัง |
| :--- | :--- | :--- | :--- |
| `INT222` | ใส่เป็น Integrated IT Project I (2/2) และซ้ำในสาย UX | **UX/UI Measurement and Analysis** (วิชาสาย UX ปี 3/2) | วิชาโครงงานบูรณาการจริงคือ `INT504` (ปี 2/1) |
| `INT371` | ใส่เป็น Cooperative Education (ฝึกงาน 6 นก. ปี 4) | **วิชาเลือกสาย AI ปี 3/2** (Special Topic) | วิชาฝึกงานจริงคือ `INT509` Experiential Learning |
| `INT241` | ใส่ไว้ปี 2 เทอม 1 (ทั้งใน Course Guide และชีท n9) | อยู่ใน **ปี 3 เทอม 2** | ทำให้นักศึกษาจัดตารางอ่านสอบผิดเทอม |
| `INT242` | ใส่เป็นวิชาแกนบังคับ (Core) ทุกคนต้องเรียน | **เป็นวิชาบังคับเลือกของสาย Backend/Full-Stack** | สายอื่นไม่ได้บังคับเรียน |

---

## 4. แผนผังวิชาเลือก 9 สายอาชีพทางการ (Career Tracks)

| สายอาชีพ | ปี 2 เทอม 2 | ปี 3 เทอม 1 | ปี 3 เทอม 2 | รวมวิชา/หน่วยกิต |
| :--- | :--- | :--- | :--- | :---: |
| **1. Frontend Developer** | `INT240` Adv. Programming<br>`INT250` CSS Framework | `INT251` Frontend Framework | `INT241` Data Structures | 4 วิชา (12 นก.) |
| **2. Backend Developer** | `INT240` Adv. Programming<br>`INT242` Java Programming | `INT261` Backend Framework | `INT241` Data Structures | 4 วิชา (12 นก.) |
| **3. Full-Stack Developer** | `INT240`, `INT242`, `INT250` | `INT251`, `INT261` | `INT241` Data Structures | 6 วิชา (18 นก.) |
| **4. AI Developer** | `INT243` Python<br>`INT270` Math for AI | `INT271` Machine Learning<br>`INT272` Deep Learning (2)<br>`INT273` Generative DL (1) | `INT241` Data Structures<br>`INT370/371` NLP/CV | 7 วิชา (18 นก.) |
| **5. Data Scientist** | `INT243` Python<br>`INT270` Math for AI<br>`INT282` Stat for Data Sci (1) | `INT271` Machine Learning<br>`INT272` Deep Learning (2) | `INT285` Adv Data Viz (2)<br>`INT297` NoSQL DB (2) | 7 วิชา (16 นก.) |
| **6. Data Analyst** | `INT243` Python<br>`INT270` Math for AI<br>`INT282` Stat for Data Sci (1) | `INT271` Machine Learning<br>`INT272` Deep Learning (2) | `INT285` Adv Data Viz (2) | 6 วิชา (14 นก.) |
| **7. Data Engineer** | `INT290` Adv SQL (1)<br>`INT291` Physical DB (1)<br>`INT292` Query Processing (1) | `INT293` Transaction (1)<br>`INT294` Data Warehouse (2)<br>`INT295` DB Auth (1) | `INT296` Big Data Arch (2)<br>`INT297` NoSQL DB (2) | 8 วิชา (11 นก.) |
| **8. Database Admin (DBA)** | `INT290`, `INT291`, `INT292` (วิชาละ 1 นก.) | `INT293`, `INT294` (2), `INT295` (1) | *(เลือกเรียนหมวด 2.2 เพิ่มเติม)* | 6 วิชา (7 นก.) |
| **9. UX/UI Designer** | `INT220` UX Design (3) | `INT221` UI Design (3) | `INT222` UX/UI Measurement (3) | 3 วิชา (9 นก.) |

---

## 5. แนวทางการพัฒนาและการออกแบบเว็บ (Roadmap & Design)

### 5.1 ด้านความถูกต้องทางเทคนิค (P0)
- สร้างไฟล์ `curriculum.js` ใหม่โดยใช้โครงสร้าง Object ที่ชัดเจนแทน Array Index
- ปรับปรุงตรรกะใน `autobot.js` ที่อ้างอิงรหัสวิชาโปรเจกต์และการฝึกงาน
- แก้ไขข้อความใน `CourseGuide.js` จากคำว่า *"election subject"* เป็น *"Career Track electives"*
- เพิ่มสคริปต์ Unit Test เพื่อตรวจสอบความถูกต้องของผลรวมหน่วยกิตแบบอัตโนมัติ

### 5.2 ด้านความสวยงามและประสบการณ์ใช้งาน (UI/UX)
- **เพิ่มโทนสีส้ม KMUTT (`#F26522`):** ใช้เป็น Accent 5–10% เพื่อสร้างความมีชีวิตชีวาและสะท้อนอัตลักษณ์ของสถาบัน
- **Color Coding 9 สายอาชีพ:** ออกแบบ Badge และ Icon สีประจำสายอาชีพทั้ง 9 เพื่อให้จดจำง่าย
- **Roadmap Timeline:** ปรับการแสดงผลรายวิชาเป็นไทม์ไลน์เลื่อนแนวนอน พร้อม Progress Bar หน่วยกิตสะสม
- **Typography:** เพิ่ม Line-height สำหรับภาษาไทยเป็น `1.7 - 1.8` เพื่อป้องกันวรรณยุกต์ซ้อน

