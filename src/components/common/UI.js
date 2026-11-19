/* ==========================================================================
   SIT Hero (IT Hero) — Common UI Components
   (Avatar, ProfilePhoto, ProfessorAvatar, Tag, CourseBadge, Select, Empty, Toast, Page, PageHeader)
   ========================================================================== */

window.ITHeroCommon = window.ITHeroCommon || {};

(function () {
  const h = React.createElement;
  const { cx, inputCls, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;

  const AV_TONES = [
    ["#2C4966", "#FFFFFF"],
    ["#5A8FA3", "#FFFFFF"],
    ["#D8F3E5", "#0D1C36"],
    ["#0D1C36", "#D8F3E5"]
  ];

  function Avatar({ name, size = 40 }) {
    let hash = 0;
    const str = name || "U";
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % 997;
    }
    const [bg, fg] = AV_TONES[hash % AV_TONES.length];
    return h(
      "span",
      {
        className: "inline-flex items-center justify-center rounded-full font-semibold shrink-0",
        style: { width: size, height: size, background: bg, color: fg, fontSize: size * 0.4 },
        "aria-hidden": "true"
      },
      str.trim().charAt(0).toUpperCase()
    );
  }

  function ProfilePhoto({ size = 160 }) {
    return h(
      "span",
      {
        className: "inline-block rounded-full overflow-hidden shrink-0",
        style: { width: size, height: size }
      },
      h(
        "svg",
        { width: size, height: size, viewBox: "0 0 160 160", role: "img", "aria-label": "Profile photo" },
        h("rect", { width: "160", height: "160", fill: "#D8F3E5" }),
        h("path", { d: "M0 160C6 124 38 106 80 106s74 18 80 54Z", fill: "#5A8FA3" }),
        h("rect", { x: "68", y: "84", width: "24", height: "24", rx: "8", fill: "#1F3550" }),
        h("circle", { cx: "80", cy: "66", r: "29", fill: "#2C4966" }),
        h("path", {
          d: "M52 62c2-20 14-30 30-30 14 0 24 9 26 24-10-4-22-10-30-18-6 10-14 18-26 24Z",
          fill: "#0D1C36"
        })
      )
    );
  }

  /* คาแรกเตอร์ Professor Jiewliew (อาจารย์จิ๋วหลิว) ตาม Wireframe หน้า 6-8 */
  function ProfessorAvatar({ size = 56 }) {
    return h(
      "span",
      {
        className: "anim-float inline-flex items-center justify-center rounded-2xl bg-navy text-mint shadow-sm shrink-0 overflow-hidden border-2 border-ocean/40",
        style: { width: size, height: size }
      },
      h(
        "svg",
        { width: size, height: size, viewBox: "0 0 64 64", role: "img", "aria-label": "Professor Jiewliew" },
        h("rect", { width: "64", height: "64", fill: "#0D1C36" }),
        h("circle", { cx: "32", cy: "28", r: "14", fill: "#D8F3E5" }),
        h("path", { d: "M12 62c3-14 12-20 20-20s17 6 20 20Z", fill: "#2C4966" }),
        /* แว่นตาอาจารย์จิ๋วหลิว */
        h("circle", { cx: "27", cy: "27", r: "4.2", fill: "none", stroke: "#0D1C36", strokeWidth: "2" }),
        h("circle", { cx: "37", cy: "27", r: "4.2", fill: "none", stroke: "#0D1C36", strokeWidth: "2" }),
        h("line", { x1: "31.2", y1: "27", x2: "32.8", y2: "27", stroke: "#0D1C36", strokeWidth: "2" }),
        /* หมวกปริญญา */
        h("polygon", { points: "32,8 14,16 32,22 50,16", fill: "#5A8FA3" }),
        h("rect", { x: "22", y: "18", width: "20", height: "4", rx: "1", fill: "#2C4966" })
      )
    );
  }

  function Tag({ t, active, onClick, size = "sm" }) {
    const cls = cx(
      "btn-press inline-flex items-center rounded-full font-medium transition-colors",
      size === "md" ? "min-h-[36px] px-3.5 text-[13px]" : "px-2.5 py-1 text-[12px]",
      active ? "bg-steel text-white" : "bg-mint text-navy",
      onClick && !active && "hover:bg-ocean/30"
    );
    return onClick
      ? h("button", { type: "button", className: cls, onClick: onClick, "aria-pressed": !!active }, "#", t)
      : h("span", { className: cls }, "#", t);
  }

  function CourseBadge({ code }) {
    let colorCls = "bg-mint text-navy";
    if (code.startsWith("GEN")) {
      colorCls = "bg-sky-100 text-sky-900 border border-sky-200";
    } else if (code.startsWith("LNG")) {
      colorCls = "bg-amber-100 text-amber-900 border border-amber-200";
    } else if (code.startsWith("XXX")) {
      colorCls = "bg-purple-100 text-purple-900 border border-purple-200";
    } else if (code.includes("หมวด 2.2")) {
      colorCls = "bg-orange-100 text-orange-900 border border-orange-200";
    }
    return h(
      "span",
      {
        className: cx("inline-flex items-center rounded-full px-3 py-1 font-mono text-[13px] font-semibold shrink-0", colorCls)
      },
      code
    );
  }

  function Select({ id, label, hideLabel, value, onChange, children, disabled, hint }) {
    return h(
      "div",
      { className: "flex min-w-0 flex-col gap-1.5" },
      h("label", { htmlFor: id, className: cx("text-[13px] font-medium text-muted", hideLabel && "sr-only") }, label),
      h(
        "div",
        { className: "relative" },
        h(
          "select",
          {
            id: id,
            value: value,
            disabled: disabled,
            onChange: function (e) {
              onChange(e.target.value);
            },
            className: cx(inputCls, "appearance-none pr-10 font-medium", disabled && "cursor-not-allowed bg-ice text-muted")
          },
          children
        ),
        h(Icon, {
          n: "chevDown",
          size: 18,
          className: "pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
        })
      ),
      hint && h("span", { className: "t-cap text-muted" }, hint)
    );
  }

  function Empty({ icon = "inbox", title, sub, action }) {
    return h(
      "div",
      { className: "anim-fade-in flex flex-col items-center justify-center rounded-xl border border-dashed border-line bg-white px-6 py-12 text-center" },
      h(
        "span",
        { className: "mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-mint text-steel" },
        h(Icon, { n: icon, size: 22 })
      ),
      h("p", { className: "text-[17px] font-semibold text-navy" }, title),
      sub && h("p", { className: "mt-1 max-w-[420px] text-[14px] text-muted" }, sub),
      action && h("div", { className: "mt-4" }, action)
    );
  }

  function Toast({ msg }) {
    return h(
      "div",
      {
        role: "status",
        "aria-live": "polite",
        className: "anim-fade-up pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-navy px-5 py-2.5 text-[14px] font-medium text-white shadow-lg"
      },
      msg
    );
  }

  function Page({ children }) {
    const { mobile } = useApp();
    return h(
      "div",
      { className: cx("anim-page mx-auto w-full max-w-[1320px]", mobile ? "px-4 py-5" : "px-10 py-8") },
      children
    );
  }

  function PageHeader({ title, sub, right }) {
    return h(
      "div",
      { className: "mb-6 flex flex-wrap items-end justify-between gap-4" },
      h(
        "div",
        null,
        sub && h("p", { className: "t-cap mb-1 font-semibold uppercase tracking-[0.1em] text-ocean" }, sub),
        h("h1", { className: "t-h2 text-navy" }, title)
      ),
      right
    );
  }

  Object.assign(window.ITHeroCommon, {
    Avatar: Avatar,
    ProfilePhoto: ProfilePhoto,
    ProfessorAvatar: ProfessorAvatar,
    Tag: Tag,
    CourseBadge: CourseBadge,
    Select: Select,
    Empty: Empty,
    Toast: Toast,
    Page: Page,
    PageHeader: PageHeader
  });
})();

