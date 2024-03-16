# ShuttleStop

### Known Limitations

-   addMissingImports on save does not work because we are not using .ts, however you can manually enable it by enabling type checking in js through the following comment, known limitation [here](https://github.com/microsoft/vscode/issues/97925)

```ts
// @ts-check

... the rest of the content
```
