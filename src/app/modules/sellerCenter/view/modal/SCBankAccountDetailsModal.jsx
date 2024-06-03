import { Button, MenuItem, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import CrossedModal from '../../../../platform/modal/CrossedModal';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import BankLists from '../../data/BankLists';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 50vh;
    padding: 0 4rem;
    margin: 2rem;
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

export default function SCBankAccountDetailsModal({ bankInformation, hideModal, updateBankInformation }) {
    const [newBankInformation, setNewBankInformation] = useState(bankInformation);
    const { showModal } = useModal();

    const onConfirmClicked = useCallback(() => {
        if (
            !newBankInformation ||
            !newBankInformation.accountHolderName ||
            !newBankInformation.bankName ||
            !newBankInformation.accountNumber
        ) {
            // TODO: Find out why does it not work
            showModal({
                modal: <CrossedModal title="Please make sure every field are filled in with the correct data" />,
            });
            return;
        }

        updateBankInformation(newBankInformation);
        hideModal();
    }, [hideModal, newBankInformation, showModal, updateBankInformation]);

    return (
        <CenteredDiv>
            <Title>Bank Account</Title>
            <ContentContainer>
                <FormLabel>Full Name in Bank Account</FormLabel>
                <TextField
                    style={{ minWidth: '50%' }}
                    value={newBankInformation?.accountHolderName}
                    onChange={(e) =>
                        setNewBankInformation({ ...newBankInformation, accountHolderName: e.target.value })
                    }
                />
            </ContentContainer>
            <ContentContainer style={{ alignItems: 'start' }}>
                <FormLabel>Bank Name</FormLabel>
                <TextField
                    style={{ minWidth: '50%' }}
                    select
                    value={BankLists.find((bank) => bank.name === newBankInformation?.bankName)}
                    InputProps={{
                        startAdornment: <img src={newBankInformation?.bankIcon} />,
                    }}
                    onChange={(e) =>
                        setNewBankInformation({
                            ...newBankInformation,
                            bankIcon: e.target.value.icon,
                            bankName: e.target.value.name,
                        })
                    }
                >
                    {BankLists.map((bank) => (
                        <MenuItem
                            key={bank.name}
                            value={bank}
                        >
                            {bank.name}
                        </MenuItem>
                    ))}
                </TextField>
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Account No.</FormLabel>
                <TextField
                    type="number"
                    style={{ minWidth: '50%' }}
                    value={newBankInformation?.accountNumber}
                    onChange={(e) => {
                        const parsedValue = parseInt(e.target.value, 10);
                        if (!Number.isNaN(parsedValue)) {
                            const newAccountNo = Math.max(0, parsedValue).toString().slice(0, 10);
                            setNewBankInformation({ ...newBankInformation, accountNumber: newAccountNo });
                        }
                    }}
                />
            </ContentContainer>
            <ButtonContainer>
                <Button
                    style={PlatformReusableStyles.SecondaryButtonStyles}
                    onClick={hideModal}
                >
                    Cancel
                </Button>
                <Button
                    style={PlatformReusableStyles.PrimaryButtonStyles}
                    onClick={onConfirmClicked}
                >
                    Confirm
                </Button>
            </ButtonContainer>
        </CenteredDiv>
    );
}
