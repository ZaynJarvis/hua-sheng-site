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
    const { ImgSlot, Eyebrow, SectionHead } = window.HSUI;
    const { useState } = React;
    function Contact({ t, lang }) {
      const c = t.contact;
      const [submitted, setSubmitted] = useState(false);
      const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", country: "", type: c.form.fields.types[0], message: "" });
      const update = (k) => (e) => setForm(__spreadProps(__spreadValues({}, form), { [k]: e.target.value }));
      const submit = (e) => {
        e.preventDefault();
        setSubmitted(true);
      };
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "page-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-grid" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-text" }, /* @__PURE__ */ React.createElement(Eyebrow, { dot: true }, c.hero.eyebrow), /* @__PURE__ */ React.createElement("h1", { className: "display-xl reveal" }, c.hero.title), /* @__PURE__ */ React.createElement("p", { className: "lede reveal" }, c.hero.sub)), /* @__PURE__ */ React.createElement("div", { className: "page-hero-media reveal" }, /* @__PURE__ */ React.createElement(ImgSlot, { src: "assets/huasheng/contact-factory-entrance.webp", alt: lang === "cn" ? "\u534E\u76DB\u91D1\u5C5E\u5382\u533A\u5165\u53E3" : "HuaSheng Metal factory entrance", label: lang === "cn" ? "\u5382\u533A\u5165\u53E3" : "Factory entrance" }))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "contact-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, lang === "cn" ? "\u8054\u7CFB\u4FE1\u606F" : "Get in touch"), /* @__PURE__ */ React.createElement("h2", { className: "display-l", style: { margin: "16px 0 28px" } }, lang === "cn" ? "\u968F\u65F6\u804A\u804A" : "Always happy to talk"), /* @__PURE__ */ React.createElement("div", { className: "contact-info reveal" }, Object.entries(c.info).map(([k, v]) => /* @__PURE__ */ React.createElement("div", { className: "info-row", key: k }, /* @__PURE__ */ React.createElement("div", { className: "k" }, v.t), /* @__PURE__ */ React.createElement("div", { className: "v" }, v.v))))), /* @__PURE__ */ React.createElement("div", null, submitted ? /* @__PURE__ */ React.createElement("div", { className: "form-success reveal" }, /* @__PURE__ */ React.createElement("div", { className: "check-mark" }, /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M6 14 L12 20 L22 8", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }))), /* @__PURE__ */ React.createElement("h3", null, lang === "cn" ? "\u5DF2\u6536\u5230\uFF0C\u611F\u8C22\u54A8\u8BE2" : "Got it. Thank you."), /* @__PURE__ */ React.createElement("p", { className: "lede", style: { margin: 0 } }, lang === "cn" ? "\u6211\u4EEC\u4F1A\u5728 1 \u4E2A\u5DE5\u4F5C\u65E5\u5185\u4E3B\u52A8\u8054\u7CFB\u60A8\u3002" : "We will get back to you within one business day."), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", onClick: () => setSubmitted(false) }, lang === "cn" ? "\u518D\u53D1\u4E00\u6761" : "Send another")) : /* @__PURE__ */ React.createElement("form", { className: "contact-form-card reveal", onSubmit: submit }, /* @__PURE__ */ React.createElement("h3", null, c.form.title), /* @__PURE__ */ React.createElement("p", { className: "body", style: { margin: 0 } }, c.form.sub), /* @__PURE__ */ React.createElement("div", { className: "form-grid" }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, c.form.fields.name), /* @__PURE__ */ React.createElement("input", { required: true, value: form.name, onChange: update("name"), placeholder: c.form.fields.name })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, c.form.fields.company), /* @__PURE__ */ React.createElement("input", { value: form.company, onChange: update("company"), placeholder: c.form.fields.company })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, c.form.fields.email), /* @__PURE__ */ React.createElement("input", { type: "email", required: true, "aria-required": "true", value: form.email, onChange: update("email"), placeholder: "name@company.com" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, c.form.fields.phone), /* @__PURE__ */ React.createElement("input", { value: form.phone, onChange: update("phone"), placeholder: "+65 ..." })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, c.form.fields.country), /* @__PURE__ */ React.createElement("input", { value: form.country, onChange: update("country"), placeholder: c.form.fields.country })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, c.form.fields.type), /* @__PURE__ */ React.createElement("select", { value: form.type, onChange: update("type") }, c.form.fields.types.map((tp) => /* @__PURE__ */ React.createElement("option", { key: tp, value: tp }, tp)))), /* @__PURE__ */ React.createElement("div", { className: "field full" }, /* @__PURE__ */ React.createElement("label", null, c.form.fields.message), /* @__PURE__ */ React.createElement("textarea", { value: form.message, onChange: update("message"), placeholder: c.form.fields.message, rows: 4 })), /* @__PURE__ */ React.createElement("div", { className: "full", style: { display: "flex", justifyContent: "flex-end", marginTop: 8 } }, /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn btn-primary" }, c.form.fields.submit, " \u2192")))))))));
    }
    (window.HS_PAGES = window.HS_PAGES || {}).contact = Contact;
  })();
})();
