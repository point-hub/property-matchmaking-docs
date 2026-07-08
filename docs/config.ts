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
      text: 'Features',
      items: [
        { 
          text: 'Auth', 
          collapsed: true,
          items: [
            { text: 'About', link: '/auth/about/' },
            { text: 'Schema', link: '/auth/schema/' },
            { text: 'Signup', link: '/auth/signup/' },
            { text: 'Verify Email', link: '/auth/verify-email/' },
            { text: 'Signin', link: '/auth/signin/' },
            { text: 'Signout', link: '/auth/signout/' },
            { text: 'Forgot Password', link: '/auth/forgot-password/' },
            { text: 'Reset Password', link: '/auth/reset-password/' },
          ],
        },
        { 
          text: 'My Account', 
          collapsed: true,
          items: [
            { text: 'About', link: '/my-account/about/' },
            { text: 'Schema', link: '/my-account/schema/' },
            { text: 'Update Username', link: '/my-account/update-username/' },
            { text: 'Update Email', link: '/my-account/update-email/' },
            { text: 'Update Password', link: '/my-account/update-password/' },
          ],
        },
        { 
          text: 'Properties', 
          collapsed: true,
          items: [
            { text: 'About', link: '/properties/about/' },
            { text: 'Schema', link: '/properties/schema/' },
            { text: 'Create', link: '/properties/create/' },
            { text: 'List', link: '/properties/list/' },
            { text: 'Read', link: '/properties/read/' },
            { text: 'Update', link: '/properties/update/' },
            { text: 'Delete', link: '/properties/delete/' },
          ],
        },
        { 
          text: 'Matchmaking', 
          collapsed: true,
          items: [
            { text: 'About', link: '/matchmaking/about/' },
            { text: 'Schema', link: '/matchmaking/schema/' },
            { text: 'Homepage', link: '/matchmaking/homepage/' },
            { text: 'Property Preferences', link: '/matchmaking/property-preferences/' },
            { text: 'Contact Agency', link: '/matchmaking/contact-agency/' },
          ],
        },
        { 
          text: 'Invoices', 
          collapsed: true,
          items: [
            { text: 'About', link: '/invoices/about/' },
            { text: 'Schema', link: '/invoices/schema/' },
            { text: 'Receive', link: '/invoices/receive/' },
            { text: 'List', link: '/invoices/list/' },
            { text: 'Read', link: '/invoices/read/' },
            { text: 'Confirm Payment', link: '/invoices/confirm-payment/' },
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
