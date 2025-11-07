import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chotto",
  description: "A VitePress Site",
  base: '/chotto-docs/',
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
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
              { text: 'Настройка темы', link: '/theme'},
              { text: 'Стилизация по условию', link: '/user-styling'},
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
          },
          {
            text: 'Дополнительно',
            items: [
              { text: 'Список изменений', link: '/changelog' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/mobilon-dev/chotto' },
          { icon: 'telegram', link: 'https://t.me/chottodev'}
        ],
        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница'
        },
        outline: {
          label:'На этой странице',
          level: 'deep'
        },
        darkModeSwitchLabel: 'Оформление',
        returnToTopLabel: 'Вернуться к началу',
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Get Started', link: '/en/get-started' },
          { text: 'Examples', link: '/en/feed-chat' }
        ],

        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Get Started', link: '/en/get-started' },
              { text: 'Components', link: '/en/components' },
              { text: 'Theme Configuration', link: '/en/theme'},
              { text: 'Conditional Styling', link: '/en/user-styling'},
            ],
          },
          {
            text: 'Examples',
            items: [
              { text: 'Chat in Feed Layout', link: '/en/feed-chat'},
              { text: 'Chat in Base Layout', link: '/en/base-chat'},
              { text: 'Chat in Extended Layout', link: '/en/extended-chat'},
              { text: 'Interactive Demo', link: '/en/demo'}
            ]
          },
          {
            text: 'Additional',
            items: [
              { text: 'Changelog', link: '/en/changelog' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/mobilon-dev/chotto' },
          { icon: 'telegram', link: 'https://t.me/chottodev'}
        ],
        docFooter: {
          prev: 'Previous Page',
          next: 'Next Page'
        },
        outline: {
          label:'On this page',
          level: 'deep'
        },
        darkModeSwitchLabel: 'Appearance',
        returnToTopLabel: 'Back to top',
      }
    }
  }
})
