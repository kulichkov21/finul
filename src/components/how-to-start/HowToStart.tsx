import React, {ReactElement, ReactNode} from "react";
import styles from './HowToStart.module.scss';
import {startSteps} from "./start-steps.const";
import {ArgsType} from "../../types/args.type";

const HowToStart: React.FC = (): ReactElement => {

    const getSteps = (steps: ArgsType[]): ReactNode[] => {
        return steps.map((step, index) => {
            return (
                <div className={styles['step-container']}>
                    <div className={styles['circle-container']}>
                        <div className={styles['circle-container__circle']}>{index + 1}</div>
                    </div>
                    <article className={styles['step-info']}>
                        <h4 className={styles['step-info__header']}>{step.header}</h4>
                        <p className={styles['step-info__caption']}>
                            {step.caption}
                        </p>
                    </article>
                </div>
            )
        })
    }


    return (
        <section className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.header}>Как начать сотрудничество</h2>
                    <div className={styles.steps}>
                        {getSteps(startSteps)}
                    </div>
                </div>
        </section>
    );

}

export default HowToStart;
