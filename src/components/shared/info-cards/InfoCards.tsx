import React from 'react';
import styles from './InfoCards.module.scss';
import InfoCard from "../info-card/InfoCard";
import {InfoCardsProps} from "../../../types/info-cards.type";

export default class InfoCards extends React.Component<InfoCardsProps, any> {
    private containerClassList = `${styles.container} ${this.props.mode === 'process' ? styles['container_small-margin'] : null}`
    render() {
        return (
            <div className={this.containerClassList}>
                <h2 className={styles.header}>{this.props.header}</h2>
                <section className={styles['info-cards-info']}>
                    {
                        this.props.info.map((process, index) => <InfoCard info={process} index={index} mode={this.props.mode}/>)
                    }
                </section>
            </div>
        );
    }
}

