import React from 'react';
import Start from "./components/Start/Start";
import Header from "./components/header/Header";
import styles from './App.module.scss';


export default class App extends React.Component<any, any> {
    render() {
        return (
            <div className={styles.container}>
                <Header/>
                <Start/>
            </div>
        );
    }
}

