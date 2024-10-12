import React, {ReactElement} from 'react';
import styles from './Processes.module.scss';
import Process from "../shared/process/Process";
import {allProcesses} from "./process.const";


const Processes: React.FC = (): ReactElement => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h2 className={styles.header}>Наш процесс разработки</h2>
            <section className={styles['processes-info']}>
                {
                    allProcesses.map((process) => <Process header={process.header} caption={process.caption}/>)
                }
            </section>
            </div>
        </div>
    );
}

export default Processes;
