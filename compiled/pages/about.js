(() => {
  (() => {
    const { ImgSlot, Eyebrow, SectionHead, CTABlock } = window.HSUI;
    function About({ t, lang, setRoute }) {
      const a = t.about;
      const go = (id) => {
        setRoute(id);
        window.scrollTo({ top: 0, behavior: "instant" });
      };
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "page-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-grid" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-text" }, /* @__PURE__ */ React.createElement(Eyebrow, { dot: true }, a.hero.eyebrow), /* @__PURE__ */ React.createElement("h1", { className: "display-xl reveal" }, a.hero.title), /* @__PURE__ */ React.createElement("p", { className: "lede reveal" }, a.hero.sub)), /* @__PURE__ */ React.createElement("div", { className: "page-hero-media reveal" }, /* @__PURE__ */ React.createElement(ImgSlot, { src: "assets/huasheng/about-factory-campus.webp", alt: lang === "cn" ? "\u534E\u76DB\u91D1\u5C5E\u5382\u533A\u5916\u89C2" : "HuaSheng Metal factory campus exterior", label: lang === "cn" ? "\u5382\u533A\u5916\u89C2" : "Factory exterior" }))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "story-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, lang === "cn" ? "\u516C\u53F8\u6545\u4E8B" : "Our story"), /* @__PURE__ */ React.createElement("h2", { className: "display-l reveal", style: { marginTop: 16 } }, a.story.title)), /* @__PURE__ */ React.createElement("div", { className: "story-paragraphs" }, a.story.paragraphs.map((p, i) => /* @__PURE__ */ React.createElement("p", { className: "reveal", key: i }, p)))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement(
        SectionHead,
        {
          eyebrow: lang === "cn" ? "30 \u5E74 \xB7 7 \u4E2A\u8282\u70B9" : "30 years \xB7 7 markers",
          title: a.milestones.title
        }
      ), /* @__PURE__ */ React.createElement("div", { className: "timeline reveal" }, a.milestones.items.map((m, i) => /* @__PURE__ */ React.createElement("div", { className: "tl-cell", key: i }, /* @__PURE__ */ React.createElement("div", { className: "tl-year" }, m.year), /* @__PURE__ */ React.createElement("div", { className: "tl-title" }, m.title), /* @__PURE__ */ React.createElement("div", { className: "tl-body" }, m.body)))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: lang === "cn" ? "\u4F01\u4E1A\u67B6\u6784" : "Group structure", title: a.group.title, lede: a.group.sub }), /* @__PURE__ */ React.createElement("div", { className: "group-grid reveal" }, a.group.items.map((g, i) => /* @__PURE__ */ React.createElement("div", { className: "group-row", key: i }, g))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "mission-block reveal" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, a.mission.eyebrow), /* @__PURE__ */ React.createElement("h2", { className: "display-l", style: { marginTop: 16 } }, a.mission.title)), /* @__PURE__ */ React.createElement("p", { className: "lede", style: { margin: 0 } }, a.mission.body)))), /* @__PURE__ */ React.createElement(
        CTABlock,
        {
          title: lang === "cn" ? "\u60F3\u770B\u770B\u6211\u4EEC\u9020\u8FC7\u4EC0\u4E48\uFF1F" : "Want to see what we have built?",
          sub: lang === "cn" ? "\u4E09\u5341\u5E74\u91CC\uFF0C\u56FD\u5185\u5916\u56DB\u5341\u591A\u4E2A\u56FD\u5BB6\u843D\u5730\u7684\u91D1\u5C5E\u9879\u76EE\u3002" : "Three decades of metal projects across 40+ countries.",
          btn: lang === "cn" ? "\u6D4F\u89C8\u9879\u76EE\u6848\u4F8B" : "Browse the projects",
          onClick: () => go("cases")
        }
      ));
    }
    (window.HS_PAGES = window.HS_PAGES || {}).about = About;
  })();
})();
