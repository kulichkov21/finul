import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import styles from './Modal.module.scss';

type ModalProps = {
    onClose: () => void;
    component: any;
}

const Modal = (props: ModalProps) => {
    useEffect(() => {
        const checkIfClickedOutside = (event: any) => {
            if (event && event.srcElement.id === 'modal') {
                const modal = document.getElementById("modal") as Element;
                modal.classList.add(styles.hidden);
                setTimeout(() => {
                    props.onClose()
                }, 200);
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
            {props.component}
        </div>,
        document.getElementById("modal-root") as Element
    )
}

export default Modal;
