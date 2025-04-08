import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chotto",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Компоненты', link: '/markdown-examples' },
      { text: 'Демо', link: '/markdown-examples' }

    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Начало работы', link: '/markdown-examples' },
          { text: 'Компоненты', link: '/api-examples' },
          { items: [
            {text: 'Элемент 1'},
            {text: 'Элемент 2'},
            {text: 'Элемент 3'},
          ]}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/vp-test/'
})
