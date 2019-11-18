import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {

    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/modify-list">Edit Tasks</Link></li>
                <li><Link to="/user">User</Link></li>
            </ul>
        </div>
    );
}

export default Nav;