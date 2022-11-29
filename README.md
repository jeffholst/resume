# Welcome

The motivation for this monorepo is to standardize and streamline **JavaScript/TypeScript** development in a highly opinionated manner.

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

### [Gulp](https://gulpjs.com/)

- deploy packages to production
- automate repetitive steps
- custom build tasks

### [VitePress](https://vitepress.vuejs.org/)

- [Vite](https://vitejs.dev/) + [Vue.js](https://vuejs.org/) powered static site generator
- server side generated pages built from Markdown

## 📁 Project Structure

```txt
/
├── components/
│   └── Vue components go here
└── packages/
    └── shared libraries and packages go here
```

## 👀 Tips
