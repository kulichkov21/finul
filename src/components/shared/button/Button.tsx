import React from "react";
import styles from "../button/Button.module.scss";
import {ButtonPropsType} from "../../../types/button-props.type";

export default class Button extends React.Component<ButtonPropsType, any> {
    render() {
        const className = 'accept-button_' + this.props.type;
        return (
            <button className={styles[className]}>{this.props.caption}</button>
        );
    }
}
