import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import BankLists from '../../../sellerCenter/data/BankLists';
import bankList from '../../data/bankList';
import COReusableStyles from '../styles/COReusableStyles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
`;
const ButtonContainer = styled.div`
    display: flex;
    margin: 1rem 0;
`;
const PaymentMethodButton = styled.button`
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    border: 1px solid ${(props) => (props.isActive ? COLORS.green : COLORS.darkGrey)};
    color: ${(props) => (props.isActive ? COLORS.green : COLORS.darkGrey)};
    font-weight: ${(props) => (props.isActive ? FONTWEIGHT.SEMI_BOLD : FONTWEIGHT.REGULAR)};
    font-size: ${FONTSIZE.small};
    background: none;
    cursor: pointer;
`;
const StyledFormControlLabel = styled(FormControlLabel)`
    margin: 0.5rem 0;
`;
const RadioButtonLabel = styled.div`
    display: flex;
    align-items: center;
`;

export default function SelectPaymentMethod() {
    const [paymentMethod, setPaymentMethod] = useState('onlineBanking');
    const handlePaymentMethod = (newPaymentMethod) => {
        setPaymentMethod(newPaymentMethod);
    };

    const mockData = [];
    for (let i = 0; i < 6; i++) {
        mockData.push(
            <StyledFormControlLabel
                key={i}
                value={i} // replace with actual bank value afterward
                control={<Radio />}
                label={
                    <RadioButtonLabel>
                        <img
                            src={bankList.image}
                            alt={bankList.value}
                            style={{ margin: '0 1rem' }}
                        />
                        <p>{bankList.bankName}</p>
                    </RadioButtonLabel>
                }
            />,
        );
    }

    return (
        <Container>
            <COReusableStyles.Title>Payment Method</COReusableStyles.Title>
            <ButtonContainer>
                <PaymentMethodButton
                    isActive={paymentMethod === 'onlineBanking'}
                    onClick={() => handlePaymentMethod('onlineBanking')}
                >
                    <p>Online Banking</p>
                </PaymentMethodButton>
                <PaymentMethodButton
                    isActive={paymentMethod === 'cod'}
                    onClick={() => handlePaymentMethod('cod')}
                >
                    <p>Cash On Delivery</p>
                </PaymentMethodButton>
            </ButtonContainer>
            {paymentMethod === 'onlineBanking' && (
                <RadioGroup>
                    {BankLists.map((bank) => (
                        <StyledFormControlLabel
                            key={bank.name}
                            value={bank.name} // replace with actual bank value afterward
                            control={<Radio />}
                            label={
                                <RadioButtonLabel>
                                    <img
                                        src={bank.icon}
                                        alt={bank.name}
                                        style={{ margin: '0 1rem' }}
                                    />
                                    <p>{bank.name}</p>
                                </RadioButtonLabel>
                            }
                        />
                    ))}
                </RadioGroup>
            )}
        </Container>
    );
}
