/* ==========================================================================
   SIT Hero (IT Hero) — 5) Autobot Page
   (ตรงตาม Wireframe หน้า 21–22: Top Questions, General Question, Most Useful, Navigator, Contact Admin)
   ========================================================================== */

window.ITHeroPages = window.ITHeroPages || {};

(function () {
  const h = React.createElement;
  const { useState, useRef, useEffect } = React;
  const { cx, btnPrimary, inputCls, useApp } = window.ITHeroUtils;
  const { Icon } = window.ITHeroIcons;
  const { Page, PageHeader } = window.ITHeroCommon;
  const { TOP_QUESTIONS, ANSWERS, NAV_LINKS } = window.ITHeroData;

  const NAV_ICONS = {
    home: "compass",
    course: "book",
    community: "users",
    knowledge: "library",
    autobot: "bot"
  };

  const TOPICS = [
    ["general", "General Question (คำถามทั่วไป)"],
    ["useful", "Most Useful Questions (คำถามยอดนิยม)"],
    ["admin", "Contact Admin (ติดต่อแอดมิน)"],
    ["nav", "Navigator (นำทางไปยังหน้าต่างๆ)"]
  ];

  function BotAvatar({ size = 36 }) {
    return h(
      "span",
      {
        className: "flex shrink-0 items-center justify-center rounded-full bg-navy text-mint",
        style: { width: size, height: size }
      },
      h(Icon, { n: "bot", size: size * 0.55 })
    );
  }

  function NavCard({ to }) {
    const { go } = useApp();
    const info = NAV_LINKS[to] || ["Page", ""];
    return h(
      "button",
      {
        type: "button",
        onClick: function () {
          go(to);
        },
        className: "btn-press group flex min-h-[56px] w-full items-center gap-3 rounded-xl border border-ocean/40 bg-mint/50 px-3.5 py-2.5 text-left transition-colors hover:border-steel hover:bg-mint"
      },
      h(
        "span",
        { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-steel" },
        h(Icon, { n: NAV_ICONS[to] || "compass" })
      ),
      h(
        "span",
        { className: "min-w-0 flex-1" },
        h("span", { className: "block text-[15px] font-semibold text-navy" }, info[0]),
        h("span", { className: "block text-[13px] text-navy/75" }, info[1])
      ),
      h(Icon, { n: "arrowRight", size: 18, className: "text-steel transition-transform duration-200 group-hover:translate-x-1" })
    );
  }

  function Autobot() {
    const { mobile } = useApp();
    const [msgs, setMsgs] = useState([{ id: 0, role: "bot", kind: "welcome" }]);
    const [typing, setTyping] = useState(false);
    const [text, setText] = useState("");
    const box = useRef(null);
    const idc = useRef(1);
    const timer = useRef(null);

    useEffect(function () {
      return function () {
        clearTimeout(timer.current);
      };
    }, []);

    useEffect(
      function () {
        if (box.current && (msgs.length > 1 || typing)) {
          box.current.scrollTop = box.current.scrollHeight;
        }
      },
      [msgs, typing]
    );

    function answerFor(key, raw) {
      if (key === "general") {
        return {
          text: "ถามเรื่องการวางแผนการเรียน การเตรียมสอบ การเลือก Track หรือชีวิตในรั้ว IT KMUTT ได้เลยครับ เลือกคำถามด้านล่างหรือพิมพ์ถามในช่องแชตได้เลย!",
          chips: TOP_QUESTIONS.slice(0, 3)
        };
      }
      if (key === "useful") {
        return {
          intro: "คำถามที่ถูกถามบ่อยที่สุด: " + TOP_QUESTIONS[0],
          text: ANSWERS[0].text,
          links: ANSWERS[0].links
        };
      }
      if (key === "admin") {
        return {
          text: "ต้องการติดต่อทีมงานแอดมิน IT Hero? สามารถส่งอีเมลมาได้ที่ ithero.admin@mail.kmutt.ac.th พร้อมแจ้งรหัสนักศึกษาและเรื่องที่ต้องการให้ช่วยเหลือ ทีมงานจะตอบกลับภายใน 1–2 วันทำการครับ"
        };
      }
      if (key === "nav") {
        return {
          text: "ต้องการให้พาไปที่หน้าไหนของ IT Hero เลือกการ์ดด้านล่างได้เลยครับ:",
          links: ["course", "community", "knowledge", "home"]
        };
      }
      if (typeof key === "number" && ANSWERS[key]) {
        return {
          text: ANSWERS[key].text,
          links: ANSWERS[key].links
        };
      }

      const s = (raw || "").toLowerCase();
      if (/กินไร|อาหาร|โรงอาหาร|บางมด/.test(s)) {
        return {
          text: "โพยร้านเด็ดรอบ มจธ. (บางมด): 1) โรงอาหารกลางพระจอม & ใต้ตึกเรียนรวม CB2 ประหยัดและไว 2) โซนหน้าม. & ซอยประชาอุทิศ 45 มีทั้งข้าวมันไก่ ก๋วยเตี๋ยว และคาเฟ่นั่งปั่นงาน!",
          chips: TOP_QUESTIONS.slice(0, 2)
        };
      }
      if (/course|track|subject|หลักสูตร|วิชา|แทรค|สาย/.test(s)) {
        return {
          text: "คุณสามารถดูรายวิชาทั้งหมดแยกตามชั้นปี (ปี 1–4) เทอม และสายอาชีพทั้ง 9 สายได้ที่หน้า Course Guide เลยครับ",
          links: ["course"]
        };
      }
      if (/note|summary|pdf|สรุป|ชีท|int10/.test(s)) {
        return {
          text: "ชีทสรุปของวิชา INT100, INT101, INT120, INT130, INT140 และวิชาอื่นๆ อยู่ในหน้า Knowledge Vault พร้อมเปิดอ่านพรีวิวได้เลยครับ",
          links: ["knowledge"]
        };
      }
      if (/post|ask|community|กระทู้|ถาม|รุ่นพี่/.test(s)) {
        return {
          text: "สามารถเข้าไปตั้งกระทู้ถามเพื่อนๆ และรุ่นพี่ หรือค้นหากระทู้เก่าๆ ได้ในหน้า Community ครับ",
          links: ["community"]
        };
      }
      return {
        text: "ขอบคุณสำหรับคำถามครับ! ลองเลือกดูจากหมวดคำถามยอดฮิตด้านล่าง หรือคลิกลิงก์เพื่อไปยังส่วนต่างๆ ของเว็บไซต์ได้เลยครับ",
        chips: TOP_QUESTIONS.slice(0, 3),
        links: ["course", "knowledge"]
      };
    }

    function send(label, key) {
      const uid = idc.current++;
      setMsgs(function (m) {
        return m.concat([{ id: uid, role: "user", text: label }]);
      });
      setTyping(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(function () {
        const reply = answerFor(key, label);
        const bid = idc.current++;
        setTyping(false);
        setMsgs(function (m) {
          return m.concat([Object.assign({ id: bid, role: "bot" }, reply)]);
        });
      }, 360);
    }

    function submit() {
      if (!text.trim()) return;
      const q = text.trim();
      setText("");
      send(q, null);
    }

    return h(
      Page,
      null,
      h(PageHeader, {
        title: "Autobot",
        sub: "ศูนย์รวมคำถามยอดฮิตและตัวช่วยนำทางหลักสูตร IT KMUTT"
      }),
      h(
        "div",
        {
          className: cx("grid gap-5", mobile ? "grid-cols-1" : "grid-cols-[320px_1fr]")
        },
        /* Sidebar: Top Questions */
        h(
          "aside",
          {
            className: "anim-fade-up rounded-xl border border-line bg-white p-5 shadow-sm",
            "aria-label": "Top Questions"
          },
          h("h2", { className: "mb-3 text-[18px] font-semibold text-navy" }, "Top Questions (คำถามยอดฮิต)"),
          h(
            "div",
            { className: cx("flex flex-col gap-2.5") },
            TOP_QUESTIONS.map(function (t, i) {
              return h(
                "button",
                {
                  key: t,
                  type: "button",
                  onClick: function () {
                    send(t, i);
                  },
                  className: cx(
                    "anim-fade-up btn-press hover-lift flex min-h-[48px] w-full items-center gap-3 rounded-xl border border-line bg-ice px-4 py-2.5 text-left text-[14px] text-navy transition-colors hover:border-ocean hover:bg-mint/50",
                    "stagger-" + ((i % 6) + 1)
                  )
                },
                h("span", { className: "font-mono text-[13px] font-semibold text-ocean shrink-0" }, "#" + (i + 1)),
                h("span", { className: "flex-1 leading-snug" }, t)
              );
            })
          )
        ),

        /* Main Chat Window */
        h(
          "section",
          {
            className: "anim-fade-up stagger-1 flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm",
            style: { height: mobile ? 560 : 640 },
            "aria-label": "Chat"
          },
          h(
            "div",
            { className: "flex items-center gap-3 bg-navy px-5 py-4 text-white" },
            h(BotAvatar, { size: 40 }),
            h(
              "div",
              null,
              h("h2", { className: "text-[18px] font-semibold" }, "ผู้ช่วยตอบคำถาม IT Hero"),
              h(
                "p",
                { className: "mt-0.5 flex items-center gap-1.5 text-[12px] text-mint/90" },
                h("span", { className: "inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" }),
                "พร้อมตอบคำถามเรื่องการเรียน หลักสูตร และแนะนำหน้าเว็บ"
              )
            )
          ),
          h(
            "div",
            {
              ref: box,
              className: "flex flex-1 flex-col gap-4 overflow-y-auto bg-ice p-5",
              "aria-live": "polite"
            },
            msgs.map(function (m) {
              if (m.role === "user") {
                return h(
                  "div",
                  { key: m.id, className: "anim-slide-right flex justify-end" },
                  h(
                    "div",
                    { className: "max-w-[80%] rounded-2xl rounded-br-md bg-steel px-4 py-2.5 text-white shadow-sm" },
                    m.text
                  )
                );
              }
              return h(
                "div",
                { key: m.id, className: "anim-fade-up flex items-start gap-3" },
                h(BotAvatar, null),
                h(
                  "div",
                  {
                    className: "flex max-w-[88%] flex-col gap-3 rounded-2xl rounded-tl-md border border-line bg-white px-4 py-3 text-navy shadow-sm"
                  },
                  m.kind === "welcome"
                    ? h(
                        React.Fragment,
                        null,
                        h(
                          "p",
                          null,
                          "สวัสดีครับ เลือกหัวข้อที่ต้องการสอบถามด้านล่าง หรือพิมพ์รหัสวิชา/คำถามในช่องแชตได้เลย"
                        ),
                        h(
                          "div",
                          { className: "flex flex-col gap-2" },
                          TOPICS.map(function ([k, l]) {
                            return h(
                              "button",
                              {
                                key: k,
                                type: "button",
                                onClick: function () {
                                  send(l, k);
                                },
                                className: "btn-press flex min-h-[44px] items-center gap-2 rounded-xl border border-ocean/50 bg-white px-3.5 text-left text-[15px] font-medium text-steel transition-colors hover:bg-mint/60"
                              },
                              h(Icon, { n: "arrowRight", size: 16 }),
                              l
                            );
                          })
                        )
                      )
                    : h(
                        React.Fragment,
                        null,
                        m.intro && h("p", { className: "text-[13px] font-semibold text-ocean" }, m.intro),
                        h("p", { className: "leading-relaxed" }, m.text),
                        m.links &&
                          m.links.length > 0 &&
                          h(
                            "div",
                            { className: "flex flex-col gap-2" },
                            m.links.map(function (l) {
                              return h(NavCard, { key: l, to: l });
                            })
                          ),
                        m.chips &&
                          h(
                            "div",
                            { className: "flex flex-wrap gap-2" },
                            m.chips.map(function (c) {
                              return h(
                                "button",
                                {
                                  key: c,
                                  type: "button",
                                  onClick: function () {
                                    send(c, TOP_QUESTIONS.indexOf(c));
                                  },
                                  className: "btn-press min-h-[36px] rounded-full bg-mint px-3.5 text-[13px] font-medium text-navy hover:bg-ocean/30"
                                },
                                c
                              );
                            })
                          )
                      )
                )
              );
            }),
            typing &&
              h(
                "div",
                { className: "anim-fade-up flex items-start gap-3", "aria-label": "Autobot is typing" },
                h("div", { className: "anim-pulse-soft rounded-full ring-2 ring-mint/80" }, h(BotAvatar, null)),
                h(
                  "div",
                  { className: "flex gap-1.5 rounded-2xl rounded-tl-md border border-line bg-white px-4 py-4" },
                  [0, 1, 2].map(function (i) {
                    return h("span", {
                      key: i,
                      className: "h-2 w-2 animate-bounce rounded-full bg-ocean",
                      style: { animationDelay: i * 120 + "ms" }
                    });
                  })
                )
              )
          ),
          h(
            "div",
            { className: "flex gap-2 border-t border-line bg-white p-3" },
            h("input", {
              id: "bot-input",
              value: text,
              onChange: function (e) {
                setText(e.target.value);
              },
              onKeyDown: function (e) {
                if (e.key === "Enter") submit();
              },
              placeholder: "พิมพ์คำถามหรือรหัสวิชา เช่น INT101, เลือกสายอาชีพ, ฝึกงาน, ค่าเทอม...",
              "aria-label": "Message to Autobot",
              className: inputCls
            }),
            h(
              "button",
              {
                type: "button",
                className: btnPrimary,
                onClick: submit,
                "aria-label": "Send message"
              },
              h(Icon, { n: "send", size: 18 })
            )
          )
        )
      )
    );
  }

  window.ITHeroPages.Autobot = Autobot;
})();

