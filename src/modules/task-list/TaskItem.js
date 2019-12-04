import React from 'react';
import Util from '../../utils/utls';

const TaskItem = (props) => {

    const {
        item,
        user
    } = props;


    const task = (
        <div className="task-item">
            <div className="task-item-name">{item.name}</div>
            <div className="task-item-description">{item.description}</div>
            <select className="task-item-response-user"
                    defaultValue={item.user}
                    onChange={(e) =>
                        props.updateResponseUser( { task: item, userId: e.target.value} )}>

                { user && user.length &&
                    user.map((o) => {
                        return (
                            <option value={o.id} key={o.id}>{o.name}</option>
                        )
                    })
                }
            </select>
            <div className="task-item-last-update">{Util.formatTime(item.lastModified)}</div>
        </div>
    );
    return task;
}

export default TaskItem;