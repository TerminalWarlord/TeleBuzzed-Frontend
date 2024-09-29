import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostReviewButton = () => {
    return (
        <div className="my-3 flex justify-center">
            <a href="#" className="px-4 py-2 border-2 border-[#2AABEE] text-[#2AABEE] rounded-md font-bold text-sm"><FontAwesomeIcon icon={faPaperPlane} className="mr-2 font-normal text-[#2AABEE]" />Post </a>
        </div>
    )
}

export default PostReviewButton