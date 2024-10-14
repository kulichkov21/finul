import React, {ReactElement} from "react";
import styles from './InterfaceExample.module.scss';
import interfaceBlocks from './../../assets/img/interfaceBlocks.png'
import {argsConst} from "./args.const";

const InterfaceExample: React.FC = (): ReactElement =>  {
    return (
       <section className={styles.container}>
           <div className={styles.content}>
           <div className={styles['about-interface']}>
               <h3 className={styles['about-interface__header']}>
                   Какой-то блок с частью интерфейса
               </h3>
               <p className={styles['about-interface__caption']}>Разработка мобильного приложения требует тщательного планирования и понимания целевой аудитории</p>
               {
                   argsConst.map((arg) => {
                       return (
                           <div>
                               <h4 className={styles['about-interface__arg-header']}>{arg.header}</h4>
                               <p className={styles['about-interface__arg-caption']}>{arg.caption}</p>
                           </div>
                       )
                   })
               }
           </div>
           <aside className={styles.images}>
               <img src={interfaceBlocks} alt="blocks"/>
           </aside>
           </div>
       </section>

    );
}

export default InterfaceExample;
