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
npm install @babel/core @babel/node @babel/preset-env @babel/cli @babel/plugin-transform-runtime
npm install @babel/runtime
```
Also you need this
```sh
npm install body-parser
```
If you want the hot reload you can use this node modules
```sh
npm install nodemon
```
#NOTE: If you download nodemon you need to start it like that:
```sh
npx nodemon --exec npx babel-node src/server.js 
```
#NOTE 2: You can start this project with this  npm script in your package.json file
```sh
"start": "npx nodemon --exec npx babel-node src/server.js",
npm run serve
```

Run the backend with this code
```sh
npx babel-node src/server.js
```

