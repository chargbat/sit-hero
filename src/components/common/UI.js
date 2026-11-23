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
        className: "anim-toast pointer-events-none fixed bottom-6 left-1/2 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy/95 px-5 py-2.5 text-[14px] font-medium text-white shadow-xl backdrop-blur-md"
      },
      h(Icon, { n: "check", size: 16, className: "text-mint" }),
      msg
    );
  }

  /* ตัวเลขวิ่งขึ้นแบบ Eased CountUp */
  function CountUp({ to, duration = 680 }) {
    const [val, setVal] = React.useState(0);
    const prevRef = React.useRef(0);

    React.useEffect(
      function () {
        const start = prevRef.current;
        const target = Number(to) || 0;
        if (start === target) {
          setVal(target);
          return void 0;
        }
        let rafId = 0;
        const t0 = performance.now();
        function tick(now) {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          const cur = Math.round(start + (target - start) * eased);
          setVal(cur);
          if (p < 1) {
            rafId = requestAnimationFrame(tick);
          } else {
            prevRef.current = target;
          }
        }
        rafId = requestAnimationFrame(tick);
        return function () {
          cancelAnimationFrame(rafId);
        };
      },
      [to, duration]
    );

    return h("span", null, val);
  }

  /* โลโก้ Vector SVG ของ SIT Hero (Pure Transparent Mark ตามหลัก Responsive Brand Identity — ไม่มีกรอบพื้นหลัง) */
  function BrandLogo({ size = 40, variant = "nav" }) {
    const isHero = variant === "hero";
    const idPrefix = isHero ? "hero-logo" : "nav-logo";

    /* Color adaptation: สว่างคมชัดบนพื้นเข้ม (Navbar) / เข้มมีมิติบนพื้นสว่าง (Hero) */
    const cLight = isHero ? "#29B6F6" : "#7DD3FC";
    const cMid = isHero ? "#0EA5E9" : "#38BDF8";
    const cDark = isHero ? "#0284C7" : "#0EA5E9";
    const cDeep = isHero ? "#0369A1" : "#0284C7";

    const viewBox = isHero ? "0 0 120 108" : "0 4 120 76";
    const width = isHero ? size : Math.round(size * 1.38);
    const height = isHero ? Math.round(size * 0.9) : size;

    return h(
      "span",
      {
        className: "brand-logo-wrap inline-flex shrink-0 items-center justify-center select-none",
        style: { width: width, height: height }
      },
      h(
        "svg",
        {
          width: width,
          height: height,
          viewBox: viewBox,
          fill: "none",
          className: "brand-logo-svg overflow-visible",
          role: "img",
          "aria-label": "IT Hero Logo"
        },
        h(
          "defs",
          null,
          h(
            "linearGradient",
            { id: idPrefix + "-roof-l", x1: "20", y1: "28", x2: "60", y2: "10", gradientUnits: "userSpaceOnUse" },
            h("stop", { offset: "0%", stopColor: cMid }),
            h("stop", { offset: "100%", stopColor: cLight })
          ),
          h(
            "linearGradient",
            { id: idPrefix + "-roof-r", x1: "60", y1: "10", x2: "100", y2: "28", gradientUnits: "userSpaceOnUse" },
            h("stop", { offset: "0%", stopColor: cDark }),
            h("stop", { offset: "100%", stopColor: cMid })
          ),
          h(
            "linearGradient",
            { id: idPrefix + "-pillar", x1: "0", y1: "20", x2: "0", y2: "74", gradientUnits: "userSpaceOnUse" },
            h("stop", { offset: "0%", stopColor: cDark }),
            h("stop", { offset: "100%", stopColor: cLight })
          ),
          h(
            "linearGradient",
            { id: idPrefix + "-cape-l", x1: "30", y1: "34", x2: "6", y2: "74", gradientUnits: "userSpaceOnUse" },
            h("stop", { offset: "0%", stopColor: cDeep }),
            h("stop", { offset: "100%", stopColor: cLight })
          ),
          h(
            "linearGradient",
            { id: idPrefix + "-cape-r", x1: "90", y1: "34", x2: "114", y2: "74", gradientUnits: "userSpaceOnUse" },
            h("stop", { offset: "0%", stopColor: cDeep }),
            h("stop", { offset: "100%", stopColor: cLight })
          )
        ),

        /* ปีกผ้าคลุมฮีโร่ด้านซ้าย (Symmetric Hero Cape Left) */
        h("path", {
          className: "logo-cape-l",
          d: "M31 35 C27 49 17 61 5 67.5 C7.5 69.5 11.5 72 13 73.5 C12.5 71.5 14 70 16.5 68.5 C24.5 62.5 31.5 50.5 32.5 37.5 Z",
          fill: "url(#" + idPrefix + "-cape-l)"
        }),
        /* ปีกผ้าคลุมฮีโร่ด้านขวา (Symmetric Hero Cape Right) */
        h("path", {
          className: "logo-cape-r",
          d: "M89 35 C93 49 103 61 115 67.5 C112.5 69.5 108.5 72 107 73.5 C107.5 71.5 106 70 103.5 68.5 C95.5 62.5 88.5 50.5 87.5 37.5 Z",
          fill: "url(#" + idPrefix + "-cape-r)"
        }),

        /* เสาตัว I (Left Pillar + Base) */
        h("rect", { x: "40", y: "24", width: "9", height: "42", rx: "2.5", fill: "url(#" + idPrefix + "-pillar)" }),
        h("rect", { x: "27", y: "62", width: "33", height: "9", rx: "3", fill: cMid }),

        /* เสาตัว T (Right Pillar) */
        h("rect", { x: "71", y: "24", width: "9.5", height: "47", rx: "2.5", fill: "url(#" + idPrefix + "-pillar)" }),

        /* หลังคาทรงจั่ว IT (2-Tone Faceted Pitched Roof) */
        h(
          "g",
          { className: "logo-roof" },
          h("path", {
            d: "M22 28.5 L60 11 L60 21.5 L24.5 36.5 C22.5 37.3 20.5 35.8 20.5 33.7 L20.5 31 C20.5 29.9 21.1 29 22 28.5 Z",
            fill: "url(#" + idPrefix + "-roof-l)"
          }),
          h("path", {
            d: "M98 28.5 L60 11 L60 21.5 L95.5 36.5 C97.5 37.3 99.5 35.8 99.5 33.7 L99.5 31 C99.5 29.9 98.9 29 98 28.5 Z",
            fill: "url(#" + idPrefix + "-roof-r)"
          })
        ),

        /* Wordmark "HERO" (แสดงเฉพาะขนาด Hero Lockup ตามหลัก Responsive Logo) */
        isHero &&
          h(
            "text",
            {
              x: "60",
              y: "98",
              textAnchor: "middle",
              fill: cDark,
              fontSize: "20",
              fontWeight: "800",
              letterSpacing: "3.2",
              fontFamily: "Inter, system-ui, sans-serif"
            },
            "HERO"
          )
      )
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
    const { route, go } = useApp();
    return h(
      "div",
      { className: "mb-6 flex flex-col gap-2" },
      route &&
        route !== "home" &&
        h(
          "nav",
          { "aria-label": "Breadcrumb", className: "flex items-center gap-1.5 text-[13px] text-muted" },
          h(
            "button",
            {
              type: "button",
              onClick: function () {
                go("home");
              },
              className: "btn-press -ml-2 inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-2 font-medium text-steel transition-colors hover:bg-mint/60 hover:text-navy"
            },
            h(Icon, { n: "arrowLeft", size: 15 }),
            "Home"
          ),
          h("span", { "aria-hidden": "true", className: "text-muted/60" }, "/"),
          h("span", { className: "font-medium text-navy/80" }, title)
        ),
      h(
        "div",
        { className: "flex flex-wrap items-end justify-between gap-4" },
        h(
          "div",
          null,
          sub && h("p", { className: "t-cap mb-1 font-semibold uppercase tracking-[0.1em] text-ocean" }, sub),
          h("h1", { className: "t-h2 text-navy" }, title)
        ),
        right
      )
    );
  }

  Object.assign(window.ITHeroCommon, {
    Avatar: Avatar,
    ProfilePhoto: ProfilePhoto,
    ProfessorAvatar: ProfessorAvatar,
    BrandLogo: BrandLogo,
    CountUp: CountUp,
    Tag: Tag,
    CourseBadge: CourseBadge,
    Select: Select,
    Empty: Empty,
    Toast: Toast,
    Page: Page,
    PageHeader: PageHeader
  });
})();

