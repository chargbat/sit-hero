/* ==========================================================================
   SIT Hero (IT Hero) — 1) Introduction / Home Page
   ========================================================================== */

window.ITHeroPages = window.ITHeroPages || {};

(function () {
  const h = React.createElement;
  const { cx, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;
  const { Page, BrandLogo, CountUp } = window.ITHeroCommon;

  function onTiltMove(e, maxTilt) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const px = (x / r.width) - 0.5;
    const py = (y / r.height) - 0.5;
    el.style.setProperty("--mx", x + "px");
    el.style.setProperty("--my", y + "px");
    el.style.setProperty("--spot-o", "1");
    el.style.setProperty("--rx", (-py * (maxTilt || 6)).toFixed(2) + "deg");
    el.style.setProperty("--ry", (px * (maxTilt || 6)).toFixed(2) + "deg");
    el.style.setProperty("--ty", "-4px");
  }

  function onTiltLeave(e) {
    const el = e.currentTarget;
    el.style.setProperty("--spot-o", "0");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--ty", "0px");
  }

  const FEATURES = [
    [
      "course",
      "Course Guide",
      "book",
      "เช็กรายวิชาตามแผนการเรียน IT KMUTT ปี 1–4 ดูสรุปเนื้อหา เหตุผลที่ต้องเรียน และเทียบวิชาเลือกทั้ง 9 สายอาชีพ",
      "ดูแผนการเรียน"
    ],
    [
      "community",
      "Community",
      "users",
      "ตั้งกระทู้ถามเรื่องเรียน การบ้าน เตรียมสอบ และอ่านรีวิววิชาเลือกหรือการฝึกงานจากเพื่อนและรุ่นพี่",
      "เข้าคอมมูนิตี้"
    ],
    [
      "knowledge",
      "Knowledge",
      "library",
      "คลังชีทสรุปวิชาไอที ค้นหาตามรหัสวิชา เช่น INT100, INT101, INT120 อ่านพรีวิวและเก็บเข้าโฟลเดอร์ได้",
      "เปิดคลังชีท"
    ],
    [
      "autobot",
      "Autobot",
      "bot",
      "รวมคำถามที่เด็ก IT ถามบ่อย ทั้งแนวทางเตรียมสอบ การเลือกสายอาชีพตอนปี 2 และลิงก์วาร์ปไปหน้าต่างๆ",
      "เริ่มถามคำถาม"
    ]
  ];

  function Home() {
    const { mobile, go } = useApp();

    return h(
      Page,
      null,
      /* Hero Section (Wireframe Layout Preserved + Ambient Glow Polish) */
      h(
        "section",
        {
          className: cx(
            "anim-fade-up surface-card relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-white via-white to-mint/30",
            mobile ? "p-6" : "p-12"
          )
        },
        /* Subtle decorative ambient aura behind the Hero Emblem */
        h("div", {
          "aria-hidden": "true",
          className: "anim-ambient pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-mint/60 blur-3xl"
        }),
        h("div", {
          "aria-hidden": "true",
          className: "pointer-events-none absolute -bottom-16 right-28 h-48 w-48 rounded-full bg-ocean/15 blur-3xl"
        }),
        h(
          "div",
          { className: cx("relative z-10 flex items-center gap-8", mobile ? "flex-col items-start" : "justify-between") },
          h(
            "div",
            { className: "flex-1" },
            h(
              "p",
              { className: "mb-2.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ocean" },
              "IT KMUTT · B.Sc. Information Technology (หลักสูตร 2567)"
            ),
            h("h1", { className: "t-h1 text-navy" }, "วางแผน 4 ปีที่ IT ให้ชัด ตั้งแต่วันแรก"),
            h(
              "p",
              { className: cx("mt-4 text-muted leading-relaxed", !mobile && "max-w-[700px]") },
              "เช็กรายวิชาจริงตามหลักสูตร วท.บ. เทคโนโลยีสารสนเทศ มจธ. เปรียบเทียบวิชาเลือกทั้ง 9 สายอาชีพ อ่านชีทสรุปจากรุ่นพี่ และถาม-ตอบข้อสงสัยก่อนลงทะเบียนได้ทันที"
            ),
            /* Clean Typographic Stat Strip (No Pill Spam) + Quick Action */
            h(
              "div",
              { className: "mt-6 flex flex-wrap items-center gap-y-4 border-t border-line/80 pt-5" },
              h(
                "div",
                { className: cx("flex flex-wrap items-center", mobile ? "w-full justify-between gap-3" : "gap-5") },
                [
                  [128, "", "หน่วยกิตรวม"],
                  [9, "", "สายอาชีพ"],
                  [null, "ปี 2/2", "เริ่มเลือกสาย"],
                  [6, " นก.", "สหกิจศึกษา"]
                ].map(function ([num, suffix, lbl], idx) {
                  return h(
                    "div",
                    {
                      key: lbl,
                      className: cx(
                        "anim-fade-up flex flex-col",
                        idx > 0 && !mobile && "border-l border-line pl-5",
                        "stagger-" + (idx + 1)
                      )
                    },
                    h(
                      "span",
                      { className: "font-mono text-[18px] font-bold leading-tight text-navy" },
                      num !== null ? [h(CountUp, { key: "n", to: num }), suffix] : suffix
                    ),
                    h("span", { className: "text-[12px] font-medium text-muted" }, lbl)
                  );
                })
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: function () { go("course"); },
                  className: cx(
                    "btn-press cta-sheen min-h-[44px] rounded-xl bg-brandOrange px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:shadow-md hover:opacity-95 flex items-center justify-center gap-2",
                    mobile ? "w-full mt-1" : "ml-auto"
                  )
                },
                "เริ่มดูแผนการเรียน ",
                h(Icon, { n: "arrowRight", size: 16 })
              )
            )
          ),
          h(
            "div",
            { className: cx("shrink-0", mobile && "self-center pt-2") },
            h(
              "div",
              { className: "anim-float" },
              h(BrandLogo, { size: mobile ? 132 : 184, variant: "hero" })
            )
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
        FEATURES.map(function ([k, title, icon, text, cta], idx) {
          return h(
            "button",
            {
              key: k,
              type: "button",
              onClick: function () {
                go(k);
              },
              onMouseMove: !mobile
                ? function (e) {
                    onTiltMove(e, 7);
                  }
                : void 0,
              onMouseLeave: !mobile ? onTiltLeave : void 0,
              className: cx(
                "anim-fade-up spotlight-card btn-press group flex flex-col items-start gap-4 rounded-xl border border-line bg-white p-6 text-left transition-colors hover:border-ocean",
                "stagger-" + (idx + 2)
              )
            },
            h(
              "span",
              {
                className: "flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-steel transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-steel group-hover:text-white group-hover:shadow-sm"
              },
              h(Icon, { n: icon, size: 22 })
            ),
            h("span", { className: "t-h3 text-navy" }, title),
            h("span", { className: "text-[15px] text-muted" }, text),
            h(
              "span",
              { className: "mt-auto inline-flex items-center gap-1.5 pt-1 text-[14px] font-semibold text-steel" },
              cta,
              h(Icon, { n: "arrowRight", size: 16, className: "transition-transform duration-200 group-hover:translate-x-1" })
            )
          );
        })
      )
    );
  }

  window.ITHeroPages.Home = Home;
})();

