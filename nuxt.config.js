export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Merchant Demo | Fluidcoins',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'og:description',
        content:
          'Fluidcoins - The easiest way for African businesses to accept cryptocurrencies online',
      },
      { name: 'og:title', content: 'Fluidcoins' },
      { name: 'og:url', content: 'http://fluidcoins.com/' },
      { name: 'og:site_name', content: 'Fluidcoins' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:description',
        content:
          'Fluidcoins - The easiest way for African businesses to accept cryptocurrencies online',
      },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:title', content: 'Fluidcoins' },
      { name: 'twitter:url', content: 'http://fluidcoins.com/' },
      {
        name: 'twitter:image',
        content:
          'https://res.cloudinary.com/fluidcoins/image/upload/v1605870622/FLUIDCOINS_TRANSPARENT_wggr1x.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/favicon/site.webmanifest',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate',
<<<<<<< HEAD
    '~/plugins/clipboard'
=======
    '~/plugins/filters'
>>>>>>> f2b435e5c05a3c15c4f531c6d6d3a6e6e3a9e2e5
  ],

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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  toast: {
    position: 'top-right',
    duration: 5000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      });
    },
  }
}
