import React from 'react';
import Main from "./components/main/Main";
import styles from './App.module.scss';
import {Element} from 'react-scroll'
import HowToStart from "./components/how-to-start/HowToStart";
import Projects from "./components/projects/Projects";
import InfoCards from "./components/shared/info-cards/InfoCards";
import {questionsAndAnswers} from "./const/questionsAndAnswers.const";
import GetConsultation from "./components/get-consultation/GetConsultation";
import Footer from "./components/footer/Footer";
import InterfaceExample from "./components/interface-example/InterfaceExample";
import ProcessesAndQuestions from "./components/processes-and-questions/ProcessesAndQuestions";


export default class App extends React.Component<any, any> {

    render() {
        return (
            <div className={styles.container}>
                <Element name="aboutUs">
                    <Main/>
                    <InterfaceExample/>
                    <HowToStart/>
                </Element>
                <Element name="projects">
                    <Projects/>
                </Element>
                <ProcessesAndQuestions/>
                <Element name="getConsultation">
                    <GetConsultation/>
                </Element>
                <Element name="contacts">
                <Footer/>
                </Element>
            </div>
        );
    }
}

