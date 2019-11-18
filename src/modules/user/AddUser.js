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
    }

    render() {
        return (
            <div className="add-user">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleUpdateName} value={this.state.name}/>
                    <button type="submit">Add User</button>
                </form>
            </div>
        );
    };
}

export default AddUser;