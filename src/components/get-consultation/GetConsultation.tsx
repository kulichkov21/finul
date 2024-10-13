import React from "react";
import styles from './GetConsultation.module.scss';
import dots from "../../assets/img/dots2.svg";
import Button from "../shared/button/Button";

type GetConsultationProps = {
    name?:  string;
    companyName?: string;
    email?: string;
    phoneNumber?: string;
    question?: string;

}

export default class GetConsultation extends React.Component<GetConsultationProps, any> {
    constructor(props: GetConsultationProps) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
    }


        render() {
        return (
            <section className={styles.container}>
                <div className={styles.content}>
                    <img className={styles.dots} src={dots} alt="dots"/>
                    <h2 className={styles.header}>Получить консультацию</h2>
                    <div className={styles['get-consultation-container']}>
                        <form action="">
                            <input placeholder="Ваше имя" className={styles['base-input']} type="text"/>
                            <input placeholder="Ваша компания" className={styles['base-input']} type="text"/>
                            <input placeholder="Электронная почта" className={styles['base-input']} type="email"/>
                            <input placeholder="Номер телефона" className={styles['base-input']} type="text"/>
                            <input placeholder="Ваши вопросы или идеи" className={styles['big-input']} type="text"/>
                            <label className={styles.accept}>
                                <input type="checkbox"/>
                                Даю согласие на <span>обработку персональных данных</span>
                            </label>
                            <Button caption='Отправить' type='blue'/>
                        </form>
                        <aside className={styles.contacts}>
                            <h3 className={styles['contacts__header']}>Удобнее связаться напрямую?</h3>
                            <p className={styles['contacts__description']}>Всегда рады ответить на ваши вопросы и
                                обсудить ваши идеи, позвоните или напишите нам.</p>
                            <p>
                                <a className={styles['contacts__mail-to']} href="mailto:contact@businesscity.ru">contact@businesscity.ru</a>
                            </p>
                            <p>
                                <a className={styles['contacts__phone']} href="callto:+996770365303">+996 770 365 303</a>
                            </p>

                        </aside>
                    </div>
                </div>
            </section>
        );
    }
}
