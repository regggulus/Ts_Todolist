import React from "react";
import {Buttons} from "../buttons/Buttons";
import {TaskType} from "../../App";
import './Todolist.css';
import {TodolistHeader} from "../TodolistHeader";
import {AddItemForm} from "../addItemForm/AddItemForm";


type TodolistType = {
    title: string
    task: Array<TaskType>
}

export function Todolist({title, task}: TodolistType) {
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
                    <input type="checkbox" checked={t.isDone} onChange={() => handleToggle(t.id)} />
                    <span className={t.isDone ? 'task-done' : ''}>{t.title}</span>
                </li>
            ))}
        </ul>
    );

// Функция для переключения состояния задачи (добавьте эту функцию в ваш компонент)
    const handleToggle = (id: any) => {
        // Логика для переключения состояния задачи
    };
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