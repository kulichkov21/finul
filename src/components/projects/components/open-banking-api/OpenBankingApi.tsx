import styles from './OpenBankingApi.module.scss';
import React, {ReactElement} from "react";
import projectImage from './../../../../assets/img/openBankingApi.svg';
import listImg from './../../../../assets/img/check.svg'
import Button from "../../../shared/button/Button";
import {Link} from "react-scroll";

const OpenBankingApi: React.FC = (): ReactElement => {

    const advantages: string[] = [
        'Возможности мгновенно подключаться к различным банковским серверам и получать необходимые данные',
        'Универсальное мобильное приложение для клиентов по управлению финансами в нескольких организациях сразу',
        'Многократное сокращение времени и стоимости вывода новых продуктов на рынок — банки получают доступ к новейшим технологиям, не тратя внутренние ресурсы на их разработку',
        'Бесшовный обмен данными о клиенте (с его согласия) между банками и другими финтех-компаниям, для формирования наиболее выгодных персональных предложений',
    ];

    return (
        <div className={styles.container}>
            <div className={styles['header-block']}>
                <h3 className={styles['header-block__header']}>
                    Open Banking API
                </h3>
                <p className={styles['header-block__caption']}>
                    Технология, описывающая процесс обмена данными между крупными банками и другими компаниями.
                    <br/>
                    Такие данные позволяют компаниям и стартапам создавать новый продукт гораздо более простым и быстрым
                    способом.
                </p>
            </div>

            <section className={styles['info-block']}>
                <img className={styles['info-block__image']} src={projectImage} alt="phone"/>
                <article className={styles['info-block__content']}>
                    <h4 className={styles['info-block__content__header']}>Преимущества Open Api для банков</h4>
                    <ul className={styles['info-block__content__list']}>
                        {
                            advantages.map((listItem) => {
                                return (<li><img src={listImg} alt="check"/>
                                    <p>
                                        {listItem}
                                    </p>
                                </li>);
                            })
                        }
                    </ul>
                    <Link spy={true} smooth={true} duration={500} delay={100} to={'getConsultation'}>
                    <Button caption={'Узнать подробнее'} type={'black'}/>
                    </Link>
                </article>
            </section>
        </div>
    )
}

export default OpenBankingApi;
