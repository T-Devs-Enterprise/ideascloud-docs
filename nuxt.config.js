import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#3e76df",
  },
  //components: true,
  target: "static",
  buildModules: ["@nuxt/image"],
  modules: ["@nuxt/image"],
  content: {
    //apiPrefix: "testVue#/",
    liveEdit: true,
    markdown: {
      remarkPlugins: ["~~/plugins/contributors.js"],
    },
  },

  head: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
  },
  i18n: {
    locales: () => [
      {
        code: "es",
        iso: "es-ES",
        file: "es-ES.js",
        name: "Español",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "es",
  },

  //srcDir: ".",
  //generate: {
  //  subFolders: false,
  //},
  //ssr: false,

  //target: "static",
  //router: {
  //  trailingSlash: true,
  //  base: "/testVue/",
  //  mode: "hash",
  //},
  build: {
    //publicPath: "testVue#/",
  },
  //static: {
  //  prefix: true,
  //},
});
