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
        const headerClassLink = `${styles['info__header']} ${this.props.mode === 'questionsAndAnswers' && this.props?.index && this.props.index > 1 ? styles['info__header_qa'] : null}`
        const captionClassLink = `${styles['info__caption']} ${this.props.mode === 'questionsAndAnswers' ? styles['info__caption_qa'] : null}`
        return (
            <article className={styles.container}>
                {this.props.mode === 'process' ?
                    <img className={styles.icon} src={icons.get(this.props.info.header)} alt="icon"/> : null}
                <div className={styles.info}>
                    <h4 className={headerClassLink}>{this.props.info.header}</h4>
                    <p className={captionClassLink}>{this.props.info.caption}</p>
                </div>
            </article>
        )
    }
}
