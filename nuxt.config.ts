// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/color-mode", "@nuxt/content", "@nuxtjs/i18n", "@nuxt/ui"],
  content: {
    highlight: {
      theme: {
        default: "min-light",
        dark: "min-dark",
      },
    },
  },
  colorMode: {
    classSuffix: "",
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: ["en", "pl"],
    defaultLocale: "pl",
  },
});