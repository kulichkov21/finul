import React from "react";
import styles from './Process.module.scss';
import {ArgsType} from "../../../types/args.type";
import graph from './../../../assets/img/graph.svg'
import cube from './../../../assets/img/cube.svg'
import codeBraces from './../../../assets/img/codeBraces.svg'
import chart from './../../../assets/img/chart.svg'


const icons = new Map<string, string>([
    ['Исследование', graph],
    ['Проектирование', cube],
    ['Разработка', codeBraces],
    ['Тестирование и запуск', chart],
]);

export default class Process extends React.Component<ArgsType, any> {
    render() {
        return (
            <article className={styles.container}>
                <div className={styles.info}>
                    <h4 className={styles['info__header']}>
                        <img className={styles['info__header__icon']} src={icons.get(this.props.header)} alt="icon"/>
                        {this.props.header}</h4>
                    <p className={styles['info__caption']}>{this.props.caption}</p>
                </div>
            </article>
        )
    }
}
