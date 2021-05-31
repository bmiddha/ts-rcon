/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ts-rcon',
  tagline: 'ts-rcon are easy!',
  url: 'https://bmiddha.github.io/ts-rcon',
  baseUrl: '/ts-rcon/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bmiddha',
  projectName: 'ts-rcon',
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        out: ''
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'ts-rcon',
      logo: {
        alt: 'ts-rcon Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/bmiddha/ts-rcon',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Bharat Middha. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/bmiddha/ts-rcon/edit/main/website/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
