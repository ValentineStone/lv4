const axios = require('axios');
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'democritus',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-croppie.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/yandex-metrika',
    'bootstrap-vue/nuxt',
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/users/auth/',
            method: 'post',
            propertyName: 'token',
          },
          logout: false,
          user: {
            url: '/users/info/',
            method: 'post'
          },
        },
        tokenType: '',
        tokenName: 'token',
        autoFetchUser: true
      },
    },
    redirect: {
      login: '/auth',
      logout: '/',
      home: '/'
    },
  },
  robots: {
    UserAgent: '*',
    Allow: '/',

    Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`
  },
  sitemap: {
    hostname: 'https://localhost',
    routes: async () => {
      const staticPage = [
        '/auth/',
      ];
      // const {data} = await axios.post('https://localhost:4000/users/get/');
      // const servers = data.servers.map((item) => `/servers/${item.id}/`)
      return [...staticPage,...servers];
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://example.test/api/' : 'http://localhost:4000'
  },
  yandexMetrika: {
    id: '11111111'
  },
  build: {}
}
