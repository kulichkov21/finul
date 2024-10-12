import React, {ReactElement} from "react";
import Finul from "./components/finul/Finul";
import styles from './Projects.module.scss';

const Projects: React.FC = (): ReactElement => {
    return (
        <section className={styles.container}>
            <Finul/>
        </section>
    );
}

export default Projects;
