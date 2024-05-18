import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import DropBox from '../../../../platform/components/dropbox/DropBox';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';

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
    const [files, setFiles] = useState([{ name: '', preview: shopLogoPath }]);

    return (
        <Container>
            <ContentContainer>
                <FormLabel>Shop Name</FormLabel>
                <TextField
                    label="Enter your shop name"
                    size="small"
                    style={{ minWidth: '50%' }}
                    defaultValue={shopName}
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
                    defaultValue={shopDescription}
                    multiline
                    rows={4}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel />
                <Button style={{ ...PlatformReusableStyles.PrimaryButtonStyles, padding: '.5rem 1rem' }}>Save</Button>
            </ContentContainer>
        </Container>
    );
}
