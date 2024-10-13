import {ReactElement} from "react";
import styles from './Logo.module.scss';
import logo from "./../../../assets/img/logo.svg"

type LogoProps = {
    canHideCaption: boolean;
}

const Logo: React.FC<LogoProps> = (props: LogoProps): ReactElement =>  {
    const cationClassName = props.canHideCaption ? 'caption_can-hide' : 'caption'
    return (
        <a className={styles.container}>
            <img className={styles.img} src={logo} alt="logo"/>
            <p className={styles[cationClassName]}>FINUL</p>
        </a>
    );
}

export default Logo;
