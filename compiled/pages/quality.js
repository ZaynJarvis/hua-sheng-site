(() => {
  (() => {
    const { ImgSlot, Eyebrow, SectionHead, CTABlock } = window.HSUI;
    const QUALITY_DOCS = [
      {
        src: "assets/huasheng/quality-docs/business-license-metal.webp",
        cn: "\u534E\u76DB\u91D1\u5C5E\u8425\u4E1A\u6267\u7167",
        en: "HuaSheng Metal business licence"
      },
      {
        src: "assets/huasheng/quality-docs/iso-9001-cn.webp",
        cn: "ISO 9001 \u8D28\u91CF\u7BA1\u7406\u4F53\u7CFB\u8BA4\u8BC1",
        en: "ISO 9001 quality management certification"
      },
      {
        src: "assets/huasheng/quality-docs/business-license-trade.webp",
        cn: "\u534E\u76DB\u5DE5\u8D38\u8425\u4E1A\u6267\u7167",
        en: "HuaSheng Industry & Trade business licence"
      },
      {
        src: "assets/huasheng/quality-docs/iso-9001-en.webp",
        cn: "ISO 9001 \u82F1\u6587\u8BA4\u8BC1\u6587\u4EF6",
        en: "ISO 9001 English certificate"
      },
      {
        src: "assets/huasheng/quality-docs/safety-permit.webp",
        cn: "\u5B89\u5168\u751F\u4EA7\u8BB8\u53EF",
        en: "Work safety permit"
      },
      {
        src: "assets/huasheng/quality-docs/innovation-enterprise.webp",
        cn: "\u79D1\u6280\u521B\u65B0\u5C0F\u5DE8\u4EBA\u4F01\u4E1A\u8BC1\u4E66",
        en: "Technology innovation enterprise certificate"
      },
      {
        src: "assets/huasheng/quality-docs/qualification-certificate.webp",
        cn: "\u4F01\u4E1A\u8D44\u8D28\u8BC1\u4E66",
        en: "Enterprise qualification certificate"
      },
      {
        src: "assets/huasheng/quality-docs/approval-certificate.webp",
        cn: "\u6279\u51C6\u8BC1\u4E66",
        en: "Certificate of approval"
      },
      {
        src: "assets/huasheng/quality-docs/quality-approval.webp",
        cn: "\u8D28\u91CF\u4F53\u7CFB\u8BA4\u53EF\u6587\u4EF6",
        en: "Quality system approval document"
      }
    ];
    function Quality({ t, lang, setRoute }) {
      const q = t.quality;
      const go = (id) => {
        setRoute(id);
        window.scrollTo({ top: 0, behavior: "instant" });
      };
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "page-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-grid" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-text" }, /* @__PURE__ */ React.createElement(Eyebrow, { dot: true }, q.hero.eyebrow), /* @__PURE__ */ React.createElement("h1", { className: "display-xl reveal" }, q.hero.title), /* @__PURE__ */ React.createElement("p", { className: "lede reveal" }, q.hero.sub)), /* @__PURE__ */ React.createElement("div", { className: "page-hero-media reveal" }, /* @__PURE__ */ React.createElement(ImgSlot, { src: "assets/huasheng/quality-control.webp", alt: lang === "cn" ? "\u91D1\u5C5E\u5236\u9020\u8D28\u91CF\u68C0\u9A8C\u4E0E\u8BA4\u8BC1\u6D41\u7A0B" : "Metal manufacturing quality control and certification process", label: lang === "cn" ? "\u8D28\u91CF\u68C0\u9A8C" : "Quality control" }))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: lang === "cn" ? "\u8D28\u91CF\u65B9\u9488" : "Quality policy", title: q.policy.title, lede: q.policy.sub }), /* @__PURE__ */ React.createElement("div", { className: "policy-grid reveal" }, q.policy.pillars.map((p, i) => /* @__PURE__ */ React.createElement("div", { className: "pillar-card", key: i }, /* @__PURE__ */ React.createElement("div", { className: "tag" }, p.tag), /* @__PURE__ */ React.createElement("h3", null, p.t), /* @__PURE__ */ React.createElement("p", null, p.d)))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: lang === "cn" ? "DMAIC" : "DMAIC", title: q.dmaic.title, lede: q.dmaic.sub }), /* @__PURE__ */ React.createElement("div", { className: "dmaic-flow reveal" }, q.dmaic.steps.map((s, i) => /* @__PURE__ */ React.createElement("div", { className: "dmaic-step", key: i }, /* @__PURE__ */ React.createElement("div", { className: "letter" }, s.n), /* @__PURE__ */ React.createElement("div", { className: "t" }, s.t), /* @__PURE__ */ React.createElement("div", { className: "d" }, s.d)))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: lang === "cn" ? "\u8D44\u8D28" : "Certifications", title: q.certs.title }), /* @__PURE__ */ React.createElement("div", { className: "certs-grid reveal" }, q.certs.items.map((c, i) => /* @__PURE__ */ React.createElement("div", { className: "cert-card", key: i }, /* @__PURE__ */ React.createElement("div", { className: "cert-icon" }, i === 0 ? "ISO\n9001" : i === 1 ? lang === "cn" ? "\u5916\u89C2\n\u4E13\u5229" : "Design\nPatent" : i === 2 ? lang === "cn" ? "\u5B9E\u7528\n\u65B0\u578B" : "Utility\nPatent" : lang === "cn" ? "IKEA\n\u4F9B\u5E94\u5546" : "IKEA\nSupplier"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, c.t), /* @__PURE__ */ React.createElement("p", null, c.d))))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement(
        SectionHead,
        {
          eyebrow: lang === "cn" ? "\u539F\u59CB\u6587\u4EF6" : "Original documents",
          title: lang === "cn" ? "\u4ECE\u516C\u53F8\u8D44\u6599\u4E2D\u63D0\u53D6\u7684\u771F\u5B9E\u8BC1\u4E66" : "Real certificates extracted from company materials",
          lede: lang === "cn" ? "\u4EE5\u4E0B\u56FE\u7247\u4FDD\u7559\u539F\u59CB\u6587\u4EF6\u6BD4\u4F8B\uFF0C\u4EC5\u505A\u88C1\u8FB9\u3001\u9AD8\u6E05\u5316\u4E0E\u8F7B\u91CF\u9510\u5316\u5904\u7406\u3002" : "These images preserve the original document ratios, with only trimming, upscaling and light sharpening applied."
        }
      ), /* @__PURE__ */ React.createElement("div", { className: "doc-gallery reveal" }, QUALITY_DOCS.map((doc) => /* @__PURE__ */ React.createElement("figure", { className: "doc-card", key: doc.src }, /* @__PURE__ */ React.createElement("img", { src: doc.src, alt: lang === "cn" ? doc.cn : doc.en, loading: "lazy" }), /* @__PURE__ */ React.createElement("figcaption", null, lang === "cn" ? doc.cn : doc.en)))))), /* @__PURE__ */ React.createElement(
        CTABlock,
        {
          title: lang === "cn" ? "\u60F3\u770B\u5177\u4F53\u7684\u8D28\u91CF\u8BB0\u5F55\uFF1F" : "Want to see the actual quality records?",
          sub: lang === "cn" ? "\u6211\u4EEC\u53EF\u4EE5\u63D0\u4F9B\u8FC7\u5F80\u9879\u76EE\u7684 IQC\u3001IPQC\u3001FQC \u8BB0\u5F55\u4E0E ITP \u6587\u4EF6\u3002" : "We can share IQC / IPQC / FQC records and ITP documents from past projects.",
          btn: lang === "cn" ? "\u8054\u7CFB\u6211\u4EEC" : "Contact us",
          onClick: () => go("contact")
        }
      ));
    }
    (window.HS_PAGES = window.HS_PAGES || {}).quality = Quality;
  })();
})();
