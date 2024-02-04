## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## Install dependencies for backend

Starting with initial settings 
```sh
npm init -y
```
For Express
```sh
npm install express
```
For Babel
```sh
npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/cli @babel/plugin-transform-runtime
npm install @babel/runtime
```
Also ypu need this
```sh
npm install body-parser
```

Run the backend with this code
```sh
npx babel-node src/server.js
```

