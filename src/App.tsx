import React from 'react';
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import styles from './App.module.scss';
import {Element} from 'react-scroll'
import HowToStart from "./components/how-to-start/HowToStart";
import Projects from "./components/projects/Projects";
import InfoCards from "./components/info-cards/InfoCards";
import {allProcesses} from "./const/process.const";
import GetConsultation from "./components/get-consultation/GetConsultation";


export default class App extends React.Component<any, any> {

    render() {
        return (
            <div className={styles.container}>
                <Header/>
                <Element name="aboutUs">
                    <Main/>
                    <HowToStart/>
                </Element>
                <Element name="projects">
                    <Projects/>
                    <InfoCards info={allProcesses} mode={'process'} header={'Наш процесс разработки'}/>
                </Element>
                <GetConsultation/>
            </div>
        );
    }
}

