import React, {ReactElement} from "react";
import styles from './ErrorModal.module.scss';
import Button from "../../shared/button/Button";

type ErrorModalProps = {
    onClose: () => void;
}

function ErrorModal(props: ErrorModalProps): ReactElement {
    return (
        <div className={styles.container}>
        <div className={styles.title}>Ошибка!</div>
        <div className={styles.info}>
            Невозможно отправить сообщение, для решения вопроса напишите нам: &nbsp
            <a className={styles['mail-to']}
               href="mailto:contact@businesscity.ru">contact@businesscity.ru</a>
        </div>
        <div className={styles.footer}>
            <Button onClick={props.onClose} caption='Закрыть' type='black_small'/>
        </div>
    </div>
    );
}

export default ErrorModal;

