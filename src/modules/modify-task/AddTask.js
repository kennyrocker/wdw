import React, { Component } from 'react';

class AddTask extends Component {

    state = {
        name: '',
        description: '',
        user: undefined
    }

    handleUpdateField = (value, ref) => {
        if (!value || !ref) return;
        // validation
        if (ref === 'name') this.setState({ name: value });
        if (ref === 'description') this.setState({ description: value });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.description === '') return;
        this.props.addTask(this.state);
        // reset state if update successful
        this.resetForm();
        this.resetState();
    };

    resetForm = () => {
        this.refs.addTaskName.value = '';
        this.refs.addTaskDesc.value = '';
    }

    resetState = () => {
        this.setState({
            name: '',
            description: '',
            user: undefined
        });
    }

    render() {
        return (
            <div className="add-task">
                <form onSubmit={this.handleSubmit}>
                    <input ref="addTaskName" type="text" className="task-item-name"
                           onChange={() => this.handleUpdateField(this.refs.addTaskName.value, 'name')}/>
                    <input ref="addTaskDesc" type="text" className="task-item-description"
                           onChange={() => this.handleUpdateField(this.refs.addTaskDesc.value, 'description')}/>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        );
    };
}

export default AddTask;