import React from "react";
import styles from './InfoCard.module.scss';
import graph from './../../../assets/img/graph.svg'
import cube from './../../../assets/img/cube.svg'
import codeBraces from './../../../assets/img/codeBraces.svg'
import chart from './../../../assets/img/chart.svg'
import {InfoCardProps} from "../../../types/info-cards.type";


const icons = new Map<string, string>([
    ['Исследование', graph],
    ['Проектирование', cube],
    ['Разработка', codeBraces],
    ['Тестирование и запуск', chart],
]);

export default class InfoCard extends React.Component<InfoCardProps, any> {

    render() {
    const headerClassLink = this.props.mode === 'questionsAndAnswers' ? 'info__header_qa' : 'info__header';
    const captionClassLink = this.props.mode === 'questionsAndAnswers' ? 'info__caption__qa' : 'info__caption';
        return (
            <article className={styles.container}>
                <div className={styles.info}>
                    <h4 className={styles[headerClassLink]}>
                        {this.props.mode === 'process' ?
                            <img className={styles['info__header__icon']} src={icons.get(this.props.info.header)}
                                 alt="icon"/> : null}
                        {this.props.info.header}</h4>
                    <p className={styles['info__caption']}>{this.props.info.caption}</p>
                </div>
            </article>
        )
    }
}
