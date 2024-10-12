import React from "react";
import styles from "./Header.module.scss"

type HeaderProps = {

}

export default class Header extends React.Component<HeaderProps, any> {

    render() {
        return (
            <header className={styles.header}>
                {/*<a className={styles['header__logo']} href="">*/}
                {/*    <img src={logo} alt="logo"/>*/}
                {/*    <span className={styles['header__logo__text']}>FINUL</span>*/}
                {/*</a>*/}
                {/*<nav>*/}
                {/*    {*/}
                {/*        menuItems.map((item) => {*/}
                {/*            return <a className={styles['header__link']}>*/}
                {/*                <Link delay={100} smooth={true} to={item.link}>{item.caption}</Link>*/}
                {/*                </a>*/}
                {/*        })*/}
                {/*    }*/}
                {/*</nav>*/}
                {/*<div className={styles['header__controls']}>*/}
                {/*    <Button caption={'Связаться с нами'}/>*/}
                {/*</div>*/}
            </header>
        );
    }

}
