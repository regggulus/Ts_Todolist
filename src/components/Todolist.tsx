import React from "react";
import {Buttons} from "./Buttons";
import {TaskType} from "../App";
import './Todolist.css';
import {TodolistHeader} from "./TodolistHeader";
import {AddItemForm} from "./AddItemForm";


type TodolistType = {
    title: string
    task: Array<TaskType>
}

export function Todolist({title, task}: TodolistType) {
    const tasksList = task.length === 0
        ? <span>error, to-do list not found</span>
        : <ul>
            {
                task.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })
            }
        </ul>
    return (
        <div className={'todolist'}>
            <TodolistHeader title={title}/>
            <AddItemForm/>
            <div>
                {tasksList}
            </div>
            <div>
                <Buttons title={'All'}/>
                <Buttons title={'Active'}/>
                <Buttons title={'Completed'}/>

            </div>
        </div>
    )
}