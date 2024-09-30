import { forwardRef } from "react"

const Modal = forwardRef(function Modal(props, ref) {
    function closeModal() {
        ref.current.close();
    }
    return (
        <div>
            <dialog id="my_modal_2" className="modal" ref={ref} onCancel={closeModal} onClose={closeModal}>
                <div className="modal-box text-center">
                    <h3 className="font-bold text-lg">Report</h3>
                    <form method="dialog" className="flex flex-col w-full items-center justify-center modal-backdrop">
                        <textarea className="textarea w-full mb-4 border-1 border-base-300 focus:outline-none text-base-content" placeholder="Please briefly explain your issue with this content... "></textarea>
                        <div className="flex space-x-2">
                            <button className="btn" onClick={closeModal}>Close</button>
                            <button className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
})

export default Modal
