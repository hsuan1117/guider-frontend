import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

    publicRuntimeConfig: {
        API_ENDPOINT: process.env.API_ENDPOINT || 'https://guide-api.hsuan.app/api',
    }
})
