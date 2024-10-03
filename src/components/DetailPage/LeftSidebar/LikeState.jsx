import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LikeState = ({ data, isFetching = true, error = null }) => {
    if (error !== null) {
        return <></>;
    }
    return (
        <div className="w-full flex items-center justify-center my-2 space-x-2 text-lg">
            <div className="text-center flex flex-col items-center">
                {isFetching ?
                    <>
                        <div className="skeleton w-9 aspect-square rounded-full my-1"></div>
                        <div className="skeleton w-10 h-3 rounded-full"></div>
                    </>
                    : <><FontAwesomeIcon icon={faThumbsUp} className="text-base-100  p-2 bg-[#2AABEE] aspect-square rounded-full mb-1" />
                        <p className="text-xs font-semibold">{data.likes} likes</p></>}

            </div>
            <div className="text-center flex flex-col items-center">
                {isFetching ?
                    <>
                        <div className="skeleton w-9 aspect-square rounded-full my-1"></div>
                        <div className="skeleton w-10 h-3 rounded-full"></div>
                    </>
                    : <><FontAwesomeIcon icon={faThumbsDown} className="transform scale-x-[-1] text-base-100  p-2 bg-error aspect-square rounded-full mb-1" />
                        <p className="text-xs font-semibold">{data.dislikes} dislikes</p></>}
            </div>

        </div>
    )
}

export default LikeState