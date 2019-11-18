import React, { Component } from 'react';
import * as TYPE from '../../constants/actionType';

import UserItem from './UserItem';
import AddUser from './AddUser';

import randomId from '../../utils/utls'

import { connect } from 'react-redux';


class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-module">
                {   this.props.user.length ?
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
        user: state.user
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => { dispatch({ type: TYPE.ADD_USER, user: user}) }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(User);