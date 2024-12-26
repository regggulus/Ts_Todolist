import React, {useRef, useState} from "react";
import {Buttons} from "../buttons/Buttons";
import './AddItemForm.css'

export type AddItemFormType = {
    addTask:(title: string)=>void
}
export const AddItemForm = ({addTask}: AddItemFormType) => {
    const [title, setTitle] = useState('')
    const taskRef = useRef<HTMLInputElement>(null)
    const onClickAddTaskHandler = () => {
        if(taskRef.current){
            addTask(taskRef.current.value)
            taskRef.current.value = ''
        }
    }
    return (
        <div>
            <input className={'input'} ref={taskRef}/>
            <Buttons onClickHandler={onClickAddTaskHandler} title={ '✚'}/>
        </div>
    )
}