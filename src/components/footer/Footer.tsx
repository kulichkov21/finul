import React, {ReactElement} from "react";
import styles from './Footer.module.scss';
import Logo from "../shared/logo/Logo";
import {menuItems} from "../../const/menu-items.const";
import {Link} from "react-scroll";
import mailLogo from './../../assets/img/mailLogo.svg';
import phoneLogo from './../../assets/img/phoneLogo.svg';
import locationLogo from './../../assets/img/locationLogo.svg';

const Footer: React.FC = (): ReactElement => {
    return (
        <footer className={styles.container}>
            <section className={styles['common-info']}>
                <Logo canHideCaption={false}/>
                <nav className={styles['common-info__navigation']}>
                    {
                        menuItems.map((item) => {
                            return <span className={styles['common-info__navigation__link']}>
                                    <Link spy={true} smooth={true} duration={500} delay={100}
                                          to={item.link}>{item.caption}</Link>
                                    </span>
                        })
                    }
                </nav>
            </section>

            <section className={styles.contacts}>
                <a className={styles['contacts__item']} href="mailto:contact@businesscity.ru">
                    <img src={mailLogo} alt="mail"/>
                    contact@businesscity.ru
                </a>
                <a className={styles['contacts__item']} href="callto:+996770365303">
                    <img src={phoneLogo} alt="mail"/>
                    +996 770 365 303
                </a>
                <span className={styles['contacts__item_non-clickable']}>
                    <img src={locationLogo} alt="mail"/>
                    Бишкек
                </span>
            </section>

            <section className={styles['organization-info']}>
                <div className={styles['organization-info__requisites']}>
                    <p className={styles['organization-info__requisites__item']}>
                        ООО «Трейд Бридж»
                        <br/>
                        Юридический адрес: Кыргызская Республика, г. Бишкек, Октябрьский район, улица Суеркулова, д. 5/1
                    </p>
                </div>
            </section>

        </footer>
    );
}

export default Footer;
