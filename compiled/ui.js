(() => {
  var __defProp = Object.defineProperty;
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
  const { useState: usU, useEffect: useEU, useRef: useRU, useMemo: useMU } = React;
  function ImgSlot({ src, alt, label, style, className, ratio, treatment }) {
    const [errored, setErrored] = usU(false);
    const has = src && !errored;
    const wrapStyle = __spreadValues(__spreadValues({}, ratio ? { aspectRatio: ratio } : {}), style || {});
    return /* @__PURE__ */ React.createElement("div", { className: "imgslot " + (has ? "" : "placeholder ") + (className || ""), style: wrapStyle }, has ? /* @__PURE__ */ React.createElement("img", { src, alt: alt || "", onError: () => setErrored(true), loading: "lazy" }) : /* @__PURE__ */ React.createElement("span", { className: "ph-label" }, label || "\u56FE\u7247\u5360\u4F4D \xB7 IMG"), treatment === "scrim" && has && /* @__PURE__ */ React.createElement("div", { className: "img-scrim", "aria-hidden": "true" }));
  }
  function Eyebrow({ children, noRule, dot }) {
    return /* @__PURE__ */ React.createElement("span", { className: "eyebrow" + (noRule ? " no-rule" : "") }, dot && /* @__PURE__ */ React.createElement("span", { className: "dot" }), /* @__PURE__ */ React.createElement("span", null, children));
  }
  function SectionHead({ eyebrow, title, lede, center, kicker }) {
    return /* @__PURE__ */ React.createElement("div", { className: "section-head" + (center ? " center" : "") }, eyebrow && /* @__PURE__ */ React.createElement(Eyebrow, null, eyebrow), /* @__PURE__ */ React.createElement("h2", { className: "display-l reveal" }, title), lede && /* @__PURE__ */ React.createElement("p", { className: "lede reveal" }, lede), kicker);
  }
  function StatRow({ items }) {
    return /* @__PURE__ */ React.createElement("div", { className: "stat-row" }, items.map((s, i) => /* @__PURE__ */ React.createElement("div", { className: "stat-cell reveal", key: i, style: { transitionDelay: i * 60 + "ms" } }, /* @__PURE__ */ React.createElement("div", { className: "stat-num" }, s.num, s.unit ? /* @__PURE__ */ React.createElement("span", { className: "unit" }, s.unit) : null), /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, s.label))));
  }
  function PageHero({ eyebrow, title, sub, image, label }) {
    return /* @__PURE__ */ React.createElement("section", { className: "page-hero hero" }, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-grid" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-text" }, /* @__PURE__ */ React.createElement(Eyebrow, { dot: true }, eyebrow), /* @__PURE__ */ React.createElement("h1", { className: "display-xl reveal" }, title), sub && /* @__PURE__ */ React.createElement("p", { className: "lede reveal", style: { marginTop: 8 } }, sub)), /* @__PURE__ */ React.createElement("div", { className: "page-hero-media reveal" }, /* @__PURE__ */ React.createElement(ImgSlot, { src: image, ratio: "4 / 3", label: label || "\u56FE\u7247\u5360\u4F4D" })))));
  }
  function CTABlock({ title, sub, btn, onClick }) {
    return /* @__PURE__ */ React.createElement("section", { className: "tight" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "cta-block reveal" }, /* @__PURE__ */ React.createElement("div", { className: "cta-text" }, /* @__PURE__ */ React.createElement("h3", { className: "display-m" }, title), sub && /* @__PURE__ */ React.createElement("p", { className: "lede", style: { marginTop: 12 } }, sub)), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick }, btn, " ", /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192")))));
  }
  window.HSUI = { ImgSlot, Eyebrow, SectionHead, StatRow, PageHero, CTABlock };
})();
