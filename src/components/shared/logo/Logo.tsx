import {ReactElement} from "react";
import styles from './Logo.module.scss';
import logo from "./../../../assets/img/logo.svg"

const BaseCompanyInfo: React.FC = (): ReactElement =>  {
    return (
        <a className={styles.container}>
            <img className={styles.img} src={logo} alt="logo"/>
            <p className={styles.caption}>FINUL</p>
        </a>
    );
}

export default BaseCompanyInfo;
