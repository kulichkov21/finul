import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styles from './Modal.module.scss';

type ModalProps = {
    title: string;
    caption: string;
    onClose: () => void;
}

const Modal = (props: ModalProps) => {
    const ref: any = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (event: any)  => {
            if (event && event.srcElement.id === 'modal') {
                props.onClose()
            }
        }
        document.addEventListener("click", checkIfClickedOutside)
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [props.onClose]);


    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    return createPortal(
        <div id='modal' className={styles.modal}>
            <div className={styles['modal-content']}>
                <div className={styles['modal-title']}>{props.title}</div>
                <div className={styles['modal-body']}>
                    {props.caption}
                </div>
                <div className={styles['modal-footer']}>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root") as Element
    )
}

export default Modal;
