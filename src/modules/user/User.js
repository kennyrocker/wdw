import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as TYPE from '../../constants/actionType';

import UserItem from './UserItem';
import AddUser from './AddUser';
import Util from "../../utils/utls";
import { Path } from "../../constants/paths";


class User extends Component {

    constructor(props) {
        super(props);
        if (this.props.initialFetchUser) {
            this.props.getUsers();
        }
        this.updateUser = Util.debounce(this.updateUser, 1000, false);
    }

    componentDidMount() {
        this.props.pathLoaded(Path.User);
    }

    render() {
        return (
            <div className="user-module">
                {  this.props.user && this.props.user.length ?

                        this.props.user.map((item) => {
                            return (
                                <UserItem data={item} key={item.id} updateUser={this.updateUser}/>
                            )
                        })

                    : <div>There is no user, add a new user!</div>

                }
                <AddUser addUser={this.addUser} />
            </div>
        );
    };

    // events
    addUser = (user) => {
        this.props.addUser(user);
    }

    updateUser = (user, value) => {
        user.name = value;
        this.props.updateUser(user);
    }

}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        initialFetchUser: state.ui.initialFetchUser
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => { dispatch({ type: TYPE.GET_USERS }) },
        addUser: (user) => { dispatch({ type: TYPE.ADD_USER,  user}) },
        updateUser: (user) => { dispatch({ type: TYPE.UPDATE_USER, user }) },
        pathLoaded: (path) => { dispatch({ type: TYPE.LOAD_PATH, path }) }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(User);