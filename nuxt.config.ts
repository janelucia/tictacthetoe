// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-icons'],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.ts', name: 'English' },
      { code: 'de', iso: 'de-DE', file: 'de.ts', name: 'Deutsch' },
    ],
    defaultLocale: 'de',
    vueI18n: './i18n.config.ts',
  },
});
