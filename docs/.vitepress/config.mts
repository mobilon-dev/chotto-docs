import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chotto",
  description: "A VitePress Site",
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
    },
    en: {
      label: 'English',
      lang: 'en', // необязательный, будет добавлен как атрибут `lang` в тег `html`

      // другие свойства, специфичные для локали...
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Компоненты', link: '/get-started' },
      { text: 'Демо', link: '/components' }

    ],

    sidebar: [
      {
        text: 'Руководство',
        items: [
          { text: 'Начало работы', link: '/get-started' },
          { text: 'Компоненты', link: '/components' },
        ],
      },
      {
        text: 'Примеры',
        link: '/examples',
        items: [
          { text: 'Чат в Feed Layout'},
          { text: 'Чат в Base Layout'},
          { text: 'Чат в Extended Layout'},
          { text: 'Интерактивное демо'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/vp-test/'
})
