import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';
import * as TYPE from "../../constants/actionType";



class HouseWorkList extends Component {


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
                                <TaskItem item={item}
                                          user={this.props.user}
                                          key={item.id}
                                          updateResponseUser={this.updateResponseUser}/>
                            )
                        })

                        : <div>There is no tasks, Go to Edit Tasks</div>
                }
            </div>
        );
    };

    // events
    updateResponseUser = ({task, userId}) => {
      task.user = userId;
      task.lastModified = new Date().getTime();
      this.props.updateTask(task);
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
        getUsers: () => { dispatch({ type: TYPE.GET_USERS }) },
        updateTask: (task) => { dispatch({ type: TYPE.UPDATE_TASK, task }) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseWorkList);