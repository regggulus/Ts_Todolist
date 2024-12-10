import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/todolist/Todolist";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

function App() {

    const [tasks, setTask] =
        useState<Array<TaskType>>([
            {id: 1, title: 'React', isDone: true},
            {id: 2, title: 'JavaScript', isDone: true},
            {id: 3, title: 'Redux', isDone: false}
        ])
    const removeTask = (taskId: number) => {
        const task = tasks.filter(t => t.id !== taskId)
        setTask(...[task])
    }
    return (
        <div className="App">

            <Todolist title={'What to learn'}
                      task={tasks}
                      removeTasks={removeTask}
            />
        </div>
    );
}

export default App;
