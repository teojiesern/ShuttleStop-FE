import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';

const HeadContainer = styled.div``;

export default function Head({ imageUrl, title, top }) {
    return (
        <HeadContainer>
            <h1
                style={{
                    position: 'absolute',
                    top,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '1',
                    fontSize: '100px',
                    color: COLORS.white,
                }}
            >
                {title}
            </h1>
            <img
                src={imageUrl}
                alt="HeadImage"
                style={{ width: '100%', height: 'auto' }}
            />
            <br />
            <br />
            <br />
        </HeadContainer>
    );
}
