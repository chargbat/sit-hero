/* ==========================================================================
   SIT Hero (IT Hero) — Modal & Confirmation Dialog Components
   ========================================================================== */

window.ITHeroCommon = window.ITHeroCommon || {};

(function () {
  const h = React.createElement;
  const { useRef, useEffect } = React;
  const { createPortal } = ReactDOM;
  const { cx, btnGhost, btnDanger, iconBtn, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;

  const modalStack = [];

  function Modal({ onClose, title, width = 640, children }) {
    const { root, mobile } = useApp();
    const ref = useRef(null);
    const idRef = useRef({});
    const closeRef = useRef(onClose);
    closeRef.current = onClose;

    useEffect(function () {
      const id = idRef.current;
      modalStack.push(id);
      const prev = document.activeElement;
      const el = ref.current;
      if (el) {
        const f = el.querySelector("input,textarea,select,button");
        if (f) f.focus();
      }
      function onKey(e) {
        if (modalStack[modalStack.length - 1] !== id) return;
        if (e.key === "Escape") {
          e.stopPropagation();
          closeRef.current();
        }
      }
      window.addEventListener("keydown", onKey);
      return function () {
        const i = modalStack.indexOf(id);
        if (i !== -1) modalStack.splice(i, 1);
        window.removeEventListener("keydown", onKey);
        if (prev && prev.focus) prev.focus();
      };
    }, []);

    if (!root) return null;

    return createPortal(
      h(
        "div",
        {
          className: cx(
            "anim-fade-in absolute inset-0 z-40 flex items-center justify-center bg-navy/50 backdrop-blur-sm",
            mobile ? "p-3" : "p-6"
          ),
          onMouseDown: function (e) {
            if (e.target === e.currentTarget) onClose();
          }
        },
        h(
          "div",
          {
            ref: ref,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": title,
            style: { maxWidth: width },
            className: "anim-modal-panel flex max-h-[90%] w-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
          },
          children
        )
      ),
      root
    );
  }

  function ModalHeader({ title, onClose }) {
    return h(
      "div",
      { className: "flex items-center justify-between border-b border-line px-6 py-4" },
      h("h2", { className: "t-h3 text-navy" }, title),
      h(
        "button",
        { type: "button", onClick: onClose, "aria-label": "Close", className: iconBtn },
        h(Icon, { n: "x", size: 22 })
      )
    );
  }

  function Confirm({ title, body, confirmLabel = "Delete", onConfirm, onClose }) {
    return h(
      Modal,
      { onClose: onClose, title: title, width: 420 },
      h(
        "div",
        { className: "flex flex-col gap-4 p-6" },
        h("h2", { className: "t-h3 text-navy" }, title),
        h("p", { className: "text-[15px] text-muted" }, body),
        h(
          "div",
          { className: "flex justify-end gap-3 pt-2" },
          h("button", { type: "button", className: btnGhost, onClick: onClose }, "Cancel"),
          h("button", { type: "button", className: btnDanger, onClick: onConfirm }, confirmLabel)
        )
      )
    );
  }

  Object.assign(window.ITHeroCommon, {
    Modal: Modal,
    ModalHeader: ModalHeader,
    Confirm: Confirm
  });
})();

