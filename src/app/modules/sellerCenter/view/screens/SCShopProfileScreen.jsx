import { Button, TextField } from '@mui/material';
import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import DropBox from '../../../../platform/components/dropbox/DropBox';
import CrossedModal from '../../../../platform/modal/CrossedModal';
import TickedModal from '../../../../platform/modal/TickedModal';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import useSCShopProfile from '../hooks/useSCShopProfile';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    gap: 2rem;
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

const FormLabel = styled.label`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: right;
    display: inline-block;
    width: 200px;
`;

export default function SCShopProfileScreen() {
    const { shopName, shopDescription, shopLogoPath } = useContext(ShopInfoContext);
    const [shopNameValue, setShopNameValue] = useState(shopName);
    const [shopDescriptionValue, setShopDescriptionValue] = useState(shopDescription);
    const [files, setFiles] = useState([{ name: '', preview: shopLogoPath }]);

    const { showModal } = useModal();
    const { updateShopProfile } = useSCShopProfile();

    const onSaveClick = useCallback(async () => {
        if (shopNameValue === '') {
            showModal({
                modal: (
                    <CrossedModal
                        title="Please enter your shop name"
                        description="This will be shown to customers when they visit your shop."
                    />
                ),
            });
            return;
        }

        if (files.length === 0) {
            showModal({
                modal: (
                    <CrossedModal
                        title="Please do not leave the shop logo field empty"
                        description="Shop Logo can let customers recognize your shop easily."
                    />
                ),
            });
            return;
        }

        await updateShopProfile({ name: shopNameValue, description: shopDescriptionValue, file: files });
        showModal({ modal: <TickedModal title="Shop Settings updated successfully!" /> });
    }, [files, shopDescriptionValue, shopNameValue, showModal, updateShopProfile]);

    return (
        <Container>
            <ContentContainer>
                <FormLabel>Shop Name</FormLabel>
                <TextField
                    label="Enter your shop name"
                    size="small"
                    style={{ minWidth: '50%' }}
                    value={shopNameValue}
                    onChange={(e) => setShopNameValue(e.target.value)}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Shop Logo</FormLabel>
                <div style={{ width: '50%' }}>
                    <DropBox
                        files={files}
                        setFiles={setFiles}
                    />
                </div>
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Shop Description</FormLabel>
                <TextField
                    size="small"
                    style={{ minWidth: '50%' }}
                    value={shopDescriptionValue}
                    onChange={(e) => setShopDescriptionValue(e.target.value)}
                    multiline
                    rows={4}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel />
                <Button
                    style={{ ...PlatformReusableStyles.PrimaryButtonStyles, padding: '.5rem 1rem' }}
                    onClick={onSaveClick}
                >
                    Save
                </Button>
            </ContentContainer>
        </Container>
    );
}
