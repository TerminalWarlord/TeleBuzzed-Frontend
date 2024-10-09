import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ data, classes = "" }) => {
    const stars = data || 0;
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
        <>
            {Array(fullStars).fill(undefined).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={`text-orange-400 ${classes}`} />
            ))}
            {hasHalfStar && <FontAwesomeIcon icon={faStarHalfStroke} className={`text-orange-400 ${classes}`} />}
            {Array(emptyStars).fill(undefined).map((_, index) => (
                <FontAwesomeIcon key={index} icon={farStar} className={`text-orange-400 ${classes}`} />
            ))}
        </>
    )
}

export default Stars