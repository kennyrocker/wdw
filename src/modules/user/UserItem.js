import React from 'react';

const UserItem = ({props}) => {
    const item = (
        <div className="user-item">
            <input className="user-item-name" defaultValue={props.name} />
        </div>
    );
    return item;
}

export default UserItem;