# Welcome

The motivation for this monorepo is to standardize and streamline **JavaScript/TypeScript** development in a highly opinionated manner.

## 📄 GitHub Repo

[jeffholst/resume](https://github.com/jeffholst/resume)

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

### [VS CODE](https://code.visualstudio.com/)

- cross-platform and lightweight
- extremely fast compared to Visual Studio
- extensive plugins for front-end development

### [Vite](https://vitejs.dev/)

- build with native ES modules
- dev server with Hot Module Replacement
- automate rollup (tranpiling and minification)

## 📁 Project Structure

```txt
/
├── apps/
│   └── standalone applications go here
└── packages/
    └── shared libraries and packages go here
```

## 💻 Commands

The following monorepo wide commands can be run from /root

| Command         | Action                    |
| :-------------- | :------------------------ |
| `npm install`   | Installs all dependencies |
| `npm run dev`   | Run dev server            |
| `npm run build` | Rebuilds project          |
| `npm run lint`  | Run eslint for project    |

## 👀 Tips
