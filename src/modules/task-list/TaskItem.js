import React from 'react';

const TaskItem = ({props}) => {
    const item = (
        <div className="task-item">
            <div className="task-item-name">{props.name}</div>
            <div className="task-item-description">{props.description}</div>
            <div className="task-item-response-user">{props.user}</div>
            <div className="task-item-last-update">{props.date}</div>
        </div>
    );
    return item;
}

export default TaskItem;