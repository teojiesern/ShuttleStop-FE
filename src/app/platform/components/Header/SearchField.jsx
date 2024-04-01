import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, TextField } from '@mui/material';

const onSearch = () => {};

export default function SearchField() {
    return (
        <TextField
            label="Search"
            size="small"
            onKeyDown={onSearch}
            InputProps={{
                endAdornment: (
                    <IconButton onClick={onSearch}>
                        <SearchOutlinedIcon style={{ color: 'black' }} />
                    </IconButton>
                ),
                style: {
                    paddingRight: '0.2rem',
                },
            }}
        />
    );
}
