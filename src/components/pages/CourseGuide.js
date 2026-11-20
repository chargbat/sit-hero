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
  const { Page, PageHeader, Select, CourseBadge, ProfessorAvatar, CountUp } = window.ITHeroCommon;
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
    const coreCredits = list.reduce(function (sum, item) {
      return !item.elective && item.category !== "gened" ? sum + (item.credits || 0) : sum;
    }, 0);
    const trackCredits = list.reduce(function (sum, item) {
      return item.elective ? sum + (item.credits || 0) : sum;
    }, 0);
    const genedCredits = list.reduce(function (sum, item) {
      return item.category === "gened" ? sum + (item.credits || 0) : sum;
    }, 0);

    return h(
      Page,
      null,
      h(PageHeader, {
        title: "Course Guide",
        sub: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ (SIT KMUTT)"
      }),

      /* Pop-up แจ้งเตือนจาก Professor Jiewliew เมื่อเลือก ปี 2 เทอม 2 ขึ้นไป */
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
                { className: "rounded-full bg-navy px-2.5 py-0.5 text-[12px] font-semibold uppercase tracking-wider text-mint" },
                "Professor Jiewliew"
              ),
              h("p", { className: "font-semibold text-[16px]" }, "“From Year 2, Semester 2 onward, you can choose your Career Track electives!”")
            ),
            h(
              "p",
              { className: "mt-1 text-[14px] text-navy/80" },
              "ตั้งแต่ปี 2 เทอม 2 เป็นต้นไป เลือกสายอาชีพด้านล่างเพื่อดูวิชาบังคับเลือกเฉพาะสายได้เลย"
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

      /* ตัวกรองหมวดวิชา (All Subjects / IT Core & Track / General Subject) */
      h(
        "div",
        { className: "mb-4 flex flex-wrap items-center justify-end gap-2", role: "group", "aria-label": "Subject Category Filter" },
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
                "!min-h-[44px] !px-4 !text-[13px]",
                active ? "bg-navy text-white" : "border border-line bg-white text-muted hover:text-navy"
              )
            },
            h(Icon, { n: "filter", size: 14 }),
            label
          );
        })
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
          h("option", { value: "" }, electiveOn ? "เลือกสายอาชีพ (Core only)" : "ยังไม่ต้องเลือกสายในเทอมนี้"),
          TRACKS.map(function ([k, n, desc]) {
            const m = desc && desc.match(/\(([^)]+)\)/);
            return h("option", { key: k, value: k }, m ? n + " (" + m[1] + ")" : n);
          })
        )
      ),

      /* สรุปจำนวนวิชาและหน่วยกิตรวม + แถบสัดส่วนหน่วยกิตแบบ Animated */
      h(
        "div",
        { className: "mb-4 mt-6 rounded-xl border border-line bg-white px-5 py-3.5 shadow-sm" },
        h(
          "div",
          { className: "flex flex-wrap items-baseline justify-between gap-2" },
          h("h2", { className: "t-h3 text-navy" }, "Year ", year, " · Term ", term),
          h(
            "p",
            { className: "text-[14px] font-medium text-muted" },
            list.length,
            " รายวิชา · รวม ",
            h("span", { className: "font-mono font-bold text-navy" }, h(CountUp, { to: totalCredits, duration: 480 })),
            " หน่วยกิต",
            trackName ? " · สาย " + trackName : ""
          )
        ),
        totalCredits > 0 &&
          h(
            "div",
            { className: "mt-2.5 flex flex-col gap-2" },
            h(
              "div",
              { className: "flex h-2 w-full overflow-hidden rounded-full bg-ice" },
              coreCredits > 0 &&
                h("div", {
                  className: "bg-steel transition-all duration-500",
                  style: { width: (coreCredits / totalCredits) * 100 + "%" },
                  title: "IT Core: " + coreCredits + " นก."
                }),
              trackCredits > 0 &&
                h("div", {
                  className: "bg-brandOrange transition-all duration-500",
                  style: { width: (trackCredits / totalCredits) * 100 + "%" },
                  title: "Track Elective: " + trackCredits + " นก."
                }),
              genedCredits > 0 &&
                h("div", {
                  className: "bg-ocean/60 transition-all duration-500",
                  style: { width: (genedCredits / totalCredits) * 100 + "%" },
                  title: "GenEd / LNG / Free: " + genedCredits + " นก."
                })
            ),
            h(
              "div",
              { className: "flex flex-wrap items-center gap-4 text-[12px] text-muted" },
              coreCredits > 0 &&
                h("span", { className: "inline-flex items-center gap-1.5" }, h("span", { className: "h-2 w-2 rounded-full bg-steel" }), "IT Core (" + coreCredits + " นก.)"),
              trackCredits > 0 &&
                h("span", { className: "inline-flex items-center gap-1.5" }, h("span", { className: "h-2 w-2 rounded-full bg-brandOrange" }), "Track Elective (" + trackCredits + " นก.)"),
              genedCredits > 0 &&
                h("span", { className: "inline-flex items-center gap-1.5" }, h("span", { className: "h-2 w-2 rounded-full bg-ocean/60" }), "GenEd / ภาษา / เลือกเสรี (" + genedCredits + " นก.)")
            )
          )
      ),

      /* รายการวิชา (Course List) พร้อมการ์ดเปิดดูรายละเอียด */
      h(
        "ul",
        { key: year + "-" + term + "-" + track + "-" + categoryFilter, className: "flex flex-col gap-3" },
        list.map(function (c, idx) {
          const isOpen = !!open[c.code];
          return h(
            "li",
            {
              key: c.code,
              className: cx(
                "anim-fade-up hover-lift overflow-hidden rounded-xl border bg-white transition-all duration-200",
                "stagger-" + ((idx % 6) + 1),
                isOpen ? "border-ocean ring-1 ring-ocean/25 shadow-sm" : "border-line"
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
                  "flex min-h-[64px] w-full text-left transition-colors",
                  mobile ? "flex-col gap-2 px-4 py-3.5" : "items-center gap-3 px-5 py-3",
                  isOpen ? "bg-mint/60" : "hover:bg-ice"
                )
              },
              mobile
                ? [
                    h(
                      "div",
                      { key: "top", className: "flex w-full items-center gap-2" },
                      h(CourseBadge, { code: c.code }),
                      c.category === "gened" &&
                        h(
                          "span",
                          { className: "rounded-full bg-ice border border-line px-2 py-0.5 text-[12px] font-medium text-muted" },
                          "GenEd"
                        ),
                      c.elective &&
                        h(
                          "span",
                          { className: "rounded-full border border-ocean bg-white px-2 py-0.5 text-[12px] font-semibold text-steel" },
                          "Track"
                        ),
                      h(
                        "span",
                        { className: "ml-auto font-mono text-[12px] font-medium text-muted shrink-0" },
                        c.creditDetail
                      ),
                      h(Icon, {
                        n: "chevDown",
                        size: 20,
                        className: cx("text-ocean transition-transform duration-300", isOpen && "rotate-180")
                      })
                    ),
                    h(
                      "span",
                      { key: "title", className: "w-full text-[16px] font-semibold leading-snug text-navy" },
                      c.name
                    )
                  ]
                : [
                    h(CourseBadge, { key: "code", code: c.code }),
                    h("span", { key: "name", className: "min-w-0 flex-1 text-[17px] font-semibold text-navy" }, c.name),
                    c.category === "gened" &&
                      h(
                        "span",
                        {
                          key: "gened",
                          className: "inline-flex shrink-0 rounded-full bg-ice border border-line px-2.5 py-0.5 text-[12px] font-medium text-muted"
                        },
                        "General Subject"
                      ),
                    c.elective &&
                      h(
                        "span",
                        {
                          key: "track",
                          className: "inline-flex shrink-0 rounded-full border border-ocean bg-white px-2.5 py-0.5 text-[12px] font-semibold text-steel"
                        },
                        "Track Elective"
                      ),
                    h(
                      "span",
                      { key: "cred", className: "shrink-0 font-mono text-[13px] font-medium text-muted" },
                      c.creditDetail
                    ),
                    h(Icon, {
                      key: "chev",
                      n: "chevDown",
                      size: 22,
                      className: cx("text-ocean transition-transform duration-300", isOpen && "rotate-180")
                    })
                  ]
            ),
            h(
              "div",
              {
                id: "b-" + c.code,
                role: "region",
                "aria-labelledby": "h-" + c.code,
                "aria-hidden": !isOpen,
                "data-open": isOpen ? "true" : "false",
                className: "accordion-grid"
              },
              h(
                "div",
                { className: "accordion-inner" },
                h(
                  "div",
                  { className: "border-t border-line px-5 pb-5 pt-4" },
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
                      h("p", { className: "mb-1 text-[13px] font-semibold text-ocean" }, "วิชานี้เรียนอะไร"),
                      h("p", { className: "text-[15px] text-navy leading-relaxed" }, c.what)
                    ),
                    h(
                      "div",
                      { className: "rounded-xl bg-ice p-4 border border-line/60" },
                      h("p", { className: "mb-1 text-[13px] font-semibold text-ocean" }, "สำคัญยังไง / ต่อยอดอะไรได้"),
                      h("p", { className: "text-[15px] text-navy leading-relaxed" }, c.why)
                    )
                  )
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

