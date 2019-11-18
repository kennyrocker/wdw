import React, { Component } from 'react';

import TaskItem from './TaskItem';


class HouseWorkList extends Component {

    state = {

        list: [
            {
                id: 1,
                name: "Dish washing",
                description: "This include lunch box content",
                user: 1,
                lastModified: "2019-11-15"
            },
            {
                id: 2,
                name: "Garbage collection",
                description: "This only include taking garbage to the grage",
                user: 2,
                lastModified: "2019-11-15"
            }
        ]
    };



    constructor() {
        super();
    }

    render() {
        return (
            this.state.list.map((item) => {
                return (
                    <TaskItem props={item} key={item.id}/>
                )
            })
        );
    };
}

export default HouseWorkList;