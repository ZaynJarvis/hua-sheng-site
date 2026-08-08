// Contact page
(() => {
  const { ImgSlot, Eyebrow, SectionHead } = window.HSUI;
  const { useState } = React;

  function Contact({ t, lang }) {
    const c = t.contact;
    const f = c.form.fields;
    // Zero-backend RFQ: the form composes a structured plain-text summary that the
    // buyer sends themselves via mailto or WhatsApp (numbers/addresses from content.js contact.info).
    const RFQ_EMAIL = (c.info && c.info.email && c.info.email.v) || "hi@hua-sheng.org";
    const RFQ_WHATSAPP = "6583099012"; // +65 8309-9012 (c.info.phone)
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", company: "", country: "", type: f.types[0], quantity: "", timeline: "", message: "" });
    const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
    const submit = (e) => { e.preventDefault(); setSubmitted(true); };

    const summary = [
      [f.name, form.name],
      [f.company, form.company],
      [f.country, form.country],
      [f.type, form.type],
      [f.quantity, form.quantity],
      [f.timeline, form.timeline],
      [f.message, form.message],
    ]
      .filter(([, v]) => v && v.trim())
      .map(([k, v]) => `${k}: ${v.trim()}`)
      .join("\n");
    const subject = `RFQ – ${form.type} – ${(form.company || form.name).trim()}`;
    const mailtoHref = `mailto:${RFQ_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
    const waHref = `https://wa.me/${RFQ_WHATSAPP}?text=${encodeURIComponent(`${subject}\n${summary}`)}`;

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

                {/* Request-a-Quote framing: what to include so quotation can start immediately */}
                {c.rfq && (
                  <div className="reveal" style={{ marginTop: 36 }}>
                    <Eyebrow>{c.rfq.eyebrow}</Eyebrow>
                    <h3 style={{ margin: "14px 0 8px" }}>{c.rfq.title}</h3>
                    <p className="body" style={{ margin: "0 0 12px", color: "var(--ink-soft)" }}>{c.rfq.sub}</p>
                    <ul style={{ margin: 0, paddingLeft: 20, color: "var(--ink-soft)", lineHeight: 1.8 }}>
                      {c.rfq.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Form */}
              <div>
                {submitted ? (
                  <div className="form-success reveal">
                    <div className="check-mark">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 14 L12 20 L22 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3>{f.summary}</h3>
                    <pre style={{ width: "100%", margin: 0, padding: "16px 18px", textAlign: "left", whiteSpace: "pre-wrap", wordBreak: "break-word", font: "inherit", fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", border: "1px solid var(--line, #e2ddd4)", borderRadius: 10 }}>{summary}</pre>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                      <a className="btn btn-primary" href={mailtoHref}>{f.sendEmail} →</a>
                      <a className="btn btn-primary" href={waHref} target="_blank" rel="noopener">{f.sendWhatsApp} →</a>
                    </div>
                    <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>
                      {f.edit}
                    </button>
                  </div>
                ) : (
                  <form className="contact-form-card reveal" onSubmit={submit}>
                    <h3>{c.form.title}</h3>
                    <p className="body" style={{ margin: 0 }}>{c.form.sub}</p>
                    <div className="form-grid">
                      <div className="field">
                        <label>{f.name}</label>
                        <input required value={form.name} onChange={update("name")} placeholder={f.name} />
                      </div>
                      <div className="field">
                        <label>{f.company}</label>
                        <input value={form.company} onChange={update("company")} placeholder={f.company} />
                      </div>
                      <div className="field">
                        <label>{f.country}</label>
                        <input value={form.country} onChange={update("country")} placeholder={f.country} />
                      </div>
                      <div className="field">
                        <label>{f.type}</label>
                        <select value={form.type} onChange={update("type")}>
                          {f.types.map((tp) => <option key={tp} value={tp}>{tp}</option>)}
                        </select>
                      </div>
                      <div className="field">
                        <label>{f.quantity}</label>
                        <input value={form.quantity} onChange={update("quantity")} placeholder={lang === "cn" ? "例如：23 座" : "e.g. 23 units"} />
                      </div>
                      <div className="field">
                        <label>{f.timeline}</label>
                        <input value={form.timeline} onChange={update("timeline")} placeholder={lang === "cn" ? "例如：2026 年 Q4" : "e.g. Q4 2026"} />
                      </div>
                      <div className="field full">
                        <label>{f.message}</label>
                        <textarea value={form.message} onChange={update("message")} placeholder={f.message} rows={4}></textarea>
                      </div>
                      <div className="full" style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                        <button type="submit" className="btn btn-primary">{f.submit} →</button>
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
