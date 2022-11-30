# Welcome

Hello. My name is Jeff Holst. I am a Front End Engineer based in Austin, Texas.
My passion is developing beautiful and elegant web solutions that make peoples
lives more fun and enjoyable.

This site is dedicated to showcasing some my work and skills. If you'd like to
use this project as a template to display your own work feel free to clone it
from GitHub and customize it to your liking.

Thanks for stopping by and please do not hesitate to reach out if you have any questions.

## 📄 GitHub Repo

[jeffholst/resume](https://github.com/jeffholst/resume)

## 💻 Commands

| Command         | Action                    |
| :-------------- | :------------------------ |
| `npm install`   | Installs all dependencies |
| `npm run dev`   | Run dev server            |
| `npm run build` | Rebuilds project          |
| `npm run lint`  | Run eslint for project    |

## CODE FORMATTING

[Prettier](https://prettier.io/) settings:

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

[ESLint](https://eslint.org/)

Use @eslint/config to create a resonable settings for each specific package

```txt
npm init @eslint/config
```

## 🔰 TECH STACK

### [VitePress](https://vitepress.vuejs.org/)

- [Vite](https://vitejs.dev/) + [Vue.js](https://vuejs.org/) powered static site generator
- server side generated pages built with markdown and Vue

### [Tailwind CSS](https://tailwindcss.com/)

- utility-first CSS framework

## 📁 Project Structure

```txt
├── components/ (Vue components)
├── docs/
│   └── .vitepress/
│        └── dist/ (build files)
│        └── theme/
│        └── config.js (main VitePress config file)
└── resume.json (resume structure used to drive site)
```

## 👀 References

- [Devicon](https://devicon.dev/)
- [JSON Resume](https://jsonresume.org/)
