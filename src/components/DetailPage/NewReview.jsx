import { faCircleCheck, faCircleXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import LineBreak from "../UI/LineBreak"
import ReviewStars from "./RightSidebar/ReviewStars"
import PostReviewButton from "./RightSidebar/PostReviewButton"
import { Form, useParams } from "react-router-dom"
import { useRef, useState } from "react"
import { postReview } from "../../utils/http"
import Modal from "../UI/Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NewReview = () => {
    const params = useParams();
    const formRef = useRef();
    const modalRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);


    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await postReview(formRef.current);
            modalRef.current.showModal();
            setError(null);
        }
        catch (err) {
            console.log(err)
            setError({
                message: err.message || "Failed to submit data!"
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
            <Form className="w-full flex items-center flex-col" onSubmit={handleSubmit} ref={formRef} method="POST">
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
            </Form>
        </>
    )
}

export default NewReview