// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // Simple usage
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-1449694773096456",
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
  ],
});
