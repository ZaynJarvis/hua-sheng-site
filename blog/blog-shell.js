(() => {
  const html = document.documentElement;
  const params = new URLSearchParams(location.search);
  const initialLang = params.get("lang") === "en" ? "en" : "zh";
  const routes = {
    zh: {
      home: "/zh/",
      about: "/zh/about/",
      capabilities: "/zh/capabilities/",
      projects: "/zh/projects/",
      quality: "/zh/quality/",
      contact: "/zh/contact/",
      blog: "/blog/",
    },
    en: {
      home: "/en/",
      about: "/en/about/",
      capabilities: "/en/capabilities/",
      projects: "/en/projects/",
      quality: "/en/quality/",
      contact: "/en/contact/",
      blog: "/blog/?lang=en",
    },
  };

  function setHref(selector, href) {
    document.querySelectorAll(selector).forEach((link) => {
      link.href = href;
    });
  }

  function setLang(lang) {
    const nextLang = lang === "en" ? "en" : "zh";
    const route = routes[nextLang];
    html.dataset.lang = nextLang;
    html.lang = nextLang === "en" ? "en" : "zh-CN";
    if (document.body) {
      document.body.dataset.lang = nextLang === "en" ? "en" : "cn";
    }

    document.querySelectorAll("[data-lang-set]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.langSet === nextLang);
      button.classList.toggle("on", button.dataset.langSet === nextLang);
      button.setAttribute("aria-pressed", String(button.dataset.langSet === nextLang));
    });

    setHref("[data-site-home]", route.home);
    setHref("[data-nav-about]", route.about);
    setHref("[data-nav-capabilities]", route.capabilities);
    setHref("[data-nav-projects]", route.projects);
    setHref("[data-nav-quality]", route.quality);
    setHref("[data-contact-link]", route.contact);
    setHref("[data-blog-home]", route.blog);

    document.querySelectorAll("[data-post-link]").forEach((link) => {
      const currentHref = link.getAttribute("href") || "";
      const path = currentHref.split("?")[0] || "/blog/";
      link.href = nextLang === "en" ? `${path}?lang=en` : path;
    });

    const nextUrl = new URL(location.href);
    if (nextLang === "en") nextUrl.searchParams.set("lang", "en");
    else nextUrl.searchParams.delete("lang");
    history.replaceState(null, "", nextUrl);
  }

  document.querySelectorAll("[data-lang-set]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.langSet));
  });

  const menuButton = document.querySelector("[data-blog-menu]");
  const mobileMenu = document.querySelector("[data-blog-mobile-menu]");
  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const open = !mobileMenu.classList.contains("open");
      mobileMenu.classList.toggle("open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      mobileMenu.setAttribute("aria-hidden", String(!open));
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
      });
    });
  }

  setLang(initialLang);
})();
