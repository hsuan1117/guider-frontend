import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],

    publicRuntimeConfig: {
        API_ENDPOINT: process.env.API_ENDPOINT || 'https://guide-api.hsuan.app/api',
        AVATAR_DOMAIN: process.env.AVATAR_DOMAIN || 'guide-api.hsuan.app',
    },

    image: {
        domains: [
            (process.env.AVATAR_DOMAIN || 'guide-api.hsuan.app'),
            ('ui-avatars.com'),
        ]
    },

    build: {
        transpile: ['@headlessui/vue']
    },

    nitro: {
        prerender: {
            routes: ['/guiders']
        }
    }
})
