import React from "react";
import styles from "./Header.module.scss"
import Logo from "../../../shared/logo/Logo";
import {menuItems} from "../../../../const/menu-items.const";
import {Events, Link} from "react-scroll";
import Button from "../../../shared/button/Button";

type HeaderProps = {

}

export default class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props);

    }
    componentDidMount() {
        Events.scrollEvent.register("begin", function () {
        });

        Events.scrollEvent.register("end", function () {
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }

    render() {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <Logo/>
                    <nav className={styles.menu}>
                        {
                            menuItems.map((item) => {
                                return <span className={styles['menu__link']}>
                                    <Link activeClass="menu__link__active" spy={true} smooth={true} duration={500} delay={100} to={item.link}>{item.caption}</Link>
                                    </span>
                            })
                        }
                    </nav>
                    <div className={styles['header__controls']}>
                        <Link spy={true} smooth={true} duration={500} delay={100} to={'getConsultation'}>
                        <Button caption={'Связаться с нами'} type={'blue'}/>
                        </Link>
                    </div>
                </header>
            </div>
        );
    }

}
