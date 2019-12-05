import React, { Component } from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { Path } from "../../constants/paths";


class Nav extends Component {


    render(){
        return (
            <div>
                <div className="nav">
                    <ul>
                        <li>
                            <Link to={Path.Home} className={this.props.currentPath === Path.Home ? 'active' : ''}>
                                Home</Link>
                        </li>
                        <li>
                            <Link to={Path.Task} className={this.props.currentPath === Path.Task ? 'active' : ''}>
                                Edit Tasks</Link>
                        </li>
                        <li>
                            <Link to={Path.User} className={this.props.currentPath === Path.User ? 'active' : ''}>
                                User</Link>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        currentPath: state.currentPath
    };
};

export default connect(mapStateToProps)(Nav);