export default {
    title: `Jeff Holst` ,
    description: `Jeff's personal website`,
    themeConfig: {
        nav: [
            { text: 'Contact', link: '/About/Contact' },
          ],
          sidebar: [
            {
              text: 'About',
              link: '/', 
              collapsible: true,
              items: [
                { text: 'Resume', link: '/About/Resume' },
                { text: 'Contact', link: '/About/Contact' },
              ],
            },
            {
              text: 'Portfolio',
              link: '/Portfolio',
              collapsible: false,
              items: [],
            }
          ]
      }
  }