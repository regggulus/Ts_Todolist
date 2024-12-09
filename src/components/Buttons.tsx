import React from "react";

export type ButtonType = {
    title : string
}
export const Buttons = ({title}: ButtonType) => {
    return (<button className={'buttons'}>{title}</button>)}