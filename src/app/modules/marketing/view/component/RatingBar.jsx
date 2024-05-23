import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingBar({ value, onChange }) {
    return (
        <Stack spacing={1}>
            <Rating
                name="rating"
                value={value}
                onChange={(event, newValue) => {
                    onChange({ target: { name: 'rating', value: Number(newValue) } });
                }}
                size="large"
            />
        </Stack>
    );
}
