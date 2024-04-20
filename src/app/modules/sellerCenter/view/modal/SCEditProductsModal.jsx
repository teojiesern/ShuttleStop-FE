import styled from 'styled-components';
import SCAddNewProductsScreen from '../screens/SCAddNewProductsScreen';

const CenteredDiv = styled.div`
    padding: 4rem;
    width: 90%;
`;

export default function SCEditProductsModal(props) {
    return (
        <CenteredDiv>
            <SCAddNewProductsScreen {...props} />
        </CenteredDiv>
    );
}
