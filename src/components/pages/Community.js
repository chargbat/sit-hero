/* ==========================================================================
   SIT Hero (IT Hero) — 3) Community Page
   (ตรงตาม Wireframe หน้า 13–15: Feed, Filter Tags, Search, Sort, +New Post, Post Preview & Replies)
   ========================================================================== */

window.ITHeroPages = window.ITHeroPages || {};

(function () {
  const h = React.createElement;
  const { useState, useMemo, useEffect } = React;
  const { cx, timeAgo, countComments, btnBase, btnPrimary, btnGhost, iconBtn, inputCls, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;
  const { Avatar, Tag, Empty, Modal, ModalHeader, Confirm, Page, PageHeader } = window.ITHeroCommon;
  const { ME, SUGGEST_TAGS } = window.ITHeroData;

  function ActionBar({ p, onLike, onComment, onShare, onSave }) {
    return h(
      "div",
      { className: "flex flex-wrap items-center gap-1" },
      h(
        "button",
        {
          type: "button",
          "aria-pressed": !!p.liked,
          onClick: onLike,
          className: cx(
            "btn-press inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-[14px] font-medium transition-colors",
            p.liked ? "bg-mint text-steel" : "text-muted hover:bg-ice hover:text-navy"
          )
        },
        h(Icon, { n: "heart", size: 18, fill: p.liked ? "currentColor" : "none" }),
        h("span", { className: "font-mono" }, p.likes)
      ),
      h(
        "button",
        {
          type: "button",
          onClick: onComment,
          className: "btn-press inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-[14px] font-medium text-muted hover:bg-ice hover:text-navy"
        },
        h(Icon, { n: "comment", size: 18 }),
        h("span", { className: "font-mono" }, countComments(p))
      ),
      h(
        "button",
        {
          type: "button",
          onClick: onShare,
          "aria-label": "Share post",
          className: "btn-press inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-[14px] font-medium text-muted hover:bg-ice hover:text-navy"
        },
        h(Icon, { n: "share", size: 18 }),
        "Share"
      ),
      h(
        "button",
        {
          type: "button",
          "aria-pressed": !!p.saved,
          onClick: onSave,
          "aria-label": p.saved ? "Unsave post" : "Save post",
          className: cx(
            "btn-press ml-auto inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full",
            p.saved ? "text-steel" : "text-muted hover:bg-ice hover:text-navy"
          )
        },
        h(Icon, { n: "bookmark", size: 18, fill: p.saved ? "currentColor" : "none" })
      )
    );
  }

  function PostCard({ p, index, onOpen, onLike, onShare, onSave, onDelete }) {
    const mine = p.author === ME;
    return h(
      "article",
      {
        className: cx(
          "anim-fade-up hover-lift flex flex-col gap-3 rounded-xl border border-line bg-white p-5 transition-colors hover:border-ocean",
          "stagger-" + ((index % 6) + 1)
        )
      },
      h(
        "div",
        { className: "flex items-center justify-between gap-2" },
        h(
          "div",
          { className: "flex min-w-0 items-center gap-3" },
          h(Avatar, { name: p.author }),
          h(
            "div",
            { className: "min-w-0" },
            h(
              "p",
              { className: "truncate text-[15px] font-semibold text-navy" },
              p.author,
              mine &&
                h(
                  "span",
                  { className: "ml-2 rounded-full bg-mint px-2 py-0.5 text-[11px] font-medium text-navy" },
                  "You"
                )
            ),
            h("p", { className: "text-[13px] text-muted" }, timeAgo(p.mins))
          )
        ),
        mine &&
          h(
            "button",
            {
              type: "button",
              onClick: onDelete,
              "aria-label": "Delete your post",
              className: cx(iconBtn, "!text-danger hover:!bg-danger/10")
            },
            h(Icon, { n: "trash", size: 18 })
          )
      ),
      h(
        "button",
        { type: "button", onClick: onOpen, className: "text-left" },
        h("h3", { className: "t-h3 text-navy hover:text-steel transition-colors" }, p.title),
        p.body && h("p", { className: "mt-1 line-clamp-2 text-[15px] text-muted" }, p.body)
      ),
      h(
        "div",
        { className: "flex flex-wrap gap-2" },
        (p.tags || []).map(function (t) {
          return h(Tag, { key: t, t: t });
        })
      ),
      h(
        "div",
        { className: "border-t border-line pt-2" },
        h(ActionBar, {
          p: p,
          onLike: onLike,
          onComment: onOpen,
          onShare: onShare,
          onSave: onSave
        })
      )
    );
  }

  function CommentItem({ c, parentId, isReply, onLike, replyingTo, setReplyingTo, onReply }) {
    const [text, setText] = useState("");
    const authorName = c.author || c.user || "Student";
    const active = replyingTo === c.id;

    function submit() {
      if (!text.trim()) return;
      onReply(parentId, text.trim(), authorName);
      setText("");
      setReplyingTo(null);
    }

    return h(
      "div",
      { className: "flex gap-3" },
      h(Avatar, { name: authorName, size: isReply ? 32 : 40 }),
      h(
        "div",
        { className: "min-w-0 flex-1" },
        h(
          "div",
          { className: "rounded-xl bg-ice px-4 py-3" },
          h(
            "div",
            { className: "flex flex-wrap items-baseline gap-x-2" },
            h("span", { className: "text-[14px] font-semibold text-navy" }, authorName),
            h("span", { className: "text-[12px] text-muted" }, timeAgo(c.mins))
          ),
          h("p", { className: "mt-0.5 text-[15px] text-navy" }, c.text)
        ),
        h(
          "div",
          { className: "mt-1 flex items-center gap-1" },
          h(
            "button",
            {
              type: "button",
              "aria-pressed": !!c.liked,
              onClick: function () {
                onLike(c.id);
              },
              className: cx(
                "btn-press inline-flex min-h-[40px] items-center gap-1.5 rounded-full px-3 text-[13px] font-medium text-muted hover:bg-ice hover:text-navy",
                c.liked && "!text-steel"
              )
            },
            h(Icon, { n: "heart", size: 15, fill: c.liked ? "currentColor" : "none" }),
            " Like ",
            h("span", { className: "font-mono" }, c.likes)
          ),
          h(
            "button",
            {
              type: "button",
              onClick: function () {
                setReplyingTo(active ? null : c.id);
              },
              className: "btn-press inline-flex min-h-[40px] items-center gap-1.5 rounded-full px-3 text-[13px] font-medium text-muted hover:bg-ice hover:text-navy"
            },
            h(Icon, { n: "comment", size: 15 }),
            " Reply"
          )
        ),
        active &&
          h(
            "div",
            { className: "anim-accordion mb-2 mt-1 flex gap-2" },
            h("input", {
              autoFocus: true,
              value: text,
              onChange: function (e) {
                setText(e.target.value);
              },
              onKeyDown: function (e) {
                if (e.key === "Enter") submit();
              },
              placeholder: "Reply to " + authorName + "...",
              "aria-label": "Reply to " + authorName,
              className: inputCls
            }),
            h("button", { type: "button", className: btnPrimary, onClick: submit }, "Reply")
          ),
        c.replies &&
          c.replies.length > 0 &&
          h(
            "div",
            { className: "mt-2 flex flex-col gap-3 border-l-2 border-ocean/40 pl-4" },
            c.replies.map(function (r) {
              return h(CommentItem, {
                key: r.id,
                c: r,
                parentId: c.id,
                isReply: true,
                onLike: onLike,
                replyingTo: replyingTo,
                setReplyingTo: setReplyingTo,
                onReply: onReply
              });
            })
          )
      )
    );
  }

  function PostPreview({ postId, posts, setPosts, onClose, onShare }) {
    const p = posts.find(function (x) {
      return x.id === postId;
    });
    const [text, setText] = useState("");
    const [replyingTo, setReplyingTo] = useState(null);

    if (!p) return null;

    function patch(fn) {
      setPosts(function (ps) {
        return ps.map(function (x) {
          return x.id === postId ? fn(x) : x;
        });
      });
    }

    function likePost() {
      patch(function (x) {
        return Object.assign({}, x, { liked: !x.liked, likes: x.likes + (x.liked ? -1 : 1) });
      });
    }

    function savePost() {
      patch(function (x) {
        return Object.assign({}, x, { saved: !x.saved });
      });
    }

    function likeComment(cid) {
      patch(function (x) {
        function flip(o) {
          return Object.assign({}, o, { liked: !o.liked, likes: o.likes + (o.liked ? -1 : 1) });
        }
        return Object.assign({}, x, {
          comments: (x.comments || []).map(function (c) {
            if (c.id === cid) return flip(c);
            return Object.assign({}, c, {
              replies: (c.replies || []).map(function (r) {
                return r.id === cid ? flip(r) : r;
              })
            });
          })
        });
      });
    }

    function addComment() {
      if (!text.trim()) return;
      patch(function (x) {
        const nextComment = {
          id: "c" + Date.now(),
          author: ME,
          mins: 0,
          likes: 0,
          liked: false,
          text: text.trim(),
          replies: []
        };
        return Object.assign({}, x, { comments: [nextComment].concat(x.comments || []) });
      });
      setText("");
    }

    function addReply(parentId, t, toName) {
      patch(function (x) {
        return Object.assign({}, x, {
          comments: (x.comments || []).map(function (c) {
            if (c.id !== parentId) return c;
            const nextReply = {
              id: "r" + Date.now(),
              author: ME,
              mins: 0,
              likes: 0,
              liked: false,
              text: "@" + toName + " " + t
            };
            return Object.assign({}, c, { replies: (c.replies || []).concat([nextReply]) });
          })
        });
      });
    }

    return h(
      Modal,
      { onClose: onClose, title: p.title, width: 800 },
      h(
        "div",
        { className: "flex items-center justify-between gap-3 border-b border-line px-6 py-3" },
        h(
          "div",
          { className: "flex min-w-0 items-center gap-3" },
          h(Avatar, { name: p.author }),
          h(
            "div",
            { className: "min-w-0" },
            h("p", { className: "truncate font-semibold text-navy" }, p.author),
            h("p", { className: "text-[13px] text-muted" }, timeAgo(p.mins))
          )
        ),
        h(
          "button",
          { type: "button", onClick: onClose, "aria-label": "Close", className: iconBtn },
          h(Icon, { n: "x", size: 22 })
        )
      ),
      h(
        "div",
        { className: "flex-1 overflow-y-auto px-6 py-5" },
        h("h2", { className: "t-h3 text-navy" }, p.title),
        p.body && h("p", { className: "mt-3 whitespace-pre-line text-[15px] text-navy/90 leading-relaxed" }, p.body),
        h(
          "div",
          { className: "mt-4 flex flex-wrap gap-2" },
          (p.tags || []).map(function (t) {
            return h(Tag, { key: t, t: t });
          })
        ),
        h(
          "div",
          { className: "mt-4 border-y border-line py-1.5" },
          h(ActionBar, {
            p: p,
            onLike: likePost,
            onComment: function () {
              const el = document.getElementById("cmt-input");
              if (el) el.focus();
            },
            onShare: function () {
              onShare(p.id);
            },
            onSave: savePost
          })
        ),
        h(
          "div",
          { className: "mt-4 flex gap-2" },
          h("input", {
            id: "cmt-input",
            value: text,
            onChange: function (e) {
              setText(e.target.value);
            },
            onKeyDown: function (e) {
              if (e.key === "Enter") addComment();
            },
            placeholder: "Enter your comments here...",
            "aria-label": "Enter your comments here",
            className: inputCls
          }),
          h("button", { type: "button", className: btnPrimary, onClick: addComment }, "Post")
        ),
        h(
          "div",
          { className: "mt-5 flex flex-col gap-4" },
          (p.comments || []).length === 0
            ? h("p", { className: "py-6 text-center text-[14px] text-muted" }, "ยังไม่มีความคิดเห็น มาร่วมตอบเป็นคนแรกกันเลย!")
            : (p.comments || []).map(function (c) {
                return h(CommentItem, {
                  key: c.id,
                  c: c,
                  parentId: c.id,
                  isReply: false,
                  onLike: likeComment,
                  replyingTo: replyingTo,
                  setReplyingTo: setReplyingTo,
                  onReply: addReply
                });
              })
        )
      )
    );
  }

  function NewPostModal({ onClose, onCreate }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [err, setErr] = useState("");

    function toggleTag(t) {
      setTags(function (prev) {
        return prev.includes(t) ? prev.filter(function (x) { return x !== t; }) : prev.concat([t]);
      });
    }

    function submit() {
      if (!title.trim()) {
        setErr("กรุณาระบุหัวข้อกระทู้คำถาม (จำเป็นต้องมี)");
        return;
      }
      if (tags.length === 0) {
        setErr("กรุณาเลือก Tag อย่างน้อย 1 หมวดหมู่");
        return;
      }
      onCreate({ title: title.trim(), body: body.trim(), tags: tags });
    }

    return h(
      Modal,
      { onClose: onClose, title: "ตั้งกระทู้คำถาม (New Post)", width: 640 },
      h(ModalHeader, { title: "ตั้งกระทู้คำถาม", onClose: onClose }),
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
          "div",
          { className: "flex flex-col gap-1.5" },
          h(
            "label",
            { htmlFor: "np-title", className: "text-[13px] font-semibold text-muted" },
            "หัวข้อกระทู้คำถาม (จำเป็นต้องมี) *"
          ),
          h("input", {
            id: "np-title",
            value: title,
            onChange: function (e) {
              setTitle(e.target.value);
              setErr("");
            },
            placeholder: "เช่น วิชา INT101 เรื่องเซตและตรรกศาสตร์มีวิธีจำอย่างไรครับ?",
            className: inputCls
          })
        ),
        h(
          "div",
          { className: "flex flex-col gap-1.5" },
          h(
            "label",
            { htmlFor: "np-body", className: "text-[13px] font-semibold text-muted" },
            "พิมพ์อธิบายคำถามเพิ่มเติม (ถ้าหัวข้อคำถามครอบคลุมแล้วไม่ต้องเขียนเพิ่มก็ได้)"
          ),
          h("textarea", {
            id: "np-body",
            rows: 4,
            value: body,
            onChange: function (e) {
              setBody(e.target.value);
            },
            placeholder: "อธิบายรายละเอียดเพิ่มเติม หรือแปะโจทย์ที่สงสัย...",
            className: cx(inputCls, "resize-none py-3")
          })
        ),
        h(
          "div",
          { className: "flex flex-col gap-2" },
          h("span", { className: "text-[13px] font-semibold text-muted" }, "Tags แนะนำ คนใช้เยอะ (จำเป็นต้องมีอย่างน้อย 1 แท็ก) *"),
          h(
            "div",
            { className: "flex flex-wrap gap-2" },
            SUGGEST_TAGS.map(function (t) {
              return h(Tag, {
                key: t,
                t: t,
                size: "md",
                active: tags.includes(t),
                onClick: function () {
                  toggleTag(t);
                  setErr("");
                }
              });
            })
          )
        ),
        h(
          "div",
          { className: "flex justify-end gap-3 pt-2" },
          h("button", { type: "button", className: btnGhost, onClick: onClose }, "Cancel"),
          h("button", { type: "button", className: btnPrimary, onClick: submit }, "Post")
        )
      )
    );
  }

  function Community() {
    const { mobile, toast, posts, setPosts } = useApp();
    const [sort, setSort] = useState("recent");
    const [q, setQ] = useState("");
    const [tagSel, setTagSel] = useState([]);
    const [tagMenu, setTagMenu] = useState(false);
    const [newOpen, setNewOpen] = useState(false);
    const [previewId, setPreviewId] = useState(null);
    const [delId, setDelId] = useState(null);

    useEffect(
      function () {
        if (!tagMenu) return void 0;
        function close() {
          setTagMenu(false);
        }
        window.addEventListener("click", close);
        return function () {
          window.removeEventListener("click", close);
        };
      },
      [tagMenu]
    );

    const allTags = useMemo(
      function () {
        return Array.from(
          new Set(
            posts.flatMap(function (p) {
              return p.tags || [];
            })
          )
        ).sort();
      },
      [posts]
    );

    const shown = useMemo(
      function () {
        const s = q.trim().toLowerCase();
        const filtered = posts.filter(function (p) {
          const matchQ = !s || (p.title + " " + (p.body || "")).toLowerCase().includes(s);
          const matchTag =
            !tagSel.length ||
            tagSel.some(function (t) {
              return (p.tags || []).includes(t);
            });
          return matchQ && matchTag;
        });
        return filtered.slice().sort(function (a, b) {
          return sort === "liked" ? b.likes - a.likes || a.mins - b.mins : a.mins - b.mins;
        });
      },
      [posts, q, tagSel, sort]
    );

    function patch(id, fn) {
      setPosts(function (ps) {
        return ps.map(function (p) {
          return p.id === id ? fn(p) : p;
        });
      });
    }

    function share(id) {
      const url = "https://sithero.kmutt.example/community/" + id;
      try {
        navigator.clipboard.writeText(url).then(
          function () {
            toast("Link copied to clipboard");
          },
          function () {
            toast("Share link: " + url);
          }
        );
      } catch (e) {
        toast("Share link: " + url);
      }
    }

    function create({ title, body, tags }) {
      const next = {
        id: "p" + Date.now(),
        author: ME,
        mins: 0,
        likes: 0,
        liked: false,
        saved: false,
        title: title,
        body: body,
        tags: tags,
        comments: []
      };
      setPosts(function (ps) {
        return [next].concat(ps);
      });
      setNewOpen(false);
      toast("ตั้งกระทู้เรียบร้อยแล้ว!");
    }

    function confirmDelete() {
      setPosts(function (ps) {
        return ps.filter(function (p) {
          return p.id !== delId;
        });
      });
      if (previewId === delId) setPreviewId(null);
      setDelId(null);
      toast("ลบกระทู้เรียบร้อยแล้ว");
    }

    return h(
      Page,
      null,
      h(PageHeader, {
        title: "Community",
        sub: "พื้นที่ถาม-ตอบและแลกเปลี่ยนเรียนรู้ของชาว SIT",
        right: h(
          "button",
          {
            type: "button",
            className: btnPrimary,
            onClick: function () {
              setNewOpen(true);
            }
          },
          h(Icon, { n: "plus", size: 18 }),
          "New Post"
        )
      }),

      /* Search & Tag Filter Bar */
      h(
        "div",
        {
          className: cx(
            "mb-4 grid gap-3",
            mobile ? "grid-cols-1" : "grid-cols-[200px_1fr_auto]"
          )
        },
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
              onClick: function () {
                setTagMenu(!tagMenu);
              },
              className: cx(btnGhost, "w-full !justify-between")
            },
            h(
              "span",
              { className: "inline-flex items-center gap-2 truncate" },
              h(Icon, { n: "filter", size: 16, className: "text-ocean" }),
              tagSel.length ? "Tags (" + tagSel.length + ")" : "Filter Tags"
            ),
            h(Icon, { n: "chevDown", size: 18, className: "text-muted" })
          ),
          tagMenu &&
            h(
              "div",
              {
                className: "anim-accordion absolute left-0 top-full z-20 mt-2 flex w-64 flex-wrap gap-2 rounded-xl border border-line bg-white p-3.5 shadow-xl"
              },
              allTags.map(function (t) {
                const active = tagSel.includes(t);
                return h(Tag, {
                  key: t,
                  t: t,
                  size: "md",
                  active: active,
                  onClick: function () {
                    setTagSel(function (prev) {
                      return active
                        ? prev.filter(function (x) { return x !== t; })
                        : prev.concat([t]);
                    });
                  }
                });
              }),
              tagSel.length > 0 &&
                h(
                  "button",
                  {
                    type: "button",
                    onClick: function () {
                      setTagSel([]);
                    },
                    className: "mt-1 w-full rounded-lg bg-ice py-1.5 text-[12px] font-semibold text-steel hover:bg-mint"
                  },
                  "ล้างตัวกรองทั้งหมด"
                )
            )
        ),
        h(
          "div",
          { className: "relative" },
          h(Icon, {
            n: "search",
            className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ocean"
          }),
          h("input", {
            value: q,
            onChange: function (e) {
              setQ(e.target.value);
            },
            placeholder: "ช่องค้นหากระทู้...",
            "aria-label": "Search posts",
            className: cx(inputCls, "pl-11")
          })
        ),
        h(
          "div",
          { className: "inline-flex overflow-hidden rounded-xl border border-line bg-white", role: "group" },
          [
            ["recent", "Recently Added"],
            ["liked", "Most Liked"]
          ].map(function ([k, label]) {
            const active = sort === k;
            return h(
              "button",
              {
                key: k,
                type: "button",
                onClick: function () {
                  setSort(k);
                },
                className: cx(
                  "btn-press min-h-[44px] px-4 text-[14px] font-medium transition-colors",
                  active ? "bg-steel text-white" : "text-navy hover:bg-ice"
                )
              },
              label
            );
          })
        )
      ),

      /* Post Feed */
      shown.length === 0
        ? h(Empty, {
            icon: "users",
            title: "ไม่พบกระทู้ที่ตรงกับการค้นหา",
            sub: "ลองเปลี่ยนคำค้นหา ล้างตัวกรองแท็ก หรือตั้งกระทู้ถามคำถามใหม่ได้เลย",
            action: h(
              "button",
              {
                type: "button",
                className: btnPrimary,
                onClick: function () {
                  setQ("");
                  setTagSel([]);
                }
              },
              "ล้างการค้นหา"
            )
          })
        : h(
            "div",
            { className: "flex flex-col gap-4" },
            shown.map(function (p, idx) {
              return h(PostCard, {
                key: p.id,
                p: p,
                index: idx,
                onOpen: function () {
                  setPreviewId(p.id);
                },
                onLike: function () {
                  patch(p.id, function (x) {
                    return Object.assign({}, x, {
                      liked: !x.liked,
                      likes: x.likes + (x.liked ? -1 : 1)
                    });
                  });
                },
                onShare: function () {
                  share(p.id);
                },
                onSave: function () {
                  patch(p.id, function (x) {
                    return Object.assign({}, x, { saved: !x.saved });
                  });
                  toast(p.saved ? "Removed from saved posts" : "Post saved");
                },
                onDelete: function () {
                  setDelId(p.id);
                }
              });
            })
          ),

      newOpen &&
        h(NewPostModal, {
          onClose: function () {
            setNewOpen(false);
          },
          onCreate: create
        }),
      previewId &&
        h(PostPreview, {
          postId: previewId,
          posts: posts,
          setPosts: setPosts,
          onClose: function () {
            setPreviewId(null);
          },
          onShare: share
        }),
      delId &&
        h(Confirm, {
          title: "ยืนยันการลบกระทู้?",
          body: "เมื่อลบแล้วจะไม่สามารถกู้คืนกระทู้และความคิดเห็นทั้งหมดได้",
          confirmLabel: "ลบกระทู้",
          onClose: function () {
            setDelId(null);
          },
          onConfirm: confirmDelete
        })
    );
  }

  window.ITHeroPages.Community = Community;
})();

