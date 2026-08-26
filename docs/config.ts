import { resolve } from 'node:path'
import { type DefaultTheme } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'en-US',
  title: 'Property Matchmaking',
  description: 'Documentation for the Property Matchmaking project',
  cleanUrls: true,
  srcDir: './src',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    ['link', { rel: 'stylesheet', href: 'https://assets.pointhub.net/assets/fontawesome-6/css/all.min.css' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: nav(),
    sidebar: {
      '/': { base: '', items: sidebarDocs() },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/point-hub/docs-starter' }],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Pointhub',
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Documentation',
      items: [
        { text: 'Introduction', link: '/' },
        { text: 'Sitemap', link: '/sitemap' },
      ],
    },
    {
      text: 'Admin Features',
      items: [
        { 
          text: 'About', 
          link: '/admin/about/'
        },
        { 
          text: 'Auth', 
          collapsed: true,
          items: [
            { text: 'About', link: '/admin/auth/about/' },
            { text: 'Schema', link: '/admin/auth/schema/' },
            { text: 'Signup', link: '/admin/auth/signup/' },
            { text: 'Verify Email', link: '/admin/auth/verify-email/' },
            { text: 'Signin', link: '/admin/auth/signin/' },
            { text: 'Signout', link: '/admin/auth/signout/' },
            { text: 'Forgot Password', link: '/admin/auth/forgot-password/' },
            { text: 'Reset Password', link: '/admin/auth/reset-password/' },
          ],
        },
        { 
          text: 'My Account', 
          collapsed: true,
          items: [
            { text: 'About', link: '/admin/my-account/about/' },
            { text: 'Schema', link: '/admin/my-account/schema/' },
            { text: 'Update Username', link: '/admin/my-account/update-username/' },
            { text: 'Update Email', link: '/admin/my-account/update-email/' },
            { text: 'Update Password', link: '/admin/my-account/update-password/' },
          ],
        },
        { 
          text: 'Land Titles',
          collapsed: true,
          items: [
            { text: 'About', link: '/admin/land-titles/about/' },
            { text: 'Schema', link: '/admin/land-titles/schema/' },
            { text: 'Create', link: '/admin/land-titles/create/' },
            { text: 'List', link: '/admin/land-titles/list/' },
            { text: 'Read', link: '/admin/land-titles/read/' },
            { text: 'Update', link: '/admin/land-titles/update/' },
            { text: 'Delete', link: '/admin/land-titles/delete/' },
          ],
        },
        { 
          text: 'Facilities', 
          collapsed: true,
          items: [
            { text: 'About', link: '/admin/facilities/about/' },
            { text: 'Schema', link: '/admin/facilities/schema/' },
            { text: 'Create', link: '/admin/facilities/create/' },
            { text: 'List', link: '/admin/facilities/list/' },
            { text: 'Read', link: '/admin/facilities/read/' },
            { text: 'Update', link: '/admin/facilities/update/' },
            { text: 'Delete', link: '/admin/facilities/delete/' },
          ],
        },
        { 
          text: 'Problems', 
          collapsed: true,
          items: [
            { text: 'About', link: '/admin/problems/about/' },
            { text: 'Schema', link: '/admin/problems/schema/' },
            { text: 'Create', link: '/admin/problems/create/' },
            { text: 'List', link: '/admin/problems/list/' },
            { text: 'Read', link: '/admin/problems/read/' },
            { text: 'Update', link: '/admin/problems/update/' },
            { text: 'Delete', link: '/admin/problems/delete/' },
          ],
        },
        { 
          text: 'Promos', 
          collapsed: true,
          items: [
            { text: 'About', link: '/admin/promos/about/' },
            { text: 'Schema', link: '/admin/promos/schema/' },
            { text: 'Create', link: '/admin/promos/create/' },
            { text: 'List', link: '/admin/promos/list/' },
            { text: 'Read', link: '/admin/promos/read/' },
            { text: 'Update', link: '/admin/promos/update/' },
            { text: 'Delete', link: '/admin/promos/delete/' },
          ],
        },
        { 
          text: 'Properties', 
          collapsed: true,
          items: [
            { text: 'About', link: '/admin/properties/about/' },
            { text: 'Schema', link: '/admin/properties/schema/' },
            { text: 'Create', link: '/admin/properties/create/' },
            { text: 'List', link: '/admin/properties/list/' },
            { text: 'Read', link: '/admin/properties/read/' },
            { text: 'Update', link: '/admin/properties/update/' },
            { text: 'Delete', link: '/admin/properties/delete/' },
          ],
        },
      ],
    },
    {
      text: 'Web Features',
      items: [
        { 
          text: 'About', 
          link: '/web/about/'
        },
        { 
          text: 'Matchmaking', 
          collapsed: true,
          items: [
            { text: 'About', link: '/web/matchmaking/about/' },
            { text: 'Schema', link: '/web/matchmaking/schema/' },
            { text: 'Send Customer Preferences', link: '/web/matchmaking/send-customer-preferences/' },
            { text: 'Receive Property Recommendations', link: '/web/matchmaking/receive-property-recommendations/' },
          ],
        },
      ],
    },
    {
      text: 'Resources',
      items: [
        { text: 'Architecture Decision Records', link: '/architecture-decision-records/' },
        { text: 'Development Plan', link: '/development-plan/' },
        { text: 'Developer Resources', link: '/developer-resources/' },
      ],
    },
  ]
}
