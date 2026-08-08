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
      const f = c.form.fields;
      const RFQ_EMAIL = c.info && c.info.email && c.info.email.v || "hi@hua-sheng.org";
      const RFQ_WHATSAPP = "6583099012";
      const [submitted, setSubmitted] = useState(false);
      const [form, setForm] = useState({ name: "", company: "", country: "", type: f.types[0], quantity: "", timeline: "", message: "" });
      const update = (k) => (e) => setForm(__spreadProps(__spreadValues({}, form), { [k]: e.target.value }));
      const submit = (e) => {
        e.preventDefault();
        setSubmitted(true);
      };
      const summary = [
        [f.name, form.name],
        [f.company, form.company],
        [f.country, form.country],
        [f.type, form.type],
        [f.quantity, form.quantity],
        [f.timeline, form.timeline],
        [f.message, form.message]
      ].filter(([, v]) => v && v.trim()).map(([k, v]) => `${k}: ${v.trim()}`).join("\n");
      const subject = `RFQ \u2013 ${form.type} \u2013 ${(form.company || form.name).trim()}`;
      const mailtoHref = `mailto:${RFQ_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
      const waHref = `https://wa.me/${RFQ_WHATSAPP}?text=${encodeURIComponent(`${subject}
${summary}`)}`;
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "page-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-grid" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-text" }, /* @__PURE__ */ React.createElement(Eyebrow, { dot: true }, c.hero.eyebrow), /* @__PURE__ */ React.createElement("h1", { className: "display-xl reveal" }, c.hero.title), /* @__PURE__ */ React.createElement("p", { className: "lede reveal" }, c.hero.sub)), /* @__PURE__ */ React.createElement("div", { className: "page-hero-media reveal" }, /* @__PURE__ */ React.createElement(ImgSlot, { src: "assets/huasheng/contact-factory-entrance.webp", alt: lang === "cn" ? "\u534E\u76DB\u91D1\u5C5E\u5382\u533A\u5165\u53E3" : "HuaSheng Metal factory entrance", label: lang === "cn" ? "\u5382\u533A\u5165\u53E3" : "Factory entrance" }))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "contact-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, lang === "cn" ? "\u8054\u7CFB\u4FE1\u606F" : "Get in touch"), /* @__PURE__ */ React.createElement("h2", { className: "display-l", style: { margin: "16px 0 28px" } }, lang === "cn" ? "\u968F\u65F6\u804A\u804A" : "Always happy to talk"), /* @__PURE__ */ React.createElement("div", { className: "contact-info reveal" }, Object.entries(c.info).map(([k, v]) => /* @__PURE__ */ React.createElement("div", { className: "info-row", key: k }, /* @__PURE__ */ React.createElement("div", { className: "k" }, v.t), /* @__PURE__ */ React.createElement("div", { className: "v" }, v.v)))), c.rfq && /* @__PURE__ */ React.createElement("div", { className: "reveal", style: { marginTop: 36 } }, /* @__PURE__ */ React.createElement(Eyebrow, null, c.rfq.eyebrow), /* @__PURE__ */ React.createElement("h3", { style: { margin: "14px 0 8px" } }, c.rfq.title), /* @__PURE__ */ React.createElement("p", { className: "body", style: { margin: "0 0 12px", color: "var(--ink-soft)" } }, c.rfq.sub), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, paddingLeft: 20, color: "var(--ink-soft)", lineHeight: 1.8 } }, c.rfq.items.map((item, i) => /* @__PURE__ */ React.createElement("li", { key: i }, item))))), /* @__PURE__ */ React.createElement("div", null, submitted ? /* @__PURE__ */ React.createElement("div", { className: "form-success reveal" }, /* @__PURE__ */ React.createElement("div", { className: "check-mark" }, /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M6 14 L12 20 L22 8", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }))), /* @__PURE__ */ React.createElement("h3", null, f.summary), /* @__PURE__ */ React.createElement("pre", { style: { width: "100%", margin: 0, padding: "16px 18px", textAlign: "left", whiteSpace: "pre-wrap", wordBreak: "break-word", font: "inherit", fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", border: "1px solid var(--line, #e2ddd4)", borderRadius: 10 } }, summary), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: mailtoHref }, f.sendEmail, " \u2192"), /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: waHref, target: "_blank", rel: "noopener" }, f.sendWhatsApp, " \u2192")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", onClick: () => setSubmitted(false) }, f.edit)) : /* @__PURE__ */ React.createElement("form", { className: "contact-form-card reveal", onSubmit: submit }, /* @__PURE__ */ React.createElement("h3", null, c.form.title), /* @__PURE__ */ React.createElement("p", { className: "body", style: { margin: 0 } }, c.form.sub), /* @__PURE__ */ React.createElement("div", { className: "form-grid" }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, f.name), /* @__PURE__ */ React.createElement("input", { required: true, value: form.name, onChange: update("name"), placeholder: f.name })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, f.company), /* @__PURE__ */ React.createElement("input", { value: form.company, onChange: update("company"), placeholder: f.company })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, f.country), /* @__PURE__ */ React.createElement("input", { value: form.country, onChange: update("country"), placeholder: f.country })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, f.type), /* @__PURE__ */ React.createElement("select", { value: form.type, onChange: update("type") }, f.types.map((tp) => /* @__PURE__ */ React.createElement("option", { key: tp, value: tp }, tp)))), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, f.quantity), /* @__PURE__ */ React.createElement("input", { value: form.quantity, onChange: update("quantity"), placeholder: lang === "cn" ? "\u4F8B\u5982\uFF1A23 \u5EA7" : "e.g. 23 units" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, f.timeline), /* @__PURE__ */ React.createElement("input", { value: form.timeline, onChange: update("timeline"), placeholder: lang === "cn" ? "\u4F8B\u5982\uFF1A2026 \u5E74 Q4" : "e.g. Q4 2026" })), /* @__PURE__ */ React.createElement("div", { className: "field full" }, /* @__PURE__ */ React.createElement("label", null, f.message), /* @__PURE__ */ React.createElement("textarea", { value: form.message, onChange: update("message"), placeholder: f.message, rows: 4 })), /* @__PURE__ */ React.createElement("div", { className: "full", style: { display: "flex", justifyContent: "flex-end", marginTop: 8 } }, /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn btn-primary" }, f.submit, " \u2192")))))))));
    }
    (window.HS_PAGES = window.HS_PAGES || {}).contact = Contact;
  })();
})();
