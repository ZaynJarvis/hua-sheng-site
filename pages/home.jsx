// Homepage
(() => {
  const { ImgSlot, Eyebrow, SectionHead, StatRow, CTABlock } = window.HSUI;

  function Home({ t, lang, setRoute }) {
    const h = t.home;
    const go = (id) => { setRoute(id); window.scrollTo({ top: 0, behavior: "instant" }); };
    return (
      <React.Fragment>
        {/* ----- Hero ----- */}
        <section className="home-hero">
          <div className="hero-bg-texture" aria-hidden="true"></div>
          <div className="container-wide">
            <div className="home-hero-grid">
              <div>
                <Eyebrow dot>{h.eyebrow}</Eyebrow>
                <h1 className="home-hero-title reveal">{h.heroTitle}</h1>
                <p className="home-hero-sub reveal">{h.heroSub}</p>
                <div className="home-hero-actions reveal">
                  <button className="btn btn-primary" onClick={() => go("cases")}>{h.heroCta1} →</button>
                  <button className="btn btn-ghost" onClick={() => go("capabilities")}>{h.heroCta2}</button>
                </div>
              </div>
              <div className="home-hero-media reveal">
                <ImgSlot src="assets/huasheng/hero-bus-shelter-deployed.webp" alt={lang === "cn" ? "华盛公交候车亭城市部署图" : "HuaSheng bus shelter deployed in an urban street"} />
                <div className="corner">
                  {lang === "cn"
                    ? <React.Fragment>建过的金属<br/>遍布 40+ 国家</React.Fragment>
                    : <React.Fragment>Built in<br/>40+ countries</React.Fragment>}
                </div>
              </div>
            </div>

            <div className="reveal"><StatRow items={h.stats} /></div>
          </div>
        </section>

        {/* ----- Intro ----- */}
        <section>
          <div className="container">
            <div className="intro-split">
              <div>
                <Eyebrow>{h.intro.eyebrow}</Eyebrow>
                <h2 className="display-l reveal" style={{ marginTop: 16 }}>{h.intro.title}</h2>
              </div>
              <div className="story-paragraphs">
                <p className="reveal">{h.intro.body}</p>
                <div className="reveal">
                  <button className="btn btn-text" onClick={() => go("about")}>
                    {lang === "cn" ? "阅读完整企业历程" : "Read the full company history"} <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----- Capabilities preview ----- */}
        <section>
          <div className="container">
            <SectionHead eyebrow={h.capabilities.eyebrow} title={h.capabilities.title} />
            <div className="cap-grid reveal">
              {h.capabilities.items.map((it, i) => (
                <div className="cap-cell" key={i}>
                  <div className="tag">{it.tag}</div>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              ))}
            </div>
            <div className="row reveal" style={{ marginTop: 32, justifyContent: "flex-end" }}>
              <button className="btn btn-text" onClick={() => go("capabilities")}>
                {lang === "cn" ? "完整生产能力介绍" : "Full production capability"} <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ----- Featured projects ----- */}
        <section>
          <div className="container-wide">
            <SectionHead eyebrow={h.featured.eyebrow} title={h.featured.title} />
            <div className="featured-grid reveal">
              <div className="featured-main">
                <article className="featured-card">
                  <ImgSlot src="assets/huasheng/featured-beijing-shelter-v2.webp" alt={lang === "cn" ? "北京奥运不锈钢候车亭项目" : "Beijing Olympics stainless steel shelter project"} label={lang === "cn" ? "北京奥运候车亭" : "Beijing Olympics shelter"} />
                  <div className="featured-meta">
                    <div className="top">
                      <span className="pin">●</span>
                      <span>{lang === "cn" ? "国内候车亭" : "DOMESTIC SHELTER"}</span>
                      <span>·</span>
                      <span>2008</span>
                    </div>
                    <h4>{lang === "cn" ? "北京奥运不锈钢候车亭" : "Beijing Olympics stainless steel shelter"}</h4>
                    <p>{lang === "cn"
                      ? "工程量 ¥12,723,000。围绕奥运场馆的不锈钢候车亭，是华盛承接的标志性国家级工程。"
                      : "RMB 12.72M contract. Stainless steel shelters around Beijing Olympic venues — HuaSheng's flagship national project."}</p>
                  </div>
                </article>
              </div>
              <div className="featured-side">
                <article className="featured-card">
                  <ImgSlot src="assets/huasheng/featured-qatar-shelter.webp" alt={lang === "cn" ? "卡塔尔多哈候车亭项目" : "Doha bus shelter project in Qatar"} label={lang === "cn" ? "卡塔尔项目" : "Qatar project"} />
                  <div className="featured-meta">
                    <div className="top"><span className="pin">●</span><span>{lang === "cn" ? "海外" : "OVERSEAS"}</span><span>· 2014</span></div>
                    <h4>{lang === "cn" ? "卡塔尔多哈候车亭" : "Doha shelters, Qatar"}</h4>
                  </div>
                </article>
                <article className="featured-card">
                  <ImgSlot src="assets/huasheng/mtr-ticket-counter.webp" alt={lang === "cn" ? "香港 MTR 不锈钢售票咨询柜台" : "Hong Kong MTR stainless steel ticket and enquiry counter"} label={lang === "cn" ? "香港 MTR" : "Hong Kong MTR"} />
                  <div className="featured-meta">
                    <div className="top"><span className="pin">●</span><span>{lang === "cn" ? "海外" : "OVERSEAS"}</span><span>· 2016</span></div>
                    <h4>{lang === "cn" ? "香港 MTR 售票咨询柜台" : "Hong Kong MTR ticket counter"}</h4>
                  </div>
                </article>
              </div>
            </div>
            <div className="row reveal" style={{ marginTop: 32, justifyContent: "flex-end" }}>
              <button className="btn btn-text" onClick={() => go("cases")}>
                {h.featured.viewAll} <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ----- Clients ----- */}
        <section>
          <div className="container">
            <SectionHead eyebrow={h.clients.eyebrow} title={h.clients.title} />
            <div className="client-grid reveal">
              {h.clients.list.map((c, i) => (
                <div className="client-cell" key={i}>{c}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ----- Footer CTA ----- */}
        <CTABlock
          title={h.footerCta.title}
          sub={h.footerCta.sub}
          btn={h.footerCta.btn}
          onClick={() => go("contact")}
        />
      </React.Fragment>
    );
  }

  (window.HS_PAGES = window.HS_PAGES || {}).home = Home;
})();
