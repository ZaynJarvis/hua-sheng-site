// App shell — header, footer, router, language + theme state.
// Pages are registered onto window.HS_PAGES by their individual files.

const { useState, useEffect, useRef, useMemo, useCallback } = React;
const { TweaksPanel, TweakSection, TweakRadio, useTweaks: useTweaksHook } = window;

const ROUTE_PATHS = {
  home: "/",
  about: "/about",
  capabilities: "/capabilities",
  cases: "/projects",
  quality: "/quality",
  contact: "/contact",
};

function routeFromPath(pathname) {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const found = Object.entries(ROUTE_PATHS).find(([, path]) => path === normalized);
  if (found) return found[0];
  if (normalized === "/cases") return "cases";
  return "home";
}

// ---------- Reveal-on-scroll hook ----------
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal:not(.in)"));
    if (els.length === 0) return;
    // Items already in viewport (or just below): reveal immediately on next frame
    // so the hero never paints empty.
    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight + 100;
    };
    requestAnimationFrame(() => {
      els.filter(inView).forEach((el, i) => {
        el.style.transitionDelay = (i * 40) + "ms";
        el.classList.add("in");
      });
    });
    // Fallback for backgrounded tabs (rAF is throttled)
    setTimeout(() => {
      els.filter(inView).forEach((el, i) => {
        el.style.transitionDelay = (i * 40) + "ms";
        el.classList.add("in");
      });
    }, 50);
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.filter((el) => !inView(el)).forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// ---------- Header ----------
function Header({ route, setRoute, lang, setLang, theme, t, openMenu, setOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "capabilities", label: t.nav.capabilities },
    { id: "cases", label: t.nav.cases },
    { id: "quality", label: t.nav.quality },
    { id: "blog", label: t.nav.blog || "Blog", href: "/blog/" },
    { id: "contact", label: t.nav.contact },
  ];

  const go = (id) => {
    setRoute(id);
    setOpenMenu(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <React.Fragment>
      <header className={"site-header" + (scrolled ? " scrolled" : "")}>
        <div className="container-wide nav-inner">
          <a className="brand" href="#" onClick={(e) => { e.preventDefault(); go("home"); }} data-comment-anchor="brand">
            <span className="brand-mark"><img src="assets/logo.png?v=huasheng-logo-20260525" alt="HuaSheng" /></span>
            <span className="brand-text">
              <span className="a">{t.brand.short}</span>
              <span className="b">{lang === "cn" ? "HUASHENG · 1989" : "Est. 1989 · Guangzhou"}</span>
            </span>
          </a>

          <nav className="nav-links">
            {nav.map((n) => (
              <a key={n.id}
                 className={"nav-link" + (route === n.id ? " active" : "")}
                 href={n.href || "#"}
                 onClick={(e) => {
                   if (n.href) return;
                   e.preventDefault();
                   go(n.id);
                 }}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="lang-switch" role="tablist" aria-label="Language">
              <button className={lang === "cn" ? "on" : ""} onClick={() => setLang("cn")}>中</button>
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            </div>
            <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); go("contact"); }}>
              {t.nav.cta} <span aria-hidden="true">→</span>
            </a>
            <button className="menu-btn" aria-label="Menu" onClick={() => setOpenMenu(!openMenu)}>
              {openMenu
                ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                : <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6 H17 M3 10 H17 M3 14 H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              }
            </button>
          </div>
        </div>
      </header>

      <div className={"mobile-menu" + (openMenu ? " open" : "")} aria-hidden={!openMenu}>
        {nav.map((n) => (
          <a key={n.id}
             className={"nav-link" + (route === n.id ? " active" : "")}
             href={n.href || "#"}
             onClick={(e) => {
               if (n.href) return;
               e.preventDefault();
               go(n.id);
             }}>
            {n.label}
          </a>
        ))}
        <div className="mobile-actions">
          <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); go("contact"); }}>
            {t.nav.cta} →
          </a>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="lang-switch">
              <button className={lang === "cn" ? "on" : ""} onClick={() => setLang("cn")}>中文</button>
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>English</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// ---------- Footer ----------
function Footer({ lang, t, setRoute }) {
  const go = (id) => { setRoute(id); window.scrollTo({ top: 0, behavior: "instant" }); };
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <a className="brand" href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ marginBottom: 20 }}>
              <span className="brand-mark"><img src="assets/logo.png?v=huasheng-logo-20260525" alt="HuaSheng" /></span>
              <span className="brand-text">
                <span className="a">{t.brand.short}</span>
                <span className="b">{lang === "cn" ? "广州 · 1989" : "Guangzhou · 1989"}</span>
              </span>
            </a>
            <p className="footer-tag">{t.brand.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>{lang === "cn" ? "网站地图" : "Sitemap"}</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); go("home"); }}>{t.nav.home}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); go("about"); }}>{t.nav.about}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); go("capabilities"); }}>{t.nav.capabilities}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); go("cases"); }}>{t.nav.cases}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); go("quality"); }}>{t.nav.quality}</a></li>
              <li><a href="/blog/">{t.nav.blog || "Blog"}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); go("contact"); }}>{t.nav.contact}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{lang === "cn" ? "联系" : "Contact"}</h4>
            <ul>
              <li>{t.contact.info.contact.v}</li>
              <li>{t.contact.info.phone.v}</li>
              <li>{t.contact.info.email.v}</li>
              <li>{t.contact.info.hours.v}</li>
              <li>{t.contact.info.addr.v}</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{lang === "cn" ? "业务" : "Lines of business"}</h4>
            <ul>
              <li>{lang === "cn" ? "公共候车亭与广告灯箱" : "Bus shelters & light boxes"}</li>
              <li>{lang === "cn" ? "钢结构装修装饰工程" : "Steel structure & decoration"}</li>
              <li>{lang === "cn" ? "精密金属 OEM / ODM" : "Precision metal OEM / ODM"}</li>
              <li>{lang === "cn" ? "海外项目工程服务" : "Overseas project services"}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.brand.legal}</span>
          <span>{lang === "cn" ? "粤 ICP 备 XXXXXXXX 号" : "ICP Filing No. XXXXXXXX"}</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- Tweaks ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "clarity",
  "lang": "en",
  "accent": "default"
}/*EDITMODE-END*/;

function HSTweaksPanel({ tweaks, setTweak }) {
  return (
      <TweaksPanel title={tweaks.lang === "en" ? "Tweaks" : "Tweaks · 调节"}>
      <window.TweakSection title={tweaks.lang === "en" ? "Language" : "语言"}>
        <window.TweakRadio
          label={tweaks.lang === "en" ? "Language" : "语言"}
          options={[
            { value: "cn", label: "中文" },
            { value: "en", label: "English" },
          ]}
          value={tweaks.lang}
          onChange={(v) => setTweak("lang", v)}
        />
      </window.TweakSection>
      </TweaksPanel>
  );
}

// ---------- Page wrapper for reveal ----------
function PageHost({ routeKey, children }) {
  useReveal();
  return <main>{children}</main>;
}

// ---------- App ----------
function App() {
  const [values, setTweak] = useTweaksHook ? useTweaksHook(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];

  const [route, setRouteState] = useState(() => routeFromPath(window.location.pathname));
  const [openMenu, setOpenMenu] = useState(false);
  const lang = values.lang || "cn";
  const theme = values.theme || "heritage";

  const setRoute = useCallback((id) => {
    const next = ROUTE_PATHS[id] || "/";
    if (window.location.pathname !== next) {
      window.history.pushState({ route: id }, "", next);
    }
    setRouteState(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const onPopState = () => setRouteState(routeFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Sync to body attrs (so CSS theme vars take effect)
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-lang", lang);
    document.body.setAttribute("data-screen", route);
  }, [theme, lang, route]);

  const t = (window.HS_CONTENT || {})[lang] || {};

  // Allow language to be controlled from header too
  const setLang = (l) => setTweak("lang", l);

  const Page = (window.HS_PAGES || {})[route];

  return (
    <React.Fragment>
      <Header route={route} setRoute={setRoute} lang={lang} setLang={setLang} theme={theme} t={t}
              openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <PageHost key={route + ":" + lang + ":" + theme}>
        {Page ? <Page t={t} lang={lang} setRoute={setRoute} /> : <div style={{ padding: 200, textAlign: "center" }}>Loading…</div>}
      </PageHost>
      <Footer lang={lang} t={t} setRoute={setRoute} />
      <HSTweaksPanel tweaks={values} setTweak={setTweak} />
    </React.Fragment>
  );
}

window.HS_PAGES = window.HS_PAGES || {};
window.__startApp = function () {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
};
