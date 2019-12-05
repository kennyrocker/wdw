import React from 'react';

const ModifyTaskItem = (props) => {
    const formItem = (
        <div className="task-item">
            <input type="text" className="task-item-name"
                   defaultValue={props.data.name}
                   onChange={(e) => props.updateTask(props.data, 'name', e.target.value)}></input>
            <input type="text" className="task-item-description"
                   defaultValue={props.data.description}
                   onChange={(e) => props.updateTask(props.data, 'description', e.target.value)}></input>
            <button onClick={() => props.deleteTask(props.data.id)}>X</button>
        </div>
    );
    return formItem;
}

export default ModifyTaskItem;