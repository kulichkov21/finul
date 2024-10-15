import {ReactElement} from "react";
import styles from './Logo.module.scss';
import logo from "./../../../assets/img/logo.svg"

type LogoProps = {
    mode: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = (props: LogoProps): ReactElement => {
    const captionClassName = `${styles['caption']} ${props.mode === 'header' ? styles['caption_header'] : styles['caption_footer']}`
    return (
        <a className={styles.container}>
            <img className={styles.img} src={logo} alt="logo"/>
            <p className={captionClassName}>FINUL</p>
        </a>
    );
}

export default Logo;
