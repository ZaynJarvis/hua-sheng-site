(() => {
  (() => {
    const { ImgSlot, Eyebrow, SectionHead, StatRow, CTABlock } = window.HSUI;
    function Capabilities({ t, lang, setRoute }) {
      const c = t.cap;
      const go = (id) => {
        setRoute(id);
        window.scrollTo({ top: 0, behavior: "instant" });
      };
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "page-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-grid" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-text" }, /* @__PURE__ */ React.createElement(Eyebrow, { dot: true }, c.hero.eyebrow), /* @__PURE__ */ React.createElement("h1", { className: "display-xl reveal" }, c.hero.title), /* @__PURE__ */ React.createElement("p", { className: "lede reveal" }, c.hero.sub)), /* @__PURE__ */ React.createElement("div", { className: "page-hero-media reveal" }, /* @__PURE__ */ React.createElement(ImgSlot, { src: "assets/huasheng/capabilities-workshop.webp", alt: lang === "cn" ? "\u534E\u76DB\u91D1\u5C5E\u52A0\u5DE5\u8F66\u95F4" : "HuaSheng metal fabrication workshop", label: lang === "cn" ? "\u8F66\u95F4" : "Workshop" }))))), /* @__PURE__ */ React.createElement("section", { className: "tight" }, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement("div", { className: "plant-stats reveal" }, c.plantStats.map((s, i) => /* @__PURE__ */ React.createElement("div", { className: "stat-cell", key: i }, /* @__PURE__ */ React.createElement("div", { className: "stat-num" }, s.num, s.unit && /* @__PURE__ */ React.createElement("span", { className: "unit" }, s.unit)), /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, s.label)))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: lang === "cn" ? "\u4E94\u5927\u8F66\u95F4" : "Five workshops", title: c.workshops.title, lede: c.workshops.sub }), /* @__PURE__ */ React.createElement("div", { className: "workshop-list reveal" }, c.workshops.items.map((w, i) => /* @__PURE__ */ React.createElement("div", { className: "workshop-row", key: i }, /* @__PURE__ */ React.createElement("div", { className: "tag" }, w.tag), /* @__PURE__ */ React.createElement("h4", null, w.title), /* @__PURE__ */ React.createElement("p", null, w.body)))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: lang === "cn" ? "297 \u53F0\u8BBE\u5907" : "297 machines", title: c.equipment.title, lede: c.equipment.sub }), /* @__PURE__ */ React.createElement("div", { className: "equipment-grid reveal" }, c.equipment.items.map((e, i) => /* @__PURE__ */ React.createElement("div", { className: "equipment-chip", key: i }, e))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: lang === "cn" ? "\u6807\u51C6\u6D41\u7A0B" : "Standard process", title: c.process.title }), /* @__PURE__ */ React.createElement("div", { className: "process-flow reveal" }, c.process.steps.map((s, i) => /* @__PURE__ */ React.createElement("div", { className: "process-step", key: i }, /* @__PURE__ */ React.createElement("div", { className: "n" }, "STEP ", s.n), /* @__PURE__ */ React.createElement("div", { className: "t" }, s.t), /* @__PURE__ */ React.createElement("div", { className: "d" }, s.d)))))), /* @__PURE__ */ React.createElement(
        CTABlock,
        {
          title: lang === "cn" ? "\u60F3\u4E86\u89E3\u6211\u4EEC\u7684\u8D28\u91CF\u7BA1\u63A7\uFF1F" : "Want to see our quality system?",
          sub: lang === "cn" ? "ISO 9001 \u4F53\u7CFB + DMAIC \u5168\u6D41\u7A0B\u8D28\u91CF\u7BA1\u7406\u3002" : "ISO 9001 certified + DMAIC end-to-end quality management.",
          btn: lang === "cn" ? "\u67E5\u770B\u8D28\u91CF\u4E0E\u8BA4\u8BC1" : "Quality & certification",
          onClick: () => go("quality")
        }
      ));
    }
    (window.HS_PAGES = window.HS_PAGES || {}).capabilities = Capabilities;
  })();
})();
