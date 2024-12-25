import React from "react";
import {Buttons} from "../buttons/Buttons";
import {FilterValueType, TaskType} from "../../App";
import './Todolist.css';
import {TodolistHeader} from "../TodolistHeader";
import {AddItemForm} from "../addItemForm/AddItemForm";


type TodolistType = {
    title: string
    task: Array<TaskType>
    removeTasks: (taskId: string) =>void
    changeFilter: (filter: FilterValueType)=> void
}

export function Todolist({title, task, removeTasks, changeFilter}: TodolistType) {
    /*const tasksList = task.length === 0
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
        </ul>*/

    const tasksList = task.length === 0 ? (
        <span className="error-message">Ошибка: список задач не найден</span>
    ) : (
        <ul className="task-list">
            {task.map(t => (
                <li key={t.id} className="task-item">
                    <input type="checkbox" checked={t.isDone}/>
                    <span className={t.isDone ? 'task-done' : ''}>{t.title}</span>
                    <Buttons onClickHandler={() => {removeTasks(t.id)}} title={ '✘'}/>
                </li>
            ))}
        </ul>
    );

    return (
        <div className={'todolist'}>
            <TodolistHeader title={title}/>
            <AddItemForm/>
            <div>
                {tasksList}
            </div>
            <div>
                <Buttons onClickHandler={() => {changeFilter('all')}}  title={'All'}/>
                <Buttons onClickHandler={ () => {changeFilter('active')}} title={'Active'}/>
                <Buttons onClickHandler={ () => {changeFilter('completed')}} title={'Completed'}/>

            </div>
        </div>
    )
}