import {ReactElement} from "react";
import styles from './Logo.module.scss';
import logo from "./../../../assets/img/logo.svg"

type LogoProps = {
    canHideCaption: boolean;
    fontColor: 'black' | 'white';
}

const Logo: React.FC<LogoProps> = (props: LogoProps): ReactElement =>  {
    let captionClassName = ('caption_' + `${props.fontColor}`) + (props.canHideCaption ? '_can-hide' : '');
    console.log(captionClassName)
    return (
        <a className={styles.container}>
            <img className={styles.img} src={logo} alt="logo"/>
            <p className={styles[captionClassName]}>FINUL</p>
        </a>
    );
}

export default Logo;
