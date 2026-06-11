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
  const SITE_ORIGIN = "https://hua-sheng.org";
  const SEO_META = {
    home: {
      en: {
        title: "HuaSheng Metal | Bus Shelters, Light Boxes & Metal OEM Since 1989",
        description: "HuaSheng Metal is a Guangzhou manufacturer of bus shelters, advertising light boxes, urban furniture, outdoor kiosks and precision metal OEM products serving 100+ cities and regions."
      },
      cn: {
        title: "\u534E\u76DB\u91D1\u5C5E | \u5019\u8F66\u4EAD\u3001\u5E7F\u544A\u706F\u7BB1\u4E0E\u57CE\u5E02\u91D1\u5C5E\u8BBE\u65BD\u5236\u9020\u5546",
        description: "\u534E\u76DB\u91D1\u5C5E\u59CB\u4E8E\u5E7F\u5DDE1989\u5E74\uFF0C\u5236\u9020\u516C\u5171\u4EA4\u901A\u5019\u8F66\u4EAD\u3001\u5E7F\u544A\u706F\u7BB1\u3001\u57CE\u5E02\u5BB6\u5177\u3001\u6237\u5916\u4EAD\u4F53\u4E0E\u7CBE\u5BC6\u91D1\u5C5EOEM\u4EA7\u54C1\uFF0C\u670D\u52A1\u5168\u7403100+\u57CE\u5E02\u548C\u5730\u533A\u3002"
      }
    },
    about: {
      en: {
        title: "About HuaSheng | Guangzhou Manufacturer Founded in 1989",
        description: "Learn about HuaSheng's 1989 founding, five core operating entities, four business pillars, global clients, smart city projects, manufacturing technology and quality values."
      },
      cn: {
        title: "\u5173\u4E8E\u534E\u76DB | \u59CB\u4E8E1989\u5E74\u7684\u5E7F\u5DDE\u91D1\u5C5E\u5236\u9020\u4F01\u4E1A\u96C6\u56E2",
        description: "\u4E86\u89E3\u534E\u76DB1989\u5E74\u521B\u7ACB\u3001\u4E94\u5BB6\u6838\u5FC3\u4E3B\u4F53\u3001\u56DB\u5927\u4E1A\u52A1\u677F\u5757\u3001\u5168\u7403\u5BA2\u6237\u3001\u57CE\u5E02\u9879\u76EE\u6848\u4F8B\u3001\u667A\u80FD\u5236\u9020\u80FD\u529B\u4E0E\u8D28\u91CF\u4EF7\u503C\u89C2\u3002"
      }
    },
    capabilities: {
      en: {
        title: "Manufacturing Capabilities | 120,000 m2 Metal Fabrication Base",
        description: "HuaSheng's production capability includes 120,000 m2 of plant area, five workshops, 297 precision machines, robotic welding, CNC forming and automated powder coating."
      },
      cn: {
        title: "\u6838\u5FC3\u5236\u9020\u80FD\u529B | \u534E\u76DB120,000\u5E73\u65B9\u7C73\u91D1\u5C5E\u52A0\u5DE5\u57FA\u5730",
        description: "\u534E\u76DB\u5236\u9020\u80FD\u529B\u8986\u76D6120,000\u5E73\u65B9\u7C73\u57FA\u5730\u3001\u4E94\u5927\u8F66\u95F4\u3001297\u53F0\u7CBE\u5BC6\u8BBE\u5907\u3001\u673A\u5668\u4EBA\u710A\u63A5\u3001CNC\u6210\u578B\u548C\u81EA\u52A8\u5316\u7C89\u672B\u55B7\u6D82\u751F\u4EA7\u7EBF\u3002"
      }
    },
    cases: {
      en: {
        title: "Bus Shelter & Metal Project Cases | HuaSheng Metal",
        description: "Explore HuaSheng bus shelter, smart transport, stainless steel, overseas public facility and OEM cases across Beijing, Shanghai, Guangzhou, Qatar, Nepal and more."
      },
      cn: {
        title: "\u9879\u76EE\u6848\u4F8B | \u534E\u76DB\u5019\u8F66\u4EAD\u3001\u667A\u6167\u4EA4\u901A\u4E0E\u91D1\u5C5E\u516C\u5171\u8BBE\u65BD",
        description: "\u67E5\u770B\u534E\u76DB\u5728\u5317\u4EAC\u3001\u4E0A\u6D77\u3001\u5E7F\u5DDE\u3001\u6DF1\u5733\u3001\u5361\u5854\u5C14\u3001\u6C99\u7279\u3001\u5C3C\u6CCA\u5C14\u7B49\u5730\u7684\u5019\u8F66\u4EAD\u3001\u667A\u6167\u4EA4\u901A\u3001\u91D1\u5C5E\u516C\u5171\u8BBE\u65BD\u548COEM\u9879\u76EE\u6848\u4F8B\u3002"
      }
    },
    quality: {
      en: {
        title: "Quality & Certifications | ISO 9001, Patents and DMAIC Process",
        description: "HuaSheng's quality system covers ISO 9001, bus shelter design patents, utility patents, IKEA supplier qualification and DMAIC-based quality control."
      },
      cn: {
        title: "\u8D28\u91CF\u4E0E\u8BA4\u8BC1 | ISO 9001\u3001\u5019\u8F66\u4EAD\u4E13\u5229\u4E0EDMAIC\u6D41\u7A0B",
        description: "\u534E\u76DB\u8D28\u91CF\u4F53\u7CFB\u8986\u76D6ISO 9001\u3001\u5019\u8F66\u4EAD\u5916\u89C2\u8BBE\u8BA1\u4E13\u5229\u3001\u7ED3\u6784\u5B9E\u7528\u65B0\u578B\u4E13\u5229\u3001IKEA\u4F9B\u5E94\u5546\u8D44\u683C\u548CDMAIC\u8D28\u91CF\u7BA1\u63A7\u6D41\u7A0B\u3002"
      }
    },
    contact: {
      en: {
        title: "Contact HuaSheng Metal | Bus Shelter & Metal OEM Enquiries",
        description: "Contact HuaSheng for bus shelter projects, advertising light boxes, steel structures, outdoor kiosks and long-term precision metal OEM manufacturing."
      },
      cn: {
        title: "\u8054\u7CFB\u534E\u76DB | \u5019\u8F66\u4EAD\u3001\u5E7F\u544A\u706F\u7BB1\u4E0E\u91D1\u5C5EOEM\u9879\u76EE\u54A8\u8BE2",
        description: "\u8054\u7CFB\u534E\u76DB\u54A8\u8BE2\u5019\u8F66\u4EAD\u3001\u5E7F\u544A\u706F\u7BB1\u3001\u94A2\u7ED3\u6784\u5DE5\u7A0B\u3001\u6237\u5916\u4EAD\u4F53\u3001\u57CE\u5E02\u5BB6\u5177\u548C\u957F\u671F\u7CBE\u5BC6\u91D1\u5C5EOEM\u5236\u9020\u5408\u4F5C\u3002"
      }
    }
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
      { id: "blog", label: t.nav.blog || "Blog", href: lang === "cn" ? "/zh/blog/" : "/en/blog/", external: true },
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
    } }, t.nav.quality)), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: lang === "cn" ? "/zh/blog/" : "/en/blog/" }, t.nav.blog || "Blog")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: lang === "cn" ? "/zh/answers/" : "/en/answers/" }, lang === "cn" ? "AI \u641C\u7D22\u7B54\u6848\u9875" : "AI search answers")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: routePath("contact", lang), onClick: (e) => {
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
      setHeadForRoute(route, lang);
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
