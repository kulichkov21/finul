import React, {ReactElement} from "react";
import styles from './ErrorModal.module.scss';
import Button from "../../shared/button/Button";

type ErrorModalProps = {
    onClose: () => void;
}

function ErrorModal(props: ErrorModalProps): ReactElement {
    function onCloseHandler() {
        const modal = document.getElementById("modal") as Element;
        modal.classList.add(styles.hidden);
        setTimeout(() => {
            props.onClose()
        }, 200);
    }

    return (
        <div className={styles.container}>
        <div className={styles.title}>Ошибка!</div>
        <div className={styles.info}>
            Невозможно отправить сообщение, для решения вопроса напишите нам:
            <a className={styles['mail-to']}
               href="mailto:contact@businesscity.ru">contact@businesscity.ru</a>
        </div>
        <div className={styles.footer}>
            <Button onClick={onCloseHandler} caption='Закрыть'/>
        </div>
    </div>
    );
}

export default ErrorModal;

