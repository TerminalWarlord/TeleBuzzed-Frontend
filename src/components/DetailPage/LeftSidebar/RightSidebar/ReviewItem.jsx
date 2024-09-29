import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const ReviewItem = () => {
    return (
        <div className="flex w-11/12 items-center">
            <div className="rounded-xl mr-4 w-14 h-16">
                <img src="https://telegramic.org/static/assets/img/avatar/default.png" alt="" className="rounded-xl" />
            </div>
            <div className="flex flex-col">
                <div>
                    <h6 className="text-md font-bold">Joy Biswas</h6>
                </div>
                <div className="text-xs">
                    <FontAwesomeIcon icon={faStar} className="text-orange-400" />
                    <FontAwesomeIcon icon={faStar} className="text-orange-400" />
                    <FontAwesomeIcon icon={faStar} className="text-orange-400" />
                    <FontAwesomeIcon icon={faStarHalfStroke} className="text-orange-400" />
                    <FontAwesomeIcon icon={farStar} className="text-orange-400" />
                </div>
                <div className="leading-5">
                    <span>Nice and easy reminder, its a nice value added to everyday life, its a nice value added to everyday life, its a nice value added to everyday life</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem