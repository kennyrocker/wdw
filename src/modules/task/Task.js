import React, { Component } from 'react';
import { connect } from 'react-redux';

import ModifyTaskItem from './ModifyTaskItem';
import * as TYPE from "../../constants/actionType";
import AddTask from "./AddTask";
import Util from "../../utils/utls";
import {Path} from "../../constants/paths";


class Task extends Component {

    constructor(props) {
        super(props);
        if (this.props.initialFetchUser) {
            this.props.getUsers();
        }
        if (this.props.initialFetchTaskList) {
            this.props.getTasks();
        }
        this.updateTask = Util.debounce(this.updateTask, 1000, false);
    }

    componentDidMount() {
        this.props.pathLoaded(Path.Task);
    }

    render() {
        return (

            <div className="modify-tasks-module">
                <div className="task-list">
                {
                    this.props.task && this.props.task.length ?

                        this.props.task.map((item) => {
                            return (
                                <ModifyTaskItem data={item} key={item.id}
                                                updateTask={this.updateTask}
                                                deleteTask={this.deleteTask}/>
                            )
                        })

                        : null
                }
                </div>
                <AddTask addTask={this.addTask}/>
            </div>
        );
    };

    // events
    addTask = (task) => {
        this.props.addTask(task);
    }

    deleteTask = (taskId) => {
        this.props.deleteTask(taskId);
    }

    updateTask = (task, key, value) => {
        if (key === 'name') {
            task.name = value;
        }
        if (key === 'description') {
            task.description = value;
        }
        this.props.updateTask(task);

    }
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
        addTask: (task) => { dispatch({ type: TYPE.ADD_TASK, task }) },
        deleteTask: (taskId) => { dispatch({ type: TYPE.DELETE_TASK, taskId }) },
        updateTask: (task) => { dispatch({ type: TYPE.UPDATE_TASK, task}) },
        pathLoaded: (path) => { dispatch({ type: TYPE.LOAD_PATH, path }) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);