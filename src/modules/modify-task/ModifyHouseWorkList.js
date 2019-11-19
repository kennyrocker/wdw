import React, { Component } from 'react';
import { connect } from 'react-redux';

import ModifyTaskItem from './ModifyTaskItem';
import * as TYPE from "../../constants/actionType";


class ModifyHouseWorkList extends Component {


    constructor(props) {
        super(props);
        if (this.props.initialFetchUser) {
            this.props.getUsers();
        }
        if (this.props.initialFetchTaskList) {
            this.props.getTasks();
        }
    }

    render() {
        return (

            <div className="tasks-module">
                {
                    this.props.task && this.props.task.length ?

                        this.props.task.map((item) => {
                            return (
                                <ModifyTaskItem props={item} key={item.id}/>
                            )
                        })

                        : null
                }
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        task: state.task,
        initialFetchUser: state.ui.initialFetchUser,
        initialFetchTaskList: state.ui.initialFetchTaskList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTasks: () => { dispatch({ type: TYPE.GET_TASKS }) },
        getUsers: () => { dispatch({ type: TYPE.GET_USERS }) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyHouseWorkList);