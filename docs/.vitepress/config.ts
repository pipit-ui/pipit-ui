import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pipit UI',
  description: 'A Vue 3 based Component Library',
  lang: 'zh-CN',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    logo: '',
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '组件', link: '/components/button', activeMatch: '/components/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速上手', link: '/guide/quickstart' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Basic',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Container 布局容器', link: '/components/container' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Layout 布局', link: '/components/layout' },
            { text: 'Table 表格', link: '/components/table' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/basicmo/pipit-ui' }],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2024-present Pipit UI',
    },
  },
})
