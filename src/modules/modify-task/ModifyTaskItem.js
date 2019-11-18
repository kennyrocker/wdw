import React from 'react';

const ModifyTaskItem = ({props}) => {
    const formItem = (
        <div className="task-item">
            <form>
                <input type="text" className="task-item-name" defaultValue={props.name}></input>
                <input type="text" className="task-item-description" defaultValue={props.description}></input>
                <input type="text" className="task-item-response-user" defaultValue={props.user}></input>
                <input type="text" className="task-item-last-update" defaultValue={props.date}></input>
            </form>
        </div>
    );
    return formItem;
}

export default ModifyTaskItem;