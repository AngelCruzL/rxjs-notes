const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "RxJs Notes",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  locales: {
    "/": {
      lang: "es-ES",
    },
  },
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn.worldvectorlogo.com/logos/rxjs-1.svg",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: "default-prefers-color-scheme",
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    nav: [
      {
        text: "Inicio",
        link: "/que-es-rxjs/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    /*  sidebar: {
      "/que-es-rxjs/": [
        {
          title: "¿Qué es-- RxJs?",
          collapsable: true,
          children: [""],
        },
      ],
    }, */
    sidebar: {
      "/que-es-rxjs/": [""],
      "/frontend/": ["", "html", "css", "js", "nextjs"],
      "/backend/": [""],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
