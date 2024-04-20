/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import COLORS from '../../Colors';
import FONTSIZE from '../../style/FontSize';
import FONTWEIGHT from '../../style/FontWeight';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const DropZone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE['xxx-large']};
    font-weight: 100;
    height: 100%;
    width: 100%;
    overflow: auto;
    text-align: center;
`;

const ErrorMessage = styled.p`
    color: ${COLORS.red};
    font-size: ${FONTSIZE['x-small']};
`;

const PreviewImageContainer = styled.div`
    position: relative;
    height: 200px;
    width: 300px;
`;

export default function DropBox({ style, files, setFiles, consumerError }) {
    const [rejected, setRejected] = useState([]);

    const onDrop = useCallback(
        (acceptedFiles, rejectedFiles) => {
            if (acceptedFiles?.length) {
                setFiles([...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }))]);
                setRejected([]);
            }

            if (rejectedFiles?.length) {
                setRejected([...rejectedFiles]);
            }
        },
        [setFiles],
    );

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': [],
        },
        maxSize: 1024 * 1024 * 3, // currently limiting to 3MB
        maxFiles: 1, // currently limiting to 1 file
        onDrop,
        noClick: files.length > 0,
    });

    useEffect(
        () =>
            // Revoke the data uris to avoid memory leaks
            () =>
                files.forEach((file) => URL.revokeObjectURL(file.preview)),
        [files],
    );

    const removeFile = useCallback(
        (name) => {
            setFiles((files) => files.filter((file) => file.name !== name));
        },
        [setFiles],
    );

    return (
        <Container>
            <div
                {...getRootProps({
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: '20px',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderRadius: '4px',
                        borderColor: consumerError ? COLORS.red : COLORS['light-grey'],
                        width: '300px',
                        height: '200px',
                        ...style,
                    },
                })}
            >
                <input {...getInputProps()} />
                <DropZone>
                    {/* Error message */}
                    {rejected.length > 0 ? (
                        rejected.map(({ file, errors }) => (
                            <div key={file.name}>
                                <ErrorMessage>Error uploading `{file.name}`</ErrorMessage>
                                {errors.map((error) => (
                                    <ErrorMessage key={error.code}>{error.message}</ErrorMessage>
                                ))}
                            </div>
                        ))
                    ) : files.length > 0 ? (
                        // Preview
                        files.map((file) => (
                            <PreviewImageContainer key={file.name}>
                                <img
                                    src={file.preview}
                                    alt={file.name}
                                    width={100}
                                    height={100}
                                    onLoad={() => {
                                        URL.revokeObjectURL(file.preview);
                                    }}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                                <Button
                                    onClick={() => removeFile(file.name)}
                                    style={{
                                        position: 'absolute',
                                        top: '3px',
                                        right: '3px',
                                        cursor: 'pointer',
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    <CloseOutlinedIcon style={{ color: COLORS.red }} />
                                </Button>
                            </PreviewImageContainer>
                        ))
                    ) : (
                        <p
                            style={{
                                color: consumerError ? COLORS.red : COLORS.grey,
                                fontWeight: FONTWEIGHT.REGULAR,
                                fontSize: FONTSIZE['xxx-large'],
                            }}
                        >
                            +
                        </p>
                    )}
                </DropZone>
            </div>
        </Container>
    );
}
