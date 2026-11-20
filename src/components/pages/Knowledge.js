/* ==========================================================================
   SIT Hero (IT Hero) — 4) Knowledge Vault Page
   (ตรงตาม Wireframe หน้า 16–20: Browse All, My Saved Folders, Share Summary Note, PDF Preview)
   ========================================================================== */

window.ITHeroPages = window.ITHeroPages || {};

(function () {
  const h = React.createElement;
  const { useState, useMemo, useEffect } = React;
  const { cx, termTag, btnBase, btnPrimary, btnGhost, iconBtn, inputCls, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;
  const { CourseBadge, Select, Empty, Modal, ModalHeader, Confirm, Page, PageHeader } = window.ITHeroCommon;
  const { ME } = window.ITHeroData;

  function NoteCard({ n, index, onOpen, onToggleSave, onDelete }) {
    const mine = n.by === ME;
    const yearAccent =
      n.year === 1
        ? n.term === 1
          ? "border-t-emerald-400"
          : "border-t-sky-400"
        : n.year === 2
          ? "border-t-indigo-400"
          : "border-t-brandOrange";
    const yearBadgeCls =
      n.year === 1
        ? n.term === 1
          ? "bg-mint text-navy"
          : "bg-sky-100 text-sky-900"
        : n.year === 2
          ? "bg-indigo-100 text-indigo-900"
          : "bg-brandOrangeLight text-brandOrange";

    return h(
      "article",
      {
        className: cx(
          "anim-fade-up hover-lift flex flex-col justify-between gap-4 rounded-xl border border-line border-t-[3px] bg-white p-5 transition-colors hover:border-ocean",
          yearAccent,
          "stagger-" + ((index % 6) + 1)
        )
      },
      h(
        "div",
        { className: "flex flex-col gap-3" },
        h(
          "div",
          { className: "flex items-center justify-between gap-2" },
          h(CourseBadge, { code: n.code }),
          h(
            "div",
            { className: "flex items-center gap-1" },
            mine &&
              h(
                "button",
                {
                  type: "button",
                  onClick: onDelete,
                  "aria-label": "Delete your note",
                  className: cx(iconBtn, "!text-danger hover:!bg-danger/10")
                },
                h(Icon, { n: "trash", size: 18 })
              ),
            h(
              "button",
              {
                type: "button",
                "aria-pressed": !!n.saved,
                onClick: onToggleSave,
                "aria-label": n.saved ? "Remove from My Saved" : "Save note",
                className: cx(
                  iconBtn,
                  n.saved ? "!text-steel bg-mint/50" : "text-muted hover:text-navy"
                )
              },
              h(Icon, {
                n: "bookmark",
                size: 19,
                fill: n.saved ? "currentColor" : "none",
                className: n.saved ? "anim-pop" : ""
              })
            )
          )
        ),
        h(
          "button",
          { type: "button", onClick: onOpen, className: "text-left group" },
          h(
            "h3",
            { className: "t-h3 text-navy group-hover:text-steel transition-colors" },
            n.title
          ),
          h("p", { className: "mt-1 text-[14px] text-muted" }, "โดย ", n.by)
        )
      ),
      h(
        "div",
        { className: "flex items-center justify-between border-t border-line pt-3 text-[13px] text-muted" },
        h(
          "span",
          { className: cx("rounded-md px-2.5 py-1 font-mono text-[12px] font-semibold", yearBadgeCls) },
          termTag(n.year, n.term)
        ),
        h(
          "button",
          {
            type: "button",
            onClick: onOpen,
            className: "btn-press inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-ice px-3 py-1.5 font-medium text-steel transition-colors hover:bg-mint/70 hover:text-navy"
          },
          h(Icon, { n: "file", size: 15 }),
          n.pages || 8,
          " หน้า · อ่านพรีวิว"
        )
      )
    );
  }

  function FolderCard({ code, count, index, onOpen, menuOpen, setMenuOpen, onRemoveAll }) {
    return h(
      "div",
      {
        className: cx(
          "anim-fade-up hover-lift group relative flex flex-col justify-between rounded-xl border border-line border-t-[3px] border-t-ocean bg-white p-5 transition-colors hover:border-ocean",
          "stagger-" + ((index % 6) + 1)
        )
      },
      h(
        "div",
        { className: "flex items-start justify-between" },
        h(
          "button",
          {
            type: "button",
            onClick: onOpen,
            className: "flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-steel transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-steel group-hover:text-white group-hover:shadow-sm"
          },
          h(Icon, { n: "folder", size: 26 })
        ),
        h(
          "div",
          {
            className: "relative",
            onClick: function (e) {
              e.stopPropagation();
            }
          },
          h(
            "button",
            {
              type: "button",
              "aria-label": "Folder options for " + code,
              onClick: function () {
                setMenuOpen(menuOpen ? null : code);
              },
              className: iconBtn
            },
            h(Icon, { n: "more", size: 18 })
          ),
          menuOpen &&
            h(
              "div",
              {
                className: "anim-accordion absolute right-0 top-full z-20 mt-1 w-48 rounded-xl border border-line bg-white p-1.5 shadow-xl"
              },
              h(
                "button",
                {
                  type: "button",
                  onClick: onRemoveAll,
                  className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-danger hover:bg-danger/10"
                },
                h(Icon, { n: "trash", size: 15 }),
                "Unbookmark all in ",
                code
              )
            )
        )
      ),
      h(
        "button",
        { type: "button", onClick: onOpen, className: "mt-4 text-left" },
        h("p", { className: "font-mono text-[20px] font-bold text-navy" }, code),
        h("p", { className: "text-[13px] text-muted" }, count, count === 1 ? " saved note" : " saved notes")
      )
    );
  }

  function NotePreview({ note, onClose }) {
    const { toast } = useApp();
    const [page, setPage] = useState(1);
    const total = note.pages || 10;
    const bullets = note.summary || [
      "1. สรุปแนวคิดสำคัญและนิยามหลักประจำสัปดาห์",
      "2. ตัวอย่างโจทย์และการประยุกต์ใช้งานจริงในห้องปฏิบัติการ (Lab)",
      "3. จุดที่มักออกสอบและข้อควรระวัง (Exam Pitfalls)"
    ];

    return h(
      Modal,
      { onClose: onClose, title: note.title, width: 760 },
      h(
        "div",
        { className: "flex items-center justify-between border-b border-line px-6 py-4" },
        h(
          "div",
          { className: "flex items-center gap-3 min-w-0" },
          h(CourseBadge, { code: note.code }),
          h(
            "div",
            { className: "min-w-0" },
            h("h2", { className: "truncate text-[18px] font-semibold text-navy" }, note.title + ".pdf"),
            h(
              "p",
              { className: "text-[13px] text-muted" },
              "Shared by ",
              note.by,
              " · ",
              termTag(note.year, note.term)
            )
          )
        ),
        h(
          "div",
          { className: "flex items-center gap-2" },
          h(
            "button",
            {
              type: "button",
              onClick: function () {
                toast("กำลังดาวน์โหลด " + note.code + " - " + note.title + ".pdf");
              },
              className: btnPrimary
            },
            h(Icon, { n: "download", size: 17 }),
            "Download PDF"
          ),
          h(
            "button",
            { type: "button", onClick: onClose, "aria-label": "Close", className: iconBtn },
            h(Icon, { n: "x", size: 22 })
          )
        )
      ),
      h(
        "div",
        { className: "flex-1 overflow-y-auto bg-ice p-6" },
        h(
          "div",
          {
            key: page,
            className: "anim-sheet-turn mx-auto max-w-[620px] rounded-xl border border-line bg-white p-8 shadow-sm"
          },
          h(
            "div",
            { className: "flex items-center justify-between border-b border-line pb-4" },
            h("span", { className: "font-mono text-[13px] font-semibold text-ocean" }, "SIT KMUTT STUDY DIGEST · " + note.code),
            h("span", { className: "font-mono text-[13px] text-muted" }, "Pages " + page + " / " + total)
          ),
          h("h3", { className: "mt-5 t-h3 text-navy" }, note.title + " (หน้าที่ " + page + ")"),
          h(
            "p",
            { className: "mt-2 text-[14px] text-muted" },
            "เอกสารสรุปเนื้อหาสำคัญสำหรับทบทวนก่อนสอบและใช้ประกอบการทำปฏิบัติการ"
          ),
          h(
            "ul",
            { className: "mt-5 flex flex-col gap-3" },
            bullets.map(function (line, i) {
              return h(
                "li",
                { key: i, className: "rounded-xl bg-ice p-3.5 text-[15px] text-navy border border-line/60" },
                line
              );
            })
          )
        )
      ),
      h(
        "div",
        { className: "flex items-center justify-between border-t border-line bg-white px-6 py-3" },
        h(
          "button",
          {
            type: "button",
            disabled: page <= 1,
            onClick: function () {
              setPage(Math.max(1, page - 1));
            },
            className: cx(btnGhost, "!min-h-[38px] !px-3.5", page <= 1 && "opacity-40 cursor-not-allowed")
          },
          h(Icon, { n: "chevLeft", size: 16 }),
          "Prev"
        ),
        h("span", { className: "font-mono text-[14px] font-semibold text-navy" }, "Pages " + page + " / " + total),
        h(
          "button",
          {
            type: "button",
            disabled: page >= total,
            onClick: function () {
              setPage(Math.min(total, page + 1));
            },
            className: cx(btnGhost, "!min-h-[38px] !px-3.5", page >= total && "opacity-40 cursor-not-allowed")
          },
          "Next",
          h(Icon, { n: "chevRight", size: 16 })
        )
      )
    );
  }

  function ShareModal({ onClose, onUpload }) {
    const [year, setYear] = useState("1");
    const [term, setTerm] = useState("1");
    const [code, setCode] = useState("");
    const [title, setTitle] = useState("");
    const [fileName, setFileName] = useState("");
    const [err, setErr] = useState("");

    function submit() {
      if (!code.trim()) {
        setErr("กรุณากรอกรหัสวิชา (เช่น INT101)");
        return;
      }
      if (!title.trim()) {
        setErr("กรุณาตั้งชื่อไฟล์สรุป");
        return;
      }
      onUpload({
        code: code.trim().toUpperCase(),
        title: title.trim(),
        year: +year,
        term: +term,
        fileName: fileName || title.trim() + ".pdf"
      });
    }

    return h(
      Modal,
      { onClose: onClose, title: "Share Summary Note", width: 560 },
      h(ModalHeader, { title: "Share Summary Note", onClose: onClose }),
      h(
        "div",
        { className: "flex flex-col gap-4 overflow-y-auto p-6" },
        err &&
          h(
            "p",
            { role: "alert", className: "rounded-xl bg-danger/10 px-4 py-2.5 text-[14px] font-medium text-danger" },
            err
          ),
        h(
          "label",
          {
            htmlFor: "sh-file",
            className: "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ocean/60 bg-ice px-6 py-8 text-center transition-colors hover:bg-mint/40"
          },
          h(Icon, { n: "upload", size: 28, className: "text-steel" }),
          h(
            "span",
            { className: "text-[15px] font-semibold text-navy" },
            fileName ? fileName : "Click to select or upload file"
          ),
          h("span", { className: "text-[13px] text-muted" }, "PDF, JPG, PNG (Max 10 MB)"),
          h("input", {
            id: "sh-file",
            type: "file",
            accept: ".pdf,.jpg,.jpeg,.png",
            className: "sr-only",
            onChange: function (e) {
              const f = e.target.files && e.target.files[0];
              if (f) {
                setFileName(f.name);
                if (!title) setTitle(f.name.replace(/\.[^.]+$/, ""));
              }
            }
          })
        ),
        h(
          "div",
          { className: "grid grid-cols-2 gap-3" },
          h(
            Select,
            { id: "sh-year", label: "Select Year", value: year, onChange: setYear },
            [1, 2, 3, 4].map(function (y) {
              return h("option", { key: y, value: y }, "Year " + y);
            })
          ),
          h(
            Select,
            { id: "sh-term", label: "Select Term", value: term, onChange: setTerm },
            [1, 2].map(function (t) {
              return h("option", { key: t, value: t }, "Term " + t);
            })
          )
        ),
        h(
          "div",
          { className: "flex flex-col gap-1.5" },
          h("label", { htmlFor: "sh-code", className: "text-[13px] font-semibold text-muted" }, "พิมพ์ Course Code (Ex. INT101) *"),
          h("input", {
            id: "sh-code",
            value: code,
            onChange: function (e) {
              setCode(e.target.value);
              setErr("");
            },
            placeholder: "Ex. INT101, INT120, INT241",
            className: inputCls
          })
        ),
        h(
          "div",
          { className: "flex flex-col gap-1.5" },
          h("label", { htmlFor: "sh-title", className: "text-[13px] font-semibold text-muted" }, "ชื่อชีทสรุป (Note Title) *"),
          h("input", {
            id: "sh-title",
            value: title,
            onChange: function (e) {
              setTitle(e.target.value);
              setErr("");
            },
            placeholder: "Ex. Midterm Summary Notes",
            className: inputCls
          })
        ),
        h(
          "div",
          { className: "flex justify-end gap-3 pt-2" },
          h("button", { type: "button", className: btnGhost, onClick: onClose }, "Cancel"),
          h("button", { type: "button", className: btnPrimary, onClick: submit }, "Upload")
        )
      )
    );
  }

  function Knowledge() {
    const { mobile, toast, notes, setNotes } = useApp();
    const [tab, setTab] = useState("browse");
    const [year, setYear] = useState("");
    const [term, setTerm] = useState("");
    const [q, setQ] = useState("");
    const [folder, setFolder] = useState(null);
    const [menu, setMenu] = useState(null);
    const [shareOpen, setShareOpen] = useState(false);
    const [previewId, setPreviewId] = useState(null);
    const [delId, setDelId] = useState(null);

    useEffect(
      function () {
        if (!menu) return void 0;
        function close() {
          setMenu(null);
        }
        window.addEventListener("click", close);
        return function () {
          window.removeEventListener("click", close);
        };
      },
      [menu]
    );

    function matches(n) {
      const matchYear = !year || String(n.year) === year;
      const matchTerm = !term || String(n.term) === term;
      const matchQ =
        !q.trim() || (n.code + " " + n.title).toLowerCase().includes(q.trim().toLowerCase());
      return matchYear && matchTerm && matchQ;
    }

    const browse = notes.filter(matches);
    const savedAll = notes.filter(function (n) {
      return n.saved && matches(n);
    });

    const folders = useMemo(
      function () {
        const m = {};
        notes
          .filter(function (n) {
            return n.saved && matches(n);
          })
          .forEach(function (n) {
            m[n.code] = (m[n.code] || 0) + 1;
          });
        return Object.keys(m)
          .sort()
          .map(function (c) {
            return [c, m[c]];
          });
      },
      [notes, year, term, q]
    );

    const inFolder = savedAll.filter(function (n) {
      return n.code === folder;
    });

    useEffect(
      function () {
        if (
          folder &&
          notes.every(function (n) {
            return !(n.saved && n.code === folder);
          })
        ) {
          setFolder(null);
        }
      },
      [notes, folder]
    );

    function toggleSave(id) {
      const target = notes.find(function (x) {
        return x.id === id;
      });
      setNotes(function (ns) {
        return ns.map(function (x) {
          return x.id === id ? Object.assign({}, x, { saved: !x.saved }) : x;
        });
      });
      if (target) {
        toast(target.saved ? "นำออกจากที่บันทึกไว้แล้ว" : "บันทึกเข้าโฟลเดอร์ " + target.code + " แล้ว");
      }
    }

    function removeFolder(code) {
      setNotes(function (ns) {
        return ns.map(function (x) {
          return x.code === code ? Object.assign({}, x, { saved: false }) : x;
        });
      });
      setMenu(null);
      toast("นำชีททั้งหมดในโฟลเดอร์ " + code + " ออกแล้ว");
    }

    function upload({ code, title, year: y, term: t }) {
      const next = {
        id: "n" + Date.now(),
        code: code,
        title: title,
        by: ME,
        year: y,
        term: t,
        pages: 8,
        saved: true
      };
      setNotes(function (ns) {
        return [next].concat(ns);
      });
      setShareOpen(false);
      toast("อัปโหลดชีทสรุปเรียบร้อยแล้ว!");
    }

    function confirmDelete() {
      setNotes(function (ns) {
        return ns.filter(function (x) {
          return x.id !== delId;
        });
      });
      if (previewId === delId) setPreviewId(null);
      setDelId(null);
      toast("ลบชีทสรุปเรียบร้อยแล้ว");
    }

    function clearFilters() {
      setYear("");
      setTerm("");
      setQ("");
    }

    const filtered = !!(year || term || q.trim());
    const preview = notes.find(function (x) {
      return x.id === previewId;
    });

    function renderCards(arr) {
      return h(
        "div",
        {
          key: tab + "-" + year + "-" + term + "-" + (folder || ""),
          className: cx("grid gap-4", mobile ? "grid-cols-1" : "grid-cols-3")
        },
        arr.map(function (n, idx) {
          return h(NoteCard, {
            key: n.id,
            n: n,
            index: idx,
            onOpen: function () {
              setPreviewId(n.id);
            },
            onToggleSave: function () {
              toggleSave(n.id);
            },
            onDelete: function () {
              setDelId(n.id);
            }
          });
        })
      );
    }

    return h(
      Page,
      null,
      h(PageHeader, {
        title: "Knowledge Vault",
        sub: "คลังชีทสรุปและเอกสารประกอบการเรียน SIT KMUTT",
        right: h(
          "button",
          {
            type: "button",
            className: btnPrimary,
            onClick: function () {
              setShareOpen(true);
            }
          },
          h(Icon, { n: "upload", size: 18 }),
          "Share Notes"
        )
      }),

      /* Tabs: Browse All vs My Saved */
      h(
        "div",
        { className: "mb-5 flex flex-wrap items-center justify-between gap-3" },
        h(
          "div",
          { className: "flex items-center gap-2", role: "tablist" },
          [
            ["browse", "Browse All"],
            ["saved", "My Saved"]
          ].map(function ([k, label]) {
            const active = tab === k;
            return h(
              "button",
              {
                key: k,
                type: "button",
                role: "tab",
                "aria-selected": active,
                onClick: function () {
                  setTab(k);
                  setFolder(null);
                },
                className: cx(
                  btnBase,
                  "!px-5",
                  active ? "bg-steel text-white" : "border border-line bg-white text-navy hover:border-ocean"
                )
              },
              label
            );
          })
        ),
        tab === "saved" &&
          folder &&
          h(
            "button",
            {
              type: "button",
              onClick: function () {
                setFolder(null);
              },
              className: btnGhost
            },
            h(Icon, { n: "arrowLeft", size: 17 }),
            "Back to Saved Folders (",
            folder,
            ")"
          )
      ),

      /* Filters: Year, Term, Search */
      h(
        "div",
        {
          className: cx(
            "mb-5 grid gap-3",
            mobile ? "grid-cols-2" : "grid-cols-[180px_180px_1fr]"
          )
        },
        h(
          Select,
          { id: "kv-year", label: "Year", hideLabel: true, value: year, onChange: setYear },
          h("option", { value: "" }, "Year (All)"),
          [1, 2, 3, 4].map(function (y) {
            return h("option", { key: y, value: y }, "Year " + y);
          })
        ),
        h(
          Select,
          { id: "kv-term", label: "Term", hideLabel: true, value: term, onChange: setTerm },
          h("option", { value: "" }, "Term (All)"),
          [1, 2].map(function (t) {
            return h("option", { key: t, value: t }, "Term " + t);
          })
        ),
        h(
          "div",
          { className: cx("relative", mobile && "col-span-2") },
          h(Icon, {
            n: "search",
            className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ocean"
          }),
          h("input", {
            id: "kv-search",
            value: q,
            onChange: function (e) {
              setQ(e.target.value);
            },
            placeholder: "Search course code or title... (e.g. INT101, INT120)",
            "aria-label": "Search course code or title",
            className: cx(inputCls, "pl-11")
          })
        )
      ),

      /* Content Area */
      tab === "browse" &&
        (browse.length
          ? renderCards(browse)
          : h(Empty, {
              title: "ไม่พบชีทสรุปที่ตรงกับตัวกรอง",
              sub: "ลองเปลี่ยนรหัสวิชา ล้างตัวกรอง หรืออัปโหลดชีทสรุปของคุณเพื่อแบ่งปันให้เพื่อนๆ",
              action: h(
                "div",
                { className: "flex flex-wrap justify-center gap-3" },
                filtered &&
                  h(
                    "button",
                    { type: "button", className: btnGhost, onClick: clearFilters },
                    "Clear filters"
                  ),
                h(
                  "button",
                  {
                    type: "button",
                    className: btnPrimary,
                    onClick: function () {
                      setShareOpen(true);
                    }
                  },
                  "Share Notes"
                )
              )
            })),

      tab === "saved" &&
        !folder &&
        (folders.length
          ? h(
              "div",
              { className: cx("grid gap-4", mobile ? "grid-cols-2" : "grid-cols-4") },
              folders.map(function ([c, count], idx) {
                return h(FolderCard, {
                  key: c,
                  code: c,
                  count: count,
                  index: idx,
                  onOpen: function () {
                    setMenu(null);
                    setFolder(c);
                  },
                  menuOpen: menu === c,
                  setMenuOpen: setMenu,
                  onRemoveAll: function () {
                    removeFolder(c);
                  }
                });
              })
            )
          : h(Empty, {
              icon: "folder",
              title: filtered ? "ไม่พบโฟลเดอร์ที่ตรงกับตัวกรอง" : "ยังไม่มีชีทสรุปที่บันทึกไว้",
              sub: "กดปุ่มรูปที่คั่นหนังสือ (Bookmark) บนชีทสรุปในหน้า Browse All เพื่อจัดเก็บเข้าโฟลเดอร์แยกตามรหัสวิชาอัตโนมัติ",
              action: filtered
                ? h("button", { type: "button", className: btnGhost, onClick: clearFilters }, "Clear filters")
                : h(
                    "button",
                    {
                      type: "button",
                      className: btnPrimary,
                      onClick: function () {
                        setTab("browse");
                      }
                    },
                    "Browse All"
                  )
            })),

      tab === "saved" &&
        folder &&
        (inFolder.length
          ? renderCards(inFolder)
          : h(Empty, {
              icon: "folder",
              title: "ไม่พบชีทสรุปในโฟลเดอร์นี้",
              sub: "ลองล้างตัวกรองเพื่อดูชีทสรุปทั้งหมดที่บันทึกไว้ในวิชานี้",
              action: h("button", { type: "button", className: btnGhost, onClick: clearFilters }, "Clear filters")
            })),

      shareOpen &&
        h(ShareModal, {
          onClose: function () {
            setShareOpen(false);
          },
          onUpload: upload
        }),
      preview &&
        h(NotePreview, {
          note: preview,
          onClose: function () {
            setPreviewId(null);
          }
        }),
      delId &&
        h(Confirm, {
          title: "ยืนยันการลบชีทสรุป?",
          body: "ไฟล์ชีทสรุปนี้จะถูกลบออกจากระบบอย่างถาวร",
          confirmLabel: "ลบชีทสรุป",
          onClose: function () {
            setDelId(null);
          },
          onConfirm: confirmDelete
        })
    );
  }

  window.ITHeroPages.Knowledge = Knowledge;
})();

