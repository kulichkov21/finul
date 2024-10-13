import React, {ReactElement} from "react";
import styles from './Footer.module.scss';
import Logo from "../shared/logo/Logo";
import {menuItems} from "../../const/menu-items.const";
import {Link} from "react-scroll";

const Footer: React.FC = (): ReactElement => {
    return (
        <footer className={styles.container}>
            <section className={styles['common-info']}>
                <Logo/>
                <nav className={styles['common-info__navigation']}>
                    {
                        menuItems.map((item) => {
                            return <span className={styles['common-info__navigation__link']}>
                                    <Link spy={true} smooth={true} duration={500} delay={100} to={item.link}>{item.caption}</Link>
                                    </span>
                        })
                    }
                </nav>
            </section>
        </footer>
    );
}

export default Footer;
