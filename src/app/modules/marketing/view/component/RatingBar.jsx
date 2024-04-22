import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingBar() {
    return (
        <Stack spacing={1}>
            <Rating
                name="size-large"
                defaultValue={0}
                size="large"
            />
        </Stack>
    );
}
