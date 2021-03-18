/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Volcanoids Modding Wiki",
  tagline: "The Modding Hub for Volcanoids",
  url: "https://modding.melodicalbuild.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "VolcanoidsModding", // Usually your GitHub org/user name.
  projectName: "VolcWiki", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Volcanoids Modding Wiki",
      logo: {
        alt: "Wiki Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Installing Mods",
          position: "left",
        },
        {
          to: "coding/",
          activeBasePath: "coding",
          label: "Coding",
          position: "left",
        },
        {
          to: "designing/",
          activeBasePath: "designing",
          label: "Designing",
          position: "left",
        },
        //{ to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/VolcanoidsModding",
          label: "GitHub",
          position: "right",
        },
        {
          type: "docsVersionDropdown",

          //// Optional
          position: "right",
          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [],
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: "coding",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Installing Mods",
              to: "docs/",
            },
            {
              label: "Coding",
              to: "coding/",
            },
            {
              label: "Designing",
              to: "designing/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/volcanoids",
            },
            {
              label: "Discord",
              href: "https://discord.gg/volcanoids",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/volcanoids",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/VolcanoidsModding",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Volcanoids Modding Wiki`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/VolcanoidsModding/VolcWiki/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "coding",
        path: "coding",
        routeBasePath: "coding",
        sidebarPath: require.resolve("./sidebarsCoding.js"),
        editUrl: "https://github.com/VolcanoidsModding/VolcWiki/blob/main",
        includeCurrentVersion: true,
        disableVersioning: false,
        lastVersion: "current",
        versions: {
          current: {
            label: "1.24.471.0",
            path: "",
          },
          "1.0.0": {
            label: "1.0.0",
            path: "coding-1.0.0",
          },
        },
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "designing",
        path: "designing",
        routeBasePath: "designing",
        sidebarPath: require.resolve("./sidebarsDesigning.js"),
        editUrl: "https://github.com/VolcanoidsModding/VolcWiki/blob/main",
        // ... other options
      },
    ],
  ],
};
