import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LikeState = () => {
    return (
        <div className="w-full flex items-center justify-center my-2 space-x-2 text-lg">
            <div className="text-center">
                <FontAwesomeIcon icon={faThumbsUp} className="text-base-100  p-2 bg-[#2AABEE] aspect-square rounded-full" />
                <p className="text-xs font-semibold">100 likes</p>
            </div>
            <div className="text-center">
                <FontAwesomeIcon icon={faThumbsDown} className="transform scale-x-[-1] text-base-100  p-2 bg-error aspect-square rounded-full" />
                <p className="text-xs font-semibold">5 dislikes</p>
            </div>

        </div>
    )
}

export default LikeState