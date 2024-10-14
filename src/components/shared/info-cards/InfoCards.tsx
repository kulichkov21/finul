import React from 'react';
import styles from './InfoCards.module.scss';
import InfoCard from "../info-card/InfoCard";
import {InfoCardsProps} from "../../../types/info-cards.type";

export default class InfoCards extends React.Component<InfoCardsProps, any> {
    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.header}>{this.props.header}</h2>
                <section className={styles['info-cards-info']}>
                    {
                        this.props.info.map((process) => <InfoCard info={process} mode={this.props.mode}/>)
                    }
                </section>
            </div>
        );
    }
}

