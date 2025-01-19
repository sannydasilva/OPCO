# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 1/ INIT UN PROJET AVEC CREATE VITE

- Créer un dossier sur le bureau
- clic droit et ouvrir un terminal
- commande `code .` ça va ouvrir vscode
- ouvrir un temrinal dans vscode `ctrl + ù`
- entrer les commandes suivantes :

```js
- yarn create vite
- choisir le nom du projet
- choisir react et JS
- cd nomduprojet
- yarn install
- yarn dev
- ouvrir localhost
```

# 2/ REPO GITHUB

## Sur GITHUB

- new repo
- choisir si public ou privé
- créer new repo
- copier URL depôt Github

## Sur VSCODE

- git init
- git add .
- git commit -m "permier commit"
- git push -u origin master

Vérifier sur Github que le commit a bien été pris en compte

# 3/ CONFIG POUR LE STYLE : DAISYUI

### Configuration pour le style => utilisation de daysiUI (plugin de tailwind css)

    - yarn add -D tailwindcss
    - npx tailwindcss init
    - yarn add postcss autoprefixer
    - yarn add -D daisyui@latest

et ajouter le plugin dans tailwindconfig.js

```js
/** @type {import('tailwindcss').Config} */

import daisyUI from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyUI],
};
```

=> ajouter dans le index.css :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Créer manuellement à la racine du projet le fichier postcss.config.js et ajouter :

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

=> tester que daisyUI fonctionne bien :

dans App.jsx, insérer par exemple un bouton :

`<button className="btn btn-primary">NEW</button>`

# Ajout du router react

`yarn add react-router-dom`
