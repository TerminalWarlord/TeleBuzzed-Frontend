import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";

// TODO: update content link
const apiUrl = import.meta.env.VITE_API_URL;

const ReviewItem = ({ data, isFetching = false, reviewer }) => {
    const stars = data?.stars || 0;
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
        <div className="flex w-11/12 items-start justify-start my-5">
            {isFetching ? <div className="skeleton min-w-[40px] rounded-xl w-10 md:w-14 lg:w-14 mr-4 mt-1.5 aspect-square"></div> : <img src={`${apiUrl}/image/${reviewer ? data.content_id.avatar : data.user_id.avatar}`} alt="Reviewers Image" className="rounded-xl w-10 md:w-14 lg:w-14 mr-4 mt-1.5 aspect-square border-2 border-base-200" />}
            <div className="flex flex-col">
                <div>
                    {isFetching ? <div className="skeleton h-4 w-24 my-1.5"></div> : <Link to={reviewer ? (`/${data.content_id.type}/${data.content_id.username}`) : `/profile/${data.user_id.username}`}>
                        <h6 className="text-sm md:text-base lg:text-md font-bold">{reviewer ? data.content_id.name : (data.user_id.first_name + " " + data.user_id.last_name)}</h6>
                    </Link>}
                </div>
                <div className="text-xs">
                    {isFetching ? <div className="skeleton h-4 w-16 mb-1.5"></div> :
                        <>
                            {Array(fullStars).fill(undefined).map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} className="text-orange-400" />
                            ))}
                            {hasHalfStar && <FontAwesomeIcon icon={faStarHalfStroke} className="text-orange-400" />}
                            {Array(emptyStars).fill(undefined).map((_, index) => (
                                <FontAwesomeIcon key={index} icon={farStar} className="text-orange-400" />
                            ))}
                        </>}
                </div>
                <div className="leading-5 text-xs lg:text-sm xl:text-base w-[20rem] md:w-[20rem]  lg:w-[25rem]  xl:w-[35rem]  2xl:w-[45rem] pr-2 md:pr-4">
                    {isFetching ? (
                        <div className="skeleton h-16 w-[10rem] sm:w-[14rem] md:w-[18rem] lg:w-[24rem] xl:w-[30rem]"></div>
                    ) : (
                        <p className="break-words">{data.review}</p>
                    )}
                </div>

            </div>
        </div >
    )
}

export default ReviewItem