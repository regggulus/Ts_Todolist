import {Buttons} from "./Buttons";
import React from "react";

export const AddItemForm = () => {
    return (
        <div>
            <input className={'input'}/>
            <Buttons title={'➕'}/>
        </div>
    )
}