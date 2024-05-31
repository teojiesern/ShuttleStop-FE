import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

export default function RatingBar(props) {
    const { rating, setRating, ratings, setRatings, index } = props;
    const [localRating, setLocalRating] = useState(rating);

    useEffect(() => {
        setLocalRating(rating);
    }, [rating]);

    const handleChange = (event, newValue) => {
        setLocalRating(newValue);
        setRating(newValue);
        const newRatings = [...ratings];
        newRatings[index] = newValue;
        setRatings(newRatings);
    };

    return (
        <div>
            <Rating
                name="simple-controlled"
                value={localRating}
                onChange={handleChange}
                sx={{
                    '& .MuiRating-icon': {
                        fontSize: '2rem',
                    },
                }}
                style={{ margin: '0' }}
            />
        </div>
    );
}
