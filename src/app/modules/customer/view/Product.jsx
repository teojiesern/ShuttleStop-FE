import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';

const ProductView = styled.div`
    border: 1px solid ${COLORS.black};
    display: inline-block;
    align-items: center;
    align-self: start;
    cursor: pointer;
`;

const ProductImg = styled.div`
    height: 300px;
    margin: 0;
    padding: 0;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${COLORS.black};
    color: ${COLORS.black};
    padding: 15px;
    text-align: center;
    height: 60px;
`;
const ProductName = styled.div`
    font-weight: ${FONTWEIGHT.REGULAR};
    font-size: ${FONTSIZE.small};
    margin-bottom: 10px;
`;

const ProductPrice = styled.div`
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    font-size: ${FONTSIZE.medium};
`;

export default function Product({ id, imgSrc, name, price, category }) {
    return (
        <Link to={`/customer/${category}/${id}`}>
            <ProductView>
                <ProductImg>
                    <img
                        src={imgSrc}
                        width={300}
                        height={300}
                    />
                </ProductImg>
                <ProductInfo>
                    <ProductName>{name}</ProductName>
                    <ProductPrice>RM {price.toFixed(2)}</ProductPrice>
                </ProductInfo>
            </ProductView>
        </Link>
    );
}
