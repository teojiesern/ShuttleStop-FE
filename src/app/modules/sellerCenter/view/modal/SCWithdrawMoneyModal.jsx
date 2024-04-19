import { Button, FormControl, FormHelperText, Input, InputAdornment } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import SCReusableStyles from '../styles/SCReusableStyles';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 50vh;
    padding: 0 4rem;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const FormLabel = styled.label`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: right;
    display: inline-block;
    width: 300px;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-self: flex-end;
    gap: 1rem;
`;

export default function SCWithdrawMoneyModal({ totalAmount, bankInformation, hideModal, withdrawMoney }) {
    const [withdrawalAmount, setWithdrawalAmount] = useState(0);

    const hasEnoughMoney = parseFloat(withdrawalAmount) <= parseFloat(totalAmount);

    const handleWithdrawMoney = () => {
        if (hasEnoughMoney) {
            withdrawMoney(parseFloat(withdrawalAmount));
            hideModal();
        }
    };

    return (
        <CenteredDiv>
            <Title>Withdrawal</Title>
            <ContentContainer>
                <FormLabel>Bank Account</FormLabel>
                <SCReusableStyles.BorderContainer style={{ width: '60%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <img
                                src={bankInformation.bankIcon}
                                alt={bankInformation.bankName}
                            />
                            <SCReusableStyles.Text>{bankInformation.bankName}</SCReusableStyles.Text>
                        </div>
                        <SCReusableStyles.Text>{bankInformation.accountNumber}</SCReusableStyles.Text>
                    </div>
                </SCReusableStyles.BorderContainer>
            </ContentContainer>
            <ContentContainer style={{ alignItems: 'start' }}>
                <FormLabel>Withdrawal Amount</FormLabel>
                <FormControl style={{ width: '80%' }}>
                    <Input
                        type="number"
                        startAdornment={<InputAdornment position="start">RM</InputAdornment>}
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                        error={!hasEnoughMoney}
                    />
                    <FormHelperText>{!hasEnoughMoney ? 'Not Enough Money' : ' '}</FormHelperText>
                </FormControl>
            </ContentContainer>
            <ButtonContainer>
                <Button
                    style={PlatformReusableStyles.SecondaryButtonStyles}
                    onClick={hideModal}
                >
                    Cancel
                </Button>
                <Button
                    style={hasEnoughMoney ? PlatformReusableStyles.PrimaryButtonStyles : {}}
                    disabled={!hasEnoughMoney}
                    onClick={handleWithdrawMoney}
                >
                    Confirm
                </Button>
            </ButtonContainer>
        </CenteredDiv>
    );
}
