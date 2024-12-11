import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/todolist/Todolist";

export type FilterValueType = 'all' | 'active' | 'completed'
export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

function App() {
    const [filter, setFilter] = useState<FilterValueType>('all')
    const [tasks, setTask] =
        useState<Array<TaskType>>([
            {id: 1, title: 'React', isDone: true},
            {id: 2, title: 'JavaScript', isDone: true},
            {id: 3, title: 'Redux', isDone: false}
        ])
    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }
    const removeTask = (taskId: number) => {
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
