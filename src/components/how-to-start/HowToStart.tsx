import React, {ReactElement, ReactNode} from "react";
import styles from './HowToStart.module.scss';
import {startSteps} from "./start-steps.const";
import {ArgsType} from "../../types/args.type";

const HowToStart: React.FC = (): ReactElement => {

    const getSteps = (steps: ArgsType[]): ReactNode[] => {
        return steps.reduce<ReactNode[]>((acc, curr, index) => {
            acc.push(
                <div className={styles['step-container']}>
                    <div className={styles['circle-container']}>
                        <div className={styles['circle-container__circle']}>{index + 1}</div>
                    </div>
                    <article className={styles['step-info']}>
                        <h4 className={styles['step-info__header']}>{curr.header}</h4>
                        <p className={styles['step-info__caption']}>
                            {curr.caption}
                        </p>
                    </article>
                </div>
            );

            if (index + 1 !== steps.length) {
                acc.push(
                   <div className={styles.line}></div>
                );
            }

            return acc;
        }, []);
    }

    return (
        <section className={styles.container}>
            <h2 className={styles.header}>Как начать сотрудничество</h2>
            <div className={styles.steps}>
                {getSteps(startSteps)}
            </div>
        </section>
    );

}

export default HowToStart;
