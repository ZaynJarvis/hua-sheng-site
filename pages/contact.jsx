// Contact page
(() => {
  const { ImgSlot, Eyebrow, SectionHead } = window.HSUI;
  const { useState } = React;

  function Contact({ t, lang }) {
    const c = t.contact;
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", country: "", type: c.form.fields.types[0], message: "" });
    const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
    const submit = (e) => { e.preventDefault(); setSubmitted(true); };

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
                <ImgSlot src="assets/huasheng/contact-factory-entrance.webp" alt={lang === "cn" ? "华盛金属厂区入口" : "HuaSheng Metal factory entrance"} label={lang === "cn" ? "厂区入口" : "Factory entrance"} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="contact-grid">

              {/* Info */}
              <div>
                <Eyebrow>{lang === "cn" ? "联系信息" : "Get in touch"}</Eyebrow>
                <h2 className="display-l" style={{ margin: "16px 0 28px" }}>
                  {lang === "cn" ? "随时聊聊" : "Always happy to talk"}
                </h2>
                <div className="contact-info reveal">
                  {Object.entries(c.info).map(([k, v]) => (
                    <div className="info-row" key={k}>
                      <div className="k">{v.t}</div>
                      <div className="v">{v.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div>
                {submitted ? (
                  <div className="form-success reveal">
                    <div className="check-mark">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 14 L12 20 L22 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3>{lang === "cn" ? "已收到，感谢咨询" : "Got it. Thank you."}</h3>
                    <p className="lede" style={{ margin: 0 }}>
                      {lang === "cn" ? "我们会在 1 个工作日内主动联系您。" : "We will get back to you within one business day."}
                    </p>
                    <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>
                      {lang === "cn" ? "再发一条" : "Send another"}
                    </button>
                  </div>
                ) : (
                  <form className="contact-form-card reveal" onSubmit={submit}>
                    <h3>{c.form.title}</h3>
                    <p className="body" style={{ margin: 0 }}>{c.form.sub}</p>
                    <div className="form-grid">
                      <div className="field">
                        <label>{c.form.fields.name}</label>
                        <input required value={form.name} onChange={update("name")} placeholder={c.form.fields.name} />
                      </div>
                      <div className="field">
                        <label>{c.form.fields.company}</label>
                        <input value={form.company} onChange={update("company")} placeholder={c.form.fields.company} />
                      </div>
                      <div className="field">
                        <label>{c.form.fields.email}</label>
                        <input type="email" required aria-required="true" value={form.email} onChange={update("email")} placeholder="name@company.com" />
                      </div>
                      <div className="field">
                        <label>{c.form.fields.phone}</label>
                        <input value={form.phone} onChange={update("phone")} placeholder="+65 ..." />
                      </div>
                      <div className="field">
                        <label>{c.form.fields.country}</label>
                        <input value={form.country} onChange={update("country")} placeholder={c.form.fields.country} />
                      </div>
                      <div className="field">
                        <label>{c.form.fields.type}</label>
                        <select value={form.type} onChange={update("type")}>
                          {c.form.fields.types.map((tp) => <option key={tp} value={tp}>{tp}</option>)}
                        </select>
                      </div>
                      <div className="field full">
                        <label>{c.form.fields.message}</label>
                        <textarea value={form.message} onChange={update("message")} placeholder={c.form.fields.message} rows={4}></textarea>
                      </div>
                      <div className="full" style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                        <button type="submit" className="btn btn-primary">{c.form.fields.submit} →</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  (window.HS_PAGES = window.HS_PAGES || {}).contact = Contact;
})();
