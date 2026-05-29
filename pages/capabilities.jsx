// Capabilities page
(() => {
  const { ImgSlot, Eyebrow, SectionHead, StatRow, CTABlock } = window.HSUI;

  function Capabilities({ t, lang, setRoute }) {
    const c = t.cap;
    const go = (id) => { setRoute(id); window.scrollTo({ top: 0, behavior: "instant" }); };
    return (
      <React.Fragment>
        <section className="page-hero">
          <div className="container-wide">
            <div className="page-hero-grid">
              <div className="page-hero-text">
                <Eyebrow dot>{c.hero.eyebrow}</Eyebrow>
                <h1 className="display-xl reveal">{c.hero.title}</h1>
                <p className="lede reveal">{c.hero.sub}</p>
              </div>
              <div className="page-hero-media reveal">
                <ImgSlot src="assets/huasheng/capabilities-workshop.webp" alt={lang === "cn" ? "华盛金属加工车间" : "HuaSheng metal fabrication workshop"} label={lang === "cn" ? "车间" : "Workshop"} />
              </div>
            </div>
          </div>
        </section>

        {/* Plant stats */}
        <section className="tight">
          <div className="container-wide">
            <div className="plant-stats reveal">
              {c.plantStats.map((s, i) => (
                <div className="stat-cell" key={i}>
                  <div className="stat-num">{s.num}{s.unit && <span className="unit">{s.unit}</span>}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section>
          <div className="container">
            <SectionHead eyebrow={lang === "cn" ? "五大车间" : "Five workshops"} title={c.workshops.title} lede={c.workshops.sub} />
            <div className="workshop-list reveal">
              {c.workshops.items.map((w, i) => (
                <div className="workshop-row" key={i}>
                  <div className="tag">{w.tag}</div>
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section>
          <div className="container">
            <SectionHead eyebrow={lang === "cn" ? "297 台设备" : "297 machines"} title={c.equipment.title} lede={c.equipment.sub} />
            <div className="equipment-grid reveal">
              {c.equipment.items.map((e, i) => (
                <div className="equipment-chip" key={i}>{e}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section>
          <div className="container-wide">
            <SectionHead eyebrow={lang === "cn" ? "标准流程" : "Standard process"} title={c.process.title} />
            <div className="process-flow reveal">
              {c.process.steps.map((s, i) => (
                <div className="process-step" key={i}>
                  <div className="n">STEP {s.n}</div>
                  <div className="t">{s.t}</div>
                  <div className="d">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock
          title={lang === "cn" ? "想了解我们的质量管控？" : "Want to see our quality system?"}
          sub={lang === "cn" ? "ISO 9001 体系 + DMAIC 全流程质量管理。" : "ISO 9001 certified + DMAIC end-to-end quality management."}
          btn={lang === "cn" ? "查看质量与认证" : "Quality & certification"}
          onClick={() => go("quality")}
        />
      </React.Fragment>
    );
  }

  (window.HS_PAGES = window.HS_PAGES || {}).capabilities = Capabilities;
})();
