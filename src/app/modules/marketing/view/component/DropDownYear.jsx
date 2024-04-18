import { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';

const DropDownYear = styled.div`
    select {
        border: 1px;
        color: ${COLORS.darkGrey};
    }
`;

function Dropdown({ options, onChange }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setSelectedOption(value);
        onChange(value);
    };

    return (
        <DropDownYear>
            <select
                value={selectedOption}
                onChange={handleSelectChange}
            >
                <option value="">Select Year</option>
                {options.map((year) => (
                    <option
                        key={year}
                        value={year}
                    >
                        {year}
                    </option>
                ))}
            </select>
        </DropDownYear>
    );
}

export default Dropdown;
