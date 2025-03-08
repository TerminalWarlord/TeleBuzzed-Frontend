import LineBreak from "../UI/LineBreak"
import { faFaceFrown, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons"
import ReviewItem from "./RightSidebar/ReviewItem"
import Pagination from "../UI/Pagination"
import useFetch from "../../hooks/useFetch"
import { getReviews } from "../../utils/review"
import { useCallback, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




const AllReviews = ({ reviewer = null, username }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const fetchReviews = useCallback(async () => {
        return await getReviews(reviewer, username, currentPage, 10);
    }, [reviewer, username, currentPage]);


    const { data, isFetching, error } = useFetch(fetchReviews, {});
    const reviews = data?.result || [];
    async function handlePageChange(pageNo) {
        setCurrentPage(pageNo);
    }
    return (
        <>
            <div className="w-full flex items-center flex-col">
                <LineBreak icon={faSquarePollVertical} text={'Reviews'} />
                {error?.message && <h4 className="text-center text-red-300 my-4"> Failed to fetch!</h4>}
                {!error && !isFetching && reviews?.length < 1 && <div className="flex flex-col my-8">
                    <FontAwesomeIcon icon={faFaceFrown} className="text-5xl" />
                    <h2 className="text-lg">No reviews yet!</h2>
                </div>}
                {!error && <>
                    {isFetching ? <>
                        {Array(3).fill().map((_, index) => (
                            <ReviewItem key={index} data={{}} isFetching={isFetching} reviewer={reviewer} />
                        ))}
                    </> : <>{reviews.map(review => {
                        return <ReviewItem key={review._id} data={review} isFetching={isFetching} reviewer={reviewer} />
                    })
                    }</>}
                </>}

                <div className="w-11/12">
                    <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={data?.hasNextPage ? currentPage + 10 : currentPage} />
                </div>
            </div>
        </>
    )
}

export default AllReviews