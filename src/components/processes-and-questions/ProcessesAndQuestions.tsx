import React, {ReactElement} from "react";
import styles from './ProcessesAndQuestions.module.scss';
import InfoCards from "../shared/info-cards/InfoCards";
import {allProcesses} from "../../const/process.const";
import {questionsAndAnswers} from "../../const/questionsAndAnswers.const";

const ProcessesAndQuestions: React.FC = (): ReactElement => {
    return (
        <section className={styles.container}>
            <div  className={styles.content}>
                <InfoCards info={allProcesses} mode={'process'} header={'Наш процесс разработки'}/>
                <InfoCards info={questionsAndAnswers} mode={'questionsAndAnswers'} header={'Вопросы и ответы'}/>
            </div>
        </section>
    );
}

export default ProcessesAndQuestions;
