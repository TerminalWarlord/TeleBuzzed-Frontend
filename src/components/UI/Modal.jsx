import { forwardRef } from "react"

const Modal = forwardRef(function Modal({ children }, ref) {
    function closeModal() {
        ref.current.close();
    }
    return (
        <dialog id="my_modal_2" className="modal" ref={ref} onCancel={closeModal} onClose={closeModal}>
            <div className="modal-box text-center">
                {children}
            </div>
        </dialog>
    )
})

export default Modal
