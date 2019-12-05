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
            <div className="task-item-response-user">
                <select className=" select-css"
                        defaultValue={item.user ? item.user : -1}
                        onChange={(e) =>
                            props.updateResponseUser( { task: item, userId: e.target.value} )}>
                    { !item.user &&
                    <option value={-1} key={-1}>Never Assign</option>
                    }
                    { user && user.length &&
                        user.map((o) => {
                                return ( <option value={o.id} key={o.id}>{o.name}</option> )
                            })
                        })
                    }
                </select>
            </div>

            <div className="task-item-description">{item.description}</div>
            <div className="task-item-last-update">{
                item.lastModified ? Util.formatTime(item.lastModified) :
                    <span className="new-task">Brand New Task</span>
            }</div>
        </div>
    );
    return task;
}

export default TaskItem;