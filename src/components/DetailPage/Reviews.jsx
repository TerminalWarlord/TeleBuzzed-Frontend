import { faSquarePollVertical, faStar } from "@fortawesome/free-solid-svg-icons"
import LineBreak from "../UI/LineBreak"
import ReviewItem from "./RightSidebar/ReviewItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Reviews = () => {
    return (
        <div className="w-full flex items-center flex-col">
            <LineBreak icon={faSquarePollVertical} text={'All Reviews'} classes="my-5 text-center" />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <div className="w-11/12 text-left my-2">
                <a href="" className="px-4 py-2 bg-base-200 text-xs font-bold text-base-content rounded-md"><FontAwesomeIcon className="mr-1" icon={faStar} /> All Reviews</a>
            </div>
        </div>
    )
}

export default Reviews