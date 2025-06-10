type TodolistType = {
    title: string

}

export function TodolistItem ({title}: TodolistType) {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input type="checkbox" checked={true}/> <span>HTML&CSS</span>
                </li>
                <li>
                    <input type="checkbox" checked={true}/> <span>JS</span>
                </li>
                <li>
                    <input type="checkbox" checked={false}/> <span>React</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}