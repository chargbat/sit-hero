/* ==========================================================================
   SIT Hero (IT Hero) — Official SIT KMUTT Curriculum Data (Years 1–4)
   อ้างอิงข้อมูลหลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ (SIT KMUTT)
   แหล่งข้อมูลทางการ: https://www.sit.kmutt.ac.th/bsc/bsc-it-2/
   ตรวจสอบและอัปเดตล่าสุด: พฤศจิกายน 2026
   ========================================================================== */

window.ITHeroData = window.ITHeroData || {};

window.ITHeroData.CURRICULUM_METADATA = {
  degreeName: "วิทยาศาสตรบัณฑิต (เทคโนโลยีสารสนเทศ)",
  degreeEnglish: "Bachelor of Science (Information Technology)",
  faculty: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (IT KMUTT)",
  totalCredits: 128,
  averageTuition: "45,100 บาท/ภาคการศึกษา (17 หน่วยกิต)",
  officialUrl: "https://www.sit.kmutt.ac.th/bsc/bsc-it-2/",
  verifiedDate: "18 พฤศจิกายน 2026"
};

window.ITHeroData.TRACKS = [
  ["frontend", "Frontend Developer", "นักพัฒนาฟรอนเอนด์ (4 วิชา 12 หน่วยกิต)"],
  ["backend", "Backend Developer", "นักพัฒนาแบ็กเอนด์ (4 วิชา 12 หน่วยกิต)"],
  ["fullstack", "Full-Stack Developer", "นักพัฒนาฟูลสแตก (6 วิชา 18 หน่วยกิต)"],
  ["ai", "AI Developer", "นักพัฒนาปัญญาประดิษฐ์ (7 วิชา 18 หน่วยกิต)"],
  ["ds", "Data Scientist", "นักวิทยาการข้อมูล (7 วิชา 16 หน่วยกิต)"],
  ["da", "Data Analyst", "นักวิเคราะห์ข้อมูล (6 วิชา 14 หน่วยกิต)"],
  ["de", "Data Engineer", "วิศวกรข้อมูล (8 วิชา 11 หน่วยกิต)"],
  ["dba", "Database Administrator (DBA)", "ผู้ดูแลฐานข้อมูล (6 วิชา 7 หน่วยกิต)"],
  ["ux", "UX/UI Designer", "นักออกแบบประสบการณ์และส่วนต่อประสาน (3 วิชา 9 หน่วยกิต)"]
];

window.ITHeroData.COURSE_CATALOG = {
  "INT100": {
    "code": "INT100",
    "name": "Design Thinking",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "core",
    "what": "เรียนรู้กระบวนการคิดเชิงออกแบบ 5 ขั้นตอน: Empathize (เข้าใจผู้ใช้), Define (กำหนดปัญหา), Ideate (ระดมความคิด), Prototype (สร้างต้นแบบ) และ Test (ทดสอบสมมติฐาน)",
    "why": "หัวใจของการสร้างผลิตภัณฑ์ดิจิทัลและซอฟต์แวร์ที่ตอบโจทย์ผู้ใช้งานจริง ป้องกันการเสียเวลาพัฒนาฟีเจอร์ที่ไม่มีใครต้องการ"
  },
  "INT101": {
    "code": "INT101",
    "name": "Discrete Mathematics",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "core",
    "what": "ตรรกศาสตร์ประพจน์ (Propositional Logic), วิธีการพิสูจน์ (Proof Techniques), ทฤษฎีเซต, ความสัมพันธ์และฟังก์ชัน, พีชคณิตบูลีน (Boolean Algebra) และทฤษฎีกราฟเบื้องต้น",
    "why": "รากฐานทางคณิตศาสตร์ที่จำเป็นที่สุดของวิทยาการคอมพิวเตอร์และไอที นำไปใช้ในอัลกอริทึม เงื่อนไขในโค้ด และการออกแบบฐานข้อมูล"
  },
  "INT110": {
    "code": "INT110",
    "name": "Business Thinking",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "core",
    "what": "แนวคิดและการวิเคราะห์ทางธุรกิจ การเข้าใจคุณค่าของผลิตภัณฑ์ (Value Proposition), โมเดลธุรกิจ (Business Model Canvas), การเงินและการตลาดเบื้องต้นสำหรับผลิตภัณฑ์ดิจิทัล",
    "why": "นักไอทียุคใหม่ต้องเข้าใจทั้งบริบทเทคโนโลยีและมิติธุรกิจ เพื่อสร้างระบบที่สร้างมูลค่าและสื่อสารกับผู้มีส่วนได้ส่วนเสียในองค์กรได้อย่างมีประสิทธิภาพ"
  },
  "INT120": {
    "code": "INT120",
    "name": "UX/UI Design Fundamentals",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "พื้นฐานการออกแบบประสบการณ์ผู้ใช้ (UX) และส่วนต่อประสาน (UI), สถาปัตยกรรมสารสนเทศ (Information Architecture), Wireframing, Visual Hierarchy, และการประเมินการใช้งาน (Heuristic Evaluation)",
    "why": "ทำให้ระบบหรือเว็บที่พัฒนาขึ้นใช้งานง่าย ลดข้อผิดพลาดของผู้ใช้ และสร้างความประทับใจตั้งแต่ครั้งแรกที่สัมผัส"
  },
  "INT130": {
    "code": "INT130",
    "name": "Computing Platform Basics",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "องค์ประกอบพื้นฐานของระบบคอมพิวเตอร์ ระบบเลขฐาน การแทนข้อมูลในหน่วยความจำ (Binary/Hex/Floating-Point) ฮาร์ดแวร์ การทำงานร่วมกันระหว่าง CPU หน่วยความจำ และอุปกรณ์ต่อพ่วง",
    "why": "เข้าใจกลไกภายในของคอมพิวเตอร์ ช่วยให้เขียนโปรแกรมที่ประหยัดทรัพยากรและวิเคราะห์ปัญหาคอขวดระดับฮาร์ดแวร์ได้ลึกซึ้ง"
  },
  "INT140": {
    "code": "INT140",
    "name": "Computational Thinking",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "กระบวนการคิดเชิงคำนวณ 4 เสาหลัก: การย่อยปัญหา (Decomposition), การหารูปแบบ (Pattern Recognition), การคิดเชิงนามธรรม (Abstraction) และการออกแบบอัลกอริทึม (Algorithm Design)",
    "why": "เปลี่ยนโจทย์ปัญหาที่ซับซ้อนในโลกจริงให้กลายเป็นขั้นตอนเชิงตรรกะที่คอมพิวเตอร์สามารถเข้าใจและประมวลผลได้"
  },
  "INT143": {
    "code": "INT143",
    "name": "Software Process Fundamentals",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "core",
    "what": "ภาพรวมวงจรการพัฒนาซอฟต์แวร์ (SDLC), ระเบียบวิธีการทำงานแบบ Agile และ Scrum, บทบาทหน้าที่ในทีมซอฟต์แวร์, การจัดการความต้องการ (User Stories) และการส่งมอบงานอย่างเป็นระบบ",
    "why": "เตรียมความพร้อมสู่การทำงานจริงในอุตสาหกรรมซอฟต์แวร์ที่มีมาตรฐานและการทำงานร่วมกันเป็นทีมแบบมืออาชีพ"
  },
  "INT180": {
    "code": "INT180",
    "name": "Data Literacy",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "core",
    "what": "การอ่าน ตีความ และประเมินความน่าเชื่อถือของข้อมูล สถิติเชิงพรรณนาเบื้องต้น จริยธรรมในการใช้ข้อมูล และการเลือกใช้แผนภูมิเพื่อสื่อสารข้อมูล (Data Storytelling)",
    "why": "ทุกการตัดสินใจในยุคดิจิทัลต้องอาศัยข้อมูล วิชานี้ช่วยให้ไม่หลงเชื่อข้อมูลที่บิดเบือนและหยิบข้อมูลมาใช้สนับสนุนการทำงานได้อย่างถูกต้อง"
  },
  "GEN121": {
    "code": "GEN121",
    "name": "Learning and Problem Solving Skills",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "gened",
    "what": "ทักษะการเรียนรู้ตลอดชีวิต (Lifelong Learning), การคิดเชิงวิพากษ์ (Critical Thinking), การทำงานร่วมกับผู้อื่นข้ามสายงาน และการแก้ปัญหาอย่างสร้างสรรค์ในสังคมมหาวิทยาลัย",
    "why": "วิชาศึกษาทั่วไป (GenEd) ของ มจธ. ที่ช่วยปรับตัวสู่การเรียนรู้ด้วยตนเองและการใช้ชีวิตในศตวรรษที่ 21"
  },
  "INT131": {
    "code": "INT131",
    "name": "Computing Platform Principles",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "สถาปัตยกรรมระบบคอมพิวเตอร์เชิงลึก วัฏจักรคำสั่ง (Fetch-Decode-Execute), การทำงานของระบบปฏิบัติการ (Process Scheduling, Virtual Memory, I/O Subsystems)",
    "why": "ต่อยอดจาก INT130 เพื่อเข้าใจว่าระบบปฏิบัติการจัดการทรัพยากรเครื่องอย่างไร และเขียนโปรแกรมที่ใช้ประสิทธิภาพระบบได้สูงสุด"
  },
  "INT132": {
    "code": "INT132",
    "name": "Linux Fundamentals and Shell Scripting",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "การใช้งานระบบปฏิบัติการ Linux ผ่านบรรทัดคำสั่ง (CLI), โครงสร้างไฟล์และสิทธิ์การเข้าถึง (Permissions), Redirection, Pipes, การจัดการโปรเซส และการเขียน Bash Shell Script เพื่อรันงานอัตโนมัติ",
    "why": "เซิร์ฟเวอร์, Docker และ Cloud ในโลกจริงรันบน Linux แทบทั้งหมด การใช้ Linux คล่องเป็นทักษะบังคับของชาวไอทีทุกคน"
  },
  "INT133": {
    "code": "INT133",
    "name": "Computer Networks",
    "credits": 3,
    "creditDetail": "3 (2-2-5)",
    "category": "core",
    "what": "สถาปัตยกรรมเครือข่ายคอมพิวเตอร์ OSI 7 Layers และ TCP/IP, IP Addressing, Subnetting, Routing, Switching, โพรโทคอล DNS, DHCP, HTTP/HTTPS และการวิเคราะห์แพ็กเก็ตด้วย Wireshark",
    "why": "ระบบไอทีทุกระบบต้องเชื่อมต่ออินเทอร์เน็ต ความเข้าใจระบบเครือข่ายช่วยในการออกแบบระบบที่เสถียร ปลอดภัย และแก้ปัญหาการเชื่อมต่อได้อย่างแม่นยำ"
  },
  "INT135": {
    "code": "INT135",
    "name": "Basic Security",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "core",
    "what": "หลักการพื้นฐานความมั่นคงปลอดภัยสารสนเทศ CIA Triad (Confidentiality, Integrity, Availability), ภัยคุกคามทางไซเบอร์ทั่วไป, การเข้ารหัสข้อมูล (Cryptography) และแนวปฏิบัติด้านความปลอดภัย",
    "why": "ปลูกฝังแนวคิด Security-by-Design ตั้งแต่ปี 1 เพื่อให้เขียนโค้ดและตั้งค่าระบบที่มีความปลอดภัยตั้งแต่จุดเริ่มต้น"
  },
  "INT141": {
    "code": "INT141",
    "name": "Basic Programming",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "การเขียนโปรแกรมคอมพิวเตอร์ระดับพื้นฐาน ชนิดข้อมูล ตัวแปร นิพจน์ โครงสร้างควบคุมเงื่อนไข (if-else) วงวน (loops) อาร์เรย์ ฟังก์ชัน และการดีบักโปรแกรมอย่างเป็นระบบ",
    "why": "วิชาหัวใจสำคัญในการเปลี่ยนตรรกะความคิดเชิงคำนวณให้กลายเป็นโค้ดที่รันได้จริงบนคอมพิวเตอร์"
  },
  "INT142": {
    "code": "INT142",
    "name": "Software Development Tools",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "เครื่องมือสำหรับนักพัฒนาซอฟต์แวร์ยุคใหม่: Git & GitHub (Version Control, Branching, Merging, Pull Request), Code Editors/IDEs, Package Managers และสภาพแวดล้อมการพัฒนา",
    "why": "การทำงานจริงในองค์กรต้องเขียนโค้ดร่วมกับทีม Git เป็นเครื่องมือมาตรฐานที่ทุกคนต้องใช้ได้อย่างชำนาญ"
  },
  "INT150": {
    "code": "INT150",
    "name": "Web Technology",
    "credits": 3,
    "creditDetail": "3 (2-2-5)",
    "category": "core",
    "what": "เทคโนโลยีเว็บเบื้องต้น: Semantic HTML5, CSS3, Responsive Design (Flexbox / CSS Grid), CSS Frameworks และมาตรฐานการเข้าถึงเว็บสากล (Web Accessibility)",
    "why": "ปูพื้นฐานการพัฒนาหน้าเว็บให้ถูกต้องตามมาตรฐานโครงสร้าง ก่อนต่อยอดสู่การเขียน JavaScript และ Frontend Framework ในชั้นปีถัดไป"
  },
  "INT190": {
    "code": "INT190",
    "name": "Basic SQL",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "การสืบค้นและจัดการฐานข้อมูลเชิงสัมพันธ์ด้วยภาษา SQL: SELECT, WHERE, JOINs (INNER, LEFT, RIGHT), GROUP BY, HAVING, Aggregate Functions และการจัดการข้อมูล (INSERT, UPDATE, DELETE)",
    "why": "SQL เป็นภาษาดึงข้อมูลที่เป็นมาตรฐานระดับสากล ไม่ว่าจะทำงานสายพัฒนาซอฟต์แวร์ สายข้อมูล หรือสายระบบก็ต้องใช้เป็นประจำ"
  },
  "LNG220": {
    "code": "LNG220",
    "name": "Academic English",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "gened",
    "what": "ภาษาอังกฤษเชิงวิชาการ การอ่านและวิเคราะห์บทความทางเทคโนโลยี การสรุปใจความสำคัญ การเขียนย่อหน้าเชิงวิชาการ และการนำเสนองานวิชาการเป็นภาษาอังกฤษ",
    "why": "แหล่งข้อมูลเทคโนโลยี ตำรา และเอกสารทางการของเครื่องมือไอทีทั้งหมดเป็นภาษาอังกฤษ ทักษะนี้ช่วยให้ค้นคว้าและเติบโตได้ด้วยตนเอง"
  },
  "INT134": {
    "code": "INT134",
    "name": "System Deployment",
    "credits": 2,
    "creditDetail": "2 (1.5-1-4)",
    "category": "core",
    "what": "การเตรียมและติดตั้งระบบคอมพิวเตอร์และเซิร์ฟเวอร์ (System Deployment), การจัดการสภาพแวดล้อมด้วย Container (Docker), การตั้งค่า Web Server และขั้นตอนการนำแอปพลิเคชันขึ้นสู่สภาพแวดล้อมทดสอบ",
    "why": "เชื่อมต่อระหว่างการเขียนโค้ดกับการนำโปรแกรมขึ้นไปรันจริงบนเซิร์ฟเวอร์อย่างมีระเบียบและลดปัญหาเครื่องทำงานไม่เหมือนกัน"
  },
  "INT144": {
    "code": "INT144",
    "name": "Agile Software Development I",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "core",
    "what": "การพัฒนาซอฟต์แวร์ด้วยระเบียบวิธี Agile ในทางปฏิบัติ: การวางแผน Sprint, Daily Standup, Sprint Review, Retrospective, การประเมิน Story Points และการทำงานร่วมกันผ่าน Agile Board",
    "why": "ลงมือปฏิบัติการบริหารโปรเจกต์จริงตามกระบวนการแบบ Agile เพื่อเตรียมพร้อมสำหรับการทำโครงงานบูรณาการร่วมกับทีม"
  },
  "INT151": {
    "code": "INT151",
    "name": "Basic Frontend Development",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "การพัฒนาเว็บฝั่งไคลเอนต์ (Frontend) ระดับพื้นฐาน: Modern JavaScript (ES6+), DOM Manipulation, Event Handling, Asynchronous Programming (Promises, Async/Await) และการเชื่อมต่อ REST API ผ่าน Fetch",
    "why": "เปลี่ยนหน้าเว็บนิ่งๆ ให้กลายเป็นเว็บแอปพลิเคชันที่มีการโต้ตอบกับผู้ใช้งานและรับส่งข้อมูลกับเซิร์ฟเวอร์แบบเรียลไทม์"
  },
  "INT161": {
    "code": "INT161",
    "name": "Basic Backend Development",
    "credits": 3,
    "creditDetail": "3 (2-2-5)",
    "category": "core",
    "what": "การพัฒนาเว็บฝั่งเซิร์ฟเวอร์ (Backend) ระดับพื้นฐาน: สถาปัตยกรรม Client-Server, HTTP Methods, การสร้าง RESTful API, Routing, Middleware และการเชื่อมต่อไปยังฐานข้อมูลเพื่อทำ CRUD Operations",
    "why": "หัวใจหลักของการประมวลผลหลังบ้าน การจัดการ Business Logic และการปกป้องข้อมูลให้ปลอดภัยก่อนส่งให้ฝั่งหน้าบ้าน"
  },
  "INT182": {
    "code": "INT182",
    "name": "Data Science and Artificial Intelligence Fundamentals",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "core",
    "what": "พื้นฐานวิทยาการข้อมูลและปัญญาประดิษฐ์: ภาพรวม Data Science Lifecycle, การสำรวจและเตรียมข้อมูล, โมเดล Machine Learning เบื้องต้น (Supervised/Unsupervised) และจริยธรรมของ AI",
    "why": "เปิดมุมมองและทักษะแห่งอนาคต เพื่อให้นักศึกษาเข้าใจว่าระบบอัจฉริยะทำงานอย่างไร และนำไปประยุกต์ใช้ในการตัดสินใจและต่อยอดสายงานได้"
  },
  "INT191": {
    "code": "INT191",
    "name": "Relational Database Concepts and Design",
    "credits": 2,
    "creditDetail": "2 (1.5-1-3)",
    "category": "core",
    "what": "แนวคิดและการออกแบบฐานข้อมูลเชิงสัมพันธ์: การแปลงความต้องการเป็น Entity-Relationship Diagram (ERD), กฎ Normalization (1NF ถึง BCNF), และการสร้างตารางพร้อม Constraints บน DBMS จริง",
    "why": "โครงสร้างฐานข้อมูลที่ออกแบบมาดีตั้งแต่แรกจะช่วยลดความซ้ำซ้อนของข้อมูล และรองรับการขยายตัวของระบบได้อย่างยั่งยืน"
  },
  "INT504": {
    "code": "INT504",
    "name": "Integrated Project",
    "credits": 2,
    "creditDetail": "2 (0-4-4)",
    "category": "core",
    "what": "โครงงานบูรณาการ (Integrated Project): การรวมกลุ่มพัฒนาเว็บแอปพลิเคชันแบบครบวงจร (Full-Stack) โดยผสานความรู้จาก Frontend, Backend, Database, System Deployment และ Agile",
    "why": "ฝึกประสบการณ์การสร้างซอฟต์แวร์ที่ใช้งานได้จริงในชีวิตประจำวัน ผ่านการทำงานเป็นทีมเสมือนการทำงานในบริษัทจริง"
  },
  "LNG202": {
    "code": "LNG202",
    "name": "Basic Reading for Science and Technology",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "gened",
    "what": "การอ่านภาษาอังกฤษระดับพื้นฐานสำหรับวิทยาศาสตร์และเทคโนโลยี: การจับใจความคู่มือทางเทคนิค, เอกสาร API, และบทความวิจัยเชิงวิทยาศาสตร์",
    "why": "ช่วยให้อ่านและทำความเข้าใจ Technical Documentation และคู่มือเครื่องมือเทคโนโลยีใหม่ๆ ได้อย่างรวดเร็วและถูกต้อง"
  },
  "INT102": {
    "code": "INT102",
    "name": "Statistics for Information Technology",
    "credits": 2,
    "creditDetail": "2 (2-0-4)",
    "category": "core",
    "what": "สถิติสำหรับเทคโนโลยีสารสนเทศ: ความน่าจะเป็น ตัวแปรสุ่ม การแจกแจงความน่าจะเป็น การประมาณค่าพารามิเตอร์ และการทดสอบสมมติฐาน (Hypothesis Testing) เพื่อการวิเคราะห์ระบบ",
    "why": "เครื่องมือทางคณิตศาสตร์ในการทดสอบและวัดผล เช่น การทำ A/B Testing ของระบบเว็บ หรือการประเมินความแม่นยำของอัลกอริทึม"
  },
  "INT111": {
    "code": "INT111",
    "name": "Business Information Systems",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "core",
    "what": "ระบบสารสนเทศทางธุรกิจ: สถาปัตยกรรมระบบ ERP, CRM, Supply Chain Management, และการเชื่อมโยงระบบสารสนเทศเข้ากับเป้าหมายเชิงกลยุทธ์ขององค์กร",
    "why": "ช่วยให้เข้าใจว่าองค์กรธุรกิจขนาดใหญ่ขับเคลื่อนด้วยระบบสารสนเทศใดบ้าง และเราจะพัฒนาเทคโนโลยีเพื่อสนับสนุนธุรกิจได้อย่างไร"
  },
  "INT185": {
    "code": "INT185",
    "name": "Basic Data Visualization",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "การนำเสนอข้อมูลด้วยภาพขั้นพื้นฐาน: หลักการเลือกใช้แผนภูมิ, Visual Encoding, การออกแบบ Dashboard และการเล่าเรื่องผ่านข้อมูลให้เข้าใจง่าย",
    "why": "ข้อมูลที่มีค่าจะไร้ประโยชน์หากสื่อสารไม่เข้าใจ ทักษะการสร้าง Data Visualization ช่วยให้ผู้บริหารและทีมงานเห็นภาพและตัดสินใจได้ทันที"
  },
  "GEN231": {
    "code": "GEN231",
    "name": "Miracle of Thinking",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "gened",
    "what": "มหัศจรรย์แห่งความคิด (Miracle of Thinking): กระบวนการคิดเชิงบวก การคิดเชื่อมโยงอย่างเป็นระบบ และการมองปัญหาจากหลากหลายมุมมอง",
    "why": "วิชาศึกษาทั่วไปที่ช่วยพัฒนาวิธีคิดและเสริมสร้างทัศนคติที่ดีในการแก้ปัญหาและการทำงานร่วมกับผู้อื่น"
  },
  "LNG304": {
    "code": "LNG304",
    "name": "Meetings and Discussions",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "gened",
    "what": "การประชุมและการอภิปรายเป็นภาษาอังกฤษ: การแสดงความคิดเห็นเชิงสร้างสรรค์ การนำเสนอวาระการประชุม และการต่อรองในบริบทการทำงาน",
    "why": "เสริมทักษะการสื่อสารในการทำงานข้ามชาติและการประชุมร่วมกับทีมนานาชาติได้อย่างมั่นใจ"
  },
  "INT240": {
    "code": "INT240",
    "name": "Advanced Programming Concepts",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "แนวคิดการเขียนโปรแกรมขั้นสูง: Design Patterns, SOLID Principles, Memory Management, และการจัดการ Exception ในสถาปัตยกรรมระดับซอฟต์แวร์",
    "why": "ยกระดับการเขียนโค้ดจากระดับมือสมัครเล่นสู่ระดับวิศวกรซอฟต์แวร์มืออาชีพที่สามารถดูแลรักษาโค้ดขนาดใหญ่ได้"
  },
  "INT250": {
    "code": "INT250",
    "name": "CSS Framework",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "การใช้งาน CSS Framework สมัยใหม่ (เช่น Tailwind CSS, Bootstrap): การสร้างระบบ Design Tokens, Utility-First Workflow, และการสร้าง UI Components ที่ยืดหยุ่น",
    "why": "ช่วยให้สร้างหน้าตาเว็บแอปพลิเคชันที่สวยงาม มีมาตรฐาน Responsive และส่งต่องานระหว่างทีมออกแบบกับทีมพัฒนาได้อย่างรวดเร็ว"
  },
  "รายวิชาหมวด 2.2": {
    "code": "รายวิชาหมวด 2.2",
    "name": "(elective 2.2)",
    "credits": 3,
    "creditDetail": "3 (x-x-x)",
    "category": "elective",
    "what": "วิชาเลือกเฉพาะทางหมวด 2.2: รายวิชาในกลุ่มวิชาเชิงลึกทางเทคโนโลยีสารสนเทศที่นักศึกษาสามารถเลือกลงทะเบียนเพิ่มเติมตามสายอาชีพหรือความสนใจเฉพาะทาง (3 หน่วยกิต)",
    "why": "ช่วยเติมเต็มความรู้เชิงลึกในด้านที่นักศึกษาต้องการเสริมเป็นพิเศษ เพื่อเตรียมพร้อมสู่ตำแหน่งงานเป้าหมาย"
  },
  "INT105": {
    "code": "INT105",
    "name": "Information Technology Seminar",
    "credits": 1,
    "creditDetail": "1 (0-2-2)",
    "category": "core",
    "what": "สัมมนาทางเทคโนโลยีสารสนเทศ: การติดตามแนวโน้มเทคโนโลยีใหม่ล่าสุด, การวิเคราะห์ผลกระทบของเทคโนโลยีต่อสังคมและอุตสาหกรรม, และการนำเสนอหัวข้อเทคนิค",
    "why": "เปิดโลกทัศน์และอัปเดตเทรนด์เทคโนโลยีในโลกจริง พร้อมฝึกทักษะการวิเคราะห์และนำเสนออย่างมืออาชีพ"
  },
  "INT136": {
    "code": "INT136",
    "name": "Cyber Security",
    "credits": 2,
    "creditDetail": "2 (2-0-4)",
    "category": "core",
    "what": "ความมั่นคงปลอดภัยไซเบอร์: ภัยคุกคามทางไซเบอร์ขั้นสูง, ช่องโหว่ความปลอดภัยตามมาตรฐาน OWASP Top 10, การเข้ารหัสลับ, Network Security และมาตรการรักษาความปลอดภัยของระบบ",
    "why": "ปกป้องระบบและแอปพลิเคชันจากการโจมตี การรั่วไหลของข้อมูล และภัยคุกคามทางไซเบอร์ที่เกิดขึ้นตลอดเวลา"
  },
  "INT145": {
    "code": "INT145",
    "name": "Software Analysis and Design",
    "credits": 2,
    "creditDetail": "2 (2-0-4)",
    "category": "core",
    "what": "การวิเคราะห์และออกแบบซอฟต์แวร์: การวิเคราะห์ความต้องการเชิงระบบ, UML Diagrams (Use Case, Sequence, Class Diagram), Software Architecture และการออกแบบเชิงระบบ",
    "why": "วางโครงสร้างสถาปัตยกรรมซอฟต์แวร์ให้แข็งแรง รองรับการขยายตัว และเป็นพิมพ์เขียวที่ชัดเจนก่อนลงมือโค้ดจริง"
  },
  "GEN111": {
    "code": "GEN111",
    "name": "Man and Ethics of Living",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "gened",
    "what": "คนและจริยธรรมในการดำเนินชีวิต (Man and Ethics of Living): ปรัชญาการดำเนินชีวิต จริยธรรมในวิชาชีพ ความรับผิดชอบต่อตนเอง สังคม และสิ่งแวดล้อม",
    "why": "วิชาศึกษาทั่วไปที่สร้างรากฐานทางคุณธรรม จริยธรรมวิชาชีพ และจิตสำนึกที่ดีในการเป็นพลเมืองของสังคม"
  },
  "LNG308": {
    "code": "LNG308",
    "name": "Technical Report Writing",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "gened",
    "what": "การเขียนรายงานทางเทคนิค: รูปแบบการเขียนรายงานโครงงานวิจัย, คู่มือการใช้งานระบบ, Technical Specifications และการอ้างอิงเอกสารวิชาการเป็นภาษาอังกฤษ",
    "why": "เตรียมความพร้อมสำหรับเอกสารเล่มโครงงาน Capstone Project และการเขียนเอกสารงานในบริษัทระดับสากล"
  },
  "XXX xxx": {
    "code": "XXX xxx",
    "name": "Free Elective II",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "gened",
    "what": "วิชาเลือกเสรี (Free Elective I & II): รายวิชาที่นักศึกษาสามารถเลือกลงทะเบียนได้ตามความสนใจจากทุกสาขาวิชาในมหาวิทยาลัย (3 หน่วยกิต)",
    "why": "เปิดโอกาสให้ผู้เรียนได้เพิ่มพูนความรู้นอกสาขา เช่น การเงิน ภาษาที่สาม หรือทักษะอื่นๆ ตามความสนใจส่วนบุคคล"
  },
  "INT251": {
    "code": "INT251",
    "name": "Frontend Development Framework",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "เฟรมเวิร์กการพัฒนาเว็บฝั่งหน้าบ้าน: สถาปัตยกรรม Component-based (เช่น React หรือ Vue), State Management, Client-Side Routing, Component Lifecycle และการจัดการ Forms",
    "why": "ทักษะหลักที่ตลาดงานต้องการสูงสุดสำหรับตำแหน่ง Frontend Engineer ในการสร้างเว็บแอปพลิเคชันระดับ Production"
  },
  "INT116": {
    "code": "INT116",
    "name": "Legal and Ethical Issues in Information Technology",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "core",
    "what": "ประเด็นด้านกฎหมายและจริยธรรมในเทคโนโลยีสารสนเทศ: พ.ร.บ. ว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์, กฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA/GDPR), ลิขสิทธิ์ซอฟต์แวร์ และธรรมาภิบาล AI",
    "why": "ทำให้นักศึกษาสร้างและดูแลระบบไอทีที่ถูกต้องตามกฎหมาย ป้องกันปัญหาการละเมิดสิทธิ์ และมีความรับผิดชอบต่อสังคม"
  },
  "INT146": {
    "code": "INT146",
    "name": "Software Testing",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "core",
    "what": "การทดสอบซอฟต์แวร์ (Software Testing): ประเภทการทดสอบ (Unit, Integration, E2E Testing), การเขียน Test Cases, Test Automation, การวิเคราะห์ครอบคลุมโค้ด (Code Coverage) และการประกันคุณภาพ (QA)",
    "why": "รับประกันว่าซอฟต์แวร์ที่ส่งมอบทำงานได้อย่างถูกต้อง ไม่มีข้อผิดพลาดร้ายแรง และสร้างความเชื่อมั่นให้กับผู้ใช้งาน"
  },
  "INT189": {
    "code": "INT189",
    "name": "Data Governance",
    "credits": 1,
    "creditDetail": "1 (1-0-2)",
    "category": "core",
    "what": "ธรรมาภิบาลข้อมูล (Data Governance): กรอบการกำกับดูแลข้อมูล, วงจรชีวิตของข้อมูล (Data Lifecycle), การจัดการคุณภาพข้อมูล (Data Quality), Data Lineage และการกำหนดนโยบายความปลอดภัยของข้อมูล",
    "why": "องค์กรที่มีข้อมูลมหาศาลต้องมีธรรมาภิบาล เพื่อให้ข้อมูลมีความถูกต้อง น่าเชื่อถือ และใช้งานได้อย่างสอดคล้องกับข้อกำหนด"
  },
  "INT505/INT507": {
    "code": "INT505/INT507",
    "name": "Capstone Project I หรือ Research Project I",
    "credits": 1,
    "creditDetail": "1 (0-2-2)",
    "category": "core",
    "what": "โครงงานเทคโนโลยีสารสนเทศ 1 (Capstone Project I) หรือ โครงงานวิจัย 1 (Research Project I): การกำหนดหัวข้อปัญหา, การศึกษาความเป็นไปได้, การออกแบบสถาปัตยกรรม และการพัฒนาต้นแบบระบบระยะที่ 1",
    "why": "การบูรณาการความรู้ทั้งหมดที่เรียนมาเพื่อแก้ปัญหาจริงในอุตสาหกรรมหรือทำงานวิจัย โดยมีอาจารย์ที่ปรึกษาดูแลอย่างใกล้ชิด"
  },
  "GEN351": {
    "code": "GEN351",
    "name": "Modern Management and Leadership",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "gened",
    "what": "การจัดการสมัยใหม่และภาวะผู้นำ (Modern Management and Leadership): ทักษะความเป็นผู้นำ, การบริหารคน, การจัดการเวลา, การเจรจาต่อรอง และการทำงานในสภาวะที่มีการเปลี่ยนแปลงรวดเร็ว",
    "why": "เตรียมความพร้อมสู่การเป็นผู้นำทีมและผู้จัดการที่มีประสิทธิภาพในโลกการทำงานยุคใหม่"
  },
  "LNG320": {
    "code": "LNG320",
    "name": "Content-Based Language Learning",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "gened",
    "what": "การเรียนรู้ภาษาอังกฤษผ่านเนื้อหาเฉพาะทาง: การฟังและอภิปรายประเด็นเทคโนโลยี การอ่านบทความเฉพาะสายงาน และการสื่อสารอย่างคล่องแคล่ว",
    "why": "ยกระดับความสามารถทางภาษาอังกฤษให้พร้อมสำหรับการทำงานในบริษัทระดับนานาชาติ"
  },
  "INT241": {
    "code": "INT241",
    "name": "Data Structures and Algorithms",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "โครงสร้างข้อมูลและขั้นตอนวิธี (Data Structures and Algorithms): List, Stack, Queue, Tree, Binary Search Tree, Heap, Graph, Hash Table, Sorting & Searching, และการวิเคราะห์ Big-O Notation",
    "why": "วิชาแกนสำคัญที่สุดในการเขียนโปรแกรมให้ทำงานรวดเร็วและใช้หน่วยความจำอย่างคุ้มค่า รวมถึงเป็นวิชาหลักที่ใช้สัมภาษณ์งานสายเทคทั่วโลก"
  },
  "INT115": {
    "code": "INT115",
    "name": "Information Technology Professional Practices",
    "credits": 2,
    "creditDetail": "2 (2-0-4)",
    "category": "core",
    "what": "การปฏิบัติวิชาชีพเทคโนโลยีสารสนเทศ: การเตรียมความพร้อมสู่การทำงาน, การเขียนเรซูเม่และพอร์ตโฟลิโอ, การซ้อมสัมภาษณ์งาน, จรรยาบรรณวิชาชีพ และการวางแผนเส้นทางอาชีพ",
    "why": "สะพานเชื่อมจากรั้วมหาวิทยาลัยสู่โลกการทำงานจริงอย่างมั่นใจและเป็นมืออาชีพ"
  },
  "INT147": {
    "code": "INT147",
    "name": "Agile Software Development II",
    "credits": 2,
    "creditDetail": "2 (2-0-4)",
    "category": "core",
    "what": "การพัฒนาซอฟต์แวร์แบบแอกจิล 2 (Agile Software Development II): เทคนิคการบริหารโครงการขั้นสูง, Continuous Integration / Continuous Deployment (CI/CD), และการส่งมอบซอฟต์แวร์ระดับองค์กร",
    "why": "เชื่อมโยงการพัฒนาซอฟต์แวร์เข้ากับการส่งมอบที่มีเสถียรภาพ รวดเร็ว และเป็นอัตโนมัติ"
  },
  "INT506/INT508": {
    "code": "INT506/INT508",
    "name": "Capstone Project II หรือ Research Project II",
    "credits": 5,
    "creditDetail": "5 (0-10-10)",
    "category": "core",
    "what": "โครงงานเทคโนโลยีสารสนเทศ 2 (Capstone Project II) หรือ โครงงานวิจัย 2 (Research Project II): การพัฒนาระบบระยะสมบูรณ์, การทดสอบระบบกับผู้ใช้งานจริง, การวัดผล และการนำเสนอผลงานต่อคณะกรรมการ",
    "why": "ผลงานชิ้นเอก (Masterpiece Portfolio) ที่สะท้อนองค์ความรู้และทักษะทั้งหมดตลอด 4 ปี พร้อมนำไปใช้สมัครงานในบริษัทชั้นนำ"
  },
  "GEN241": {
    "code": "GEN241",
    "name": "Beauty of Life",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "gened",
    "what": "ความงดงามแห่งชีวิต (Beauty of Life): สุนทรียศาสตร์ ดนตรี ศิลปะ ธรรมชาติ และการสร้างสมดุลระหว่างการทำงานและการใช้ชีวิตอย่างมีความสุข",
    "why": "วิชาศึกษาทั่วไปที่ช่วยเติมเต็มความคิดสร้างสรรค์ สุขภาพจิต และการสร้างสมดุลในชีวิตระหว่างการเรียนและการทำงานสายเทคโนโลยี"
  },
  "LNG332": {
    "code": "LNG332",
    "name": "Business English",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "gened",
    "what": "ภาษาอังกฤษธุรกิจ (Business English): การสื่อสารทางธุรกิจขั้นสูง, การเจรจาต่อรอง, การนำเสนอแนวคิดทางธุรกิจ และการเขียนเอกสารทางการ",
    "why": "ทักษะภาษาอังกฤษเพื่อความก้าวหน้าในสายอาชีพและการทำงานในองค์กรชั้นนำหรือบริษัทข้ามชาติ"
  },
  "INT509": {
    "code": "INT509",
    "name": "Experiential Learning",
    "credits": 6,
    "creditDetail": "6 (0-32-5)",
    "category": "core",
    "what": "การเรียนรู้ผ่านประสบการณ์การทำงาน (Experiential Learning): การฝึกงานหรือสหกิจศึกษาในสถานประกอบการจริงเต็มเวลาตลอดภาคการศึกษา (6 หน่วยกิต)",
    "why": "สะสมประสบการณ์การทำงานจริงร่วมกับทีมวิศวกรในองค์กรชั้นนำ เป็นโอกาสสำคัญในการสร้างเครือข่ายและรับข้อเสนองาน (Job Offer) ทันทีหลังเรียนจบ"
  },
  "INT242": {
    "code": "INT242",
    "name": "Java Programming",
    "credits": 3,
    "creditDetail": "3 (2-2-5)",
    "category": "core",
    "what": "การเขียนโปรแกรมด้วยภาษา Java: การเขียนโปรแกรมเชิงวัตถุ (OOP), Java Collections Framework, Generics, Stream API, และการจัดการ Multithreading",
    "why": "Java เป็นภาษาหลักของระบบระดับองค์กร (Enterprise Backend) และแอปพลิเคชันขนาดใหญ่ของธนาคารและองค์กรชั้นนำทั่วโลก"
  },
  "INT261": {
    "code": "INT261",
    "name": "Backend Development Framework",
    "credits": 3,
    "creditDetail": "3 (2-2-5)",
    "category": "core",
    "what": "เฟรมเวิร์กการพัฒนาเว็บฝั่งหลังบ้าน: การสร้าง Enterprise Web Services (เช่น Spring Boot หรือ NestJS/Express), ORM, Dependency Injection, Middleware, และการทำ Authentication/Authorization",
    "why": "หัวใจสำคัญของการสร้าง Backend API ที่มีโครงสร้างแข็งแกร่ง ปลอดภัย และดูแลรักษาได้ในระยะยาว"
  },
  "INT243": {
    "code": "INT243",
    "name": "Python Programming",
    "credits": 3,
    "creditDetail": "3 (2-2-5)",
    "category": "core",
    "what": "การเขียนโปรแกรมด้วยภาษา Python: โครงสร้างข้อมูลขั้นสูง, การประมวลผลข้อมูลด้วย NumPy และ Pandas, การสร้างสคริปต์อัตโนมัติ และการเชื่อมต่อโมเดล Machine Learning",
    "why": "Python คือภาษาอันดับ 1 ของสายงาน Data Science, Data Analysis และ AI ทั่วโลก"
  },
  "INT270": {
    "code": "INT270",
    "name": "Mathematics for Artificial Intelligence",
    "credits": 3,
    "creditDetail": "3 (3-0-6)",
    "category": "core",
    "what": "คณิตศาสตร์สำหรับปัญญาประดิษฐ์: พีชคณิตเชิงเส้น (Linear Algebra: Matrices, Vectors, Eigenvalues), แคลคูลัสหลายตัวแปร และการหาค่าเหมาะที่สุด (Optimization/Gradient Descent)",
    "why": "กลไกคณิตศาสตร์เบื้องหลังการฝึกฝนโมเดล AI และ Deep Learning ที่จำเป็นต่อการวิเคราะห์และปรับแต่งโมเดลอย่างมีหลักการ"
  },
  "INT271": {
    "code": "INT271",
    "name": "Machine Learning",
    "credits": 3,
    "creditDetail": "3 (2-2-5)",
    "category": "core",
    "what": "การเรียนรู้ของเครื่อง (Machine Learning): ทฤษฎีและอัลกอริทึม Supervised Learning (Regression, Classification) และ Unsupervised Learning (Clustering), Feature Engineering และการวัดผลโมเดล",
    "why": "สร้างโมเดลที่สามารถเรียนรู้จากข้อมูลเพื่อทำนายผลลัพธ์หรือจัดกลุ่มข้อมูลได้อย่างแม่นยำ"
  },
  "INT272": {
    "code": "INT272",
    "name": "Artificial Neural Networks and Deep Learning",
    "credits": 2,
    "creditDetail": "2 (1.5-1-3)",
    "category": "core",
    "what": "โครงข่ายประสาทเทียมและการเรียนรู้เชิงลึก: สถาปัตยกรรม Neural Networks, Backpropagation, CNN สำหรับภาพ, RNN/LSTM สำหรับข้อความ และพื้นฐาน Transformer",
    "why": "ก้าวเข้าสู่การสร้างโมเดล AI ขั้นสูงที่มีความสามารถในการมองเห็นและเข้าใจข้อมูลซับซ้อน"
  },
  "INT273": {
    "code": "INT273",
    "name": "Generative Deep Learning",
    "credits": 1,
    "creditDetail": "1 (0.75-0.5-2)",
    "category": "core",
    "what": "การเรียนรู้เชิงลึกแบบรู้สร้าง (Generative Deep Learning): สถาปัตยกรรม GANs, VAEs, Diffusion Models และการประยุกต์ใช้ Large Language Models (LLMs) และ AI Agents",
    "why": "เทคโนโลยีเปลี่ยนโลกยุค Generative AI เรียนรู้วิธีการสร้างและต่อยอดโมเดลปัญญาประดิษฐ์ที่สามารถสังเคราะห์สิ่งใหม่ได้"
  },
  "INT370/INT371": {
    "code": "INT370/INT371",
    "name": "INT47x Applied Natural Language Processing หรือ Applied Computer Vision หรือ Special Topic in Artificial Intelligence",
    "credits": 3,
    "creditDetail": "3 (2-2-5)",
    "category": "core",
    "what": "วิชาเลือกเชิงลึกด้าน AI: การประมวลผลภาษาธรรมชาติประยุกต์ (Applied NLP), คอมพิวเตอร์วิทัศน์ประยุกต์ (Applied Computer Vision) หรือ หัวข้อพิเศษทางปัญญาประดิษฐ์",
    "why": "เจาะลึกการสร้างโมเดล AI เพื่อเข้าใจข้อความหรือรูปภาพในโจทย์การทำงานจริงของอุตสาหกรรม"
  },
  "INT282": {
    "code": "INT282",
    "name": "Statistics for Data Science",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "สถิติสำหรับวิทยาการข้อมูล: สถิติเชิงอนุมานขั้นสูง, การแจกแจงแบบต่อเนื่อง, การถดถอยพหุคูณ (Multiple Regression), และการทดสอบสมมติฐานทางวิทยาศาสตร์ข้อมูล",
    "why": "เป็นพื้นฐานในการแยกแยะข้อเท็จจริงออกจากความบังเอิญในข้อมูล และเป็นหัวใจในการสร้างโมเดลพยากรณ์ที่เชื่อถือได้"
  },
  "INT285": {
    "code": "INT285",
    "name": "Advanced Data Visualization",
    "credits": 2,
    "creditDetail": "2 (1-2-3)",
    "category": "core",
    "what": "การนำเสนอข้อมูลด้วยภาพขั้นสูง (Advanced Data Visualization): การสร้าง Interactive Visualizations ด้วย D3.js หรือ Tableau, การสร้าง Visual Analytics และการสื่อสารข้อมูลเชิงลึกทางธุรกิจ",
    "why": "เปลี่ยนข้อมูลขนาดใหญ่ที่ซับซ้อนให้กลายเป็นการแสดงผลเชิงโต้ตอบที่ค้นหา Insight ใหม่ๆ ได้อย่างทรงพลัง"
  },
  "INT297": {
    "code": "INT297",
    "name": "NoSQL Database",
    "credits": 2,
    "creditDetail": "2 (1-2-3)",
    "category": "core",
    "what": "ฐานข้อมูลแบบไม่สัมพันธ์ (NoSQL Database): Document Store (MongoDB), Key-Value (Redis), Column-Family (Cassandra), Graph Database (Neo4j) และสถาปัตยกรรม Polyglot Persistence",
    "why": "ระบบยุคใหม่ไม่ได้มีแค่ตาราง SQL วิชานี้ช่วยให้เลือกใช้ฐานข้อมูลที่เหมาะกับรูปแบบข้อมูลและความต้องการด้านสเกลได้อย่างแม่นยำ"
  },
  "INT290": {
    "code": "INT290",
    "name": "Advanced SQL",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "การเขียนภาษา SQL ขั้นสูง: Window Functions, Common Table Expressions (CTEs), Recursive Queries, Subqueries ซับซ้อน และการอ่าน Execution Plan เพื่อปรับแต่งประสิทธิภาพ",
    "why": "ทักษะสำคัญของสาย Data Engineer และ Database Administrator ในการสืบค้นและจัดการชุดข้อมูลขนาดใหญ่ได้อย่างรวดเร็ว"
  },
  "INT291": {
    "code": "INT291",
    "name": "Physical Database Concepts and Design",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "แนวคิดและการออกแบบฐานข้อมูลระดับกายภาพ: กลไก Storage Engine, การทำ Indexing (B-Tree, Hash), การจัดเก็บข้อมูลบนดิสก์ และเทคนิค Partitioning/Sharding",
    "why": "เข้าใจการทำงานของ DBMS ลึกถึงระดับระบบไฟล์และฮาร์ดแวร์ เพื่อออกแบบฐานข้อมูลที่รองรับข้อมูลระดับล้านเรคคอร์ดได้อย่างลื่นไหล"
  },
  "INT292": {
    "code": "INT292",
    "name": "Query Processing Concepts",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "แนวคิดการประมวลผลคิวรี: กลไก Query Optimizer, การคำนวณ Cost-based Estimation, และการปรับแต่งสถาปัตยกรรมการดึงข้อมูล",
    "why": "ช่วยให้แก้ปัญหาคิวรีที่ทำงานช้าและปรับแต่งฐานข้อมูลให้ตอบสนองผู้ใช้งานได้เร็วที่สุด"
  },
  "INT293": {
    "code": "INT293",
    "name": "Transaction Processing",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "การประมวลผลทรานแซกชัน: คุณสมบัติ ACID (Atomicity, Consistency, Isolation, Durability), การจัดการ Concurrency Control, Deadlock Detection และการกู้คืนระบบ (Recovery)",
    "why": "หัวใจหลักของระบบการเงินและธุรกรรมที่มีผู้ใช้หลายคนเข้าถึงพร้อมกัน รับประกันว่าข้อมูลจะไม่มีวันสูญหายหรือผิดพลาด"
  },
  "INT294": {
    "code": "INT294",
    "name": "Data Warehouse and OLAP",
    "credits": 2,
    "creditDetail": "2 (1-2-3)",
    "category": "core",
    "what": "คลังข้อมูลและการประมวลผลวิเคราะห์ออนไลน์: Dimensional Modeling (Star / Snowflake Schema), การสร้าง Data Pipelines (ETL/ELT), และสถาปัตยกรรม Data Warehouse",
    "why": "รวบรวมข้อมูลจากทั้งองค์กรมาจัดเก็บในโครงสร้างที่เอื้อต่อการวิเคราะห์และทำรายงานเชิงกลยุทธ์ได้อย่างรวดเร็ว"
  },
  "INT295": {
    "code": "INT295",
    "name": "Database Authentication and Authorization",
    "credits": 1,
    "creditDetail": "1 (0.5-1-2)",
    "category": "core",
    "what": "การยืนยันตัวตนและการกำหนดสิทธิ์ในระบบฐานข้อมูล: Database Security, Role-Based Access Control (RBAC), Data Masking, Audit Logs และการป้องกัน SQL Injection",
    "why": "รักษาความปลอดภัยของข้อมูลองค์กร กำหนดให้ผู้ใช้และบริการต่างๆ เข้าถึงเฉพาะข้อมูลที่ได้รับอนุญาตเท่านั้น"
  },
  "INT296": {
    "code": "INT296",
    "name": "Big Data Architecture",
    "credits": 2,
    "creditDetail": "2 (2-0-4)",
    "category": "core",
    "what": "สถาปัตยกรรมข้อมูลขนาดใหญ่ (Big Data Architecture): สถาปัตยกรรมแบบกระจายตัว, Hadoop Ecosystem, Apache Spark สำหรับ Batch Processing, และระบบ Real-time Streaming",
    "why": "โครงสร้างพื้นฐานสำหรับประมวลผลข้อมูลปริมาณมหาศาลระดับ Terabytes/Petabytes ที่เกิดขึ้นอย่างรวดเร็วในองค์กรยุคใหม่"
  },
  "INT220": {
    "code": "INT220",
    "name": "UX Design",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "การออกแบบประสบการณ์ผู้ใช้ (UX Design): กระบวนการ User Research, In-depth Interview, การสร้าง Persona, Customer Journey Map, Information Architecture และ Wireframe Flow",
    "why": "เข้าใจพฤติกรรม ปัญหา และความต้องการที่แท้จริงของผู้ใช้ เพื่อออกแบบแนวทางแก้ไขปัญหาที่ตรงใจและใช้งานได้จริง"
  },
  "INT221": {
    "code": "INT221",
    "name": "UI Design",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "การออกแบบส่วนต่อประสาน (UI Design): ทฤษฎีสี, Typography, Visual Hierarchy, Design Systems, Auto Layout, Micro-interactions และการส่งต่องานให้นักพัฒนา (Design Handoff)",
    "why": "สร้างหน้าจอที่สวยงาม ดึงดูดสายตา มีเอกลักษณ์ของแบรนด์ และรองรับการเข้าถึงของผู้ใช้ทุกกลุ่ม"
  },
  "INT222": {
    "code": "INT222",
    "name": "UX/UI Measurement and Analysis",
    "credits": 3,
    "creditDetail": "3 (2.5-1-6)",
    "category": "core",
    "what": "การวัดผลและการวิเคราะห์ประสบการณ์ผู้ใช้ (UX/UI Measurement and Analysis): การทดสอบการใช้งาน (Usability Testing), การวิเคราะห์เมตริก (SUS, Task Success Rate, Time on Task) และการปรับปรุงจากพฤติกรรมจริง",
    "why": "พิสูจน์คุณภาพของการออกแบบด้วยข้อมูลและพฤติกรรมจริงของผู้ใช้งาน ช่วยให้ยกระดับผลิตภัณฑ์ได้อย่างมีหลักฐานอ้างอิง"
  }
};

window.ITHeroData.TRACK_PLANS = {
  "frontend": {
    "1-1": [
      "INT100",
      "INT101",
      "INT110",
      "INT120",
      "INT130",
      "INT140",
      "INT143",
      "INT180",
      "GEN121"
    ],
    "1-2": [
      "INT131",
      "INT132",
      "INT133",
      "INT135",
      "INT141",
      "INT142",
      "INT150",
      "INT190",
      "LNG220"
    ],
    "2-1": [
      "INT134",
      "INT144",
      "INT151",
      "INT161",
      "INT182",
      "INT191",
      "INT504",
      "LNG202"
    ],
    "2-2": [
      "INT102",
      "INT111",
      "INT185",
      "GEN231",
      "LNG304",
      "INT240",
      "INT250",
      "รายวิชาหมวด 2.2"
    ],
    "3-1": [
      "INT105",
      "INT136",
      "INT145",
      "GEN111",
      "LNG308",
      "XXX xxx",
      "INT251",
      "รายวิชาหมวด 2.2"
    ],
    "3-2": [
      "INT116",
      "INT146",
      "INT189",
      "INT505/INT507",
      "GEN351",
      "LNG320",
      "XXX xxx",
      "INT241",
      "รายวิชาหมวด 2.2"
    ],
    "4-1": [
      "INT115",
      "INT147",
      "INT506/INT508",
      "GEN241",
      "LNG332"
    ],
    "4-2": [
      "INT509"
    ]
  },
  "backend": {
    "1-1": [
      "INT100",
      "INT101",
      "INT110",
      "INT120",
      "INT130",
      "INT140",
      "INT143",
      "INT180",
      "GEN121"
    ],
    "1-2": [
      "INT131",
      "INT132",
      "INT133",
      "INT135",
      "INT141",
      "INT142",
      "INT150",
      "INT190",
      "LNG220"
    ],
    "2-1": [
      "INT134",
      "INT144",
      "INT151",
      "INT161",
      "INT182",
      "INT191",
      "INT504",
      "LNG202"
    ],
    "2-2": [
      "INT102",
      "INT111",
      "INT185",
      "GEN231",
      "LNG304",
      "INT240",
      "INT242",
      "รายวิชาหมวด 2.2"
    ],
    "3-1": [
      "INT105",
      "INT136",
      "INT145",
      "GEN111",
      "LNG308",
      "XXX xxx",
      "INT261",
      "รายวิชาหมวด 2.2"
    ],
    "3-2": [
      "INT116",
      "INT146",
      "INT189",
      "INT505/INT507",
      "GEN351",
      "LNG320",
      "XXX xxx",
      "INT241",
      "รายวิชาหมวด 2.2"
    ],
    "4-1": [
      "INT115",
      "INT147",
      "INT506/INT508",
      "GEN241",
      "LNG332"
    ],
    "4-2": [
      "INT509"
    ]
  },
  "fullstack": {
    "1-1": [
      "INT100",
      "INT101",
      "INT110",
      "INT120",
      "INT130",
      "INT140",
      "INT143",
      "INT180",
      "GEN121"
    ],
    "1-2": [
      "INT131",
      "INT132",
      "INT133",
      "INT135",
      "INT141",
      "INT142",
      "INT150",
      "INT190",
      "LNG220"
    ],
    "2-1": [
      "INT134",
      "INT144",
      "INT151",
      "INT161",
      "INT182",
      "INT191",
      "INT504",
      "LNG202"
    ],
    "2-2": [
      "INT102",
      "INT111",
      "INT185",
      "GEN231",
      "LNG304",
      "INT240",
      "INT242",
      "INT250"
    ],
    "3-1": [
      "INT105",
      "INT136",
      "INT145",
      "GEN111",
      "LNG308",
      "XXX xxx",
      "INT251",
      "INT261"
    ],
    "3-2": [
      "INT116",
      "INT146",
      "INT189",
      "INT505/INT507",
      "GEN351",
      "LNG320",
      "XXX xxx",
      "INT241",
      "รายวิชาหมวด 2.2"
    ],
    "4-1": [
      "INT115",
      "INT147",
      "INT506/INT508",
      "GEN241",
      "LNG332"
    ],
    "4-2": [
      "INT509"
    ]
  },
  "ai": {
    "1-1": [
      "INT100",
      "INT101",
      "INT110",
      "INT120",
      "INT130",
      "INT140",
      "INT143",
      "INT180",
      "GEN121"
    ],
    "1-2": [
      "INT131",
      "INT132",
      "INT133",
      "INT135",
      "INT141",
      "INT142",
      "INT150",
      "INT190",
      "LNG220"
    ],
    "2-1": [
      "INT134",
      "INT144",
      "INT151",
      "INT161",
      "INT182",
      "INT191",
      "INT504",
      "LNG202"
    ],
    "2-2": [
      "INT102",
      "INT111",
      "INT185",
      "GEN231",
      "LNG304",
      "INT243",
      "INT270"
    ],
    "3-1": [
      "INT105",
      "INT136",
      "INT145",
      "GEN111",
      "LNG308",
      "XXX xxx",
      "INT271",
      "INT272",
      "INT273"
    ],
    "3-2": [
      "INT116",
      "INT146",
      "INT189",
      "INT505/INT507",
      "GEN351",
      "LNG320",
      "XXX xxx",
      "INT241",
      "INT370/INT371"
    ],
    "4-1": [
      "INT115",
      "INT147",
      "INT506/INT508",
      "GEN241",
      "LNG332"
    ],
    "4-2": [
      "INT509"
    ]
  },
  "ds": {
    "1-1": [
      "INT100",
      "INT101",
      "INT110",
      "INT120",
      "INT130",
      "INT140",
      "INT143",
      "INT180",
      "GEN121"
    ],
    "1-2": [
      "INT131",
      "INT132",
      "INT133",
      "INT135",
      "INT141",
      "INT142",
      "INT150",
      "INT190",
      "LNG220"
    ],
    "2-1": [
      "INT134",
      "INT144",
      "INT151",
      "INT161",
      "INT182",
      "INT191",
      "INT504",
      "LNG202"
    ],
    "2-2": [
      "INT102",
      "INT111",
      "INT185",
      "GEN231",
      "LNG304",
      "INT243",
      "INT270",
      "INT282"
    ],
    "3-1": [
      "INT105",
      "INT136",
      "INT145",
      "GEN111",
      "LNG308",
      "XXX xxx",
      "INT271",
      "INT272",
      "รายวิชาหมวด 2.2"
    ],
    "3-2": [
      "INT116",
      "INT146",
      "INT189",
      "INT505/INT507",
      "GEN351",
      "LNG320",
      "XXX xxx",
      "INT285",
      "INT297"
    ],
    "4-1": [
      "INT115",
      "INT147",
      "INT506/INT508",
      "GEN241",
      "LNG332"
    ],
    "4-2": [
      "INT509"
    ]
  },
  "da": {
    "1-1": [
      "INT100",
      "INT101",
      "INT110",
      "INT120",
      "INT130",
      "INT140",
      "INT143",
      "INT180",
      "GEN121"
    ],
    "1-2": [
      "INT131",
      "INT132",
      "INT133",
      "INT135",
      "INT141",
      "INT142",
      "INT150",
      "INT190",
      "LNG220"
    ],
    "2-1": [
      "INT134",
      "INT144",
      "INT151",
      "INT161",
      "INT182",
      "INT191",
      "INT504",
      "LNG202"
    ],
    "2-2": [
      "INT102",
      "INT111",
      "INT185",
      "GEN231",
      "LNG304",
      "INT243",
      "INT270",
      "INT282"
    ],
    "3-1": [
      "INT105",
      "INT136",
      "INT145",
      "GEN111",
      "LNG308",
      "XXX xxx",
      "INT271",
      "INT272",
      "รายวิชาหมวด 2.2"
    ],
    "3-2": [
      "INT116",
      "INT146",
      "INT189",
      "INT505/INT507",
      "GEN351",
      "LNG320",
      "XXX xxx",
      "INT285"
    ],
    "4-1": [
      "INT115",
      "INT147",
      "INT506/INT508",
      "GEN241",
      "LNG332"
    ],
    "4-2": [
      "INT509"
    ]
  },
  "de": {
    "1-1": [
      "INT100",
      "INT101",
      "INT110",
      "INT120",
      "INT130",
      "INT140",
      "INT143",
      "INT180",
      "GEN121"
    ],
    "1-2": [
      "INT131",
      "INT132",
      "INT133",
      "INT135",
      "INT141",
      "INT142",
      "INT150",
      "INT190",
      "LNG220"
    ],
    "2-1": [
      "INT134",
      "INT144",
      "INT151",
      "INT161",
      "INT182",
      "INT191",
      "INT504",
      "LNG202"
    ],
    "2-2": [
      "INT102",
      "INT111",
      "INT185",
      "GEN231",
      "LNG304",
      "INT290",
      "INT291",
      "INT292",
      "รายวิชาหมวด 2.2"
    ],
    "3-1": [
      "INT105",
      "INT136",
      "INT145",
      "GEN111",
      "LNG308",
      "XXX xxx",
      "INT293",
      "INT294",
      "INT295",
      "รายวิชาหมวด 2.2"
    ],
    "3-2": [
      "INT116",
      "INT146",
      "INT189",
      "INT505/INT507",
      "GEN351",
      "LNG320",
      "XXX xxx",
      "INT296",
      "INT297"
    ],
    "4-1": [
      "INT115",
      "INT147",
      "INT506/INT508",
      "GEN241",
      "LNG332"
    ],
    "4-2": [
      "INT509"
    ]
  },
  "dba": {
    "1-1": [
      "INT100",
      "INT101",
      "INT110",
      "INT120",
      "INT130",
      "INT140",
      "INT143",
      "INT180",
      "GEN121"
    ],
    "1-2": [
      "INT131",
      "INT132",
      "INT133",
      "INT135",
      "INT141",
      "INT142",
      "INT150",
      "INT190",
      "LNG220"
    ],
    "2-1": [
      "INT134",
      "INT144",
      "INT151",
      "INT161",
      "INT182",
      "INT191",
      "INT504",
      "LNG202"
    ],
    "2-2": [
      "INT102",
      "INT111",
      "INT185",
      "GEN231",
      "LNG304",
      "INT290",
      "INT291",
      "INT292",
      "รายวิชาหมวด 2.2"
    ],
    "3-1": [
      "INT105",
      "INT136",
      "INT145",
      "GEN111",
      "LNG308",
      "XXX xxx",
      "INT293",
      "INT294",
      "INT295",
      "รายวิชาหมวด 2.2"
    ],
    "3-2": [
      "INT116",
      "INT146",
      "INT189",
      "INT505/INT507",
      "GEN351",
      "LNG320",
      "XXX xxx"
    ],
    "4-1": [
      "INT115",
      "INT147",
      "INT506/INT508",
      "GEN241",
      "LNG332"
    ],
    "4-2": [
      "INT509"
    ]
  },
  "ux": {
    "1-1": [
      "INT100",
      "INT101",
      "INT110",
      "INT120",
      "INT130",
      "INT140",
      "INT143",
      "INT180",
      "GEN121"
    ],
    "1-2": [
      "INT131",
      "INT132",
      "INT133",
      "INT135",
      "INT141",
      "INT142",
      "INT150",
      "INT190",
      "LNG220"
    ],
    "2-1": [
      "INT134",
      "INT144",
      "INT151",
      "INT161",
      "INT182",
      "INT191",
      "INT504",
      "LNG202"
    ],
    "2-2": [
      "INT102",
      "INT111",
      "INT185",
      "GEN231",
      "LNG304",
      "INT220"
    ],
    "3-1": [
      "INT105",
      "INT136",
      "INT145",
      "GEN111",
      "LNG308",
      "XXX xxx",
      "INT221",
      "รายวิชาหมวด 2.2"
    ],
    "3-2": [
      "INT116",
      "INT146",
      "INT189",
      "INT505/INT507",
      "GEN351",
      "LNG320",
      "XXX xxx",
      "INT222",
      "รายวิชาหมวด 2.2"
    ],
    "4-1": [
      "INT115",
      "INT147",
      "INT506/INT508",
      "GEN241",
      "LNG332"
    ],
    "4-2": [
      "INT509"
    ]
  }
};

window.ITHeroData.COMMON_PLANS = {
  "1-1": [
    "INT100",
    "INT101",
    "INT110",
    "INT120",
    "INT130",
    "INT140",
    "INT143",
    "INT180",
    "GEN121"
  ],
  "1-2": [
    "INT131",
    "INT132",
    "INT133",
    "INT135",
    "INT141",
    "INT142",
    "INT150",
    "INT190",
    "LNG220"
  ],
  "2-1": [
    "INT134",
    "INT144",
    "INT151",
    "INT161",
    "INT182",
    "INT191",
    "INT504",
    "LNG202"
  ],
  "2-2": [
    "INT102",
    "INT111",
    "INT185",
    "GEN231",
    "LNG304"
  ],
  "3-1": [
    "INT105",
    "INT136",
    "INT145",
    "GEN111",
    "LNG308",
    "XXX xxx"
  ],
  "3-2": [
    "INT116",
    "INT146",
    "INT189",
    "INT505/INT507",
    "GEN351",
    "LNG320",
    "XXX xxx"
  ],
  "4-1": [
    "INT115",
    "INT147",
    "INT506/INT508",
    "GEN241",
    "LNG332"
  ],
  "4-2": [
    "INT509"
  ]
};


/* Helper ฟังก์ชัน: ดึงรายวิชาตามชั้นปี เทอม สายอาชีพ และหมวดวิชา */
window.ITHeroData.coursesFor = function coursesFor(year, term, track, categoryFilter) {
  const key = year + "-" + term;
  const catalog = window.ITHeroData.COURSE_CATALOG || {};
  const trackPlans = window.ITHeroData.TRACK_PLANS || {};
  const commonPlans = window.ITHeroData.COMMON_PLANS || {};
  const electiveSemesters = ["2-2", "3-1", "3-2"];

  let courseCodes = [];
  const isElectiveSem = electiveSemesters.indexOf(key) !== -1;

  if (isElectiveSem && track && trackPlans[track] && trackPlans[track][key]) {
    // โหลดรายวิชาทางการตามสายอาชีพที่เลือก
    courseCodes = trackPlans[track][key];
  } else {
    // โหลดรายวิชาแกนกลางของเทอมนั้น
    courseCodes = commonPlans[key] || [];
  }

  const commonSet = new Set(commonPlans[key] || []);

  const result = courseCodes.map(function (code) {
    const info = catalog[code] || {
      code: code,
      name: code,
      credits: 3,
      creditDetail: "3 (x-x-x)",
      category: code.startsWith("GEN") || code.startsWith("LNG") ? "gened" : "core",
      what: "รายละเอียดรายวิชาตามหลักสูตร IT KMUTT",
      why: "ความสำคัญและประโยชน์ในการเรียนรู้"
    };

    const isElective = isElectiveSem && (!commonSet.has(code) || code === "รายวิชาหมวด 2.2");
    let displayName = info.name;
    if (code === "XXX xxx") {
      displayName = key === "3-1" ? "Free Elective I" : "Free Elective II";
    }

    return {
      code: info.code,
      name: displayName,
      credits: info.credits,
      creditDetail: info.creditDetail,
      category: isElective ? "elective" : info.category,
      what: info.what,
      why: info.why,
      elective: isElective
    };
  });

  // กรองตามหมวดวิชาถ้าผู้ใช้เลือก Filter
  if (categoryFilter && categoryFilter !== "all") {
    return result.filter(function (item) {
      if (categoryFilter === "core") return item.category === "core" || item.category === "elective";
      if (categoryFilter === "gened") return item.category === "gened";
      if (categoryFilter === "elective") return item.category === "elective";
      return true;
    });
  }

  return result;
};
