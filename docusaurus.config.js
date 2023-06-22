module.exports = {
  title: "Hackney Product Playbook",
  tagline:
    "A guide on Hackney's Product practices, and how to follow them",
  url: "https://playbook.hackney.gov.uk/",
  baseUrl: "/Product-Playbook/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "lbhackney-it",
  projectName: "Product Playbook",
  trailingSlash: false,
  themeConfig: {
    prism: {
      additionalLanguages: ["csharp"],
    },
    navbar: {
      title: "Product Playbook",
      logo: {
        alt: "Product Playbook",
        src: "img/logo-long.svg",
      },
      items: [
        {
          href: "https://github.com/LBHackney-IT/Product-Playbook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      appId: "KNMFHOJ4X2",
      apiKey: '456b3d37a688509c71d330eab3ba3b99',
      indexName: 'hackney',
      placeholder: 'Search playbook'
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Made by Hackney ICT`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LBHackney-IT/product-playbook/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/docs.scss")],
        },
      },
    ],
  ],
  clientModules: [require.resolve("./src/docs.js")],
  plugins: ["docusaurus-plugin-sass"],
};
