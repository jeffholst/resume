export default {
  title: `Jeff Holst`,
  description: `Jeff's personal website`,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/jeffholst/resume/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
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
