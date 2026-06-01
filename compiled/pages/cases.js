(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  (() => {
    const { ImgSlot, Eyebrow, SectionHead, CTABlock } = window.HSUI;
    const { useState } = React;
    const CASE_IMAGES = [
      "assets/huasheng/case-guangzhou-1993.webp",
      "assets/huasheng/case-shanghai-expo-v2.webp",
      "assets/huasheng/case-hangzhou-bicycle.webp",
      "assets/huasheng/case-erdos-shelter.webp",
      "assets/huasheng/case-qatar-shelter.webp",
      "assets/huasheng/case-hong-kong-mtr.webp",
      "assets/huasheng/case-nepal-government.webp",
      "assets/huasheng/case-new-zealand-postal.webp",
      "assets/huasheng/case-oman-public.webp",
      "assets/huasheng/case-korea-aluminum-v2.webp",
      "assets/huasheng/case-romania-signpost.webp",
      "assets/huasheng/case-riyadh-shelter-v2.webp",
      "assets/huasheng/case-turkey-turkmenistan.webp",
      "assets/huasheng/case-steel-structure.webp",
      "assets/huasheng/case-oem-kitchen-cart.webp",
      "assets/huasheng/case-oem-cabinets.webp",
      "assets/huasheng/case-oem-bathroom-rack.webp",
      "assets/huasheng/case-oem-shelving.webp"
    ];
    function Cases({ t, lang, setRoute }) {
      const c = t.cases;
      const [filter, setFilter] = useState(c.filters[0]);
      const allItems = c.items.map((it, index) => __spreadProps(__spreadValues({}, it), { image: CASE_IMAGES[index] }));
      const items = filter === c.filters[0] ? allItems : allItems.filter((it) => it.cat === filter);
      const go = (id) => {
        setRoute(id);
        window.scrollTo({ top: 0, behavior: "instant" });
      };
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "page-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-grid" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-text" }, /* @__PURE__ */ React.createElement(Eyebrow, { dot: true }, c.hero.eyebrow), /* @__PURE__ */ React.createElement("h1", { className: "display-xl reveal" }, c.hero.title), /* @__PURE__ */ React.createElement("p", { className: "lede reveal" }, c.hero.sub)), /* @__PURE__ */ React.createElement("div", { className: "page-hero-media reveal" }, /* @__PURE__ */ React.createElement(ImgSlot, { src: "assets/huasheng/projects-overview.webp", alt: lang === "cn" ? "\u534E\u76DB\u516C\u4EA4\u5019\u8F66\u4EAD\u9879\u76EE\u90E8\u7F72\u56FE" : "HuaSheng bus shelter project deployment", label: lang === "cn" ? "\u9879\u76EE\u5B9E\u62CD" : "Project photo" }))))), /* @__PURE__ */ React.createElement("section", { className: "tight" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "case-hero reveal" }, /* @__PURE__ */ React.createElement(ImgSlot, { src: "assets/huasheng/case-beijing-olympic-v2.webp", alt: lang === "cn" ? "\u5317\u4EAC\u5965\u8FD0\u4E0D\u9508\u94A2\u5019\u8F66\u4EAD" : "Beijing Olympics stainless steel shelter", label: lang === "cn" ? "\u5317\u4EAC\u5965\u8FD0\u5019\u8F66\u4EAD" : "Beijing Olympics shelter" }), /* @__PURE__ */ React.createElement("div", { className: "case-hero-text" }, /* @__PURE__ */ React.createElement(Eyebrow, null, lang === "cn" ? "\u91CD\u70B9\u6848\u4F8B" : "Featured project"), /* @__PURE__ */ React.createElement("h3", null, c.featured.title), /* @__PURE__ */ React.createElement("div", { className: "meta" }, /* @__PURE__ */ React.createElement("span", null, c.featured.loc), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", null, c.featured.year)), /* @__PURE__ */ React.createElement("div", { className: "amount" }, c.featured.amount), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-soft)", margin: 0, lineHeight: 1.65 } }, c.featured.body))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement(
        SectionHead,
        {
          eyebrow: lang === "cn" ? "\u9879\u76EE\u7B5B\u9009" : "Filter projects",
          title: lang === "cn" ? "\u5168\u90E8\u9879\u76EE\u6848\u4F8B" : "All projects"
        }
      ), /* @__PURE__ */ React.createElement("div", { className: "case-filters reveal" }, c.filters.map((f) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: f,
          className: "case-filter" + (filter === f ? " on" : ""),
          onClick: () => setFilter(f)
        },
        f,
        /* @__PURE__ */ React.createElement("span", { style: { marginLeft: 8, color: filter === f ? "inherit" : "var(--ink-mute)" } }, f === c.filters[0] ? c.items.length : c.items.filter((it) => it.cat === f).length)
      ))), /* @__PURE__ */ React.createElement("div", { className: "case-grid reveal" }, items.map((it, i) => /* @__PURE__ */ React.createElement("article", { className: "case-card", key: it.title + i }, /* @__PURE__ */ React.createElement(ImgSlot, { src: it.image, alt: it.title, label: it.title }), /* @__PURE__ */ React.createElement("div", { className: "case-card-body" }, /* @__PURE__ */ React.createElement("div", { className: "cat" }, it.cat), /* @__PURE__ */ React.createElement("h4", null, it.title), /* @__PURE__ */ React.createElement("div", { className: "meta" }, /* @__PURE__ */ React.createElement("span", null, it.loc), /* @__PURE__ */ React.createElement("span", null, it.year)), it.amount !== "\u2014" && /* @__PURE__ */ React.createElement("div", { className: "cat", style: { color: "var(--accent)" } }, it.amount), /* @__PURE__ */ React.createElement("p", null, it.body))))))), /* @__PURE__ */ React.createElement(
        CTABlock,
        {
          title: lang === "cn" ? "\u60F3\u505A\u4E00\u4E2A\u7C7B\u4F3C\u7684\u9879\u76EE\uFF1F" : "Got a similar project in mind?",
          sub: lang === "cn" ? "\u6211\u4EEC\u627F\u63A5 200 \u4E2A - 5000 \u4E2A\u5019\u8F66\u4EAD\u7684\u6279\u91CF\u9879\u76EE\uFF0C\u6D77\u5916\u653F\u5E9C\u91C7\u8D2D\u53CB\u597D\u3002" : "We handle volume projects from 200 to 5,000+ shelters, friendly to overseas government procurement.",
          btn: lang === "cn" ? "\u53D1\u8D77\u9879\u76EE\u54A8\u8BE2" : "Start an enquiry",
          onClick: () => go("contact")
        }
      ));
    }
    (window.HS_PAGES = window.HS_PAGES || {}).cases = Cases;
  })();
})();
