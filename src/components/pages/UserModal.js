/* ==========================================================================
   SIT Hero (IT Hero) — User Info & Edit Profile Modal
   (ตรงตาม Wireframe หน้า 3–4: Name, History, Username, Bio, Email, Edit & Save)
   ========================================================================== */

window.ITHeroPages = window.ITHeroPages || {};

(function () {
  const h = React.createElement;
  const { useState } = React;
  const { cx, btnPrimary, btnGhost, iconBtn, inputCls, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;
  const { ProfilePhoto, Modal } = window.ITHeroCommon;

  function EditField({ id, label, value, onChange, edit, multiline }) {
    return h(
      "div",
      { className: "flex flex-col gap-1.5" },
      h("label", { htmlFor: id, className: "text-[13px] font-semibold text-muted" }, label),
      edit
        ? h(
            "div",
            { className: "relative" },
            multiline
              ? h("textarea", {
                  id: id,
                  rows: 3,
                  value: value,
                  onChange: function (e) {
                    onChange(e.target.value);
                  },
                  className: cx(inputCls, "resize-none py-3 pr-11")
                })
              : h("input", {
                  id: id,
                  value: value,
                  onChange: function (e) {
                    onChange(e.target.value);
                  },
                  className: cx(inputCls, "pr-11")
                }),
            h(Icon, {
              n: "pencil",
              size: 16,
              className: cx(
                "pointer-events-none absolute right-4 text-ocean",
                multiline ? "top-4" : "top-1/2 -translate-y-1/2"
              )
            })
          )
        : h("div", { id: id, className: "min-h-[44px] rounded-xl bg-ice px-4 py-2.5 text-[15px] text-navy" }, value)
    );
  }

  function UserModal({ onClose }) {
    const { mobile, profile, setProfile, toast } = useApp();
    const [edit, setEdit] = useState(false);
    const [d, setD] = useState(profile);

    function set(k) {
      return function (v) {
        setD(Object.assign({}, d, { [k]: v }));
      };
    }

    function save() {
      setProfile(d);
      setEdit(false);
      toast("Profile saved");
    }

    function startEdit() {
      setD(profile);
      setEdit(true);
    }

    function cancel() {
      setD(profile);
      setEdit(false);
    }

    const shown = edit ? d : profile;

    return h(
      Modal,
      { onClose: onClose, title: "User info", width: 880 },
      h(
        "div",
        { className: "flex items-center justify-end px-4 pt-3" },
        h(
          "button",
          { type: "button", onClick: onClose, "aria-label": "Close", className: iconBtn },
          h(Icon, { n: "x", size: 22 })
        )
      ),
      h(
        "div",
        {
          className: cx(
            "grid gap-8 overflow-y-auto px-8 pb-6",
            mobile ? "grid-cols-1" : "grid-cols-[280px_1fr]"
          )
        },
        h(
          "div",
          { className: "flex flex-col items-center gap-4" },
          h(
            "div",
            { className: "relative" },
            h(ProfilePhoto, { size: mobile ? 120 : 168 }),
            edit &&
              h(
                "span",
                {
                  className: "absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-ocean text-white"
                },
                h(Icon, { n: "pencil", size: 18 })
              )
          ),
          h(
            "div",
            { className: "flex w-full flex-col gap-3 text-center" },
            edit
              ? h(
                  React.Fragment,
                  null,
                  h(EditField, {
                    id: "u-username",
                    label: "Username",
                    value: shown.username,
                    onChange: set("username"),
                    edit: true
                  }),
                  h(EditField, {
                    id: "u-email",
                    label: "Email:",
                    value: shown.email,
                    onChange: set("email"),
                    edit: true
                  })
                )
              : h(
                  React.Fragment,
                  null,
                  h("p", { className: "text-[22px] font-semibold text-navy" }, shown.username),
                  h(
                    "p",
                    { className: "text-[15px] text-muted" },
                    h("span", { className: "font-semibold" }, "Email:"),
                    " ",
                    shown.email
                  ),
                  h(
                    "button",
                    { type: "button", className: cx(btnPrimary, "mt-1 w-full"), onClick: startEdit },
                    "Edit profile"
                  )
                )
          )
        ),
        h(
          "div",
          { className: "flex flex-col gap-4" },
          h("h2", { className: "t-h3 text-navy" }, "User Information"),
          h(EditField, { id: "u-name", label: "Name:", value: shown.name, onChange: set("name"), edit: edit }),
          h(EditField, {
            id: "u-bio",
            label: "Bio:",
            value: shown.bio,
            onChange: set("bio"),
            edit: edit,
            multiline: true
          }),
          h(EditField, {
            id: "u-history",
            label: "History:",
            value: shown.history,
            onChange: set("history"),
            edit: edit,
            multiline: true
          }),
          edit &&
            h(
              "div",
              { className: "flex justify-end gap-3 pt-2" },
              h("button", { type: "button", className: btnGhost, onClick: cancel }, "Cancel"),
              h("button", { type: "button", className: btnPrimary, onClick: save }, "Save")
            )
        )
      )
    );
  }

  window.ITHeroPages.UserModal = UserModal;
})();

