import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

export default function RatingBar(props) {
    const { rating, setRating } = props;
    const [localRating, setLocalRating] = useState(rating);

    useEffect(() => {
        setLocalRating(rating);
    }, [rating]);

    const handleChange = (event, newValue) => {
        setLocalRating(newValue);
        setRating(newValue);
    };

    return (
        <div>
            <Rating
                name="simple-controlled"
                value={localRating}
                onChange={handleChange}
                sx={{
                    '& .MuiRating-icon': {
                        fontSize: '4rem',
                    },
                }}
                style={{ margin: '0' }}
            />
        </div>
    );
}
