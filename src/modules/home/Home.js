import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';
import * as TYPE from "../../constants/actionType";
import { Path } from "../../constants/paths";



class Home extends Component {


    constructor(props) {
        super(props);
        if (this.props.initialFetchUser) {
            this.props.getUsers();
        }
        if (this.props.initialFetchTaskList) {
            this.props.getTasks();
        }
    }

    componentDidMount() {
        this.props.pathLoaded(Path.Home);
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
                        : <div className="hint-text">There is no tasks, Go to Edit Tasks</div>
                }
            </div>
        );
    };

    // events
    updateResponseUser = ({task, userId}) => {
      if (userId === -1) return;
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
        updateTask: (task) => { dispatch({ type: TYPE.UPDATE_TASK, task }) },
        pathLoaded: (path) => { dispatch({ type: TYPE.LOAD_PATH, path }) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);