// App shell — header, footer, router, language + theme state.
// Pages are registered onto window.HS_PAGES by their individual files.

const { useState, useEffect, useRef, useMemo, useCallback } = React;
const BASE_ROUTE_PATHS = {
  home: "/",
  about: "/about",
  capabilities: "/capabilities",
  cases: "/projects",
  quality: "/quality",
  contact: "/contact",
};

const LANG_PREFIX = {
  en: "/en",
  cn: "/zh",
};

const SITE_ORIGIN = "https://hua-sheng.org";
const SEO_META = {
  home: {
    en: {
      title: "HuaSheng Metal | Bus Shelters, Light Boxes & Metal OEM Since 1989",
      description: "HuaSheng Metal is a Guangzhou manufacturer of bus shelters, advertising light boxes, urban furniture, outdoor kiosks and precision metal OEM products serving 100+ cities and regions.",
    },
    cn: {
      title: "华盛金属 | 候车亭、广告灯箱与城市金属设施制造商",
      description: "华盛金属始于广州1989年，制造公共交通候车亭、广告灯箱、城市家具、户外亭体与精密金属OEM产品，服务全球100+城市和地区。",
    },
  },
  about: {
    en: {
      title: "About HuaSheng | Guangzhou Manufacturer Founded in 1989",
      description: "Learn about HuaSheng's 1989 founding, five core operating entities, four business pillars, global clients, smart city projects, manufacturing technology and quality values.",
    },
    cn: {
      title: "关于华盛 | 始于1989年的广州金属制造企业集团",
      description: "了解华盛1989年创立、五家核心主体、四大业务板块、全球客户、城市项目案例、智能制造能力与质量价值观。",
    },
  },
  capabilities: {
    en: {
      title: "Manufacturing Capabilities | 120,000 m2 Metal Fabrication Base",
      description: "HuaSheng's production capability includes 120,000 m2 of plant area, five workshops, 297 precision machines, robotic welding, CNC forming and automated powder coating.",
    },
    cn: {
      title: "核心制造能力 | 华盛120,000平方米金属加工基地",
      description: "华盛制造能力覆盖120,000平方米基地、五大车间、297台精密设备、机器人焊接、CNC成型和自动化粉末喷涂生产线。",
    },
  },
  cases: {
    en: {
      title: "Bus Shelter & Metal Project Cases | HuaSheng Metal",
      description: "Explore HuaSheng bus shelter, smart transport, stainless steel, overseas public facility and OEM cases across Beijing, Shanghai, Guangzhou, Qatar, Nepal and more.",
    },
    cn: {
      title: "项目案例 | 华盛候车亭、智慧交通与金属公共设施",
      description: "查看华盛在北京、上海、广州、深圳、卡塔尔、沙特、尼泊尔等地的候车亭、智慧交通、金属公共设施和OEM项目案例。",
    },
  },
  quality: {
    en: {
      title: "Quality & Certifications | ISO 9001, Patents and DMAIC Process",
      description: "HuaSheng's quality system covers ISO 9001, bus shelter design patents, utility patents, IKEA supplier qualification and DMAIC-based quality control.",
    },
    cn: {
      title: "质量与认证 | ISO 9001、候车亭专利与DMAIC流程",
      description: "华盛质量体系覆盖ISO 9001、候车亭外观设计专利、结构实用新型专利、IKEA供应商资格和DMAIC质量管控流程。",
    },
  },
  contact: {
    en: {
      title: "Contact HuaSheng Metal | Bus Shelter & Metal OEM Enquiries",
      description: "Contact HuaSheng for bus shelter projects, advertising light boxes, steel structures, outdoor kiosks and long-term precision metal OEM manufacturing.",
    },
    cn: {
      title: "联系华盛 | 候车亭、广告灯箱与金属OEM项目咨询",
      description: "联系华盛咨询候车亭、广告灯箱、钢结构工程、户外亭体、城市家具和长期精密金属OEM制造合作。",
    },
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function routePath(route, lang) {
  const prefix = LANG_PREFIX[lang] || LANG_PREFIX.en;
  const path = BASE_ROUTE_PATHS[route] || "/";
  if (path === "/") return `${prefix}/`;
  return `${prefix}${path}/`;
}

function parseLocation(pathname) {
  const normalized = normalizePath(pathname);
  const parts = normalized.split("/").filter(Boolean);
  let lang = "en";
  let path = normalized;
  let hasLanguagePrefix = false;

  if (parts[0] === "zh" || parts[0] === "en") {
    lang = parts[0] === "zh" ? "cn" : "en";
    hasLanguagePrefix = true;
    path = `/${parts.slice(1).join("/")}`;
    if (path === "/") path = "/";
    path = normalizePath(path);
  }

  const found = Object.entries(BASE_ROUTE_PATHS).find(([, routeBasePath]) => routeBasePath === path);
  if (found) return { route: found[0], lang, hasLanguagePrefix };
  if (path === "/cases") return { route: "cases", lang, hasLanguagePrefix };
  return { route: "home", lang, hasLanguagePrefix };
}

function routeFromPath(pathname) {
  return parseLocation(pathname).route;
}

function setMeta(selector, attribute, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attribute, value);
}

function setHeadForRoute(route, lang) {
  const meta = (SEO_META[route] || SEO_META.home)[lang] || SEO_META.home.en;
  const canonical = SITE_ORIGIN + routePath(route, lang);
  const alternateEn = SITE_ORIGIN + routePath(route, "en");
  const alternateZh = SITE_ORIGIN + routePath(route, "cn");
  document.title = meta.title;
  setMeta('meta[name="description"]', "content", meta.description);
  setMeta('link[rel="canonical"]', "href", canonical);
  const alternates = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]'));
  alternates.forEach((el) => {
    const hreflang = el.getAttribute("hreflang");
    if (hreflang === "en") el.setAttribute("href", alternateEn);
    if (hreflang === "zh-CN") el.setAttribute("href", alternateZh);
    if (hreflang === "x-default") el.setAttribute("href", alternateEn);
  });
  setMeta('meta[property="og:url"]', "content", canonical);
  setMeta('meta[property="og:title"]', "content", meta.title);
  setMeta('meta[property="og:description"]', "content", meta.description);
  setMeta('meta[name="twitter:title"]', "content", meta.title);
  setMeta('meta[name="twitter:description"]', "content", meta.description);
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
function Header({ route, setRoute, lang, setLang, t, openMenu, setOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { id: "home", label: t.nav.home, href: routePath("home", lang) },
    { id: "about", label: t.nav.about, href: routePath("about", lang) },
    { id: "capabilities", label: t.nav.capabilities, href: routePath("capabilities", lang) },
    { id: "cases", label: t.nav.cases, href: routePath("cases", lang) },
    { id: "quality", label: t.nav.quality, href: routePath("quality", lang) },
    { id: "blog", label: t.nav.blog || "Blog", href: lang === "cn" ? "/zh/blog/" : "/en/blog/", external: true },
    { id: "contact", label: t.nav.contact, href: routePath("contact", lang) },
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
          <a className="brand" href={routePath("home", lang)} onClick={(e) => { e.preventDefault(); go("home"); }} data-comment-anchor="brand">
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
                 href={n.href}
                 onClick={(e) => {
                   if (n.external) return;
                   e.preventDefault();
                   go(n.id);
                 }}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="lang-switch" role="tablist" aria-label="Language">
              <button className={lang === "cn" ? "on" : ""} onClick={() => setLang("cn")} aria-pressed={lang === "cn"}>中文</button>
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
            </div>
            <a className="btn btn-primary" href={routePath("contact", lang)} onClick={(e) => { e.preventDefault(); go("contact"); }}>
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
             href={n.href}
             onClick={(e) => {
               if (n.external) return;
               e.preventDefault();
               go(n.id);
             }}>
            {n.label}
          </a>
        ))}
        <div className="mobile-actions">
          <a className="btn btn-primary" href={routePath("contact", lang)} onClick={(e) => { e.preventDefault(); go("contact"); }}>
            {t.nav.cta} →
          </a>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="lang-switch">
              <button className={lang === "cn" ? "on" : ""} onClick={() => setLang("cn")} aria-pressed={lang === "cn"}>中文</button>
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>English</button>
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
            <a className="brand" href={routePath("home", lang)} onClick={(e) => { e.preventDefault(); go("home"); }} style={{ marginBottom: 20 }}>
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
              <li><a href={routePath("home", lang)} onClick={(e) => { e.preventDefault(); go("home"); }}>{t.nav.home}</a></li>
              <li><a href={routePath("about", lang)} onClick={(e) => { e.preventDefault(); go("about"); }}>{t.nav.about}</a></li>
              <li><a href={routePath("capabilities", lang)} onClick={(e) => { e.preventDefault(); go("capabilities"); }}>{t.nav.capabilities}</a></li>
              <li><a href={routePath("cases", lang)} onClick={(e) => { e.preventDefault(); go("cases"); }}>{t.nav.cases}</a></li>
              <li><a href={routePath("quality", lang)} onClick={(e) => { e.preventDefault(); go("quality"); }}>{t.nav.quality}</a></li>
              <li><a href={lang === "cn" ? "/zh/blog/" : "/en/blog/"}>{t.nav.blog || "Blog"}</a></li>
              <li><a href={lang === "cn" ? "/zh/answers/" : "/en/answers/"}>{lang === "cn" ? "AI 搜索答案页" : "AI search answers"}</a></li>
              <li><a href={routePath("contact", lang)} onClick={(e) => { e.preventDefault(); go("contact"); }}>{t.nav.contact}</a></li>
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

// ---------- Page wrapper for reveal ----------
function PageHost({ routeKey, children }) {
  useReveal();
  return <main>{children}</main>;
}

// ---------- App ----------
function App() {
  const initialLocation = parseLocation(window.location.pathname);
  const [route, setRouteState] = useState(initialLocation.route);
  const [lang, setLangState] = useState(initialLocation.lang);
  const [openMenu, setOpenMenu] = useState(false);
  const theme = "clarity";

  const setRoute = useCallback((id, nextLang = lang) => {
    const next = routePath(id, nextLang);
    if (window.location.pathname !== next) {
      window.history.pushState({ route: id, lang: nextLang }, "", next);
    }
    setRouteState(id);
    setLangState(nextLang);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [lang]);

  const setLang = useCallback((nextLang) => {
    const next = routePath(route, nextLang);
    if (window.location.pathname !== next) {
      window.history.pushState({ route, lang: nextLang }, "", next);
    }
    setLangState(nextLang);
    setOpenMenu(false);
  }, [route]);

  useEffect(() => {
    const parsed = parseLocation(window.location.pathname);
    if (!parsed.hasLanguagePrefix) {
      window.history.replaceState(
        { route: parsed.route, lang: parsed.lang },
        "",
        routePath(parsed.route, parsed.lang)
      );
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const parsed = parseLocation(window.location.pathname);
      setRouteState(parsed.route);
      setLangState(parsed.lang);
      setOpenMenu(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Sync to body attrs (so CSS theme vars take effect)
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-lang", lang);
    document.body.setAttribute("data-screen", route);
    setHeadForRoute(route, lang);
  }, [theme, lang, route]);

  const t = (window.HS_CONTENT || {})[lang] || {};

  const Page = (window.HS_PAGES || {})[route];

  return (
    <React.Fragment>
      <Header route={route} setRoute={setRoute} lang={lang} setLang={setLang} t={t}
              openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <PageHost key={route + ":" + lang + ":" + theme}>
        {Page ? <Page t={t} lang={lang} setRoute={setRoute} /> : <div style={{ padding: 200, textAlign: "center" }}>Loading…</div>}
      </PageHost>
      <Footer lang={lang} t={t} setRoute={setRoute} />
    </React.Fragment>
  );
}

window.HS_PAGES = window.HS_PAGES || {};
window.__startApp = function () {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
};
