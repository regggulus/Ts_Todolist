import React from "react";
import {Buttons} from "../buttons/Buttons";
import './AddItemForm.css'

export const AddItemForm = () => {
    return (
        <div>
            <input className={'input'}/>
            <Buttons title={'➕'}/>
        </div>
    )
}