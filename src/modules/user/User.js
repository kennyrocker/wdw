import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as TYPE from '../../constants/actionType';

import UserItem from './UserItem';
import AddUser from './AddUser';

import randomId from '../../utils/utls'




class User extends Component {

    constructor(props) {
        super(props);
        if (this.props.initialFetchUser) {
            this.props.getUsers();
        }

    }

    render() {
        return (
            <div className="user-module">
                {  this.props.user && this.props.user.length ?

                        this.props.user.map((item) => {
                            return (
                                <UserItem props={item} key={item.id}/>
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
        user.id = randomId(10);
        this.props.addUser(user);
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
        addUser: (user) => { dispatch({ type: TYPE.ADD_USER, user: user}) }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(User);