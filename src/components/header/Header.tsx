import React from "react";
import styles from "./Header.module.scss"
import Logo from "../shared/logo/Logo";
import {menuItems} from "./menu-items.const";
import {Events, Link} from "react-scroll";
import Button from "../shared/button/Button";

type HeaderProps = {

}

export default class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props);

    }
    componentDidMount() {
        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function () {
            console.log("end", arguments);
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
                                    <Link activeClass="menu__link__active" spy={true} smooth={true} duration={250} delay={100} to={item.link}>{item.caption}</Link>
                                    </span>
                            })
                        }
                    </nav>
                    <div className={styles['header__controls']}>
                        <Button caption={'Связаться с нами'}/>
                    </div>
                </header>
            </div>
        );
    }

}
