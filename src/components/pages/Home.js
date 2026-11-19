/* ==========================================================================
   SIT Hero (IT Hero) — 1) Introduction / Home Page
   ========================================================================== */

window.ITHeroPages = window.ITHeroPages || {};

(function () {
  const h = React.createElement;
  const { cx, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;
  const { Page } = window.ITHeroCommon;

  const FEATURES = [
    [
      "course",
      "Course Guide",
      "book",
      "สำรวจรายวิชาตามหลักสูตร SIT KMUTT ปี 1–4 ดูคำอธิบายสิ่งที่เรียน (What) เหตุผลที่ต้องเรียน (Why) และวิชาเลือกทั้ง 9 สายอาชีพ"
    ],
    [
      "community",
      "Community",
      "users",
      "พื้นที่แลกเปลี่ยนความรู้ ตั้งกระทู้ถาม-ตอบเรื่องเรียน การบ้าน การเตรียมสอบ และรีวิวการฝึกงานกับเพื่อนและรุ่นพี่"
    ],
    [
      "knowledge",
      "Knowledge",
      "library",
      "คลังชีทสรุปวิชาไอที ค้นหาตามรหัสวิชา (เช่น INT100, INT101, INT120) เปิดอ่านพรีวิวและกดบันทึกแยกโฟลเดอร์ได้"
    ],
    [
      "autobot",
      "Autobot",
      "bot",
      "ผู้ช่วยอัจฉริยะตอบคำถามยอดฮิตของเด็กไอที แนะนำแนวทางการเรียน การเลือกสายอาชีพ และนำทางไปยังส่วนต่างๆ ของเว็บ"
    ]
  ];

  function Home() {
    const { mobile, go } = useApp();

    return h(
      Page,
      null,
      /* Hero Section */
      h(
        "section",
        {
          className: cx(
            "anim-fade-up rounded-2xl border border-line bg-white shadow-sm",
            mobile ? "p-6" : "p-12"
          )
        },
        h(
          "div",
          { className: cx("flex items-center gap-8", mobile ? "flex-col items-start" : "justify-between") },
          h(
            "div",
            { className: "flex-1" },
            h(
              "div",
              { className: "mb-3 flex flex-wrap items-center gap-2" },
              h(
                "span",
                { className: "t-cap rounded-full bg-ice border border-line px-3 py-1 font-semibold uppercase tracking-[0.12em] text-ocean" },
                "SIT KMUTT · B.Sc. IT"
              ),
              h(
                "span",
                { className: "t-cap rounded-full bg-brandOrangeLight border border-brandOrangeBorder px-2.5 py-1 text-[11px] font-bold text-brandOrange" },
                "หลักสูตรทางการ 2567"
              )
            ),
            h("h1", { className: "t-h1 text-navy" }, "วางแผน 4 ปีที่ SIT ให้ชัด ตั้งแต่วันแรก"),
            h(
              "p",
              { className: cx("mt-4 text-muted leading-relaxed", !mobile && "max-w-[720px]") },
              "SIT Hero (IT Hero) คือพื้นที่สำหรับนักศึกษาคณะเทคโนโลยีสารสนเทศ (SIT KMUTT) ในการวางแผนการเรียนตั้งแต่ปี 1 ถึงปี 4 ตรวจสอบรายละเอียดและประโยชน์ของแต่ละรายวิชา ถาม-ตอบข้อสงสัยในคอมมูนิตี้ แบ่งปันชีทสรุป และค้นหาคำตอบอย่างรวดเร็วผ่าน Autobot ครบจบในที่เดียว"
            ),
            /* Stat Strip & Quick Action */
            h(
              "div",
              { className: "mt-6 flex flex-wrap items-center gap-3 border-t border-line/80 pt-5" },
              [
                ["128", "หน่วยกิตรวม"],
                ["9", "สายอาชีพ"],
                ["ปี 2 เทอม 2", "เริ่มเลือกสาย"],
                ["6 นก.", "ฝึกงานเต็มเวลา"]
              ].map(function ([num, lbl]) {
                return h(
                  "div",
                  { key: lbl, className: "rounded-xl bg-ice px-3.5 py-2 border border-line/60" },
                  h("span", { className: "font-mono font-bold text-steel mr-1.5 text-[15px]" }, num),
                  h("span", { className: "text-[13px] text-muted font-medium" }, lbl)
                );
              }),
              h(
                "button",
                {
                  type: "button",
                  onClick: function () { go("course"); },
                  className: "ml-auto rounded-xl bg-steel px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-navy flex items-center gap-2"
                },
                "เริ่มดูแผนการเรียน ",
                h(Icon, { n: "arrowRight", size: 16 })
              )
            )
          ),
          h(
            "div",
            { className: "shrink-0" },
            h("img", {
              src: "assets/logo.png",
              alt: "SIT Hero Emblem",
              className: cx(
                "anim-float rounded-2xl border border-line bg-ice p-2 object-contain shadow-sm",
                mobile ? "h-24 w-auto" : "h-36 w-auto"
              )
            })
          )
        )
      ),
      /* 4 Module Cards */
      h(
        "section",
        {
          "aria-label": "Modules",
          className: cx("mt-6 grid gap-5", mobile ? "grid-cols-1" : "grid-cols-4")
        },
        FEATURES.map(function ([k, title, icon, text], idx) {
          return h(
            "button",
            {
              key: k,
              type: "button",
              onClick: function () {
                go(k);
              },
              className: cx(
                "anim-fade-up hover-lift btn-press group flex flex-col items-start gap-4 rounded-xl border border-line bg-white p-6 text-left transition-colors hover:border-ocean",
                "stagger-" + (idx + 1)
              )
            },
            h(
              "span",
              {
                className: "flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-steel transition-colors group-hover:bg-steel group-hover:text-white"
              },
              h(Icon, { n: icon, size: 22 })
            ),
            h("span", { className: "t-h3 text-navy" }, title),
            h("span", { className: "text-[15px] text-muted" }, text),
            h(
              "span",
              { className: "mt-auto inline-flex items-center gap-1.5 pt-1 text-[14px] font-medium text-steel" },
              "Open ",
              h(Icon, { n: "arrowRight", size: 16 })
            )
          );
        })
      )
    );
  }

  window.ITHeroPages.Home = Home;
})();

