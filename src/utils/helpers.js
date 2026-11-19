/* ==========================================================================
   SIT Hero (IT Hero) — Shared Utilities, Styling Tokens & App Context
   ========================================================================== */

window.ITHeroUtils = window.ITHeroUtils || {};

const { createContext, useContext, useState, useEffect } = React;

/* 1. Helper Functions */
function cx() {
  const out = [];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i]) out.push(arguments[i]);
  }
  return out.join(" ");
}

function timeAgo(m) {
  if (m < 1) return "just now";
  if (m < 60) return m + "m ago";
  const h = Math.round(m / 60);
  if (h < 24) return h + "h ago";
  return Math.round(h / 24) + "d ago";
}

function termTag(y, t) {
  return "Y" + y + " T" + t;
}

function countComments(p) {
  return (p.comments || []).reduce(function (n, c) {
    return n + 1 + (c.replies ? c.replies.length : 0);
  }, 0);
}

/* 2. Persistent State Hook (เซฟข้อมูลลง localStorage อัตโนมัติ) */
function usePersistedState(storageKey, defaultValue) {
  const [state, setState] = useState(function () {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw !== null) return JSON.parse(raw);
    } catch (e) {
      /* Ignore storage access errors */
    }
    return defaultValue;
  });

  useEffect(function () {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (e) {
      /* Ignore storage quota errors */
    }
  }, [storageKey, state]);

  return [state, setState];
}

/* 3. Reusable Button & Input Classes (พร้อมคลาส .btn-press สำหรับ Animation) */
const btnBase = "btn-press inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-4 text-[15px] font-medium transition-colors select-none";
const btnPrimary = cx(btnBase, "bg-steel text-white hover:bg-navy");
const btnGhost = cx(btnBase, "border border-line bg-white text-navy hover:border-ocean hover:bg-ice");
const btnDanger = cx(btnBase, "bg-danger text-white hover:opacity-95");
const iconBtn = "btn-press inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-navy/70 transition-colors hover:bg-ice hover:text-navy";
const inputCls = "min-h-[44px] w-full rounded-xl border border-line bg-white px-3.5 text-[16px] text-navy placeholder:text-muted/70 focus:border-ocean focus:outline-none transition-colors";

/* 4. Global App Context */
const Ctx = createContext(null);
function useApp() {
  return useContext(Ctx);
}

window.ITHeroUtils = {
  cx: cx,
  timeAgo: timeAgo,
  termTag: termTag,
  countComments: countComments,
  usePersistedState: usePersistedState,
  btnBase: btnBase,
  btnPrimary: btnPrimary,
  btnGhost: btnGhost,
  btnDanger: btnDanger,
  iconBtn: iconBtn,
  inputCls: inputCls,
  Ctx: Ctx,
  useApp: useApp
};

