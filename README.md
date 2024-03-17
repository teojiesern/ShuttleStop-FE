# ShuttleStop

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

### Known Limitations

-   `addMissingImports` on save does not work because we are not using .ts, however you can manually enable it by enabling type checking in js through the following comment, known limitation [here](https://github.com/microsoft/vscode/issues/97925)

```ts
// @ts-check

... the rest of the content
```
