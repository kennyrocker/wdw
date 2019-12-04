import React, { Component } from 'react';

class AddUser extends Component {

    state = {
        name: ''
    }

    handleUpdateName = (e) => {
        // if valid
        this.setState({ name: e.target.value ? e.target.value : '' });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        // reset state if update successful
        this.resetForm();
    };

    resetForm = () => {
        this.setState({ name: '' });
        this.refs.addUserInput.value = '';
    }

    render() {
        return (
            <div className="add-user">
                <form onSubmit={this.handleSubmit}>
                    <input ref="addUserInput" type="text" onChange={this.handleUpdateName}/>
                    <button type="submit">Add User</button>
                </form>
            </div>
        );
    };
}

export default AddUser;