import React from 'react';
import './App.css';
import {Todolist} from "./components/todolist/Todolist";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

function App() {
    const task1: Array<TaskType> = [
        {id: 1, title: 'React', isDone: true},
        {id: 2, title: 'JavaScript', isDone: true},
        {id: 3, title: 'Redux', isDone: false}
    ]
    const task2: Array<TaskType> = [

        {id: 5, title: 'Milk', isDone: true},
        {id: 6, title: 'MacBook', isDone: true},
        {id: 7, title: 'Book', isDone: false}
    ]
    return (
        <div className="App">

            <Todolist title={'What to learn'}
                      task={task1}
            />
            <Todolist title={'Songs'}
                      task={task2}
            />
        </div>
    );
}

export default App;
