# ShuttleStop

## Tech Stack

Built with

[![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/-Material--UI-0081CB?logo=material-ui&logoColor=white)](https://mui.com/)
[![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![React Dropzone](https://img.shields.io/badge/-React_Dropzone-4682B4)](https://react-dropzone.js.org/)
[![React Lottie](https://img.shields.io/badge/-React_Lottie-FF4785)](https://github.com/chenqingspring/react-lottie)
[![Styled Components](https://img.shields.io/badge/-Styled_Components-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

Developer Experience

[![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/-Husky-FF7A59?logo=husky&logoColor=white)](https://typicode.github.io/husky/)

## Setup

Before starting off, please download `VisualStudioCode` to be used for this project as we will be using extensions from `VisualStudioCode` for better DX, if you haven't already done so, for macOS users please follow [this guide](https://code.visualstudio.com/docs/setup/mac) while windows users can follow [this guide](https://code.visualstudio.com/docs/setup/windows)

1. Just like any other project, first clone the project into your directory of choice

```sh
git clone https://github.com/teojiesern/ShuttleStop-FE.git
```

2. Make sure you are in the directory of the cloned project before proceeding

```sh
cd ShuttleStop
```

3. **Note** If you are using macOS, you might need to run the following script to grant execution access to run the setup script.

```sh
# This line will grant permission to run the script
chmod +x ./scripts/setup.sh
```

4. After that, run the following script to install extensions that will be needed throughout the whole project

```sh
./scripts/setup.sh
```

## Run the web

Remember to run the following command to make sure you have the latest packages

```bash
npm install
```

To have a look at your app, simply run

```bash
npm run dev
```

After that go to `http://localhost:5173/`, and you should see the website being developed

## Code Snippets

https://github.com/r5n-dev/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md

### Known Limitations

-   `addMissingImports` on save does not work because we are not using .ts, however you can manually enable it by enabling type checking in js through the following comment, known limitation [here](https://github.com/microsoft/vscode/issues/97925)

```ts
// @ts-check

... the rest of the content
```
