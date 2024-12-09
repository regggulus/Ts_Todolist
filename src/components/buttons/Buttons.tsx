import React from "react";
import './Buttons.css'

export type ButtonType = {
    title : string
}
export const Buttons = ({title}: ButtonType) => {
    return (<button className={'buttons'}>{title}</button>)}