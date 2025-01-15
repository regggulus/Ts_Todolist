import React, {ChangeEvent, useRef, useState} from "react";
import {Buttons} from "../buttons/Buttons";
import './AddItemForm.css'

export type AddItemFormType = {
    addTask: (title: string) => void
}
export const AddItemForm = ({addTask}: AddItemFormType) => {
    const [title, setTitle] = useState('')
    const onClickAddTaskHandler = () => {
        addTask(title)
        setTitle('')
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <div>
            <input className={'input'} value={title} onChange={onChangeInputHandler}/>
            <Buttons onClickHandler={onClickAddTaskHandler} title={'✚'}/>
        </div>
    )
}