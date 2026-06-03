import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SITE = "https://hua-sheng.org";
const VERSION = "huasheng-site-20260603-seo";
const LASTMOD = "2026-06-03";
const DEFAULT_IMAGE = `${SITE}/assets/huasheng/hero-bus-shelter-deployed.webp`;
const LOGO = `${SITE}/assets/logo.png`;

const organization = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Guangzhou HuaSheng Metal Materials Co., Ltd.",
  alternateName: ["HuaSheng Metal", "HUASHENG", "广州华盛金属材料有限公司", "华盛金属"],
  url: SITE,
  logo: LOGO,
  foundingDate: "1989",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guangzhou",
    addressRegion: "Guangdong",
    addressCountry: "CN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+65-8309-9012",
      contactType: "sales",
      email: "hi@hua-sheng.org",
      availableLanguage: ["en", "zh-CN"],
    },
  ],
  sameAs: [
    "https://gzhsgm.en.alibaba.com/",
    "https://gz-huasheng.en.made-in-china.com/",
    "https://gzhsgm.goldsupplier.com/",
    "https://github.com/ZaynJarvis/hua-sheng-site",
  ],
  knowsAbout: [
    "bus shelters",
    "advertising light boxes",
    "urban furniture",
    "stainless steel structures",
    "metal kiosks",
    "precision metal OEM",
    "public transport facilities",
  ],
};

const routeMeta = {
  home: {
    enPath: "/en/",
    zhPath: "/zh/",
    image: DEFAULT_IMAGE,
    priority: "1.0",
    changefreq: "weekly",
    en: {
      title: "HuaSheng Metal | Bus Shelters, Light Boxes & Metal OEM Since 1989",
      description: "HuaSheng Metal is a Guangzhou manufacturer of bus shelters, advertising light boxes, urban furniture, outdoor kiosks and precision metal OEM products serving 100+ cities and regions.",
      summaryTitle: "HuaSheng Metal at a glance",
      summary: [
        "Founded in Guangzhou in 1989, HuaSheng manufactures bus shelters, advertising light boxes, urban furniture, outdoor kiosks and custom metal components.",
        "Core strengths include in-house metal fabrication, surface treatment, assembly, container loading, and project delivery support.",
        "Representative work spans Guangzhou, Beijing, Shanghai, Shenzhen, Qatar, Saudi Arabia, Nepal and long-term OEM supply for international brands.",
      ],
    },
    zh: {
      title: "华盛金属 | 候车亭、广告灯箱与城市金属设施制造商",
      description: "华盛金属始于广州1989年，制造公共交通候车亭、广告灯箱、城市家具、户外亭体与精密金属OEM产品，服务全球100+城市和地区。",
      summaryTitle: "华盛金属概览",
      summary: [
        "华盛始于广州1989年，主营公共交通候车亭、广告灯箱、城市家具、户外亭体与定制金属构件。",
        "核心能力覆盖金属加工、表面处理、装配、包装装柜和项目交付支持。",
        "代表项目覆盖广州、北京、上海、深圳、卡塔尔、沙特、尼泊尔，并长期服务国际品牌OEM供应链。",
      ],
    },
  },
  about: {
    enPath: "/en/about/",
    zhPath: "/zh/about/",
    image: `${SITE}/assets/huasheng/about-factory-campus.webp`,
    priority: "0.9",
    changefreq: "monthly",
    en: {
      title: "About HuaSheng | Guangzhou Manufacturer Founded in 1989",
      description: "Learn about HuaSheng's 1989 founding, five core operating entities, four business pillars, global clients, smart city projects, manufacturing technology and quality values.",
      summaryTitle: "About HuaSheng",
      summary: [
        "HuaSheng was founded in Guangzhou in 1989 and now operates across advanced manufacturing, industrial park management, commercial property and new energy facilities.",
        "The latest company profile lists five core entities and removes older entities that are no longer part of the group.",
        "The About page summarizes global clients, domestic and Middle East project cases, in-house LED/LCD systems, coating lines, laser cutting and welding robots.",
      ],
    },
    zh: {
      title: "关于华盛 | 始于1989年的广州金属制造企业集团",
      description: "了解华盛1989年创立、五家核心主体、四大业务板块、全球客户、城市项目案例、智能制造能力与质量价值观。",
      summaryTitle: "关于华盛",
      summary: [
        "华盛1989年创立于广州，业务覆盖先进工业制造与安装、产业园开发管理、商业地产管理和新能源设施。",
        "新版企业资料仅展示五家核心经营主体，不再展示旧网站中的不锈钢制品厂、电热电器和广告公司。",
        "关于页面汇总了全球客户、国内与中东项目案例、自研LED/LCD系统、粉末喷涂线、激光切割和焊接机器人能力。",
      ],
    },
  },
  capabilities: {
    enPath: "/en/capabilities/",
    zhPath: "/zh/capabilities/",
    image: `${SITE}/assets/huasheng/capabilities-workshop.webp`,
    priority: "0.85",
    changefreq: "monthly",
    en: {
      title: "Manufacturing Capabilities | 120,000 m2 Metal Fabrication Base",
      description: "HuaSheng's production capability includes 120,000 m2 of plant area, five workshops, 297 precision machines, robotic welding, CNC forming and automated powder coating.",
      summaryTitle: "Manufacturing capability summary",
      summary: [
        "HuaSheng operates a large metal fabrication base with hardware fabrication, riveting and welding, surface treatment, clean assembly, and loading areas.",
        "Key equipment includes laser cutting, CNC shearing and punching, bending, robotic welding, water jet cutting and automatic powder coating.",
        "The standard process runs from drawing review and IQC to cutting, forming, welding, coating, assembly, FQC, packing and container loading.",
      ],
    },
    zh: {
      title: "核心制造能力 | 华盛120,000平方米金属加工基地",
      description: "华盛制造能力覆盖120,000平方米基地、五大车间、297台精密设备、机器人焊接、CNC成型和自动化粉末喷涂生产线。",
      summaryTitle: "制造能力摘要",
      summary: [
        "华盛基地包含五金加工、铆焊、表面处理、清洁装配、出货装柜等关键工序区域。",
        "重点设备包括激光切割、CNC冲剪折弯、机器人焊接、水切割和自动化粉末喷涂生产线。",
        "标准流程覆盖设计工艺评审、IQC、切割成型、焊接、表面处理、装配调试、FQC终检、包装装柜。",
      ],
    },
  },
  projects: {
    enPath: "/en/projects/",
    zhPath: "/zh/projects/",
    image: `${SITE}/assets/huasheng/projects-overview.webp`,
    priority: "0.9",
    changefreq: "monthly",
    en: {
      title: "Bus Shelter & Metal Project Cases | HuaSheng Metal",
      description: "Explore HuaSheng bus shelter, smart transport, stainless steel, overseas public facility and OEM cases across Beijing, Shanghai, Guangzhou, Qatar, Nepal and more.",
      summaryTitle: "Project case summary",
      summary: [
        "Project cases include Guangzhou's first modern bus shelters, Beijing Olympic shelters, Shanghai Expo shelters and Hangzhou public bicycle stations.",
        "Overseas work includes Qatar, Saudi Arabia, Hong Kong MTR, Nepal, New Zealand, Oman, Korea and Romania public facility projects.",
        "OEM cases include IKEA kitchen trolleys, kitchen cabinet metal parts, bathroom racks, shelving and other precision metal components.",
      ],
    },
    zh: {
      title: "项目案例 | 华盛候车亭、智慧交通与金属公共设施",
      description: "查看华盛在北京、上海、广州、深圳、卡塔尔、沙特、尼泊尔等地的候车亭、智慧交通、金属公共设施和OEM项目案例。",
      summaryTitle: "项目案例摘要",
      summary: [
        "国内案例包括广州第一代现代候车亭、北京奥运候车亭、上海世博候车亭和杭州公共自行车亭。",
        "海外案例覆盖卡塔尔、沙特、香港MTR、尼泊尔、新西兰、阿曼、韩国和罗马尼亚公共设施项目。",
        "OEM案例包括IKEA厨房手推车、橱柜金属件、卫浴架、置物架和精密金属配件。",
      ],
    },
  },
  quality: {
    enPath: "/en/quality/",
    zhPath: "/zh/quality/",
    image: `${SITE}/assets/huasheng/quality-control.webp`,
    priority: "0.8",
    changefreq: "monthly",
    en: {
      title: "Quality & Certifications | ISO 9001, Patents and DMAIC Process",
      description: "HuaSheng's quality system covers ISO 9001, bus shelter design patents, utility patents, IKEA supplier qualification and DMAIC-based quality control.",
      summaryTitle: "Quality system summary",
      summary: [
        "HuaSheng's quality policy focuses on keeping delivery promises and continuously improving products, service, organization and team performance.",
        "The DMAIC workflow covers specification definition, measurement, analysis, improvement and control from incoming materials to outbound containers.",
        "Certifications and qualifications include ISO 9001, bus shelter design patents, structural utility patents and approved IKEA supplier status.",
      ],
    },
    zh: {
      title: "质量与认证 | ISO 9001、候车亭专利与DMAIC流程",
      description: "华盛质量体系覆盖ISO 9001、候车亭外观设计专利、结构实用新型专利、IKEA供应商资格和DMAIC质量管控流程。",
      summaryTitle: "质量体系摘要",
      summary: [
        "华盛质量方针聚焦守住交付承诺，并持续改进产品、服务、组织和团队绩效。",
        "DMAIC流程从规格定义、测量、分析、改进到控制，覆盖来料、过程、终检和出货。",
        "资质包括ISO 9001质量管理体系、候车亭外观设计专利、结构实用新型专利和IKEA合格供应商资格。",
      ],
    },
  },
  contact: {
    enPath: "/en/contact/",
    zhPath: "/zh/contact/",
    image: `${SITE}/assets/huasheng/contact-factory-entrance.webp`,
    priority: "0.75",
    changefreq: "monthly",
    en: {
      title: "Contact HuaSheng Metal | Bus Shelter & Metal OEM Enquiries",
      description: "Contact HuaSheng for bus shelter projects, advertising light boxes, steel structures, outdoor kiosks and long-term precision metal OEM manufacturing.",
      summaryTitle: "Contact and enquiry summary",
      summary: [
        "Use the contact page for city facility projects, advertising operators, overseas procurement and long-term metal OEM cooperation.",
        "Project details that help quotation include product type, quantity, destination country, drawings, required certification and delivery schedule.",
        "HuaSheng can discuss bus shelters, light boxes, steel structures, metal kiosks, urban furniture and precision metal OEM work.",
      ],
    },
    zh: {
      title: "联系华盛 | 候车亭、广告灯箱与金属OEM项目咨询",
      description: "联系华盛咨询候车亭、广告灯箱、钢结构工程、户外亭体、城市家具和长期精密金属OEM制造合作。",
      summaryTitle: "联系与询价摘要",
      summary: [
        "联系页面适用于城市公共设施、广告运营、海外采购和长期金属OEM合作咨询。",
        "有助于报价的信息包括产品类型、数量、目的国、图纸、认证要求和交付周期。",
        "华盛可沟通候车亭、广告灯箱、钢结构、金属亭体、城市家具和精密金属OEM项目。",
      ],
    },
  },
};

const aliases = [
  { file: "index.html", route: "home", lang: "en", urlPath: "/", canonicalLang: "en" },
  { file: "about/index.html", route: "about", lang: "en", urlPath: "/about/", canonicalLang: "en" },
  { file: "capabilities/index.html", route: "capabilities", lang: "en", urlPath: "/capabilities/", canonicalLang: "en" },
  { file: "cases/index.html", route: "projects", lang: "en", urlPath: "/cases/", canonicalLang: "en" },
  { file: "projects/index.html", route: "projects", lang: "en", urlPath: "/projects/", canonicalLang: "en" },
  { file: "quality/index.html", route: "quality", lang: "en", urlPath: "/quality/", canonicalLang: "en" },
  { file: "contact/index.html", route: "contact", lang: "en", urlPath: "/contact/", canonicalLang: "en" },
];

const canonicalPages = Object.entries(routeMeta).flatMap(([route, meta]) => [
  { file: pathFor(meta.enPath), route, lang: "en", urlPath: meta.enPath, canonicalLang: "en" },
  { file: pathFor(meta.zhPath), route, lang: "zh", urlPath: meta.zhPath, canonicalLang: "zh" },
]);

const mainPages = [...aliases, ...canonicalPages];

function pathFor(urlPath) {
  return path.join(urlPath.replace(/^\/+/, ""), "index.html");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeXml(value) {
  return escapeHtml(value).replace(/'/g, "&apos;");
}

function canonicalUrl(route, lang) {
  const meta = routeMeta[route];
  return `${SITE}${lang === "zh" ? meta.zhPath : meta.enPath}`;
}

function pageUrl(urlPath) {
  return `${SITE}${urlPath}`;
}

function commonJsonLd(page, meta, locale, canonical) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "HuaSheng Metal",
        alternateName: ["华盛金属", "HUASHENG"],
        inLanguage: ["en", "zh-CN"],
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: meta.title,
        description: meta.description,
        inLanguage: locale,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: routeMeta[page.route].image || DEFAULT_IMAGE,
        },
      },
    ],
  };
}

function headFor(page) {
  const route = routeMeta[page.route];
  const meta = route[page.lang];
  const locale = page.lang === "zh" ? "zh-CN" : "en";
  const ogLocale = page.lang === "zh" ? "zh_CN" : "en_US";
  const canonical = canonicalUrl(page.route, page.canonicalLang);
  const url = pageUrl(page.urlPath);
  const oppositeLang = page.lang === "zh" ? "en" : "zh";
  const alternateEn = canonicalUrl(page.route, "en");
  const alternateZh = canonicalUrl(page.route, "zh");
  const jsonLd = JSON.stringify(commonJsonLd(page, meta, locale, canonical), null, 2)
    .replace(/</g, "\\u003c");

  return `<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
<base href="/" />
<meta name="theme-color" content="#f5f5f2" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<title>${escapeHtml(meta.title)}</title>
<meta name="description" content="${escapeHtml(meta.description)}" />
<link rel="canonical" href="${escapeHtml(canonical)}" />
<link rel="alternate" hreflang="en" href="${escapeHtml(alternateEn)}" />
<link rel="alternate" hreflang="zh-CN" href="${escapeHtml(alternateZh)}" />
<link rel="alternate" hreflang="x-default" href="${escapeHtml(alternateEn)}" />
<link rel="alternate" type="text/plain" title="LLMs.txt" href="${SITE}/llms.txt" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="HuaSheng Metal" />
<meta property="og:locale" content="${ogLocale}" />
<meta property="og:locale:alternate" content="${oppositeLang === "zh" ? "zh_CN" : "en_US"}" />
<meta property="og:url" content="${escapeHtml(url)}" />
<meta property="og:title" content="${escapeHtml(meta.title)}" />
<meta property="og:description" content="${escapeHtml(meta.description)}" />
<meta property="og:image" content="${escapeHtml(route.image)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(meta.title)}" />
<meta name="twitter:description" content="${escapeHtml(meta.description)}" />
<meta name="twitter:image" content="${escapeHtml(route.image)}" />
<meta name="geo.region" content="CN-GD" />
<meta name="geo.placename" content="Guangzhou" />
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png?v=${VERSION}" />
<link rel="shortcut icon" href="favicon.ico?v=${VERSION}" />
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png?v=${VERSION}" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

<link rel="stylesheet" href="styles.css?v=${VERSION}" />
<script type="application/ld+json">
${jsonLd}
</script>
</head>`;
}

function noscriptFor(page) {
  const meta = routeMeta[page.route][page.lang];
  const nav = page.lang === "zh"
    ? [
        ["首页", "/zh/"],
        ["关于我们", "/zh/about/"],
        ["核心能力", "/zh/capabilities/"],
        ["项目案例", "/zh/projects/"],
        ["质量与认证", "/zh/quality/"],
        ["联系我们", "/zh/contact/"],
      ]
    : [
        ["Home", "/en/"],
        ["About", "/en/about/"],
        ["Capabilities", "/en/capabilities/"],
        ["Projects", "/en/projects/"],
        ["Quality", "/en/quality/"],
        ["Contact", "/en/contact/"],
      ];
  const paragraphs = meta.summary.map((item) => `<p>${escapeHtml(item)}</p>`).join("\n      ");
  const links = nav.map(([label, href]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`).join("\n        ");
  return `<noscript>
    <main class="seo-fallback">
      <h1>${escapeHtml(meta.summaryTitle)}</h1>
      ${paragraphs}
      <ul>
        ${links}
      </ul>
    </main>
  </noscript>`;
}

function updateMainPage(page) {
  const file = path.join(ROOT, page.file);
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${page.lang === "zh" ? "zh-CN" : "en"}">`);
  html = html.replace(/<head>[\s\S]*?<\/head>/, headFor(page));
  html = html.replace(/<body data-theme="clarity" data-lang="[^"]*">/, `<body data-theme="clarity" data-lang="${page.lang === "zh" ? "cn" : "en"}">`);
  html = html.replace(/<div id="root"><\/div>\s*(?:<noscript>[\s\S]*?<\/noscript>)?/, `<div id="root"></div>\n\n  ${noscriptFor(page)}`);
  fs.writeFileSync(file, html);
}

function updateBlogIndex() {
  const file = path.join(ROOT, "blog/index.html");
  let html = fs.readFileSync(file, "utf8");
  const title = "华盛企业动态 | 项目案例、产品能力与AI提效实践";
  const description = "华盛企业动态记录项目案例、产品能力、资质认证、服务流程和AI提效实践，是华盛官网长期内容中心。";
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/blog/#webpage`,
        url: `${SITE}/blog/`,
        name: title,
        description,
        inLanguage: ["zh-CN", "en"],
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#organization` },
      },
    ],
  }, null, 2).replace(/</g, "\\u003c");
  const head = `<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${SITE}/blog/" />
  <link rel="alternate" hreflang="zh-CN" href="${SITE}/blog/" />
  <link rel="alternate" hreflang="en" href="${SITE}/blog/?lang=en" />
  <link rel="alternate" hreflang="x-default" href="${SITE}/blog/" />
  <link rel="alternate" type="text/plain" title="LLMs.txt" href="${SITE}/llms.txt" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="HuaSheng Metal" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${SITE}/blog/" />
  <meta property="og:image" content="${SITE}/blog/assets/meeting-room.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${SITE}/blog/assets/meeting-room.jpg" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=${VERSION}" />
  <link rel="stylesheet" href="/styles.css?v=${VERSION}" />
  <link rel="stylesheet" href="/blog/blog.css?v=${VERSION}" />
  <script type="application/ld+json">
${jsonLd}
  </script>
</head>`;
  html = html.replace(/<head>[\s\S]*?<\/head>/, head);
  fs.writeFileSync(file, html);
}

function updateBlogArticle() {
  const file = path.join(ROOT, "blog/ai-application-meeting/index.html");
  let html = fs.readFileSync(file, "utf8");
  const title = "借力 AI 提效赋能，深耕服务聚力前行 · 华盛企业动态";
  const description = "华盛召开AI工具应用及群组管理专项会议，推动AI进入报价准备、方案设计、内容表达、组织协同和客户服务流程。";
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "BlogPosting",
        "@id": `${SITE}/blog/ai-application-meeting/#article`,
        mainEntityOfPage: `${SITE}/blog/ai-application-meeting/`,
        headline: "借力 AI 提效赋能，深耕服务聚力前行",
        alternativeHeadline: "Leveraging AI for Efficiency, Deepening Service for Growth",
        description,
        image: `${SITE}/blog/assets/meeting-room.jpg`,
        datePublished: "2026-05-27",
        dateModified: "2026-06-03",
        inLanguage: ["zh-CN", "en"],
        author: { "@id": `${SITE}/#organization` },
        publisher: { "@id": `${SITE}/#organization` },
        about: ["AI tools", "workflow improvement", "customer service", "group operations"],
      },
    ],
  }, null, 2).replace(/</g, "\\u003c");
  const head = `<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${SITE}/blog/ai-application-meeting/" />
  <link rel="alternate" hreflang="zh-CN" href="${SITE}/blog/ai-application-meeting/" />
  <link rel="alternate" hreflang="en" href="${SITE}/blog/ai-application-meeting/?lang=en" />
  <link rel="alternate" hreflang="x-default" href="${SITE}/blog/ai-application-meeting/" />
  <link rel="alternate" type="text/plain" title="LLMs.txt" href="${SITE}/llms.txt" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="HuaSheng Metal" />
  <meta property="og:title" content="借力 AI 提效赋能，深耕服务聚力前行" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${SITE}/blog/ai-application-meeting/" />
  <meta property="og:image" content="${SITE}/blog/assets/meeting-room.jpg" />
  <meta property="article:published_time" content="2026-05-27T00:00:00+08:00" />
  <meta property="article:modified_time" content="2026-06-03T00:00:00+08:00" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="借力 AI 提效赋能，深耕服务聚力前行" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${SITE}/blog/assets/meeting-room.jpg" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=${VERSION}" />
  <link rel="stylesheet" href="/styles.css?v=${VERSION}" />
  <link rel="stylesheet" href="/blog/blog.css?v=${VERSION}" />
  <script type="application/ld+json">
${jsonLd}
  </script>
</head>`;
  html = html.replace(/<head>[\s\S]*?<\/head>/, head);
  fs.writeFileSync(file, html);
}

function writeRobots() {
  const agents = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "GoogleOther",
    "GoogleOther-Image",
    "GoogleOther-Video",
    "Bingbot",
    "BingPreview",
    "DuckAssistBot",
    "CCBot",
  ];
  const aiGroup = `${agents.map((agent) => `User-agent: ${agent}`).join("\n")}
Allow: /
Disallow: /downloads/`;
  const body = `# HuaSheng public pages are open to search and AI answer crawlers.
# Temporary private download files are never crawlable.
${aiGroup}

User-agent: *
Allow: /
Disallow: /downloads/

Sitemap: ${SITE}/sitemap.xml
`;
  fs.writeFileSync(path.join(ROOT, "robots.txt"), body);
}

function writeSitemap() {
  const urls = Object.entries(routeMeta).flatMap(([route, meta]) => [
    { loc: `${SITE}${meta.enPath}`, route, lang: "en", priority: meta.priority, changefreq: meta.changefreq },
    { loc: `${SITE}${meta.zhPath}`, route, lang: "zh", priority: meta.priority, changefreq: meta.changefreq },
  ]);
  urls.push(
    { loc: `${SITE}/blog/`, priority: "0.7", changefreq: "weekly", alternates: [{ lang: "zh-CN", href: `${SITE}/blog/` }, { lang: "en", href: `${SITE}/blog/?lang=en` }] },
    { loc: `${SITE}/blog/ai-application-meeting/`, priority: "0.65", changefreq: "monthly", alternates: [{ lang: "zh-CN", href: `${SITE}/blog/ai-application-meeting/` }, { lang: "en", href: `${SITE}/blog/ai-application-meeting/?lang=en` }] },
  );
  const entries = urls.map((item) => {
    const meta = item.route ? routeMeta[item.route] : null;
    const alternates = item.alternates || [
      { lang: "en", href: `${SITE}${meta.enPath}` },
      { lang: "zh-CN", href: `${SITE}${meta.zhPath}` },
    ];
    const xhtml = [
      ...alternates,
      { lang: "x-default", href: item.route ? `${SITE}${meta.enPath}` : item.loc },
    ].map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${escapeXml(alt.href)}" />`).join("\n");
    return `  <url>
    <loc>${escapeXml(item.loc)}</loc>
${xhtml}
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
  }).join("\n");
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`);
}

function writeLlms() {
  fs.writeFileSync(path.join(ROOT, "llms.txt"), `# HuaSheng Metal

> Official bilingual website for Guangzhou HuaSheng Metal Materials Co., Ltd. (华盛金属), a Guangzhou-based manufacturer of bus shelters, advertising light boxes, urban furniture, outdoor kiosks, stainless steel structures and precision metal OEM products.

Last updated: ${LASTMOD}
Canonical domain: ${SITE}

## Crawl and Citation Preferences

- Public pages are open to search engines and AI answer engines, including GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User and PerplexityBot.
- Do not crawl or cite anything under /downloads/; that path is reserved for temporary private files and returns 410 when removed.
- Prefer canonical URLs under /en/ and /zh/ when citing pages.
- Cite HuaSheng as "HuaSheng Metal" in English and "华盛金属" in Chinese.

## Primary Entity

- English name: Guangzhou HuaSheng Metal Materials Co., Ltd.
- Chinese name: 广州华盛金属材料有限公司
- Brand names: HuaSheng Metal, HUASHENG, 华盛金属
- Founded: 1989, Guangzhou, Guangdong, China
- Scope: Public transport shelters, advertising light boxes, urban furniture, outdoor pavilions, metal household goods, stainless steel structures and custom metal OEM.
- Coverage: 100+ cities and regions worldwide.

## Core Operating Entities

- 广州市华盛工贸有限公司
- 广州华盛金属材料有限公司
- 广州银亿交通设施安装工程有限公司
- 广州银亿斯投资发展有限公司
- 广州银亿恒物业管理有限公司

## Business Pillars

1. Advanced industrial manufacturing and installation.
2. Industrial park development and management.
3. Commercial real estate development and management.
4. New energy development and management.

## Key Capabilities

- Bus shelters and public transport facilities.
- Advertising light boxes and LED/LCD information displays.
- Urban furniture, kiosks, outdoor pavilions and metal public-space products.
- Stainless steel structures, architectural metalwork and decorative steel structures.
- Precision metal OEM/ODM for home, kitchen, retail and public facility applications.
- Laser cutting, CNC forming, robotic welding, automatic powder coating, clean assembly, quality inspection and container loading.

## Important Pages

- Home EN: ${SITE}/en/
- Home ZH: ${SITE}/zh/
- About EN: ${SITE}/en/about/
- About ZH: ${SITE}/zh/about/
- Capabilities EN: ${SITE}/en/capabilities/
- Capabilities ZH: ${SITE}/zh/capabilities/
- Projects EN: ${SITE}/en/projects/
- Projects ZH: ${SITE}/zh/projects/
- Quality EN: ${SITE}/en/quality/
- Quality ZH: ${SITE}/zh/quality/
- Contact EN: ${SITE}/en/contact/
- Contact ZH: ${SITE}/zh/contact/
- Blog: ${SITE}/blog/
- Sitemap: ${SITE}/sitemap.xml

## Representative Project Topics

- Guangzhou first-generation modern bus shelters.
- Beijing Olympic stainless steel shelters.
- Shanghai Expo bus shelters and smart city shelters.
- Shenzhen Qianhai and Futian smart shelters.
- Nansha public facility project with design credibility from Academician He Jingtang.
- Qatar, Saudi Arabia, Oman, Nepal, New Zealand, Korea and Romania public facility projects.
- Long-term OEM supply for IKEA metal home and kitchen products.

## External Profiles

- Alibaba supplier showroom: https://gzhsgm.en.alibaba.com/
- Made-in-China showroom: https://gz-huasheng.en.made-in-china.com/
- GoldSupplier profile: https://gzhsgm.goldsupplier.com/
- Website source repository: https://github.com/ZaynJarvis/hua-sheng-site

## Contact

- Contact person: Zayn Jarvis / Manager Liu
- Phone / WhatsApp: +65 8309-9012
- Email: hi@hua-sheng.org
- Working hours: 10:00-22:00 GMT+8
`);
}

function updateRedirects() {
  const file = path.join(ROOT, "_redirects");
  let content = fs.readFileSync(file, "utf8");
  const additions = [
    "/llm.txt /llms.txt 301",
    "/sitemap /sitemap.xml 301",
  ];
  for (const line of additions) {
    if (!content.includes(line)) content = `${line}\n${content}`;
  }
  fs.writeFileSync(file, content);
}

for (const page of mainPages) updateMainPage(page);
updateBlogIndex();
updateBlogArticle();
writeRobots();
writeSitemap();
writeLlms();
updateRedirects();

console.log(`Updated SEO assets for ${mainPages.length + 2} pages.`);
