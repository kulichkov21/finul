import React, {ReactElement} from 'react';
import styles from './Processes.module.scss';
import InfoCard from "../shared/info-card/InfoCard";
import {allProcesses} from "./process.const";


const Processes: React.FC = (): ReactElement => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h2 className={styles.header}>Наш процесс разработки</h2>
            <section className={styles['processes-info']}>
                {
                    allProcesses.map((process) => <InfoCard header={process.header} caption={process.caption}/>)
                }
            </section>
            </div>
        </div>
    );
}

export default Processes;
