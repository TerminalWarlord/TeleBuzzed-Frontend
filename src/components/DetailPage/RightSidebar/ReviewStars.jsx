import { useState } from 'react';

const ReviewStars = () => {
    const [rating, setRating] = useState(2);

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    return (
        <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((value) => (
                <input
                    key={value}
                    type="radio"
                    name="rating"
                    value={value}
                    className="mask mask-star-2 bg-orange-400"
                    onChange={handleRatingChange}
                    checked={rating === value}
                />
            ))}
        </div>
    );
};

export default ReviewStars;