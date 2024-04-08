# How to use the modal

1. Import `useModal` hook in your component

```js
import useModal from 'path-to-useModal';
```

2. Call the `useModal` hook in your component to get the `showModal` and `hideModal` functions

```js
const { showModal, hideModal } = useModal();
```

3. To display a modal, call the `showModal` function with an object that contains the following properties:

-   `modal`: A React component or JSX that will be displayed in the modal.
-   `disableBackdropDismiss` (optional): A boolean value that determines whether clicking on the backdrop will dismiss the modal. If this property is set to true, the modal will not be dismissed when the backdrop is clicked. The default value is false.

# Example

```js
const { showModal, hideModal } = useModal();

// normally used in an `onClick` event or any logic that you see make sense
showModal({
    modal: (
        <div
            style={{
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '400px',
                height: '100px',
                border: '1px solid black',
            }}
        >
            This should be your own content following figma
        </div>
    ),
    // This is optional, not providing value will allow for modal to be dismissed on backdrop clicked
    disableBackdropDismiss: true,
});

// call the hideModal to hide the modal, again normally used in `onClick` event or any logic that you see make sense

hideModal();
```

# Demo
https://github.com/teojiesern/ShuttleStop-FE/assets/112879770/2c6b9e7d-696e-49f3-b2c0-5a51ede04743
