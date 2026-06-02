// About page
(() => {
  const { ImgSlot, Eyebrow, SectionHead, CTABlock } = window.HSUI;

  function About({ t, lang, setRoute }) {
    const a = t.about;
    const go = (id) => { setRoute(id); window.scrollTo({ top: 0, behavior: "instant" }); };
    const renderCards = (items) => (
      <div className="about-card-grid reveal">
        {items.map((item, i) => (
          <article className="about-card" key={i}>
            {item.tag && <div className="tag">{item.tag}</div>}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    );

    return (
      <React.Fragment>
        {/* Hero */}
        <section className="page-hero">
          <div className="container-wide">
            <div className="page-hero-grid">
              <div className="page-hero-text">
                <Eyebrow dot>{a.hero.eyebrow}</Eyebrow>
                <h1 className="display-xl reveal">{a.hero.title}</h1>
                <p className="lede reveal">{a.hero.sub}</p>
              </div>
              <div className="page-hero-media reveal">
                <ImgSlot src="assets/huasheng/about-factory-campus.webp" alt={lang === "cn" ? "华盛金属厂区外观" : "HuaSheng Metal factory campus exterior"} label={lang === "cn" ? "厂区外观" : "Factory exterior"} />
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section>
          <div className="container">
            <div className="story-grid">
              <div>
                <Eyebrow>{lang === "cn" ? "公司故事" : "Our story"}</Eyebrow>
                <h2 className="display-l reveal" style={{ marginTop: 16 }}>{a.story.title}</h2>
              </div>
              <div className="story-paragraphs">
                {a.story.paragraphs.map((p, i) => (
                  <p className="reveal" key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section>
          <div className="container-wide">
            <SectionHead
              eyebrow={lang === "cn" ? "30 年 · 7 个节点" : "30 years · 7 markers"}
              title={a.milestones.title}
            />
            <div className="timeline reveal">
              {a.milestones.items.map((m, i) => (
                <div className="tl-cell" key={i}>
                  <div className="tl-year">{m.year}</div>
                  <div className="tl-title">{m.title}</div>
                  <div className="tl-body">{m.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Group / structure */}
        <section>
          <div className="container">
            <SectionHead eyebrow={lang === "cn" ? "企业架构" : "Group structure"} title={a.group.title} lede={a.group.sub} />
            <div className="group-grid reveal">
              {a.group.items.map((g, i) => (
                <div className="group-row" key={i}>{g}</div>
              ))}
            </div>
          </div>
        </section>

        {a.business && (
          <section>
            <div className="container">
              <SectionHead eyebrow={a.business.eyebrow} title={a.business.title} lede={a.business.sub} />
              {renderCards(a.business.items)}
            </div>
          </section>
        )}

        {a.clients && (
          <section>
            <div className="container">
              <SectionHead eyebrow={a.clients.eyebrow} title={a.clients.title} lede={a.clients.sub} />
              {renderCards(a.clients.items)}
            </div>
          </section>
        )}

        {a.projects && (
          <section>
            <div className="container-wide">
              <SectionHead eyebrow={a.projects.eyebrow} title={a.projects.title} lede={a.projects.sub} />
              {renderCards(a.projects.items)}
            </div>
          </section>
        )}

        {a.technology && (
          <section>
            <div className="container">
              <SectionHead eyebrow={a.technology.eyebrow} title={a.technology.title} lede={a.technology.sub} />
              {renderCards(a.technology.items)}
            </div>
          </section>
        )}

        {/* Mission */}
        <section>
          <div className="container">
            <div className="mission-block reveal">
              <div>
                <Eyebrow>{a.mission.eyebrow}</Eyebrow>
                <h2 className="display-l" style={{ marginTop: 16 }}>{a.mission.title}</h2>
              </div>
              <p className="lede" style={{ margin: 0 }}>{a.mission.body}</p>
            </div>
          </div>
        </section>

        {a.values && (
          <section>
            <div className="container">
              <SectionHead eyebrow={a.values.eyebrow} title={a.values.title} />
              {renderCards(a.values.items)}
            </div>
          </section>
        )}

        <CTABlock
          title={lang === "cn" ? "想看看我们造过什么？" : "Want to see what we have built?"}
          sub={lang === "cn" ? "三十六年里，华盛的公共设施、城市家具与金属制造项目已服务 100+ 城市和地区。" : "Thirty-six years of public facilities, urban furniture and metal manufacturing projects across 100+ cities and regions."}
          btn={lang === "cn" ? "浏览项目案例" : "Browse the projects"}
          onClick={() => go("cases")}
        />
      </React.Fragment>
    );
  }

  (window.HS_PAGES = window.HS_PAGES || {}).about = About;
})();
