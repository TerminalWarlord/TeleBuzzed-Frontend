import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostReviewButton = ({ isSubmitting }) => {
    return (
        <div className="my-3 flex justify-center">
            <button type="submit" className="px-4 py-2 border-2 border-[#2AABEE] text-[#2AABEE] rounded-md font-bold text-sm disabled:text-gray-400 disabled:border-gray-400" disabled={isSubmitting}><FontAwesomeIcon icon={faPaperPlane} className="mr-2 font-normal text-[#2AABEE]" style={{ color: `${isSubmitting ? 'gray' : '#2AABEE'}` }} />Post </button>
        </div>
    )
}

export default PostReviewButton