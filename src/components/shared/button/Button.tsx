import React from "react";
import styles from "../button/Button.module.scss";
import {ButtonPropsType} from "../../../types/button-props.type";

export default class Button extends React.Component<ButtonPropsType, any> {
    render() {
        return (
            <button onClick={this.props.onClick} className={styles['accept-button']}>{this.props.caption}</button>
        );
    }
}
