import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons"
import LineBreak from "../UI/LineBreak"
import ReviewItem from "./LeftSidebar/RightSidebar/ReviewItem"

const AllReviews = () => {
    return (
        <div className="w-full flex items-center flex-col">
            <LineBreak icon={faSquarePollVertical} text={'All Reviews'} classes="my-5 text-center" />
            <ReviewItem />
        </div>
    )
}

export default AllReviews