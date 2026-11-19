/* ==========================================================================
   SIT Hero (IT Hero) — Root Application, Router & Viewport Stage Controller
   ========================================================================== */

(function () {
  const h = React.createElement;
  const { useState, useRef, useEffect, useCallback } = React;
  const { cx, usePersistedState, Ctx } = window.ITHeroUtils;
  const { Navbar, Toast } = window.ITHeroCommon;
  const { Home, UserModal, CourseGuide, Community, Knowledge, Autobot } = window.ITHeroPages;
  const { DEFAULT_PROFILE, SEED_POSTS, SEED_NOTES } = window.ITHeroData;

  const SCREENS = {
    home: Home,
    course: CourseGuide,
    community: Community,
    knowledge: Knowledge,
    autobot: Autobot
  };

  function Prototype({ mobile }) {
    const [route, setRoute] = useState("home");
    const [root, setRoot] = useState(null);
    const [userOpen, setUserOpen] = useState(false);

    /* เก็บข้อมูลลง localStorage เพื่อให้แก้ไขโปรไฟล์ ตั้งกระทู้ หรือกดเซฟชีทแล้วไม่หายเมื่อรีเฟรช */
    const [profile, setProfile] = usePersistedState("sithero_profile_v1", DEFAULT_PROFILE);
    const [posts, setPosts] = usePersistedState("sithero_posts_v1", SEED_POSTS);
    const [notes, setNotes] = usePersistedState("sithero_notes_v1", SEED_NOTES);

    const [toastMsg, setToastMsg] = useState(null);
    const scrollRef = useRef(null);
    const timer = useRef(null);

    const toast = useCallback(function (m) {
      setToastMsg(m);
      clearTimeout(timer.current);
      timer.current = setTimeout(function () {
        setToastMsg(null);
      }, 2600);
    }, []);

    const go = useCallback(function (r) {
      setRoute(r);
      setUserOpen(false);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, []);

    const value = {
      mobile: mobile,
      route: route,
      go: go,
      toast: toast,
      root: root,
      profile: profile,
      setProfile: setProfile,
      posts: posts,
      setPosts: setPosts,
      notes: notes,
      setNotes: setNotes,
      openUser: function () {
        setUserOpen(true);
      }
    };

    const Screen = SCREENS[route] || Home;

    return h(
      Ctx.Provider,
      { value: value },
      h(
        "div",
        {
          ref: setRoot,
          className: cx(
            "relative h-full w-full overflow-hidden bg-ice font-sans text-[16px] leading-[1.6] text-navy",
            mobile && "m"
          )
        },
        h(
          "div",
          { ref: scrollRef, className: "h-full overflow-y-auto" },
          h(Navbar, null),
          h("main", null, h(Screen, { key: route }))
        ),
        userOpen &&
          h(UserModal, {
            onClose: function () {
              setUserOpen(false);
            }
          }),
        toastMsg && h(Toast, { msg: toastMsg })
      )
    );
  }

  function App() {
    const [mode, setMode] = useState(function () {
      return window.innerWidth < 700 ? "mobile" : "desktop";
    });
    const [fit, setFit] = useState(true);
    const [avail, setAvail] = useState(1200);
    const stage = useRef(null);

    useEffect(function () {
      const el = stage.current;
      if (!el) return void 0;
      function upd() {
        setAvail(el.clientWidth);
      }
      upd();
      if (typeof ResizeObserver === "undefined") {
        window.addEventListener("resize", upd);
        return function () {
          window.removeEventListener("resize", upd);
        };
      }
      const ro = new ResizeObserver(upd);
      ro.observe(el);
      return function () {
        ro.disconnect();
      };
    }, []);

    const mobile = mode === "mobile";
    const W = mobile ? 390 : 1440;
    const H = mobile ? 844 : 900;
    const scale = fit ? Math.min(1, avail / W) : 1;

    function seg(active) {
      return cx(
        "btn-press inline-flex min-h-[40px] items-center gap-2 px-4 text-[13px] font-medium transition-colors",
        active ? "bg-[#2C4966] text-white" : "bg-white text-[#0D1C36] hover:bg-[#F6F9FA]"
      );
    }

    function resetDemoData() {
      try {
        window.localStorage.removeItem("sithero_profile_v1");
        window.localStorage.removeItem("sithero_posts_v1");
        window.localStorage.removeItem("sithero_notes_v1");
      } catch (e) {}
      window.location.reload();
    }

    return h(
      "div",
      { className: "mx-auto flex w-full flex-col gap-5", style: { maxWidth: 1480 } },
      /* Top Stage Control Bar */
      h(
        "div",
        { className: "flex flex-wrap items-center justify-between gap-3" },
        h(
          "div",
          null,
          h("h1", { className: "text-[18px] font-semibold text-[#0D1C36]" }, "SIT Hero (IT Hero) — Modular Prototype"),
          h(
            "p",
            { className: "text-[13px] text-[#51627A]" },
            "SIT KMUTT B.Sc. IT Curriculum (Years 1–4) · Frame ",
            W,
            " × ",
            H,
            " px"
          )
        ),
        h(
          "div",
          { className: "flex flex-wrap items-center gap-2.5" },
          h(
            "button",
            {
              type: "button",
              onClick: resetDemoData,
              className: "btn-press min-h-[40px] rounded-xl border border-[#C9D8DE] bg-white px-3.5 text-[13px] font-medium text-[#51627A] hover:text-[#0D1C36]"
            },
            "Reset Demo Data"
          ),
          h(
            "div",
            {
              className: "inline-flex overflow-hidden rounded-xl border border-[#C9D8DE]",
              role: "group",
              "aria-label": "Viewport"
            },
            h(
              "button",
              {
                type: "button",
                "aria-pressed": !mobile,
                className: seg(!mobile),
                onClick: function () {
                  setMode("desktop");
                }
              },
              "Desktop 1440"
            ),
            h(
              "button",
              {
                type: "button",
                "aria-pressed": mobile,
                className: cx(seg(mobile), "border-l border-[#C9D8DE]"),
                onClick: function () {
                  setMode("mobile");
                }
              },
              "Mobile 390"
            )
          ),
          h(
            "div",
            {
              className: "inline-flex overflow-hidden rounded-xl border border-[#C9D8DE]",
              role: "group",
              "aria-label": "Zoom"
            },
            h(
              "button",
              {
                type: "button",
                "aria-pressed": fit,
                className: seg(fit),
                onClick: function () {
                  setFit(true);
                }
              },
              "Fit"
            ),
            h(
              "button",
              {
                type: "button",
                "aria-pressed": !fit,
                className: cx(seg(!fit), "border-l border-[#C9D8DE]"),
                onClick: function () {
                  setFit(false);
                }
              },
              "100%"
            )
          )
        )
      ),
      /* Device Viewport Stage */
      h(
        "div",
        { ref: stage, className: "w-full", style: { overflowX: "auto", paddingBottom: 8 } },
        h(
          "div",
          { style: { width: W * scale, height: H * scale, margin: "0 auto" } },
          h(
            "div",
            {
              className: "rounded-[20px] border border-[#C9D8DE] shadow-xl",
              style: {
                width: W,
                height: H,
                transform: "scale(" + scale + ")",
                transformOrigin: "top left",
                overflow: "hidden",
                background: "#F6F9FA"
              }
            },
            h(Prototype, { mobile: mobile })
          )
        )
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App, null));
})();

