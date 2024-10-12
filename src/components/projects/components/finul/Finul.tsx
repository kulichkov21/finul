import React, {ReactElement} from "react";
import appFinul from '../../../../assets/img/finulApp.svg'
import styles from './Finul.module.scss';

const Finul: React.FC = (): ReactElement => {
    return (
        <aside className={styles.container}>
        <img className={styles.image} src={appFinul} alt="app"/>
            <h3 className={styles.header}>FINUL — приложение для банков с Open API</h3>
        </aside>
    );
}

export default Finul;
