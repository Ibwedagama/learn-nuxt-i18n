export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        title: 'Nuxt i18n',
        ...i18nHead.htmlAttrs
      },
      title: 'Nuxt i18n',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'learn nuxt i18n' },
        { hid: 'og:image', property: 'og:image', content: 'https://developer.mozilla.org/mdn-social-share.png' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    baseUrl: 'http://localhost:3000',
    locales: [
      {
        code: 'id',
        name: 'Indonesia',
        iso: 'id-ID',
        file: 'id.js',
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.js'
      }
    ],
    defaultLocale: 'id',
    strategy: 'prefix_except_default',
    lazy: true, // optional
    langDir: 'locales'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
