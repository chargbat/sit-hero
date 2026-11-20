/* ==========================================================================
   SIT Hero (IT Hero) — Top Navigation Bar (Navbar)
   ใช้ภาพโลโก้จาก assets/logo.png พร้อมเมนูสลับหน้า Desktop / Mobile
   ========================================================================== */

window.ITHeroCommon = window.ITHeroCommon || {};

(function () {
  const h = React.createElement;
  const { useState } = React;
  const { cx, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;
  const { ProfilePhoto, BrandLogo } = window.ITHeroCommon;

  const NAV = [
    ["home", "Home"],
    ["course", "Course Guide"],
    ["community", "Community"],
    ["knowledge", "Knowledge"],
    ["autobot", "Autobot"]
  ];

  function Navbar() {
    const { mobile, go, route, openUser } = useApp();
    const [open, setOpen] = useState(false);

    const brand = h(
      "button",
      {
        type: "button",
        onClick: function () {
          setOpen(false);
          go("home");
        },
        className: "btn-press flex min-h-[44px] items-center gap-2.5 rounded-xl px-1.5 text-white transition-colors hover:bg-white/5",
        "aria-label": "SIT Hero, go to Home"
      },
      h(BrandLogo, { size: 38, variant: "nav" }),
      h(
        "span",
        { className: "flex flex-col items-start leading-none" },
        h("span", { className: "text-[20px] font-bold tracking-tight" }, "SIT Hero"),
        !mobile && h("span", { className: "mt-0.5 text-[12px] font-medium text-mint/80" }, "KMUTT · B.Sc. IT")
      )
    );

    const avatarBtn = h(
      "button",
      {
        type: "button",
        onClick: openUser,
        "aria-label": "Open your profile",
        className: "btn-press flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full ring-2 ring-ocean/70 hover:ring-mint"
      },
      h(ProfilePhoto, { size: 40 })
    );

    if (mobile) {
      return h(
        "header",
        { className: "sticky top-0 z-30 bg-navy text-white shadow-sm" },
        h(
          "div",
          { className: "flex h-[64px] items-center justify-between px-4" },
          brand,
          h(
            "div",
            { className: "flex items-center gap-2" },
            avatarBtn,
            h(
              "button",
              {
                type: "button",
                "aria-label": "Menu",
                "aria-expanded": open,
                onClick: function () {
                  setOpen(!open);
                },
                className: "btn-press flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-white hover:bg-steel"
              },
              h(Icon, { n: open ? "x" : "menu", size: 22 })
            )
          )
        ),
        open &&
          h(
            "nav",
            {
              "aria-label": "Primary",
              className: "anim-accordion flex flex-col gap-1 border-t border-white/10 px-4 pb-3 pt-2"
            },
            NAV.map(function ([k, label]) {
              return h(
                "button",
                {
                  key: k,
                  type: "button",
                  onClick: function () {
                    setOpen(false);
                    go(k);
                  },
                  "aria-current": route === k ? "page" : void 0,
                  className: cx(
                    "btn-press flex min-h-[44px] items-center rounded-xl px-4 text-left text-[15px] font-medium",
                    route === k ? "bg-steel text-white" : "text-white/85 hover:bg-white/10"
                  )
                },
                label
              );
            })
          )
      );
    }

    return h(
      "header",
      { className: "sticky top-0 z-30 bg-navy text-white shadow-sm" },
      h(
        "div",
        { className: "mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-10" },
        brand,
        h(
          "div",
          { className: "flex items-center gap-4" },
          h(
            "nav",
            { "aria-label": "Primary", className: "flex items-center gap-1" },
            NAV.map(function ([k, label]) {
              return h(
                "button",
                {
                  key: k,
                  type: "button",
                  onClick: function () {
                    go(k);
                  },
                  "aria-current": route === k ? "page" : void 0,
                  className: cx(
                    "btn-press min-h-[44px] rounded-xl px-4 text-[15px] font-medium transition-colors",
                    route === k ? "bg-steel text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                  )
                },
                label
              );
            })
          ),
          avatarBtn
        )
      )
    );
  }

  window.ITHeroCommon.Navbar = Navbar;
})();

