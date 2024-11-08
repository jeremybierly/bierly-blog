// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode'
  ],
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  unocss: {
    preflight: true,
    icons: {
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      }
    },
    theme: {
      fontFamily: {
        raleway: ['Raleway Variable', 'sans-serif'],
        baskerville: ['Libre Baskerville', 'serif']
      }
    },
    safelist: [
      'prose-headings:font-raleway',
      'prose-p:font-baskerville',
      'prose-p:dark:text-gray-300',
      'prose-p:text-gray-700',
      'prose-headings:dark:text-gray-100'
    ]
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  }
})