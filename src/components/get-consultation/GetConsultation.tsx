import React from "react";
import styles from './GetConsultation.module.scss';
import dots from "../../assets/img/dots2.svg";
import Button from "../shared/button/Button";

export default class GetConsultation extends React.Component<any, any> {
    render() {
        return (
            <section className={styles.container}>
                <div className={styles.content}>
                    <img className={styles.dots} src={dots} alt="dots"/>
                    <h2 className={styles.header}>Получить консультацию</h2>
                    <div className={styles['get-consultation-container']}>
                        <form  action="">
                            <input placeholder="Ваше имя" className={styles['base-input']} type="text"/>
                            <input placeholder="Ваша компания" className={styles['base-input']} type="text"/>
                            <input placeholder="Электронная почта" className={styles['base-input']} type="email"/>
                            <input placeholder="Номер телефона" className={styles['base-input']} type="text"/>
                            <input placeholder="Ваши вопросы или идеи" className={styles['big-input']} type="text"/>
                            <label className={styles.accept}>
                                <input type="checkbox"/>
                                    Даю согласие на обработку персональных данных
                            </label>
                            <Button caption='Отправить' type='blue'/>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
