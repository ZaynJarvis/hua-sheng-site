(() => {
  const { useState, useEffect, useRef, useMemo, useCallback } = React;
  const BASE_ROUTE_PATHS = {
    home: "/",
    about: "/about",
    capabilities: "/capabilities",
    cases: "/projects",
    quality: "/quality",
    contact: "/contact"
  };
  const LANG_PREFIX = {
    en: "/en",
    cn: "/zh"
  };
  function normalizePath(pathname) {
    if (!pathname || pathname === "/") return "/";
    return pathname.replace(/\/+$/, "") || "/";
  }
  function routePath(route, lang) {
    const prefix = LANG_PREFIX[lang] || LANG_PREFIX.en;
    const path = BASE_ROUTE_PATHS[route] || "/";
    if (path === "/") return `${prefix}/`;
    return `${prefix}${path}`;
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
  function useReveal() {
    useEffect(() => {
      const els = Array.from(document.querySelectorAll(".reveal:not(.in)"));
      if (els.length === 0) return;
      const inView = (el) => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight + 100;
      };
      requestAnimationFrame(() => {
        els.filter(inView).forEach((el, i) => {
          el.style.transitionDelay = i * 40 + "ms";
          el.classList.add("in");
        });
      });
      setTimeout(() => {
        els.filter(inView).forEach((el, i) => {
          el.style.transitionDelay = i * 40 + "ms";
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
      { id: "blog", label: t.nav.blog || "Blog", href: lang === "cn" ? "/blog/" : "/blog/?lang=en", external: true },
      { id: "contact", label: t.nav.contact, href: routePath("contact", lang) }
    ];
    const go = (id) => {
      setRoute(id);
      setOpenMenu(false);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", { className: "site-header" + (scrolled ? " scrolled" : "") }, /* @__PURE__ */ React.createElement("div", { className: "container-wide nav-inner" }, /* @__PURE__ */ React.createElement("a", { className: "brand", href: routePath("home", lang), onClick: (e) => {
      e.preventDefault();
      go("home");
    }, "data-comment-anchor": "brand" }, /* @__PURE__ */ React.createElement("span", { className: "brand-mark" }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo.png?v=huasheng-logo-20260525", alt: "HuaSheng" })), /* @__PURE__ */ React.createElement("span", { className: "brand-text" }, /* @__PURE__ */ React.createElement("span", { className: "a" }, t.brand.short), /* @__PURE__ */ React.createElement("span", { className: "b" }, lang === "cn" ? "HUASHENG \xB7 1989" : "Est. 1989 \xB7 Guangzhou"))), /* @__PURE__ */ React.createElement("nav", { className: "nav-links" }, nav.map((n) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: n.id,
        className: "nav-link" + (route === n.id ? " active" : ""),
        href: n.href,
        onClick: (e) => {
          if (n.external) return;
          e.preventDefault();
          go(n.id);
        }
      },
      n.label
    ))), /* @__PURE__ */ React.createElement("div", { className: "nav-actions" }, /* @__PURE__ */ React.createElement("div", { className: "lang-switch", role: "tablist", "aria-label": "Language" }, /* @__PURE__ */ React.createElement("button", { className: lang === "cn" ? "on" : "", onClick: () => setLang("cn"), "aria-pressed": lang === "cn" }, "\u4E2D\u6587"), /* @__PURE__ */ React.createElement("button", { className: lang === "en" ? "on" : "", onClick: () => setLang("en"), "aria-pressed": lang === "en" }, "EN")), /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: routePath("contact", lang), onClick: (e) => {
      e.preventDefault();
      go("contact");
    } }, t.nav.cta, " ", /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "menu-btn", "aria-label": "Menu", onClick: () => setOpenMenu(!openMenu) }, openMenu ? /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M4 4 L16 16 M16 4 L4 16", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" })) : /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 6 H17 M3 10 H17 M3 14 H17", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" })))))), /* @__PURE__ */ React.createElement("div", { className: "mobile-menu" + (openMenu ? " open" : ""), "aria-hidden": !openMenu }, nav.map((n) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: n.id,
        className: "nav-link" + (route === n.id ? " active" : ""),
        href: n.href,
        onClick: (e) => {
          if (n.external) return;
          e.preventDefault();
          go(n.id);
        }
      },
      n.label
    )), /* @__PURE__ */ React.createElement("div", { className: "mobile-actions" }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: routePath("contact", lang), onClick: (e) => {
      e.preventDefault();
      go("contact");
    } }, t.nav.cta, " \u2192"), /* @__PURE__ */ React.createElement("div", { className: "row", style: { justifyContent: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "lang-switch" }, /* @__PURE__ */ React.createElement("button", { className: lang === "cn" ? "on" : "", onClick: () => setLang("cn"), "aria-pressed": lang === "cn" }, "\u4E2D\u6587"), /* @__PURE__ */ React.createElement("button", { className: lang === "en" ? "on" : "", onClick: () => setLang("en"), "aria-pressed": lang === "en" }, "English"))))));
  }
  function Footer({ lang, t, setRoute }) {
    const go = (id) => {
      setRoute(id);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    return /* @__PURE__ */ React.createElement("footer", { className: "site-footer" }, /* @__PURE__ */ React.createElement("div", { className: "container-wide" }, /* @__PURE__ */ React.createElement("div", { className: "footer-grid" }, /* @__PURE__ */ React.createElement("div", { className: "footer-col brand-col" }, /* @__PURE__ */ React.createElement("a", { className: "brand", href: routePath("home", lang), onClick: (e) => {
      e.preventDefault();
      go("home");
    }, style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("span", { className: "brand-mark" }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo.png?v=huasheng-logo-20260525", alt: "HuaSheng" })), /* @__PURE__ */ React.createElement("span", { className: "brand-text" }, /* @__PURE__ */ React.createElement("span", { className: "a" }, t.brand.short), /* @__PURE__ */ React.createElement("span", { className: "b" }, lang === "cn" ? "\u5E7F\u5DDE \xB7 1989" : "Guangzhou \xB7 1989"))), /* @__PURE__ */ React.createElement("p", { className: "footer-tag" }, t.brand.tagline)), /* @__PURE__ */ React.createElement("div", { className: "footer-col" }, /* @__PURE__ */ React.createElement("h4", null, lang === "cn" ? "\u7F51\u7AD9\u5730\u56FE" : "Sitemap"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: routePath("home", lang), onClick: (e) => {
      e.preventDefault();
      go("home");
    } }, t.nav.home)), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: routePath("about", lang), onClick: (e) => {
      e.preventDefault();
      go("about");
    } }, t.nav.about)), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: routePath("capabilities", lang), onClick: (e) => {
      e.preventDefault();
      go("capabilities");
    } }, t.nav.capabilities)), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: routePath("cases", lang), onClick: (e) => {
      e.preventDefault();
      go("cases");
    } }, t.nav.cases)), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: routePath("quality", lang), onClick: (e) => {
      e.preventDefault();
      go("quality");
    } }, t.nav.quality)), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: lang === "cn" ? "/blog/" : "/blog/?lang=en" }, t.nav.blog || "Blog")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: routePath("contact", lang), onClick: (e) => {
      e.preventDefault();
      go("contact");
    } }, t.nav.contact)))), /* @__PURE__ */ React.createElement("div", { className: "footer-col" }, /* @__PURE__ */ React.createElement("h4", null, lang === "cn" ? "\u8054\u7CFB" : "Contact"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, t.contact.info.contact.v), /* @__PURE__ */ React.createElement("li", null, t.contact.info.phone.v), /* @__PURE__ */ React.createElement("li", null, t.contact.info.email.v), /* @__PURE__ */ React.createElement("li", null, t.contact.info.hours.v), /* @__PURE__ */ React.createElement("li", null, t.contact.info.addr.v))), /* @__PURE__ */ React.createElement("div", { className: "footer-col" }, /* @__PURE__ */ React.createElement("h4", null, lang === "cn" ? "\u4E1A\u52A1" : "Lines of business"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, lang === "cn" ? "\u516C\u5171\u5019\u8F66\u4EAD\u4E0E\u5E7F\u544A\u706F\u7BB1" : "Bus shelters & light boxes"), /* @__PURE__ */ React.createElement("li", null, lang === "cn" ? "\u94A2\u7ED3\u6784\u88C5\u4FEE\u88C5\u9970\u5DE5\u7A0B" : "Steel structure & decoration"), /* @__PURE__ */ React.createElement("li", null, lang === "cn" ? "\u7CBE\u5BC6\u91D1\u5C5E OEM / ODM" : "Precision metal OEM / ODM"), /* @__PURE__ */ React.createElement("li", null, lang === "cn" ? "\u6D77\u5916\u9879\u76EE\u5DE5\u7A0B\u670D\u52A1" : "Overseas project services")))), /* @__PURE__ */ React.createElement("div", { className: "footer-bottom" }, /* @__PURE__ */ React.createElement("span", null, t.brand.legal), /* @__PURE__ */ React.createElement("span", null, lang === "cn" ? "\u7CA4 ICP \u5907 XXXXXXXX \u53F7" : "ICP Filing No. XXXXXXXX"))));
  }
  function PageHost({ routeKey, children }) {
    useReveal();
    return /* @__PURE__ */ React.createElement("main", null, children);
  }
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
    useEffect(() => {
      document.body.setAttribute("data-theme", theme);
      document.body.setAttribute("data-lang", lang);
      document.body.setAttribute("data-screen", route);
    }, [theme, lang, route]);
    const t = (window.HS_CONTENT || {})[lang] || {};
    const Page = (window.HS_PAGES || {})[route];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      Header,
      {
        route,
        setRoute,
        lang,
        setLang,
        t,
        openMenu,
        setOpenMenu
      }
    ), /* @__PURE__ */ React.createElement(PageHost, { key: route + ":" + lang + ":" + theme }, Page ? /* @__PURE__ */ React.createElement(Page, { t, lang, setRoute }) : /* @__PURE__ */ React.createElement("div", { style: { padding: 200, textAlign: "center" } }, "Loading\u2026")), /* @__PURE__ */ React.createElement(Footer, { lang, t, setRoute }));
  }
  window.HS_PAGES = window.HS_PAGES || {};
  window.__startApp = function() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(/* @__PURE__ */ React.createElement(App, null));
  };
})();
