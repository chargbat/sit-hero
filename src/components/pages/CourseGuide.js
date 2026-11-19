/* ==========================================================================
   SIT Hero (IT Hero) — 2) Course Guide Page
   รวมทั้งฟีเจอร์จาก Professor Jiewliew ver. (หน้า 6-8) และ Gen ver. (หน้า 9-12)
   ========================================================================== */

window.ITHeroPages = window.ITHeroPages || {};

(function () {
  const h = React.createElement;
  const { useState, useEffect } = React;
  const { cx, btnBase, iconBtn, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;
  const { Page, PageHeader, Select, CourseBadge, ProfessorAvatar } = window.ITHeroCommon;
  const { TRACKS, coursesFor } = window.ITHeroData;

  function CourseGuide() {
    const { mobile } = useApp();
    const [year, setYear] = useState(1);
    const [term, setTerm] = useState(1);
    const [track, setTrack] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [open, setOpen] = useState({});
    const [dismissed, setDismissed] = useState(false);

    const electiveOn = year > 2 || (year === 2 && term === 2);

    useEffect(
      function () {
        if (!electiveOn) {
          setTrack("");
          setDismissed(false);
        }
      },
      [electiveOn]
    );

    const list = coursesFor(year, term, electiveOn ? track : "", categoryFilter);
    const trackObj = TRACKS.find(function (t) {
      return t[0] === track;
    });
    const trackName = trackObj ? trackObj[1] : "";
    const totalCredits = list.reduce(function (sum, item) {
      return sum + (item.credits || 0);
    }, 0);

    return h(
      Page,
      null,
      h(PageHeader, {
        title: "Course Guide",
        sub: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ (SIT KMUTT)"
      }),

      /* Official Citation Banner */
      h(
        "div",
        { className: "anim-fade-up -mt-2 mb-5 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 border border-line text-[13px] shadow-sm" },
        h(
          "div",
          { className: "flex flex-wrap items-center gap-2" },
          h("span", { className: "rounded-md bg-navy px-2 py-0.5 font-mono text-[11px] font-bold text-mint" }, "OFFICIAL"),
          h("span", { className: "text-navy font-medium" }, "อ้างอิงหลักสูตร วท.บ. เทคโนโลยีสารสนเทศ (128 หน่วยกิต · ค่าเล่าเรียนเฉลี่ย 45,100 บ./เทอม)"),
          h("span", { className: "rounded-full bg-brandOrangeLight text-brandOrange border border-brandOrangeBorder px-2 py-0.5 text-[11px] font-semibold" }, "พ.ศ. 2567")
        ),
        h(
          "a",
          {
            href: "https://www.sit.kmutt.ac.th/bsc/bsc-it-2/",
            target: "_blank",
            rel: "noreferrer",
            className: "font-semibold text-ocean hover:underline inline-flex items-center gap-1 ml-auto"
          },
          "ตรวจดูบนเว็บ SIT ↗"
        )
      ),

      /* Pop-up แจ้งเตือนจาก Professor Jiewliew เมื่อเลือก ปี 2 เทอม 2 ขึ้นไป (หน้า 6 & หน้า 10 ของ PDF) */
      electiveOn &&
        !dismissed &&
        h(
          "div",
          {
            role: "status",
            className: "anim-fade-up mb-5 flex items-center gap-4 rounded-2xl border border-ocean/50 bg-mint px-5 py-4 text-navy shadow-sm"
          },
          h(ProfessorAvatar, { size: 54 }),
          h(
            "div",
            { className: "min-w-0 flex-1" },
            h(
              "div",
              { className: "flex flex-wrap items-center gap-2" },
              h(
                "span",
                { className: "rounded-full bg-navy px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-mint" },
                "Professor Jiewliew"
              ),
              h("p", { className: "font-semibold text-[16px]" }, "“From Year 2, Semester 2 onward, you can choose your Career Track electives!”")
            ),
            h(
              "p",
              { className: "mt-1 text-[14px] text-navy/80" },
              "ตั้งแต่ชั้นปีที่ 2 เทอม 2 เป็นต้นไป นักศึกษาสามารถเลือกสายอาชีพ (Career Track) ทั้ง 9 สาย เพื่อดูรายวิชาเฉพาะทางตามหลักสูตรทางการของ SIT ได้เลยครับ!"
            )
          ),
          h(
            "button",
            {
              type: "button",
              onClick: function () {
                setDismissed(true);
              },
              "aria-label": "Dismiss notice",
              className: cx(iconBtn, "-mr-1 !text-navy hover:!bg-white/60")
            },
            h(Icon, { n: "x", size: 20 })
          )
        ),

      /* แถบปุ่มลัดเลือกชั้นปี ปี 1 - ปี 4 แบบรวดเร็ว (ตามหน้า 6-8 ของ PDF) + ตัวกรองหมวดวิชา (General Subject / Core IT) */
      h(
        "div",
        { className: "mb-4 flex flex-wrap items-center justify-between gap-3" },
        h(
          "div",
          { className: "flex flex-wrap items-center gap-2", role: "group", "aria-label": "Quick Year Select" },
          [1, 2, 3, 4].map(function (y) {
            const active = year === y;
            return h(
              "button",
              {
                key: y,
                type: "button",
                onClick: function () {
                  setYear(y);
                },
                className: cx(
                  btnBase,
                  "!min-h-[38px] !px-4 !text-[14px]",
                  active ? "bg-steel text-white shadow-sm" : "border border-line bg-white text-navy hover:border-ocean"
                )
              },
              "ปี ",
              y
            );
          })
        ),
        h(
          "div",
          { className: "flex flex-wrap items-center gap-2", role: "group", "aria-label": "Subject Category Filter" },
          [
            ["all", "All Subjects"],
            ["core", "IT Core & Track"],
            ["gened", "General Subject (GenEd)"]
          ].map(function ([k, label]) {
            const active = categoryFilter === k;
            return h(
              "button",
              {
                key: k,
                type: "button",
                onClick: function () {
                  setCategoryFilter(k);
                },
                className: cx(
                  btnBase,
                  "!min-h-[38px] !px-3.5 !text-[13px]",
                  active ? "bg-navy text-white" : "border border-line bg-white text-muted hover:text-navy"
                )
              },
              h(Icon, { n: "filter", size: 14 }),
              label
            );
          })
        )
      ),

      /* Dropdowns: Select Year, Select Term, Select Track (ตามหน้า 9-12 ของ PDF) */
      h(
        "div",
        {
          className: cx(
            "grid gap-4 rounded-xl border border-line bg-white p-5 shadow-sm",
            mobile ? "grid-cols-1" : "grid-cols-3"
          )
        },
        h(
          Select,
          {
            id: "cg-year",
            label: "Select Year (ชั้นปี)",
            value: year,
            onChange: function (v) {
              setYear(+v);
            }
          },
          [1, 2, 3, 4].map(function (y) {
            return h("option", { key: y, value: y }, "Year " + y + " (ชั้นปีที่ " + y + ")");
          })
        ),
        h(
          Select,
          {
            id: "cg-term",
            label: "Select Term (ภาคการศึกษา)",
            value: term,
            onChange: function (v) {
              setTerm(+v);
            }
          },
          [1, 2].map(function (t) {
            return h("option", { key: t, value: t }, "Term " + t + " (ภาคการศึกษาที่ " + t + ")");
          })
        ),
        h(
          Select,
          {
            id: "cg-track",
            label: "Select Track (สายอาชีพ)",
            value: track,
            disabled: !electiveOn,
            onChange: setTrack,
            hint: electiveOn ? "เลือกสายอาชีพเพื่อดูวิชาเลือกประจำเทอม" : "เปิดให้เลือกสายตั้งแต่ ปี 2 เทอม 2 ขึ้นไป"
          },
          h("option", { value: "" }, electiveOn ? "เลือกสายอาชีพ (All / Core only)" : "ยังไม่ต้องเลือกสายในเทอมนี้"),
          TRACKS.map(function ([k, n, desc]) {
            return h("option", { key: k, value: k }, n + (desc ? " — " + desc : ""));
          })
        )
      ),

      /* สรุปจำนวนวิชาและหน่วยกิตรวม */
      h(
        "div",
        { className: "mb-3 mt-6 flex flex-wrap items-baseline justify-between gap-2" },
        h("h2", { className: "t-h3 text-navy" }, "Year ", year, " · Term ", term),
        h(
          "p",
          { className: "text-[14px] font-medium text-muted" },
          list.length,
          " รายวิชา · รวม ",
          totalCredits,
          " หน่วยกิต",
          trackName ? " · สาย " + trackName : ""
        )
      ),

      /* รายการวิชา (Course List) พร้อมการ์ดเปิดดู Subject info (what) & Subject info (why) */
      h(
        "ul",
        { className: "flex flex-col gap-3" },
        list.map(function (c, idx) {
          const isOpen = !!open[c.code];
          return h(
            "li",
            {
              key: c.code,
              className: cx(
                "anim-fade-up hover-lift overflow-hidden rounded-xl border bg-white transition-colors",
                "stagger-" + ((idx % 6) + 1),
                isOpen ? "border-ocean shadow-sm" : "border-line"
              )
            },
            h(
              "button",
              {
                type: "button",
                id: "h-" + c.code,
                "aria-expanded": isOpen,
                "aria-controls": "b-" + c.code,
                onClick: function () {
                  setOpen(Object.assign({}, open, { [c.code]: !isOpen }));
                },
                className: cx(
                  "flex min-h-[64px] w-full items-center gap-3 px-5 py-3 text-left transition-colors",
                  isOpen ? "bg-mint/60" : "hover:bg-ice"
                )
              },
              h(CourseBadge, { code: c.code }),
              h("span", { className: "min-w-0 flex-1 text-[17px] font-semibold text-navy" }, c.name),
              c.category === "gened" &&
                h(
                  "span",
                  {
                    className: "hidden rounded-full bg-ice border border-line px-2.5 py-0.5 text-[12px] font-medium text-muted sm:inline-flex"
                  },
                  "General Subject"
                ),
              c.elective &&
                h(
                  "span",
                  {
                    className: "hidden rounded-full border border-ocean bg-white px-2.5 py-0.5 text-[12px] font-semibold text-steel sm:inline-flex"
                  },
                  "Track Elective"
                ),
              h(
                "span",
                { className: "hidden font-mono text-[13px] font-medium text-muted md:inline-block" },
                c.creditDetail
              ),
              h(Icon, { n: isOpen ? "chevUp" : "chevDown", size: 22, className: "text-ocean" })
            ),
            isOpen &&
              h(
                "div",
                {
                  id: "b-" + c.code,
                  role: "region",
                  "aria-labelledby": "h-" + c.code,
                  className: "anim-accordion border-t border-line px-5 pb-5 pt-4"
                },
                h(
                  "div",
                  { className: "mb-3 flex flex-wrap items-center justify-between gap-2" },
                  h(
                    "span",
                    { className: "text-[13px] font-medium text-muted" },
                    c.category === "gened"
                      ? "หมวดวิชาศึกษาทั่วไป (General Education)"
                      : c.elective
                        ? "หมวดวิชาเลือกเฉพาะสายอาชีพ (Career Track Elective)"
                        : "หมวดวิชาแกนและพื้นฐานเทคโนโลยีสารสนเทศ (IT Core Course)"
                  ),
                  h(
                    "span",
                    { className: "rounded-full bg-mint px-3.5 py-1 text-[13px] font-semibold text-navy" },
                    "หน่วยกิต: ",
                    h("span", { className: "font-mono" }, c.creditDetail)
                  )
                ),
                h(
                  "div",
                  { className: cx("grid gap-4", mobile ? "grid-cols-1" : "grid-cols-2") },
                  h(
                    "div",
                    { className: "rounded-xl bg-ice p-4 border border-line/60" },
                    h("p", { className: "mb-1 text-[13px] font-semibold uppercase tracking-wide text-ocean" }, "Subject info (what)"),
                    h("p", { className: "text-[15px] text-navy leading-relaxed" }, c.what)
                  ),
                  h(
                    "div",
                    { className: "rounded-xl bg-ice p-4 border border-line/60" },
                    h("p", { className: "mb-1 text-[13px] font-semibold uppercase tracking-wide text-ocean" }, "Subject info (why)"),
                    h("p", { className: "text-[15px] text-navy leading-relaxed" }, c.why)
                  )
                )
              )
          );
        })
      )
    );
  }

  window.ITHeroPages.CourseGuide = CourseGuide;
})();

