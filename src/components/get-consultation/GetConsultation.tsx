import React from "react";
import styles from './GetConsultation.module.scss';
import dots from "../../assets/img/dots2.svg";

export default class GetConsultation extends React.Component<any, any> {

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.content}>
                    <img className={styles.dots} src={dots} alt="dots"/>
                    <h2 className={styles.header}>Получить консультацию</h2>
                    <div >
                    </div>
                </div>
            </section>
        );
    }
}
