export default {
  title: `Jeff Holst`,
  description: `Jeff's personal website`,
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "site.webmanifest" }],
    ["link", { rel: "shortcut icon", href: "favicon.ico" }],
  ],
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/jeffholst/resume/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    logo: "/logo.svg",
    nav: [
      { text: "Contact", link: "Contact" },
      { text: "Résumé", link: "Resume" },
    ],
    sidebar: [
      {
        text: "About",
        collapsible: true,
        items: [
          { text: "Skills", link: "/About/Skills" },
          { text: "Experience", link: "/About/Experience" },
          { text: "Education", link: "/About/Education" },
          { text: "Interests", link: "/About/Interests" },
        ],
      },
      {
        text: "Portfolio",
        collapsible: true,
        items: [{ text: "Projects", link: "/Portfolio/Projects" }],
      },
    ],
  },
}
