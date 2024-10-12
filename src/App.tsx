import React from 'react';
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import styles from './App.module.scss';
import {Element} from 'react-scroll'
import HowToStart from "./components/how-to-start/HowToStart";
import Projects from "./components/projects/Projects";
import Processes from "./components/processes/Processes";


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
                    <Processes/>
                </Element>

            </div>
        );
    }
}

