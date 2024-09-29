import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import LineBreak from "../UI/LineBreak"
import ReviewStars from "./RightSidebar/ReviewStars"
import PostReviewButton from "./RightSidebar/PostReviewButton"

const NewReview = () => {
    return (
        <div className="w-full flex items-center flex-col">
            <LineBreak icon={faPenToSquare} classes="my-3 text-center" text={"Write a review"} />
            <textarea
                placeholder="Feedback"
                className="my-4 textarea textarea-bordered textarea-md w-full md:w-11/12 h-28">

            </textarea>
            <div className="flex justify-between items-center w-11/12">
                <ReviewStars />
                <PostReviewButton />
            </div>
        </div>
    )
}

export default NewReview