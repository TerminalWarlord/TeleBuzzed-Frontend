import { faCircleCheck, faCircleXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import LineBreak from "../UI/LineBreak"
import ReviewStars from "./RightSidebar/ReviewStars"
import PostReviewButton from "./RightSidebar/PostReviewButton"
import { Form, useParams } from "react-router-dom"
import { useCallback, useRef, useState } from "react"
import { getReviews, postReview } from "../../utils/http"
import Modal from "../UI/Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import useFetch from "../../hooks/useFetch"
import ReviewItem from "./RightSidebar/ReviewItem"

// TODO: check if user has posted a review before 

const NewReview = () => {
    const params = useParams();
    const formRef = useRef();
    const modalRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const username = params.username;
    const user = useSelector(state => state.auth.user);
    const reviewer = user?.result?.username;
    const fetchFn = useCallback(async () => {
        if (!reviewer) {
            throw new Error('Invalid Reviewer');
        }
        return await getReviews(reviewer, username, 1, 1);
    }, [reviewer, username])
    const { data: userReview, isFetching: userReviewFetching, error: userReviewError, setData: setUserReview } = useFetch(fetchFn, {
        result: []
    })

    let isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const newReview = await postReview(formRef.current);
            modalRef.current.showModal();
            setUserReview({
                result: [newReview.result.review]
            })
            setError(null);
        }
        catch (err) {
            console.log(err)
            setError({
                message: err.message || "Failed to submit data!",
            });
            modalRef.current.showModal();
        }
        formRef.current.reset();
        setIsSubmitting(false);

    }
    return (

        <>
            <Modal ref={modalRef}>
                <div className='flex flex-col justify-center items-center space-y-3  mb-4'>
                    <FontAwesomeIcon icon={error?.message ? faCircleXmark : faCircleCheck} color={error ? 'red' : 'green'} className='text-5xl' />
                    <h3 className="font-bold text-xl my-2">{error ? 'Failed!' : 'Successful!'}</h3>
                </div>
                <h2 className='text-md mb-4'> {error?.message ? <>{error?.message}</> : <>
                    {`Thank you for your honest review.`}
                </>} </h2>
                <form className="flex flex-col w-full items-center justify-center modal-backdrop" method='dialog'>
                    <button className="btn">Close</button>
                </form>
            </Modal>
            {isAuthenticated && userReview?.result.length <= 0 && <Form className="w-full flex items-center flex-col" onSubmit={handleSubmit} ref={formRef} method="POST">
                <LineBreak icon={faPenToSquare} classes="my-3 text-center" text={"Write a review"} />
                <textarea
                    placeholder="Feedback"
                    className="my-4 textarea textarea-bordered textarea-md w-full md:w-11/12 h-28"
                    name="review"
                    minLength={20}
                    required
                >

                </textarea>
                <input type="hidden" value={params.username} name="username" />
                <div className="flex justify-between items-center w-11/12">
                    <ReviewStars />
                    <PostReviewButton isSubmitting={isSubmitting} />
                </div>
            </Form>}
            {isAuthenticated && userReview?.result.length > 0 && <>
                <LineBreak icon={faPenToSquare} classes="my-3 text-center" text={"Your Feedback"} />
                <ReviewItem
                    data={userReview?.result[0]}
                    isFetching={userReviewFetching}
                />
            </>}
        </>
    )
}

export default NewReview