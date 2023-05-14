// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },

  nitro: {
    plugins: ['~/server/index.ts']
  },

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  }

  
})
