import React, {ReactElement} from "react";
import Finul from "./components/finul/Finul";
import styles from './Projects.module.scss';
import OpenBankingApi from "./components/open-banking-api/OpenBankingApi";

const Projects: React.FC = (): ReactElement => {
    return (
        <section className={styles.container}>
            <Finul/>
            <OpenBankingApi/>
        </section>
    );
}

export default Projects;
