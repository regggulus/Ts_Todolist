import React from "react";
import './Buttons.css'

export type ButtonType = {
    title : string
    onClickHandler?: ()=>void
}
export const Buttons = ({title, onClickHandler}: ButtonType) => {
    return (<button className={'buttons'} onClick={onClickHandler}>{title}</button>)}