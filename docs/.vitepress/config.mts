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
      { text: 'Начало работы', link: '/get-started' },
      { text: 'Примеры', link: '/feed-chat' }

    ],

    sidebar: [
      {
        text: 'Руководство',
        items: [
          { text: 'Начало работы', link: '/get-started' },
          { text: 'Компоненты', link: '/components' },
          { text: 'Настройка темы', link: '/theme'}
        ],
      },
      {
        text: 'Примеры',
        items: [
          { text: 'Чат в Feed Layout', link: '/feed-chat'},
          { text: 'Чат в Base Layout', link: '/base-chat'},
          { text: 'Чат в Extended Layout', link: '/extended-chat'},
          { text: 'Интерактивное демо', link: '/demo'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mobilon-dev/chotto' }
    ],
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    }
  },
  base: '/vp-test/'
})
