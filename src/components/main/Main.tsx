import React, {ReactElement} from "react";
import styles from './Main.module.scss';
import phone3 from './../../assets/img/phone3.png';
import Button from "../shared/button/Button";
import {Link} from "react-scroll";
import Header from "./components/header/Header";
import rounds from './../../assets/img/rounds.svg';

const Main: React.FC = (): ReactElement => {
    return (
        <main className={styles.container}>
            <Header/>
            <img className={styles.rounds} src={rounds} alt="dots"/>
            <section className={styles['main']}>
                <article className={styles['main__info']}>
                    <h1 className={styles['main__info__header']}>
                        Разработка мобильных FinTech приложений</h1>
                    <p className={styles['main__info__description']}>
                        Проектируйте и создавайте свои продукты с нами.
                        <br/>
                        <br/>
                        Мы оказываем полный цикл услуг по разработке приложений в сфере финансов — весь необходимый
                        опыт для создания решений, отвечающих бизнес-целям и потребностям пользователей.
                        <br/>
                        <br/>
                        Превратите свои идеи в удобные и функциональные
                        мобильные приложения.
                    </p>

                    <Link spy={true} smooth={true} duration={500} delay={100} to={'getConsultation'}>
                        <Button caption={'Связаться с нами'}/>
                    </Link>
                </article>
                <aside className={styles['main__img-container']}>
                    <img className={styles['main__img']} src={phone3} alt="img"/>
                </aside>

            </section>
        </main>
    );

}

export default Main;
