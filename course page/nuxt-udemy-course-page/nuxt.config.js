export default {
  head: {
    title: 'Udemy Course Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A static Udemy course page built with Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/styles/main.css'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [],
  build: {},
  target: 'static'
}