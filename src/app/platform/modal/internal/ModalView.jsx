/* eslint-disable react/jsx-no-useless-fragment */
import { Dialog, Slide } from '@mui/material';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

const Transition = forwardRef((props, ref) => (
    <Slide
        direction="up"
        ref={ref}
        {...props}
    />
));

const ModalView = forwardRef((_, ref) => {
    // backdrop click to dismiss modal is enabled by default, pass in disableBackdropDismiss: true to disable
    const allowBackdropClick = useRef(true);
    const children = useRef(<></>);

    const [open, setOpen] = useState(false);
    const [maxWidth, setMaxWidth] = useState('md');

    const handleClose = useCallback((__, reason) => {
        if (!allowBackdropClick.current && reason && reason === 'backdropClick') {
            return;
        }

        setOpen(false);
    }, []);

    const showModal = useCallback(({ modal, disableBackdropDismiss, cmaxWidth }) => {
        setOpen(true);
        setMaxWidth(cmaxWidth || 'md');
        if (disableBackdropDismiss) {
            allowBackdropClick.current = false;
        }
        children.current = modal;
    }, []);

    const hideModal = useCallback(() => {
        setOpen(false);
        allowBackdropClick.current = true;
        children.current = <></>;
    }, []);

    useImperativeHandle(
        ref,
        () => ({
            showModal,
            hideModal,
        }),
        [hideModal, showModal],
    );

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            fullWidth
            maxWidth={maxWidth}
            classes={{
                paper: {
                    minHeight: '50vh',
                    maxHeight: '80vh',
                },
            }}
        >
            {children.current}
        </Dialog>
    );
});

export default ModalView;
