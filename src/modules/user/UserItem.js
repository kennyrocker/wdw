import React from 'react';

const UserItem = (props) => {
    const item = (
        <div className="user-item">
            <input className="user-item-name" defaultValue={props.data.name}
                   onChange={(e) => props.updateUser(props.data, e.target.value)}/>
        </div>
    );
    return item;
}

export default UserItem;