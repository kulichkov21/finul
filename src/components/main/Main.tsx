import React, {ReactElement} from "react";
import styles from './Main.module.scss';
import dots from './../../assets/img/dots.svg';
import mainImage from './../../assets/img/mainImage.svg';
import Button from "../shared/button/Button";
import {Link} from "react-scroll";
import Header from "./components/header/Header";

const Main: React.FC = (): ReactElement => {
    return (
        <main className={styles.container}>
            <Header/>
            <img className={styles.dots} src={dots} alt="dots"/>
            <section className={styles['main']}>
                <article className={styles['main__info']}>
                    <h1 className={styles['main__info__header']}>
                        Разработка мобильных <br/> <span
                        className={styles['main__info__header__fintech']}>FinTeсh</span> приложений</h1>
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
                        <Button caption={'Связаться с нами'} type={'blue'}/>
                    </Link>
                </article>
                <img className={styles['main__img']} src={mainImage} alt="img"/>
            </section>
            {/*<BaseCompanyInfo/>*/}
        </main>
    );

}

export default Main;
