// Quality & certification page
(() => {
  const { ImgSlot, Eyebrow, SectionHead, CTABlock } = window.HSUI;

  const QUALITY_DOCS = [
    {
      src: "assets/huasheng/quality-docs/business-license-metal.webp",
      cn: "华盛金属营业执照",
      en: "HuaSheng Metal business licence",
    },
    {
      src: "assets/huasheng/quality-docs/iso-9001-cn.webp",
      cn: "ISO 9001 质量管理体系认证",
      en: "ISO 9001 quality management certification",
    },
    {
      src: "assets/huasheng/quality-docs/business-license-trade.webp",
      cn: "华盛工贸营业执照",
      en: "HuaSheng Industry & Trade business licence",
    },
    {
      src: "assets/huasheng/quality-docs/iso-9001-en.webp",
      cn: "ISO 9001 英文认证文件",
      en: "ISO 9001 English certificate",
    },
    {
      src: "assets/huasheng/quality-docs/safety-permit.webp",
      cn: "安全生产许可",
      en: "Work safety permit",
    },
    {
      src: "assets/huasheng/quality-docs/innovation-enterprise.webp",
      cn: "科技创新小巨人企业证书",
      en: "Technology innovation enterprise certificate",
    },
    {
      src: "assets/huasheng/quality-docs/qualification-certificate.webp",
      cn: "企业资质证书",
      en: "Enterprise qualification certificate",
    },
    {
      src: "assets/huasheng/quality-docs/approval-certificate.webp",
      cn: "批准证书",
      en: "Certificate of approval",
    },
    {
      src: "assets/huasheng/quality-docs/quality-approval.webp",
      cn: "质量体系认可文件",
      en: "Quality system approval document",
    },
  ];

  function Quality({ t, lang, setRoute }) {
    const q = t.quality;
    const go = (id) => { setRoute(id); window.scrollTo({ top: 0, behavior: "instant" }); };
    return (
      <React.Fragment>
        <section className="page-hero">
          <div className="container-wide">
            <div className="page-hero-grid">
              <div className="page-hero-text">
                <Eyebrow dot>{q.hero.eyebrow}</Eyebrow>
                <h1 className="display-xl reveal">{q.hero.title}</h1>
                <p className="lede reveal">{q.hero.sub}</p>
              </div>
              <div className="page-hero-media reveal">
                <ImgSlot src="assets/huasheng/quality-control.webp" alt={lang === "cn" ? "金属制造质量检验与认证流程" : "Metal manufacturing quality control and certification process"} label={lang === "cn" ? "质量检验" : "Quality control"} />
              </div>
            </div>
          </div>
        </section>

        {/* Policy pillars */}
        <section>
          <div className="container">
            <SectionHead eyebrow={lang === "cn" ? "质量方针" : "Quality policy"} title={q.policy.title} lede={q.policy.sub} />
            <div className="policy-grid reveal">
              {q.policy.pillars.map((p, i) => (
                <div className="pillar-card" key={i}>
                  <div className="tag">{p.tag}</div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DMAIC */}
        <section>
          <div className="container-wide">
            <SectionHead eyebrow={lang === "cn" ? "DMAIC" : "DMAIC"} title={q.dmaic.title} lede={q.dmaic.sub} />
            <div className="dmaic-flow reveal">
              {q.dmaic.steps.map((s, i) => (
                <div className="dmaic-step" key={i}>
                  <div className="letter">{s.n}</div>
                  <div className="t">{s.t}</div>
                  <div className="d">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certs */}
        <section>
          <div className="container">
            <SectionHead eyebrow={lang === "cn" ? "资质" : "Certifications"} title={q.certs.title} />
            <div className="certs-grid reveal">
              {q.certs.items.map((c, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-icon">
                    {i === 0 ? "ISO\n9001" : i === 1 ? (lang === "cn" ? "外观\n专利" : "Design\nPatent") : i === 2 ? (lang === "cn" ? "实用\n新型" : "Utility\nPatent") : (lang === "cn" ? "IKEA\n供应商" : "IKEA\nSupplier")}
                  </div>
                  <div>
                    <h4>{c.t}</h4>
                    <p>{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container-wide">
            <SectionHead
              eyebrow={lang === "cn" ? "原始文件" : "Original documents"}
              title={lang === "cn" ? "从公司资料中提取的真实证书" : "Real certificates extracted from company materials"}
              lede={lang === "cn" ? "以下图片保留原始文件比例，仅做裁边、高清化与轻量锐化处理。" : "These images preserve the original document ratios, with only trimming, upscaling and light sharpening applied."}
            />
            <div className="doc-gallery reveal">
              {QUALITY_DOCS.map((doc) => (
                <figure className="doc-card" key={doc.src}>
                  <img src={doc.src} alt={lang === "cn" ? doc.cn : doc.en} loading="lazy" />
                  <figcaption>{lang === "cn" ? doc.cn : doc.en}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <CTABlock
          title={lang === "cn" ? "想看具体的质量记录？" : "Want to see the actual quality records?"}
          sub={lang === "cn" ? "我们可以提供过往项目的 IQC、IPQC、FQC 记录与 ITP 文件。" : "We can share IQC / IPQC / FQC records and ITP documents from past projects."}
          btn={lang === "cn" ? "联系我们" : "Contact us"}
          onClick={() => go("contact")}
        />
      </React.Fragment>
    );
  }

  (window.HS_PAGES = window.HS_PAGES || {}).quality = Quality;
})();
