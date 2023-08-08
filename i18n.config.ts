export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'de',
  messages: {
    de: {
      welcome: 'Willkommen',
      home: 'Startseite',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    en: {
      welcome: 'Welcome',
      home: 'Home',
      about: 'About',
      contact: 'Contact',
    },
  },
}));
