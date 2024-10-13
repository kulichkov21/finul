import React, {ReactElement} from "react";
import styles from './Footer.module.scss';

const Footer: React.FC = (): ReactElement => {
    return (
        <footer className={styles.container}></footer>
    );
}

export default Footer;
