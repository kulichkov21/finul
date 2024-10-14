import React, {ReactElement} from "react";
import styles from './ProcessesAndQuestions.module.scss';
import InfoCards from "../shared/info-cards/InfoCards";
import {allProcesses} from "../../const/process.const";
import {questionsAndAnswers} from "../../const/questionsAndAnswers.const";
import {Element} from 'react-scroll'

const ProcessesAndQuestions: React.FC = (): ReactElement => {
    return (
        <section className={styles.container}>
            <div  className={styles.content}>
                <InfoCards info={allProcesses} mode={'process'} header={'Наш процесс разработки'}/>
                <Element name="questionsAndAnswers">
                <InfoCards info={questionsAndAnswers} mode={'questionsAndAnswers'} header={'Вопросы и ответы'}/>
                </Element>
            </div>
        </section>
    );
}

export default ProcessesAndQuestions;
