import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/todolist/Todolist";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed'
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

function App() {
    const [filter, setFilter] = useState<FilterValueType>('all')
    const [tasks, setTask] =
        useState<Array<TaskType>>([
            {id: v1(), title: 'React', isDone: true},
            {id: v1(), title: 'JavaScript', isDone: true},
            {id: v1(), title: 'Redux', isDone: false}
        ])
    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }
    const addTask = (title: string) => {
        const task = {
            id: v1(), title: title, isDone: false}
    }
    const removeTask = (taskId: string) => {
        const task = tasks.filter(t => t.id !== taskId)
        setTask(...[task])
    }
    let tasksForTodolist: Array<TaskType> = tasks
    if (filter =='active') {
        tasksForTodolist = tasks.filter((f) => !f.isDone)
    }
    if (filter == 'completed') {
        tasksForTodolist = tasks.filter((f) => f.isDone)
    }
    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      task={tasksForTodolist}
                      removeTasks={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
