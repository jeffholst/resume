export default {
  title: `Jeff Holst`,
  description: `Jeff's personal website`,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/jeffholst/resume/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: [{ text: "Contact", link: "/About/Contact" }],
    sidebar: [
      {
        text: "About",
        link: "/",
        collapsible: true,
        items: [
          { text: "Resume", link: "/About/Resume" },
          { text: "Contact", link: "/About/Contact" },
        ],
      },
      {
        text: "Portfolio",
        link: "/Portfolio",
        collapsible: false,
        items: [],
      },
    ],
  },
}
