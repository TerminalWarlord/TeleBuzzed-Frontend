import { useState } from 'react';

const ReviewStars = () => {
    const [rating, setRating] = useState(2);

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    return (
        <div className="rating rating-sm">
            <input
                type="radio"
                name="rating"
                value="1"
                className="mask mask-star-2 bg-orange-400"
                onChange={handleRatingChange}
            />
            <input
                type="radio"
                name="rating"
                value="2"
                className="mask mask-star-2 bg-orange-400"
                onChange={handleRatingChange}
                defaultChecked={rating === 2}
                checked

            />
            <input
                type="radio"
                name="rating"
                value="3"
                className="mask mask-star-2 bg-orange-400"
                onChange={handleRatingChange}
            />
            <input
                type="radio"
                name="rating"
                value="4"
                className="mask mask-star-2 bg-orange-400"
                onChange={handleRatingChange}
            />
            <input
                type="radio"
                name="rating"
                value="5"
                className="mask mask-star-2 bg-orange-400"
                onChange={handleRatingChange}
            />
        </div>
    );
};

export default ReviewStars;
