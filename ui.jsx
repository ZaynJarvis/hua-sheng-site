// Shared UI primitives used across all pages.
// Loaded BEFORE pages, so they can reference window.HSUI.* without import.

const { useState: usU, useEffect: useEU, useRef: useRU, useMemo: useMU } = React;

// --------- ImgSlot: image with a "needs better photo" placeholder ---------
function ImgSlot({ src, alt, label, style, className, ratio, treatment }) {
  const [errored, setErrored] = usU(false);
  const has = src && !errored;
  const wrapStyle = { ...(ratio ? { aspectRatio: ratio } : {}), ...(style || {}) };
  return (
    <div className={"imgslot " + (has ? "" : "placeholder ") + (className || "")} style={wrapStyle}>
      {has
        ? <img src={src} alt={alt || ""} onError={() => setErrored(true)} loading="lazy" />
        : <span className="ph-label">{label || "图片占位 · IMG"}</span>}
      {treatment === "scrim" && has && <div className="img-scrim" aria-hidden="true"></div>}
    </div>
  );
}

// --------- Eyebrow ---------
function Eyebrow({ children, noRule, dot }) {
  return (
    <span className={"eyebrow" + (noRule ? " no-rule" : "")}>
      {dot && <span className="dot"></span>}
      <span>{children}</span>
    </span>
  );
}

// --------- SectionHead ---------
function SectionHead({ eyebrow, title, lede, center, kicker }) {
  return (
    <div className={"section-head" + (center ? " center" : "")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="display-l reveal">{title}</h2>
      {lede && <p className="lede reveal">{lede}</p>}
      {kicker}
    </div>
  );
}

// --------- StatRow ---------
function StatRow({ items }) {
  return (
    <div className="stat-row">
      {items.map((s, i) => (
        <div className="stat-cell reveal" key={i} style={{ transitionDelay: (i * 60) + "ms" }}>
          <div className="stat-num">{s.num}{s.unit ? <span className="unit">{s.unit}</span> : null}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// --------- PageHero — generic hero used by inner pages ---------
function PageHero({ eyebrow, title, sub, image, label }) {
  return (
    <section className="page-hero hero">
      <div className="container-wide">
        <div className="page-hero-grid">
          <div className="page-hero-text">
            <Eyebrow dot>{eyebrow}</Eyebrow>
            <h1 className="display-xl reveal">{title}</h1>
            {sub && <p className="lede reveal" style={{ marginTop: 8 }}>{sub}</p>}
          </div>
          <div className="page-hero-media reveal">
            <ImgSlot src={image} ratio="4 / 3" label={label || "图片占位"} />
          </div>
        </div>
      </div>
    </section>
  );
}

// --------- CTA block ---------
function CTABlock({ title, sub, btn, onClick }) {
  return (
    <section className="tight">
      <div className="container">
        <div className="cta-block reveal">
          <div className="cta-text">
            <h3 className="display-m">{title}</h3>
            {sub && <p className="lede" style={{ marginTop: 12 }}>{sub}</p>}
          </div>
          <button className="btn btn-primary" onClick={onClick}>{btn} <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </section>
  );
}

window.HSUI = { ImgSlot, Eyebrow, SectionHead, StatRow, PageHero, CTABlock };
