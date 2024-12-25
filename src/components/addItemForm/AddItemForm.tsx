import React from "react";
import {Buttons} from "../buttons/Buttons";
import './AddItemForm.css'

export type AddItemFormType = {
    addTask:(title: string)=>void
}
export const AddItemForm = ({addTask}: AddItemFormType) => {
    const onClickAddTaskHandler = () => {
        console.log(addTask('new task'))
    }
    return (
        <div>
            <input className={'input'}/>
            <Buttons onClickHandler={onClickAddTaskHandler} title={ '✚'}/>
        </div>
    )
}