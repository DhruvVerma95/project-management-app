import { createPortal } from "react-dom"
import { useRef } from "react"
import { forwardRef, useImperativeHandle } from "react"
import Button from './Button.jsx'
const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className=" text-right"><Button>Okay</Button></form>
    </dialog >, document.getElementById("modal-root"));
});

export default Modal;